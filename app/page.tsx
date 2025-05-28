import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Check, Zap, Code2, Users, Star, Rocket } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
              <Code2 className="w-4 h-4 text-white dark:text-neutral-900" />
            </div>
            <span className="text-xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
              Build3r
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/templates"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              Templates
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
            >
              GitHub
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-8 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300">
            <Zap className="w-3 h-3 mr-2" />
            Now supporting Anchor v0.30+
          </Badge>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white mb-8 transition-colors duration-300">
            Build3r
          </h1>

          <p className="text-2xl md:text-3xl text-neutral-600 dark:text-neutral-400 mb-6 max-w-3xl mx-auto leading-relaxed font-light transition-colors duration-300">
            Build Solana dApps faster with pre-built boilerplates
          </p>

          <p className="text-lg text-neutral-500 dark:text-neutral-500 mb-16 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Generate production-ready Solana dApp boilerplates with your preferred stack. Choose your framework, wallet
            adapter, styling, and network configuration in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
            <Button
              asChild
              size="lg"
              className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 h-12 px-8 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/generator">
                Generate Boilerplate
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 h-12 px-8 text-base font-medium transition-all duration-300"
            >
              <Link href="#" className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Everything you need
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-300">
            All the tools and configurations to get your Solana dApp up and running
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Check className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
                  Choose your stack
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                  Next.js, React, or vanilla JavaScript - pick what works best for your project
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Check className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
                  Select wallet adapter
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                  Integrated wallet support with Phantom, Solflare, and more
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Check className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
                  Pick styling framework
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                  Tailwind CSS, ShadCN UI, or custom styling options
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Check className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
                  RPC and cluster options
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                  Mainnet, Devnet, or Localnet - configure for any environment
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Trusted by developers
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 font-light transition-colors duration-300">
            Join the community building the future of Solana
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-bold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
              1,200+
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-300">Developers</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-bold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
              5,000+
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-300">
              Projects generated
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div className="text-5xl font-bold text-neutral-900 dark:text-white mb-3 transition-colors duration-300">
              4.9/5
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-300">
              Developer satisfaction
            </p>
          </div>
        </div>

        <Card className="p-12 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 max-w-4xl mx-auto transition-all duration-300">
          <div className="text-center">
            <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-8 italic leading-relaxed font-light transition-colors duration-300">
              "Build3r saved me hours of setup time. The generated boilerplate was clean, well-structured, and ready for
              production. Highly recommended!"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full"></div>
              <div className="text-left">
                <p className="font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                  Alex Chen
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                  Senior Solana Developer
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Ready to build?
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-16 max-w-2xl mx-auto font-light transition-colors duration-300">
            Join thousands of developers who trust Build3r for their Solana projects
          </p>
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 h-14 px-10 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/generator">
              Start Building Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Code2 className="w-4 h-4 text-white dark:text-neutral-900" />
                </div>
                <span className="text-xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                  Build3r
                </span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm transition-colors duration-300">
                The fastest way to generate production-ready Solana dApp boilerplates
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Product
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/templates"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Templates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/generator"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Generator
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors duration-200"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800 mt-16 pt-8 transition-colors duration-300">
            <p className="text-center text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
              © 2024 Build3r. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
