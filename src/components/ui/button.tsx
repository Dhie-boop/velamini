"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
          // Variants
          {
            "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20":
              variant === "primary",
            "bg-slate-200 dark:bg-primary/10 text-slate-900 dark:text-white border border-primary/20 hover:bg-primary/20":
              variant === "secondary",
            "bg-transparent hover:bg-slate-100 dark:hover:bg-primary/10 text-slate-600 dark:text-slate-400":
              variant === "ghost",
            "bg-transparent border border-primary text-primary dark:text-white hover:bg-primary/10":
              variant === "outline",
            "bg-rose-500 text-white hover:bg-rose-600":
              variant === "danger",
          },
          // Sizes
          {
            "h-8 px-4 text-xs rounded-lg": size === "sm",
            "h-10 px-6 text-sm rounded-xl": size === "md",
            "h-12 px-8 text-base rounded-xl": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
