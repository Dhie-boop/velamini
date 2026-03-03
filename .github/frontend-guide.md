You are an AI code assistant. Build a FRONTEND-ONLY web interface for "Velamini" using Next.js (App Router) + TypeScript. Do NOT build any backend, database, authentication, or API routes. Assume APIs already exist but are not implemented here.

Core requirements
- Tech: Next.js latest (App Router), TypeScript, Tailwind CSS, React Hook Form + Zod for validation, TanStack Query (React Query) for data fetching (but wired to mocked client).
- Frontend only: No /api routes, no server actions that write data, no DB, no auth providers. Any “login” is a purely UI-only screen that stores a fake token in localStorage.
- Responsive UI: Mobile-first, clean, accessible (ARIA labels, focus states), good empty/loading/error states.
- Layout: Sidebar (desktop) + bottom nav (mobile), top bar with page title and notification bell (UI only).
- Design: Use a simple design system: buttons, inputs, cards, badges, modal, toast notifications. Use Tailwind + a small components folder.

Pages / Routes (App Router)
1) / (Landing)
   - Hero, short description, CTA buttons: “Request pickup”, “Report issue”, “Admin demo”.
2) /dashboard (User dashboard)
   - Summary cards: upcoming pickups, active requests, last payment (UI only).
   - Recent activity list.
3) /requests
   - Table/list of pickup requests with filters (status, date).
   - “New request” button opens a modal form.
4) /requests/new
   - Full page request form (address, pickup type, notes, preferred date, contact).
   - Validation with Zod; submit shows toast and navigates to /requests.
5) /issues
   - Reported issues list (illegal dumping, missed pickup, etc.).
   - “Report issue” form (location, category, description, optional photo upload UI only).
6) /payments
   - Invoice list + invoice details drawer (UI only).
   - “Pay now” button opens modal showing “Payment not implemented”.
7) /admin (Admin dashboard UI only)
   - Tabs: Overview, Requests, Fleet, Customers, Reports.
   - Requests management table with status update dropdown (UI only).
   - Simple charts (use a lightweight chart lib like recharts) fed by mocked data.
8) /settings
   - Profile form, notification preferences toggles, language/currency dropdowns (UI only).

Data modeling (mock)
- Define TypeScript types: User, PickupRequest, IssueReport, Invoice, Vehicle, Customer.
- Create /src/lib/mock-data.ts with realistic sample data for South Sudan context (cities like Juba, etc.).
- Create /src/lib/mock-client.ts that simulates CRUD with Promise delays and occasional random errors (e.g., 10%).
- Use TanStack Query hooks in /src/hooks/ for each resource (usePickupRequests, useIssues, useInvoices, etc.).

Component structure
- /src/components/ui: Button, Input, Select, Textarea, Card, Badge, Modal, Drawer, Toast.
- /src/components/layout: Sidebar, Topbar, BottomNav, PageContainer.
- /src/components/requests, /issues, /payments, /admin: feature components.

UX details
- Show skeletons while loading.
- Use toasts for success/error.
- Confirm dialog before “cancel request” (UI only).
- Search input with debouncing on list pages.
- Pagination component (client-side) for lists.

Project setup & deliverables
- Provide the full file tree.
- Provide all code needed to run locally.
- Include package.json scripts, Tailwind setup, and minimal README with run instructions.
- Ensure `npm run dev` works.
- Keep everything self-contained; no external services required.

Output format
- Generate the complete Next.js project code with clear file boundaries.
- Do not include any backend code. If a feature would require backend, stub it with mocked data and clear UI messaging.