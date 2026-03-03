import Link from "next/link";
import { PublicLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Icon,
} from "@/components/ui";

export default function LoginPage() {
  return (
    <PublicLayout>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mx-auto max-w-md">
          <Card className="border-primary/20 shadow-xl shadow-primary/5">
            <CardHeader>
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <Icon name="login" className="text-primary" />
              </div>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>
                Sign in to manage your AI twin and conversations.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Sign In
                </Button>

                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    className="font-semibold text-primary hover:underline"
                  >
                    Create one
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </PublicLayout>
  );
}
