"use client";

import Link from "next/link";
import { Icon, Button } from "@/components/ui";
import { useState } from "react";

interface HeaderProps {
  variant?: "landing" | "app";
}

export function Header({ variant = "landing" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-lg">
            <Icon name="deployed_code" className="text-white" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Velamini</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
          <div className="h-10 w-10 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center">
            <Icon name="account_circle" className="text-primary" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background-light dark:bg-background-dark border-b border-primary/20 p-6 space-y-4">
          <Link
            href="/features"
            className="block text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
