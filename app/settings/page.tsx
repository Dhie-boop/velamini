"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, Button, Switch } from "@/components/ui";
import { cn } from "@/lib/utils";

const settingsNav = [
  { id: "general", label: "General", icon: "settings" },
  { id: "account", label: "Account", icon: "person" },
  { id: "notifications", label: "Notifications", icon: "notifications" },
  { id: "appearance", label: "Appearance", icon: "palette" },
  { id: "privacy", label: "Privacy & Security", icon: "lock" },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailDigests, setEmailDigests] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [selectedColor, setSelectedColor] = useState("purple");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const colors = [
    { id: "purple", class: "bg-primary" },
    { id: "blue", class: "bg-blue-500" },
    { id: "emerald", class: "bg-emerald-500" },
    { id: "amber", class: "bg-amber-500" },
    { id: "rose", class: "bg-rose-500" },
  ];

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Top Navigation Bar */}
      <header className="flex h-14 sm:h-16 items-center justify-between border-b border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark px-4 sm:px-8 z-20">
        <div className="flex items-center gap-3">
          {/* Mobile Menu Toggle */}
          <button
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-primary/10 md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon name="menu" className="text-slate-600 dark:text-slate-400" />
          </button>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
              <Icon name="layers" className="text-xl" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Velamini</h2>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center max-w-xl px-10">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Icon name="search" className="text-sm" />
            </div>
            <input
              className="block w-full rounded-lg border-0 bg-slate-100 dark:bg-primary/10 py-2 pl-10 pr-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-primary sm:text-sm"
              placeholder="Search settings..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="flex size-9 sm:size-10 items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-primary/20 transition-colors">
            <Icon name="notifications" />
          </button>
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center font-bold text-xs sm:text-sm">
            AR
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside
          className={cn(
            "fixed md:relative z-40 md:z-auto h-[calc(100%-3.5rem)] md:h-auto w-64 border-r border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="mb-4 px-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Preferences
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            {settingsNav.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left",
                  activeSection === item.id
                    ? "bg-primary text-white font-medium"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Icon name={item.icon} className="text-[20px]" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-primary/20">
            <Link
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-primary/10 transition-all"
            >
              <Icon name="help" className="text-[20px]" />
              <span>Help Center</span>
            </Link>
            <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="info" className="text-primary text-sm" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  System Status
                </span>
              </div>
              <p className="text-[10px] text-slate-500">
                All systems operational. Version 2.4.0-stable
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-[#141118]/50 p-4 sm:p-6 lg:p-8">
          <div className="max-w-3xl mx-auto space-y-8 sm:space-y-12">
            {/* Section Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm sm:text-base">
                Update your preferences and manage your account details.
              </p>
            </div>

            {/* Notifications Group */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-primary/20 pb-2">
                <Icon name="notifications_active" className="text-primary" />
                <h2 className="text-xl font-bold">Notifications</h2>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
                  <div>
                    <h3 className="font-medium">Push Notifications</h3>
                    <p className="text-sm text-slate-500">
                      Receive alerts on your desktop browser
                    </p>
                  </div>
                  <Switch
                    checked={pushNotifications}
                    onChange={setPushNotifications}
                  />
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
                  <div>
                    <h3 className="font-medium">Email Digests</h3>
                    <p className="text-sm text-slate-500">
                      Weekly summary of your activity
                    </p>
                  </div>
                  <Switch checked={emailDigests} onChange={setEmailDigests} />
                </div>
              </div>
            </section>

            {/* Appearance Group */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-primary/20 pb-2">
                <Icon name="palette" className="text-primary" />
                <h2 className="text-xl font-bold">Appearance</h2>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-slate-500">
                      Switch between light and dark themes
                    </p>
                  </div>
                  <Switch checked={darkMode} onChange={setDarkMode} />
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
                  <h3 className="font-medium mb-3">Accent Color</h3>
                  <div className="flex gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={cn(
                          "size-8 rounded-full transition-transform hover:scale-110",
                          color.class,
                          selectedColor === color.id &&
                            "ring-2 ring-offset-2 ring-offset-background-dark ring-white/50"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Account Group */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-primary/20 pb-2">
                <Icon name="person" className="text-primary" />
                <h2 className="text-xl font-bold">Account</h2>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
                  <div>
                    <h3 className="font-medium">Change Password</h3>
                    <p className="text-sm text-slate-500">
                      Last updated 3 months ago
                    </p>
                  </div>
                  <Button variant="secondary" size="sm">
                    Update
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
                  <div>
                    <h3 className="font-medium text-rose-500">Delete Account</h3>
                    <p className="text-sm text-slate-500">
                      Permanently remove all your data
                    </p>
                  </div>
                  <Button variant="danger" size="sm">
                    Deactivate
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
