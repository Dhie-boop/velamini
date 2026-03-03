"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Icon, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hello! This is your private space. You can draft messages, save links, or talk to me here. How can I help you organize your day?",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: "2",
    role: "user",
    content:
      "Remind me to review the quarterly design specs at 4 PM today and send the final feedback to the UI team.",
    timestamp: new Date(Date.now() - 1000 * 60 * 4),
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Understood. I've added a reminder for 4:00 PM regarding the design specs and the feedback task. Would you like me to prepare a draft for the UI team based on your previous notes?",
    timestamp: new Date(Date.now() - 1000 * 60 * 3),
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "I understand your request. This is a demo response from your Velamini AI twin. In the real application, this would be powered by DeepSeek AI with your trained personality.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed md:relative z-50 md:z-auto h-full w-72 border-r border-primary/10 bg-background-light dark:bg-background-dark/95 flex flex-col shrink-0 transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 sm:p-6 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Icon name="auto_awesome" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Velamini</h1>
              <p className="text-xs text-slate-500 dark:text-primary/60 font-medium">
                PREMIUM EDITION
              </p>
            </div>
          </Link>
          <button
            className="ml-auto p-2 rounded-lg hover:bg-primary/10 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <Icon name="close" className="text-slate-500" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-primary/10 text-slate-600 dark:text-slate-400"
          >
            <Icon name="home" />
            <span className="font-medium">Home</span>
          </Link>
          <Link
            href="/chat"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-md shadow-primary/20"
          >
            <Icon name="chat_bubble" />
            <span className="font-medium">Chats</span>
          </Link>
          <Link
            href="/training"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-primary/10 text-slate-600 dark:text-slate-400"
          >
            <Icon name="smart_toy" />
            <span className="font-medium">Training</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-primary/10 text-slate-600 dark:text-slate-400"
          >
            <Icon name="folder" />
            <span className="font-medium">Dashboard</span>
          </Link>

          <div className="mt-8 px-4 mb-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Recent Projects
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-slate-500 hover:text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary/40"></span>
            <span>Q4 Design Specs</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-slate-500 hover:text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500/40"></span>
            <span>Marketing Assets</span>
          </a>
        </nav>

        <div className="p-4 border-t border-primary/10">
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-primary/10 text-slate-600 dark:text-slate-400"
          >
            <Icon name="settings" />
            <span className="font-medium">Settings</span>
          </Link>
          <div className="mt-4 flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-primary/20 flex items-center justify-center font-bold">
              AR
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Alex Rivera</p>
              <p className="text-[10px] text-slate-500 truncate">
                alex@velamini.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden grid-pattern">
        {/* Header */}
        <header className="h-16 shrink-0 border-b border-primary/10 flex items-center justify-between px-4 sm:px-8 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Toggle */}
            <button
              className="p-2 rounded-lg hover:bg-primary/10 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Icon name="menu" className="text-slate-600 dark:text-slate-400" />
            </button>
            <div className="flex flex-col">
              <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                Chat with Myself
                <Icon name="lock" className="text-primary text-sm" />
              </h2>
              <p className="text-xs text-slate-500 font-medium hidden sm:block">
                Personal workspace and reminders
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-primary/10 text-slate-500">
              <Icon name="search" />
            </button>
            <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-primary/10 text-slate-500 hidden sm:flex">
              <Icon name="more_vert" />
            </button>
            <div className="h-8 w-px bg-primary/10 mx-1 sm:mx-2 hidden sm:block"></div>
            <Button size="sm" className="hidden sm:flex items-center gap-2">
              <Icon name="share" className="text-sm" />
              Share
            </Button>
          </div>
        </header>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 custom-scrollbar">
          {/* Date Separator */}
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-primary/5 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">
              Today
            </span>
          </div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-4 items-end max-w-3xl",
                message.role === "user" ? "justify-end ml-auto" : ""
              )}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 shadow-lg">
                  <Icon name="smart_toy" className="text-xs text-primary" />
                </div>
              )}

              <div
                className={cn(
                  "flex flex-col gap-1.5",
                  message.role === "user" ? "items-end" : "items-start"
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-bold",
                    message.role === "user"
                      ? "text-primary mr-1"
                      : "text-slate-500 ml-1"
                  )}
                >
                  {message.role === "user" ? "ME" : "VELAMINI ASSISTANT"}
                </span>
                <div
                  className={cn(
                    "p-4 rounded-xl shadow-xl",
                    message.role === "user"
                      ? "bg-primary text-white rounded-br-none shadow-primary/20"
                      : "bg-slate-800 dark:bg-slate-800/80 text-slate-100 rounded-bl-none shadow-black/5 border border-slate-700/50"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <span className="text-[10px] text-slate-400 italic">
                    Delivered
                  </span>
                )}
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 overflow-hidden shrink-0 flex items-center justify-center font-bold text-xs">
                  AR
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-4 items-end max-w-3xl">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 shadow-lg">
                <Icon name="smart_toy" className="text-xs text-primary" />
              </div>
              <div className="flex flex-col gap-1.5 items-start">
                <span className="text-[10px] font-bold text-slate-500 ml-1">
                  VELAMINI ASSISTANT
                </span>
                <div className="bg-slate-800 dark:bg-slate-800/80 text-slate-100 p-4 rounded-xl rounded-bl-none shadow-xl shadow-black/5 border border-slate-700/50">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 sm:p-6 lg:p-8 pt-2">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
            <div className="absolute inset-y-0 left-3 sm:left-4 flex items-center gap-2">
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
              >
                <Icon name="attach_file" />
              </button>
            </div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-primary/10 dark:border-primary/20 rounded-2xl py-3 sm:py-4 pl-12 sm:pl-14 pr-20 sm:pr-24 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-sm shadow-2xl"
              placeholder="Type a message..."
              type="text"
            />
            <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-primary/10 transition-colors hidden sm:flex"
              >
                <Icon name="mic" />
              </button>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 transition-transform active:scale-95 disabled:opacity-50"
              >
                <Icon name="send" />
              </button>
            </div>
          </form>
          <p className="text-center text-[10px] text-slate-500 mt-3 sm:mt-4 font-medium uppercase tracking-widest opacity-60 hidden sm:block">
            Velamini AI can make mistakes. Verify important info.
          </p>
        </div>
      </main>
    </div>
  );
}
