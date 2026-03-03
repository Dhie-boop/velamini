import Link from "next/link";
import { PublicLayout } from "@/components/layout";
import { Button, Icon, Badge } from "@/components/ui";

export default function Home() {
  return (
    <PublicLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <div className="space-y-4">
                <Badge variant="primary">Future of Digital Presence</Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Your AI Twin, <span className="text-primary">Amplified</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                  Experience the next evolution of digital presence with
                  futuristic AI integration. A mirror that learns, grows, and
                  represents you globally.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="flex items-center gap-2">
                    Launch Twin <Icon name="rocket_launch" className="text-sm" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="secondary" size="lg">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-100 dark:bg-background-dark border border-primary/20 rounded-2xl aspect-video overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-purple-900/30 to-primary/10 flex items-center justify-center">
                    <Icon
                      name="neurology"
                      className="text-8xl text-primary/50"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="bg-primary rounded-full p-2">
                      <Icon name="play_arrow" className="text-white text-sm" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Watch AI in motion
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Ecosystem Section */}
        <section className="py-20 border-t border-primary/10">
          <div className="mb-16">
            <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-4">
              Core Ecosystem
            </h2>
            <h3 className="text-3xl lg:text-5xl font-bold dark:text-white leading-tight">
              Redefining Digital Interaction
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl">
              Our core ecosystem powers your personal and professional virtual
              presence through high-performance neural nodes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature Card 1 */}
            <div className="group relative bg-slate-100 dark:bg-primary/5 rounded-2xl border border-primary/10 p-4 transition-all hover:border-primary/40">
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-800 flex items-center justify-center">
                <Icon name="person_search" className="text-6xl text-primary/50" />
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="person_search" className="text-primary" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Personal Virtual Self
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  A digital mirror that learns your communication style and acts
                  on your behalf across platforms.
                </p>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="group relative bg-slate-100 dark:bg-primary/5 rounded-2xl border border-primary/10 p-4 transition-all hover:border-primary/40">
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-800 flex items-center justify-center">
                <Icon name="hub" className="text-6xl text-primary/50" />
              </div>
              <div className="px-4 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="hub" className="text-primary" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    Organization WhatsApp
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Seamlessly integrate AI agents into your organization&apos;s daily
                  communication workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 border-t border-primary/10">
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl border border-primary/20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold dark:text-white">
                  Powered by <span className="text-primary">DeepSeek AI</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our tech stack is built on the foundation of DeepSeek&apos;s
                  advanced LLM architecture, ensuring low-latency responses and
                  highly accurate persona replication.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Icon name="check_circle" className="text-primary" />
                    Instant Persona Context Matching
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Icon name="check_circle" className="text-primary" />
                    Multi-Modal Data Processing
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <Icon name="check_circle" className="text-primary" />
                    Secure On-Premise Training
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="p-6 bg-white dark:bg-background-dark rounded-2xl border border-primary/10 text-center">
                  <p className="text-primary text-3xl font-bold mb-1">99.9%</p>
                  <p className="text-xs uppercase tracking-tighter text-slate-500">
                    Uptime
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-background-dark rounded-2xl border border-primary/10 text-center">
                  <p className="text-primary text-3xl font-bold mb-1">12ms</p>
                  <p className="text-xs uppercase tracking-tighter text-slate-500">
                    Latency
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-background-dark rounded-2xl border border-primary/10 text-center">
                  <p className="text-primary text-3xl font-bold mb-1">AES-256</p>
                  <p className="text-xs uppercase tracking-tighter text-slate-500">
                    Encryption
                  </p>
                </div>
                <div className="p-6 bg-white dark:bg-background-dark rounded-2xl border border-primary/10 text-center">
                  <p className="text-primary text-3xl font-bold mb-1">1.2B</p>
                  <p className="text-xs uppercase tracking-tighter text-slate-500">
                    Params
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 border-t border-primary/10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold dark:text-white">
              Trusted by Pioneers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-primary/5 p-8 rounded-2xl border border-primary/10 relative">
              <Icon
                name="format_quote"
                className="text-primary/40 absolute top-4 right-4 text-4xl"
              />
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                &quot;Velamini&apos;s AI twin has reduced my email response time by 85%.
                It feels like I&apos;m finally in two places at once.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                  JD
                </div>
                <div>
                  <p className="font-bold text-sm">James Dawson</p>
                  <p className="text-xs text-primary">Founder @ TechStream</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-primary/5 p-8 rounded-2xl border border-primary/10 relative">
              <Icon
                name="format_quote"
                className="text-primary/40 absolute top-4 right-4 text-4xl"
              />
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                &quot;The WhatsApp integration transformed our customer support.
                Response times dropped from hours to seconds.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                  SM
                </div>
                <div>
                  <p className="font-bold text-sm">Sarah Mitchell</p>
                  <p className="text-xs text-primary">COO @ RetailHub</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-primary/5 p-8 rounded-2xl border border-primary/10 relative">
              <Icon
                name="format_quote"
                className="text-primary/40 absolute top-4 right-4 text-4xl"
              />
              <p className="text-slate-600 dark:text-slate-300 italic mb-6">
                &quot;Finally, an AI that truly understands my voice and brand. The
                training process was intuitive and results were instant.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center font-bold">
                  AK
                </div>
                <div>
                  <p className="font-bold text-sm">Alex Kim</p>
                  <p className="text-xs text-primary">Creator & Influencer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-primary/10 text-center">
          <h2 className="text-4xl font-bold dark:text-white mb-6">
            Ready to amplify your presence?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Join thousands of creators, businesses, and professionals who are
            using Velamini to extend their reach.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">
                Get Started Free
              </Button>
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
