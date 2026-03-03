import { PublicLayout } from "@/components/layout";
import { Button, Icon } from "@/components/ui";

export default function AboutPage() {
  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="mb-20" id="hero">
            <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-primary/10 mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-purple-900/30 to-primary/20 flex items-center justify-center">
                <Icon name="auto_awesome" className="text-9xl text-white/20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4">
                  Redefining Intelligence
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-2xl">
                  Amplify Human Potential
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" id="mission">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  We are dedicated to building the future of intelligence to
                  empower every individual on Earth. At Velamini, we don&apos;t
                  believe in AI as a replacement, but as a profound catalyst for
                  human creativity and problem-solving.
                </p>
                <div className="flex gap-4">
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/20">
                <p className="text-slate-700 dark:text-slate-300 italic text-xl">
                  &quot;Our goal is to make the world&apos;s most sophisticated
                  cognitive tools accessible to everyone, ensuring the next giant
                  leap for mankind is digital.&quot;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Icon name="person" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Elena Vance
                    </p>
                    <p className="text-sm text-slate-500">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section
            className="mb-24 py-16 border-y border-slate-200 dark:border-primary/10"
            id="vision"
          >
            <div className="max-w-3xl">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                The Vision
              </h2>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                A Seamless Extension of Thought
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                At Velamini, we envision a world where AI serves as a seamless
                extension of human thought, breaking barriers of productivity and
                creativity. We&apos;re building an ecosystem where complex tasks are
                simplified and the distance between idea and execution is zero.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-24" id="values">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
                Core Values
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The principles that guide every line of code we write.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 hover:border-primary transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="shield" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Privacy First
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Your data is your own. We build with sovereign encryption and
                  local-first principles to ensure absolute security.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 hover:border-primary transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="bolt" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Radical Efficiency
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  We optimize for speed and low latency. Intelligence should be
                  instant and available the moment you need it.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 hover:border-primary transition-all group">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon name="diversity_3" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Inclusive AI
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  Democratizing access to high-level reasoning for every culture,
                  language, and professional background.
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section
            className="mb-24 p-12 rounded-2xl bg-slate-900 text-white relative overflow-hidden"
            id="tech"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-bl from-primary to-transparent" />
            </div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                <div>
                  <h2 className="text-3xl font-black mb-2">Our Tech Stack</h2>
                  <p className="text-slate-400">
                    Built with the cutting-edge tools for scale and performance.
                  </p>
                </div>
                <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-200">
                  View Documentation
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="size-12 flex items-center justify-center bg-white/10 rounded-full">
                    <Icon name="terminal" />
                  </div>
                  <span className="font-bold">Next.js 16</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="size-12 flex items-center justify-center bg-white/10 rounded-full">
                    <Icon name="neurology" />
                  </div>
                  <span className="font-bold">DeepSeek V2</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="size-12 flex items-center justify-center bg-white/10 rounded-full">
                    <Icon name="database" />
                  </div>
                  <span className="font-bold">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="size-12 flex items-center justify-center bg-white/10 rounded-full">
                    <Icon name="layers" />
                  </div>
                  <span className="font-bold">Tailwind CSS</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-20">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
              Join the Revolution
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              We&apos;re always looking for brilliant minds who want to shape the
              future of human-AI collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Explore Careers</Button>
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </section>
      </div>
    </PublicLayout>
  );
}