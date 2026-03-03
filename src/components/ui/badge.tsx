"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest",
        {
          "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300": variant === "default",
          "bg-primary/10 border border-primary/20 text-primary": variant === "primary",
          "bg-slate-200 dark:bg-primary/20 text-slate-700 dark:text-slate-200": variant === "secondary",
          "border border-slate-300 dark:border-primary/30 text-slate-600 dark:text-slate-300": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
