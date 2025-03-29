import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, Award, BarChart3, Utensils, Share2 } from "lucide-react"
import AppScreenshot from "@/components/app-screenshot"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-primary">FitLyf</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log in
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Share Your Fitness Journey With Friends
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    FitLyf is a social platform where you can connect with friends, track your nutrition, and share your
                    progress.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="px-8">
                    Download App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img src="/avatar.png" key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-background" />
                    ))}
                  </div>
                  <div className="font-medium">Join 10,000+ users tracking their fitness</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <AppScreenshot />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need to Track Your Fitness
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  FitLyf combines social networking with powerful fitness tracking to help you stay motivated and reach
                  your goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Utensils className="h-10 w-10 text-primary" />}
                title="Food Journal"
                description="Log your meals and snacks to keep track of your daily nutrition intake."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-primary" />}
                title="AI Macro Analysis"
                description="Our AI analyzes your food intake to calculate macros and calories automatically."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="Social Sharing"
                description="Share your progress with friends and get motivated by their achievements."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary" />}
                title="Daily Streaks"
                description="Build and maintain streaks to stay consistent with your fitness routine."
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-primary" />}
                title="Achievements"
                description="Earn badges and rewards as you reach your fitness milestones."
              />
              <FeatureCard
                icon={<Share2 className="h-10 w-10 text-primary" />}
                title="Community Challenges"
                description="Join challenges with friends to push each other towards your goals."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Steps to Track Your Fitness
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  FitLyf makes it easy to track your nutrition and share your progress with friends.
                </p>
              </div>
            </div>
            <HowItWorks />
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-20 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from people who have transformed their fitness journey with FitLyf.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="FitLyf has completely changed how I approach my nutrition. The AI analysis makes it so easy to understand my eating habits."
                author="Sarah J."
                role="Lost 15 lbs in 3 months"
              />
              <TestimonialCard
                quote="The social aspect keeps me accountable. When my friends can see my progress, I'm more motivated to stay on track."
                author="Michael T."
                role="Maintained 60-day streak"
              />
              <TestimonialCard
                quote="I love the challenges feature! My friends and I compete to see who can maintain the longest streaks."
                author="Jessica L."
                role="Completed 5 challenges"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Fitness Journey?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Download FitLyf today and start connecting with friends on your path to better health.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 px-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="font-bold text-xl text-primary">FitLyf</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 FitLyf. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

