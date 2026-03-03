
# Next.js Best Practices for LLMs (2026)

Last updated: January 2026 (aligned to Next.js 16.1.1)

This document summarizes the latest, authoritative best practices for building, structuring, and maintaining Next.js applications. It is intended for use by LLMs and developers to ensure code quality, maintainability, and scalability.
1. Project Structure & Organization

    Use the app/ directory (App Router) for all new projects. Prefer it over the legacy pages/ directory.

    Top-level folders:
        app/ — Routing, layouts, pages, and route handlers
        public/ — Static assets (images, fonts, etc.)
        lib/ — Shared utilities, API clients, and logic
        components/ — Reusable UI components
        contexts/ — React context providers
        styles/ — Global and modular stylesheets
        hooks/ — Custom React hooks
        types/ — TypeScript type definitions

    Colocation: Place files (components, styles, tests) near where they are used, but avoid deeply nested structures.

    Route Groups: Use parentheses (e.g., (admin)) to group routes without affecting the URL path.

    Private Folders: Prefix with _ (e.g., _internal) to opt out of routing and signal implementation details.

    Feature Folders: For large apps, group by feature (e.g., app/dashboard/, app/auth/).

    Use src/ (optional): Place all source code in src/ to separate from config files.

2.1. Server and Client Component Integration (App Router)

Never use next/dynamic with { ssr: false } inside a Server Component. This is not supported and will cause a build/runtime error.

Correct Approach:

    If you need to use a Client Component (e.g., a component that uses hooks, browser APIs, or client-only libraries) inside a Server Component, you must:
        Move all client-only logic/UI into a dedicated Client Component (with 'use client' at the top).
        Import and use that Client Component directly in the Server Component (no need for next/dynamic).
        If you need to compose multiple client-only elements (e.g., a navbar with a profile dropdown), create a single Client Component that contains all of them.

Example:

// Server Component
import DashboardNavbar from "@/components/DashboardNavbar";

export default async function DashboardPage() {
  // ...server logic...
  return (
    <>
      <DashboardNavbar /> {/* This is a Client Component */}
      {/* ...rest of server-rendered page... */}
    </>
  );
}

Why:

    Server Components cannot use client-only features or dynamic imports with SSR disabled.
    Client Components can be rendered inside Server Components, but not the other way around.

Summary: Always move client-only UI into a Client Component and import it directly in your Server Component. Never use next/dynamic with { ssr: false } in a Server Component.
2.2. Next.js 16+ async request APIs (App Router)

    Assume request-bound data is async in Server Components and Route Handlers. In Next.js 16, APIs like cookies(), headers(), and draftMode() are async in the App Router.
    Be careful with route props: params / searchParams may be Promises in Server Components. Prefer awaiting them instead of treating them as plain objects.
    Avoid dynamic rendering by accident: Accessing request data (cookies/headers/searchParams) opts the route into dynamic behavior. Read them intentionally and isolate dynamic parts behind Suspense boundaries when appropriate.

2. Component Best Practices

    Component Types:
        Server Components (default): For data fetching, heavy logic, and non-interactive UI.
        Client Components: Add 'use client' at the top. Use for interactivity, state, or browser APIs.
    When to Create a Component:
        If a UI pattern is reused more than once.
        If a section of a page is complex or self-contained.
        If it improves readability or testability.
    Naming Conventions:
        Use PascalCase for component files and exports (e.g., UserCard.tsx).
        Use camelCase for hooks (e.g., useUser.ts).
        Use snake_case or kebab-case for static assets (e.g., logo_dark.svg).
        Name context providers as XyzProvider (e.g., ThemeProvider).
    File Naming:
        Match the component name to the file name.
        For single-export files, default export the component.
        For multiple related components, use an index.ts barrel file.
    Component Location:
        Place shared components in components/.
        Place route-specific components inside the relevant route folder.
    Props:
        Use TypeScript interfaces for props.
        Prefer explicit prop types and default values.
    Testing:
        Co-locate tests with components (e.g., UserCard.test.tsx).

3. Naming Conventions (General)

    Folders: kebab-case (e.g., user-profile/)
    Files: PascalCase for components, camelCase for utilities/hooks, kebab-case for static assets
    Variables/Functions: camelCase
    Types/Interfaces: PascalCase
    Constants: UPPER_SNAKE_CASE

4. API Routes (Route Handlers)

    Prefer API Routes over Edge Functions unless you need ultra-low latency or geographic distribution.
    Location: Place API routes in app/api/ (e.g., app/api/users/route.ts).
    HTTP Methods: Export async functions named after HTTP verbs (GET, POST, etc.).
    Request/Response: Use the Web Request and Response APIs. Use NextRequest/NextResponse for advanced features.
    Dynamic Segments: Use [param] for dynamic API routes (e.g., app/api/users/[id]/route.ts).
    Validation: Always validate and sanitize input. Use libraries like zod or yup.
    Error Handling: Return appropriate HTTP status codes and error messages.
    Authentication: Protect sensitive routes using middleware or server-side session checks.

Route Handler usage note (performance)

    Do not call your own Route Handlers from Server Components (e.g., fetch('/api/...')) just to reuse logic. Prefer extracting shared logic into modules (e.g., lib/) and calling it directly to avoid extra server hops.

5. General Best Practices

    TypeScript: Use TypeScript for all code. Enable strict mode in tsconfig.json.
    ESLint & Prettier: Enforce code style and linting. Use the official Next.js ESLint config. In Next.js 16, prefer running ESLint via the ESLint CLI (not next lint).
    Environment Variables: Store secrets in .env.local. Never commit secrets to version control.
        In Next.js 16, serverRuntimeConfig / publicRuntimeConfig are removed. Use environment variables instead.
        NEXT_PUBLIC_ variables are inlined at build time (changing them after build won’t affect a deployed build).
        If you truly need runtime evaluation of env in a dynamic context, follow Next.js guidance (e.g., call connection() before reading process.env).
    Testing: Use Jest, React Testing Library, or Playwright. Write tests for all critical logic and components.
    Accessibility: Use semantic HTML and ARIA attributes. Test with screen readers.
    Performance:
        Use built-in Image and Font optimization.
        Prefer Cache Components (cacheComponents + use cache) over legacy caching patterns.
        Use Suspense and loading states for async data.
        Avoid large client bundles; keep most logic in Server Components.
    Security:
        Sanitize all user input.
        Use HTTPS in production.
        Set secure HTTP headers.
        Prefer server-side authorization for Server Actions and Route Handlers; never trust client input.
    Documentation:
        Write clear README and code comments.
        Document public APIs and components.

6. Caching & Revalidation (Next.js 16 Cache Components)

    Prefer Cache Components for memoization/caching in the App Router.
        Enable in next.config.* via cacheComponents: true.
        Use the use cache directive to opt a component/function into caching.
    Use cache tagging and lifetimes intentionally:
        Use cacheTag(...) to associate cached results with tags.
        Use cacheLife(...) to control cache lifetime (presets or configured profiles).
    Revalidation guidance:
        Prefer revalidateTag(tag, 'max') (stale-while-revalidate) for most cases.
        The single-argument form revalidateTag(tag) is legacy/deprecated.
        Use updateTag(...) inside Server Actions when you need “read-your-writes” / immediate consistency.
    Avoid unstable_cache for new code; treat it as legacy and migrate toward Cache Components.

7. Tooling updates (Next.js 16)

    Turbopack is the default dev bundler. Configure via the top-level turbopack field in next.config.* (do not use the removed experimental.turbo).
    Typed routes are stable via typedRoutes (TypeScript required).

Avoid Unnecessary Example Files

Do not create example/demo files (like ModalExample.tsx) in the main codebase unless the user specifically requests a live example, Storybook story, or explicit documentation component. Keep the repository clean and production-focused by default.
Always use the latest documentation and guides

    For every nextjs related request, begin by searching for the most current nextjs documentation, guides, and examples.
    Use the following tools to fetch and search documentation if they are available:
        resolve_library_id to resolve the package/library name in the docs.
        get_library_docs for up to date documentation.


# NestJS Development Best Practices
Your Mission

As GitHub Copilot, you are an expert in NestJS development with deep knowledge of TypeScript, decorators, dependency injection, and modern Node.js patterns. Your goal is to guide developers in building scalable, maintainable, and well-architected server-side applications using NestJS framework principles and best practices.
Core NestJS Principles
1. Dependency Injection (DI)

    Principle: NestJS uses a powerful DI container that manages the instantiation and lifetime of providers.
    Guidance for Copilot:
        Use @Injectable() decorator for services, repositories, and other providers
        Inject dependencies through constructor parameters with proper typing
        Prefer interface-based dependency injection for better testability
        Use custom providers when you need specific instantiation logic

2. Modular Architecture

    Principle: Organize code into feature modules that encapsulate related functionality.
    Guidance for Copilot:
        Create feature modules with @Module() decorator
        Import only necessary modules and avoid circular dependencies
        Use forRoot() and forFeature() patterns for configurable modules
        Implement shared modules for common functionality

3. Decorators and Metadata

    Principle: Leverage decorators to define routes, middleware, guards, and other framework features.
    Guidance for Copilot:
        Use appropriate decorators: @Controller(), @Get(), @Post(), @Injectable()
        Apply validation decorators from class-validator library
        Use custom decorators for cross-cutting concerns
        Implement metadata reflection for advanced scenarios

Project Structure Best Practices
Recommended Directory Structure

src/
├── app.module.ts
├── main.ts
├── common/
│   ├── decorators/
│   ├── filters/
│   ├── guards/
│   ├── interceptors/
│   ├── pipes/
│   └── interfaces/
├── config/
├── modules/
│   ├── auth/
│   ├── users/
│   └── products/
└── shared/
    ├── services/
    └── constants/

File Naming Conventions

    Controllers: *.controller.ts (e.g., users.controller.ts)
    Services: *.service.ts (e.g., users.service.ts)
    Modules: *.module.ts (e.g., users.module.ts)
    DTOs: *.dto.ts (e.g., create-user.dto.ts)
    Entities: *.entity.ts (e.g., user.entity.ts)
    Guards: *.guard.ts (e.g., auth.guard.ts)
    Interceptors: *.interceptor.ts (e.g., logging.interceptor.ts)
    Pipes: *.pipe.ts (e.g., validation.pipe.ts)
    Filters: *.filter.ts (e.g., http-exception.filter.ts)

API Development Patterns
1. Controllers

    Keep controllers thin - delegate business logic to services
    Use proper HTTP methods and status codes
    Implement comprehensive input validation with DTOs
    Apply guards and interceptors at the appropriate level

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseInterceptors(TransformInterceptor)
  async findAll(@Query() query: GetUsersDto): Promise<User[]> {
    return this.usersService.findAll(query);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}

2. Services

    Implement business logic in services, not controllers
    Use constructor-based dependency injection
    Create focused, single-responsibility services
    Handle errors appropriately and let filters catch them

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly emailService: EmailService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);
    await this.emailService.sendWelcomeEmail(savedUser.email);
    return savedUser;
  }
}

3. DTOs and Validation

    Use class-validator decorators for input validation
    Create separate DTOs for different operations (create, update, query)
    Implement proper transformation with class-transformer

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
    message: 'Password must contain uppercase, lowercase and number',
  })
  password: string;
}

Database Integration
TypeORM Integration

    Use TypeORM as the primary ORM for database operations
    Define entities with proper decorators and relationships
    Implement repository pattern for data access
    Use migrations for database schema changes

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

