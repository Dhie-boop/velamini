import Link from "next/link";
import { PublicLayout } from "@/components/layout";
import { Button, Icon, Badge } from "@/components/ui";

export default function FeaturesPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="max-w-[1200px] w-full px-6 py-12 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <div className="flex flex-col gap-6 flex-1">
              <Badge variant="primary" className="w-fit">
                <Icon name="auto_awesome" className="text-sm mr-1" />
                Next-Gen Capabilities
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100">
                Supercharge your workflow with{" "}
                <span className="text-primary">Velamini</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Experience the future of productivity with Neural Mapping,
                Real-time Sync, and native DeepSeek AI integration.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/dashboard">
                  <Button size="lg">Explore Features</Button>
                </Link>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="w-full flex-1 aspect-square bg-gradient-to-br from-primary/20 via-background-dark to-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center relative overflow-hidden group max-w-lg">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full scale-75 animate-pulse"></div>
              <div className="relative z-10 w-4/5 h-4/5 bg-background-dark/80 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-2xl flex flex-col p-6 overflow-hidden">
                <div className="flex gap-2 mb-4">
                  <div className="size-3 rounded-full bg-red-500/50"></div>
                  <div className="size-3 rounded-full bg-yellow-500/50"></div>
                  <div className="size-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-primary/20 rounded"></div>
                  <div className="h-32 w-full bg-primary/10 rounded-lg border border-primary/20 border-dashed flex items-center justify-center">
                    <Icon name="neurology" className="text-primary text-4xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-primary/5 rounded-lg"></div>
                    <div className="h-20 bg-primary/5 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Capabilities Header */}
        <div className="max-w-[1200px] w-full px-6 py-12">
          <div className="flex flex-col gap-4 text-center items-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-[800px]">
              Designed for high-performance teams requiring deep integration and
              intelligent automation. Velamini brings your entire ecosystem into
              a single, unified interface.
            </p>
          </div>
        </div>

        {/* Main Feature Grid */}
        <div className="max-w-[1200px] w-full px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Neural Mapping */}
            <div className="flex flex-col gap-5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all p-8 group">
              <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(115,17,212,0.4)]">
                <Icon name="psychology" className="text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Neural Mapping</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Visualize complex data structures with our proprietary neural
                  algorithms. Connect ideas instantly.
                </p>
              </div>
            </div>

            {/* Feature 2: Real-time Sync */}
            <div className="flex flex-col gap-5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all p-8 group">
              <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(115,17,212,0.4)]">
                <Icon name="sync" className="text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">Real-time Sync</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Zero-latency data parity across all devices and team members
                  globally. Work together, seamlessly.
                </p>
              </div>
            </div>

            {/* Feature 3: WhatsApp Integration */}
            <div className="flex flex-col gap-5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all p-8 group">
              <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(115,17,212,0.4)]">
                <Icon name="chat" className="text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">WhatsApp Native</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Direct customer connection with native WhatsApp Business API
                  support and automated replies.
                </p>
              </div>
            </div>

            {/* Feature 4: DeepSeek AI */}
            <div className="flex flex-col gap-5 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all p-8 group">
              <div className="size-12 rounded-lg bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(115,17,212,0.4)]">
                <Icon name="memory" className="text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">DeepSeek AI</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Leverage industry-leading LLM technology for deep insights,
                  content generation, and code automation.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="flex gap-4 items-center rounded-lg border border-primary/10 bg-primary/5 p-4">
              <Icon name="shield" className="text-primary" />
              <div>
                <h4 className="font-bold text-sm">Security</h4>
                <p className="text-xs text-slate-500">Enterprise encryption</p>
              </div>
            </div>
            <div className="flex gap-4 items-center rounded-lg border border-primary/10 bg-primary/5 p-4">
              <Icon name="query_stats" className="text-primary" />
              <div>
                <h4 className="font-bold text-sm">Scalability</h4>
                <p className="text-xs text-slate-500">Auto-scaling clusters</p>
              </div>
            </div>
            <div className="flex gap-4 items-center rounded-lg border border-primary/10 bg-primary/5 p-4">
              <Icon name="public" className="text-primary" />
              <div>
                <h4 className="font-bold text-sm">Global Edge</h4>
                <p className="text-xs text-slate-500">Low-latency nodes</p>
              </div>
            </div>
            <div className="flex gap-4 items-center rounded-lg border border-primary/10 bg-primary/5 p-4">
              <Icon name="terminal" className="text-primary" />
              <div>
                <h4 className="font-bold text-sm">API Access</h4>
                <p className="text-xs text-slate-500">Full SDK support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <section className="w-full bg-primary/5 py-24 border-y border-primary/10">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6">
                  Why Velamini stands out?
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                      <Icon name="done" className="text-white text-xs" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Integrated DeepSeek reasoning core unlike legacy systems.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                      <Icon name="done" className="text-white text-xs" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Collaborative canvas for visual neural mapping in
                      real-time.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                      <Icon name="done" className="text-white text-xs" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      No third-party plugins needed for WhatsApp automation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-background-dark p-8 rounded-2xl border border-primary/20 shadow-xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-primary/10">
                    <span className="font-medium">Performance Score</span>
                    <span className="text-primary font-bold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary/10">
                    <span className="font-medium">AI Accuracy</span>
                    <span className="text-primary font-bold">98.5%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary/10">
                    <span className="font-medium">Sync Latency</span>
                    <span className="text-primary font-bold">&lt;15ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Global Uptime</span>
                    <span className="text-primary font-bold">24/7/365</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-[1200px] w-full px-6 py-24 text-center">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Join thousands of teams already using Velamini to transform their
            workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
