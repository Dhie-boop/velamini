import Link from "next/link";
import { PublicLayout } from "@/components/layout";
import { Button, Icon, Badge } from "@/components/ui";

export default function PricingPage() {
  return (
    <PublicLayout>
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="max-w-[1200px] w-full px-6 py-16 md:py-24 text-center">
          <Badge variant="primary" className="mb-6">
            Pricing Plans
          </Badge>
          <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            Scale your vision with <span className="text-primary">Velamini</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Choose the plan that&apos;s right for you or your team. Upgrade, downgrade,
            or cancel at any time with no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg">Start Free Trial</Button>
            </Link>
            <Button variant="secondary" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-[1200px] w-full px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/5 dark:bg-slate-900/40 p-8 hover:border-primary/50 transition-all group">
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                Personal Free
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Perfect for hobbyists and solo explorers.
              </p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-slate-900 dark:text-slate-100 text-5xl font-black tracking-tighter">
                  $0
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                  /month
                </span>
              </div>
            </div>
            <Link href="/dashboard">
              <Button
                variant="secondary"
                className="w-full"
              >
                Get Started
              </Button>
            </Link>
            <hr className="border-slate-200 dark:border-slate-800" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />1
                Active Project
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Basic Analytics
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Community Support
              </div>
              <div className="flex gap-3 text-sm text-slate-400">
                <Icon name="block" className="text-slate-600 text-lg" />
                Custom Domains
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col gap-6 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10 p-8 relative shadow-2xl shadow-primary/10 transform md:-translate-y-4 md:scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                Personal Pro
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                For serious creators who need power.
              </p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-slate-900 dark:text-slate-100 text-5xl font-black tracking-tighter">
                  $19
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                  /month
                </span>
              </div>
            </div>
            <Link href="/dashboard">
              <Button className="w-full">Upgrade Now</Button>
            </Link>
            <hr className="border-primary/20" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm font-medium">
                <Icon name="check_circle" className="text-primary text-lg" />
                Unlimited Projects
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <Icon name="check_circle" className="text-primary text-lg" />
                Advanced Analytics
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <Icon name="check_circle" className="text-primary text-lg" />
                Custom Domains
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <Icon name="check_circle" className="text-primary text-lg" />
                Priority Email Support
              </div>
              <div className="flex gap-3 text-sm font-medium">
                <Icon name="check_circle" className="text-primary text-lg" />
                100GB Storage
              </div>
            </div>
          </div>

          {/* Organization Plan */}
          <div className="flex flex-col gap-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/5 dark:bg-slate-900/40 p-8 hover:border-primary/50 transition-all group">
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                Organization
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Scalable infrastructure for businesses.
              </p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-slate-900 dark:text-slate-100 text-5xl font-black tracking-tighter">
                  $49
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-lg font-medium">
                  /month
                </span>
              </div>
            </div>
            <Button variant="secondary" className="w-full">
              Contact Sales
            </Button>
            <hr className="border-slate-200 dark:border-slate-800" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Everything in Pro
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Team Workspaces
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                SSO & SAML Security
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Dedicated Success Manager
              </div>
              <div className="flex gap-3 text-sm">
                <Icon name="check_circle" className="text-primary text-lg" />
                Custom Contracts
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="max-w-[1200px] w-full px-6 pb-32 overflow-x-auto">
          <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold text-center mb-12">
            Detailed Comparison
          </h2>
          <div className="min-w-[800px] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white/5 dark:bg-slate-900/20 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800/50">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-slate-500">
                    Feature
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Free
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-primary">
                    Pro
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                    Organization
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="p-6 text-sm">Active Projects</td>
                  <td className="p-6 text-sm">1</td>
                  <td className="p-6 text-sm font-bold">Unlimited</td>
                  <td className="p-6 text-sm font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Storage Capacity</td>
                  <td className="p-6 text-sm">500MB</td>
                  <td className="p-6 text-sm">100GB</td>
                  <td className="p-6 text-sm font-bold">Custom</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Monthly API Requests</td>
                  <td className="p-6 text-sm">10,000</td>
                  <td className="p-6 text-sm">500,000</td>
                  <td className="p-6 text-sm font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Custom Domains</td>
                  <td className="p-6 text-sm text-slate-400 dark:text-slate-600">
                    —
                  </td>
                  <td className="p-6 text-sm">Up to 3</td>
                  <td className="p-6 text-sm font-bold">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Team Collaboration</td>
                  <td className="p-6 text-sm text-slate-400 dark:text-slate-600">
                    —
                  </td>
                  <td className="p-6 text-sm text-slate-400 dark:text-slate-600">
                    —
                  </td>
                  <td className="p-6 text-sm">
                    <Icon name="check" className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Advanced Security (SSO)</td>
                  <td className="p-6 text-sm text-slate-400 dark:text-slate-600">
                    —
                  </td>
                  <td className="p-6 text-sm text-slate-400 dark:text-slate-600">
                    —
                  </td>
                  <td className="p-6 text-sm">
                    <Icon name="check" className="text-primary" />
                  </td>
                </tr>
                <tr>
                  <td className="p-6 text-sm">Support Response Time</td>
                  <td className="p-6 text-sm">Community</td>
                  <td className="p-6 text-sm">24 hours</td>
                  <td className="p-6 text-sm font-bold">4 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-[800px] w-full px-6 pb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
              <h3 className="font-bold mb-2">Can I switch plans later?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Yes! You can upgrade or downgrade your plan at any time. Changes
                take effect immediately and we&apos;ll prorate the difference.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
              <h3 className="font-bold mb-2">Is there a free trial?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Yes, all paid plans come with a 14-day free trial. No credit card
                required to start.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/10">
              <h3 className="font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We accept all major credit cards, PayPal, and wire transfers for
                Organization plans.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
