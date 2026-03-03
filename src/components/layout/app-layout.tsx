"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/training", icon: "model_training", label: "Training" },
  { href: "/chat", icon: "chat", label: "Chat" },
  { href: "/profile", icon: "person", label: "Profile" },
  { href: "/resume", icon: "description", label: "Resume" },
  { href: "/settings", icon: "settings", label: "Settings" },
];

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function AppLayout({ children, title, description, actions }: AppLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative z-50 md:z-auto h-full w-64 flex flex-col border-r border-slate-200 dark:border-primary/20 bg-white dark:bg-background-dark/95 shrink-0 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="h-16 px-6 flex items-center gap-3 border-b border-slate-200 dark:border-primary/20">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
              <Icon name="auto_awesome" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-primary">Velamini</h1>
          </Link>
          <button
            className="ml-auto p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <Icon name="close" className="text-slate-500" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10"
                )}
              >
                <Icon name={item.icon} className="text-[20px]" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Upgrade Card */}
        <div className="p-4 border-t border-slate-200 dark:border-primary/20">
          <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
              Pro Plan
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Unlock advanced AI personality features.
            </p>
            <Link href="/pricing">
              <Button size="sm" className="w-full">
                Upgrade Now
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 h-16 shrink-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-primary/20 px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              {/* Mobile Menu Toggle */}
              <button
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/10 md:hidden shrink-0"
                onClick={() => setSidebarOpen(true)}
              >
                <Icon name="menu" className="text-slate-600 dark:text-slate-400" />
              </button>

              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight truncate">{title}</h1>
                {description && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 truncate hidden sm:block">
                    {description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/10 transition-colors">
                <Icon name="notifications" className="text-slate-500" />
              </button>
              {actions}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
