import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Lock, Shield, Smartphone, Zap } from "lucide-react"
import PriceTicker from "@/components/price-ticker"
import TestimonialSlider from "@/components/testimonial-slider"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CryptoArithmetic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Secure Crypto Trading for the Modern Investor
                </h1>
                <p className="text-xl text-muted-foreground">
                  Trade with confidence on our secure, reliable, and intuitive platform. Built for both beginners and
                  professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
                <Shield className="h-32 w-32 text-primary/80" />
              </div>
            </div>
          </div>
        </section>

        {/* Live Price Ticker */}
        <section className="py-8 bg-muted/50">
          <div className="container">
            <PriceTicker />
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Serious Traders</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform is designed with advanced features to help you maximize your crypto investments.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Enterprise-Grade Security</CardTitle>
                  <CardDescription>Multi-layer security with 95% of assets stored in cold wallets.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our platform uses military-grade encryption, two-factor authentication, and advanced fraud
                    protection to keep your assets safe.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>Real-time data and powerful charting tools.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Access comprehensive market data, customizable charts, and technical indicators to make informed
                    trading decisions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Lightning-Fast Execution</CardTitle>
                  <CardDescription>Execute trades in milliseconds with our high-performance engine.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our trading engine processes thousands of transactions per second, ensuring your orders are executed
                    at the best possible price.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Lock className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Regulatory Compliance</CardTitle>
                  <CardDescription>Fully compliant with global financial regulations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    We adhere to strict KYC and AML procedures, ensuring your trading activities are always within legal
                    frameworks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <Smartphone className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Mobile Trading</CardTitle>
                  <CardDescription>Trade on the go with our powerful mobile app.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our mobile app offers the same powerful features as our desktop platform, allowing you to manage
                    your portfolio from anywhere.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>API Integration</CardTitle>
                  <CardDescription>Connect your systems with our robust API.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our comprehensive API allows you to build custom trading solutions, integrate with existing systems,
                    or develop trading bots.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="gap-2">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Trading?</h2>
                <p className="text-xl">
                  Join thousands of traders who have already discovered the benefits of our platform.
                </p>
                <Button size="lg" variant="secondary" className="gap-2">
                  Create Account <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-primary-foreground/10 p-8 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="h-6 w-6 mt-0.5 text-primary-foreground" />
                    <span>Secure storage with insurance protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-6 w-6 mt-0.5 text-primary-foreground" />
                    <span>Trade over 100 cryptocurrencies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-6 w-6 mt-0.5 text-primary-foreground" />
                    <span>Advanced trading tools and analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lock className="h-6 w-6 mt-0.5 text-primary-foreground" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by thousands of traders and institutions worldwide.
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">CryptoArithmetic</span>
              </div>
              <p className="text-muted-foreground">
                Secure, reliable, and intuitive crypto trading platform for modern investors.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Exchange
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Institutional
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Market Data
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CryptoArithmetic. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

