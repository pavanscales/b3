import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowLeft, Download, Github, CheckCircle, Copy, ExternalLink, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SummaryPage() {
  const selectedOptions = {
    framework: "Next.js",
    walletAdapter: "Solana Wallet Adapter",
    styling: "ShadCN UI",
    cluster: "Devnet",
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-200"
            >
              <Link href="/generator">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Generator
              </Link>
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center transition-colors duration-300">
                <Code2 className="w-4 h-4 text-white dark:text-neutral-900" />
              </div>
              <span className="text-xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                Build3r
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Success Header */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-950/20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-300">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Success!
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-300">
            Your Solana dApp boilerplate is ready for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Configuration Summary */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                Configuration
              </h2>
            </div>
            <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300">
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-3 transition-colors duration-300">
                    Framework
                  </label>
                  <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                    {selectedOptions.framework}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-3 transition-colors duration-300">
                    Wallet
                  </label>
                  <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                    {selectedOptions.walletAdapter}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-3 transition-colors duration-300">
                    Styling
                  </label>
                  <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                    {selectedOptions.styling}
                  </Badge>
                </div>
                <div>
                  <label className="block text-sm text-neutral-600 dark:text-neutral-400 mb-3 transition-colors duration-300">
                    Network
                  </label>
                  <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                    {selectedOptions.cluster}
                  </Badge>
                </div>
              </div>

              <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                  Project Features
                </h4>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Wallet connection setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Solana program integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Transaction handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Error handling & loading states
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Responsive design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    TypeScript support
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Download Options */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                <Download className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                Download & Deploy
              </h2>
            </div>
            <div className="space-y-6">
              <Button
                className="w-full h-14 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Download className="w-5 h-5 mr-3" />
                Download ZIP
              </Button>

              <Button
                variant="outline"
                className="w-full h-14 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-lg font-medium transition-all duration-300"
                size="lg"
              >
                <Github className="w-5 h-5 mr-3" />
                Push to GitHub
              </Button>

              <Card className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-all duration-300">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                  Quick Start
                </h4>
                <div className="space-y-4">
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <code className="text-neutral-700 dark:text-neutral-300 font-mono transition-colors duration-300">
                        npm install
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <code className="text-neutral-700 dark:text-neutral-300 font-mono transition-colors duration-300">
                        npm run dev
                      </code>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Next Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-center hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                Customize Your dApp
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                Modify the generated code to fit your specific use case and add your business logic.
              </p>
            </Card>

            <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-center hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                Deploy to Production
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                Deploy your dApp to Vercel, Netlify, or your preferred hosting platform.
              </p>
            </Card>

            <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-center hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                Join the Community
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
                Share your project and get help from other Solana developers in our community.
              </p>
            </Card>
          </div>
        </div>

        {/* Generate Another */}
        <div className="text-center mt-16">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 h-14 px-10 text-lg font-medium transition-all duration-300"
          >
            <Link href="/generator">Generate Another Boilerplate</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
