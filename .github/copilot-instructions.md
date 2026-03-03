# Velamini - Copilot Instructions

## App Description

Velamini is an AI-powered platform that lets people create **digital twins** of themselves — virtual selves that can chat with anyone on their behalf, 24/7. Users sign up, train an AI with their personal knowledge, personality, experiences, and Q&A pairs, then share a unique link so others can have natural conversations with their virtual self even when they're not around.

The platform serves two audiences:

- **Individuals** create a "virtual self" by filling out a structured knowledge base (identity, education, experience, skills, projects, social links, custom Q&A). The system generates a `trainedPrompt` that gets injected into every AI conversation, making the chatbot speak as that person in first person.
- **Organizations** deploy AI-powered WhatsApp customer support. They get a dedicated Twilio phone number, train the AI with business knowledge (products, FAQs, policies), and the system handles inbound WhatsApp messages automatically — including business hours enforcement, monthly message limits, welcome messages, and conversation history.

Both flows use DeepSeek AI with real-time web search (Tavily) as a tool call, so the virtual self or business assistant can answer questions about current events too.

## Architecture Overview

Next.js 16 (App Router) platform with two account types: **personal** (AI "virtual self" / digital twin) and **organization** (WhatsApp AI customer support via Twilio). Uses DeepSeek AI (`deepseek-chat` model) with tool-calling for web search, and a keyword-based RAG retriever for knowledge context injection.

### Key Data Flow

1. **Personal chat**: `POST /api/chat` → fetch user's `trainedPrompt` from `KnowledgeBase` → inject into DeepSeek system prompt → optional Tavily web search via tool call → persist messages to `Chat`/`Message` tables
2. **WhatsApp webhook**: `POST /api/whatsapp/webhook` (Twilio form data) → identify `Organization` by receiving number → check message limits & business hours → build AI prompt from org knowledge base → reply via Twilio API
3. **Training**: `POST /api/training` upserts `KnowledgeBase` fields; `POST /api/training/train` generates the `trainedPrompt` stored for AI context

## Project Structure

- `src/app/` — App Router pages and API routes (`api/chat`, `api/training`, `api/whatsapp/webhook`, `api/organizations`, etc.)
- `src/components/dashboard/` — Dashboard views: `DashboardWrapper.tsx` is the client-side shell; individual views (`training.tsx`, `dashboardchat.tsx`, `profile.tsx`, `resume.tsx`, `settings.tsx`) render based on `activeView` state
- `src/lib/` — Core utilities:
  - `ai-config.ts` — System prompts (`VIRTUAL_SELF_SYSTEM_PROMPT`, `ORGANIZATION_AI_SYSTEM_PROMPT`) and `getAISystemPrompt()` factory
  - `rag/retriever.ts` — Keyword-based chunked text retriever (no vector DB; uses term-frequency scoring)
  - `search.ts` — Tavily web search integration
  - `whatsapp.ts` — Twilio REST API message sending (raw `fetch`, no SDK)
  - `twilio-provisioning.ts` — Number search, purchase, configure, release via Twilio REST
  - `prisma.ts` — Singleton `PrismaClient` with `PrismaPg` adapter (connection pooling via `pg.Pool`)
- `prisma/schema.prisma` — Models: `User`, `KnowledgeBase`, `Organization`, `Chat`, `Message`, `Swag`, `Resume`, plus NextAuth models

## Conventions & Patterns

### Authentication
- NextAuth v5 (beta) with JWT strategy and Google OAuth. Config split: `auth.config.ts` (providers, route protection) and `auth.ts` (Prisma adapter, JWT/session callbacks).
- Protected routes: `/Dashboard`, `/dashboard`, `/training`, `/profile`, `/settings`. Public: `/`, `/chat`, `/logout`.
- Always use `auth()` from `@/auth` in API routes and server components to get the session.

### API Routes
- All API routes use Next.js Route Handlers (`export async function POST/GET`).
- Return `NextResponse.json(...)` with consistent shapes: `{ ok: true, data }` or `{ error: "message" }`.
- Auth check pattern: `const session = await auth(); if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });`
- External APIs (DeepSeek, Tavily, Twilio) are called via raw `fetch` — no SDKs.

### Database
- PostgreSQL via Prisma 7 with the `PrismaPg` driver adapter (not the default Prisma engine).
- Build command runs `prisma generate` before `next build`.
- ID strategy: `cuid()` for all models.
- `KnowledgeBase` has a 1:1 relationship to both `User` (personal) and `Organization` (business).

### Styling
- Tailwind CSS v4 + DaisyUI v5 + Radix UI primitives + shadcn/ui components.
- Dark mode: `class` strategy via `document.documentElement.classList` + DaisyUI `data-theme` attribute (synced in `localStorage`).
- Custom neon color palette defined in `tailwind.config.js` (`neon-cyan`, `neon-purple`, etc.).
- Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.

### Component Patterns
- Pages under `src/app/` are server components by default; client components use `"use client"` directive.
- Dashboard uses a wrapper pattern: server component (`Dashboard/page.tsx`) fetches data via Prisma, passes to client `DashboardWrapper` which manages view state.
- Server Actions are in `src/app/actions.ts` (currently only `handleSignOut`).

### AI Integration
- DeepSeek API at `https://api.deepseek.com/v1/chat/completions` with function-calling tools.
- DSML leakage fallback: both chat routes parse raw DeepSeek tool tokens if `tool_calls` is missing but content contains `<｜DSML｜invoke`.
- Two-pass pattern: first call may return tool calls → execute tool → second call with tool results.
- System prompts use `[Person's name]` and `[Organization Name]` as template placeholders replaced at runtime.

### Environment Variables Required
`DATABASE_URL`, `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `DEEPSEEK_API_KEY`, `TAVILY_API_KEY`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_PHONE_NUMBER`, `NEXT_PUBLIC_APP_URL`

## Development Commands

```bash
npm run dev          # Start dev server
npm run build        # prisma generate && next build
npm run lint         # ESLint (flat config)
npx prisma migrate dev   # Run migrations
npx prisma studio        # DB browser
```

## Important Gotchas

- The `Dashboard` route uses a capital-D path (`/Dashboard`) — maintain this casing in links and redirects.
- `reactCompiler: true` is enabled in `next.config.ts` — avoid patterns incompatible with React Compiler (e.g., mutating refs during render).
- The RAG retriever (`lib/rag/retriever.ts`) operates on an in-memory `CHUNKS` array — it has no persistent vector store.
- Twilio webhook returns TwiML (`<Response></Response>`) with `Content-Type: text/xml`, not JSON.
