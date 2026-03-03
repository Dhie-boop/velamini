"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/training", icon: "model_training", label: "Training" },
  { href: "/chat", icon: "chat", label: "Chat" },
  { href: "/profile", icon: "person", label: "Profile" },
  { href: "/resume", icon: "description", label: "Resume" },
  { href: "/settings", icon: "settings", label: "Settings" },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-64 flex flex-col border-r border-slate-200 dark:border-primary/20 bg-white dark:bg-background-dark/50 shrink-0",
        className
      )}
    >
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
          <Icon name="auto_awesome" />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-primary">Velamini</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
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
      <div className="p-4 mt-auto">
        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            Pro Plan
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
            Unlock advanced AI personality features.
          </p>
          <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
