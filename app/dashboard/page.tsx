"use client";

import Link from "next/link";
import { AppLayout } from "@/components/layout";
import { Icon, Button, Card, Badge } from "@/components/ui";

const stats = [
  { label: "Total Conversations", value: "1,234", icon: "chat_bubble", change: "+12%" },
  { label: "Training Progress", value: "87%", icon: "model_training", change: "+5%" },
  { label: "Avg Response Time", value: "0.8s", icon: "speed", change: "-15%" },
  { label: "User Satisfaction", value: "4.9", icon: "star", change: "+0.2" },
];

const recentActivity = [
  { id: 1, action: "New conversation started", time: "2 minutes ago", icon: "chat" },
  { id: 2, action: "Training data updated", time: "1 hour ago", icon: "update" },
  { id: 3, action: "Profile photo changed", time: "3 hours ago", icon: "photo_camera" },
  { id: 4, action: "New skill added", time: "Yesterday", icon: "add_circle" },
  { id: 5, action: "Resume exported", time: "2 days ago", icon: "download" },
];

export default function DashboardPage() {
  return (
    <AppLayout
      title="Dashboard"
      description="Welcome back! Here's an overview of your virtual self."
      actions={
        <Link href="/chat">
          <Button size="sm" className="hidden sm:flex">
            <Icon name="chat_bubble" className="mr-2 text-sm" />
            Start Chat
          </Button>
        </Link>
      }
    >
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Icon name={stat.icon} className="text-primary" />
                  </div>
                  <Badge
                    variant={stat.change.startsWith("+") ? "primary" : "secondary"}
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <Card className="lg:col-span-2">
              <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/training"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name="model_training" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Continue Training</h3>
                    <p className="text-sm text-slate-500">
                      Add more data to your AI
                    </p>
                  </div>
                  <Icon
                    name="arrow_forward"
                    className="ml-auto text-slate-400 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="/chat"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name="chat" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Test Your Twin</h3>
                    <p className="text-sm text-slate-500">
                      Chat with your AI self
                    </p>
                  </div>
                  <Icon
                    name="arrow_forward"
                    className="ml-auto text-slate-400 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="/profile"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name="share" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Share Profile</h3>
                    <p className="text-sm text-slate-500">
                      Get your public link
                    </p>
                  </div>
                  <Icon
                    name="arrow_forward"
                    className="ml-auto text-slate-400 group-hover:text-primary transition-colors"
                  />
                </Link>
                <Link
                  href="/resume"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-primary/5 border border-slate-200 dark:border-primary/10 hover:border-primary/40 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon name="description" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Export Resume</h3>
                    <p className="text-sm text-slate-500">
                      Generate your resume
                    </p>
                  </div>
                  <Icon
                    name="arrow_forward"
                    className="ml-auto text-slate-400 group-hover:text-primary transition-colors"
                  />
                </Link>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card>
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-primary/5 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon name={activity.icon} className="text-primary text-sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {activity.action}
                      </p>
                      <p className="text-xs text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4">
                View All Activity
              </Button>
            </Card>
          </div>

          {/* Training Progress */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Training Progress</h2>
              <Link href="/training">
                <Button variant="ghost" size="sm">
                  View Details
                  <Icon name="arrow_forward" className="ml-2 text-sm" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {[
                { name: "Identity", progress: 100 },
                { name: "Education", progress: 80 },
                { name: "Experience", progress: 90 },
                { name: "Skills", progress: 75 },
                { name: "Projects", progress: 60 },
                { name: "Awards", progress: 40 },
                { name: "Social", progress: 85 },
              ].map((step) => (
                <div key={step.name} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-2">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        className="text-slate-200 dark:text-slate-700"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${step.progress * 1.76} 176`}
                        strokeLinecap="round"
                        className="text-primary"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                      {step.progress}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
    </AppLayout>
  );
}
