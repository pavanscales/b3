import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowLeft, ArrowRight, Wallet, Shield, Coins, Rocket, Layers } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const templates = [
  {
    id: "basic-solana-dapp",
    name: "Basic Solana dApp",
    description: "Minimal setup with React, Phantom Wallet support, and Solana connection.",
    tags: ["Beginner", "React", "Wallet Adapter"],
    icon: Wallet,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "nextjs-anchor-tailwind",
    name: "Next.js + Anchor + Tailwind",
    description: "Full-stack setup using Next.js, Anchor framework for Solana smart contracts, and Tailwind CSS.",
    tags: ["Fullstack", "Anchor", "Next.js"],
    icon: Layers,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "nextjs-shadcn-solana-pay",
    name: "Next.js + ShadCN + Solana Pay",
    description: "dApp starter using ShadCN UI, Solana Pay integration for transactions.",
    tags: ["Payments", "Solana Pay", "UI"],
    icon: Coins,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "create3-anchor-auto-deploy",
    name: "Create3 with Anchor + React + Auto-deploy",
    description: "Includes GitHub + Vercel auto-deploy with prewritten Anchor programs.",
    tags: ["Pro", "Deploy", "CI/CD"],
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "token-gated-app",
    name: "Token-Gated App Boilerplate",
    description: "Example project for building NFT/token-gated experiences.",
    tags: ["Token", "NFT", "Gate"],
    icon: Shield,
    gradient: "from-indigo-500 to-purple-500",
  },
]

export default function TemplatesPage() {
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
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
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
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Templates
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-300">
            Choose from our curated collection of production-ready Solana dApp boilerplates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => {
            const IconComponent = template.icon
            return (
              <Card
                key={template.id}
                className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${template.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 h-9 px-4 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Link href="/generator">
                      Generate
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 leading-tight transition-colors duration-300">
                  {template.name}
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed transition-colors duration-300">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-0 text-xs transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Custom Template CTA */}
        <Card className="border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 mt-20 p-16 text-center transition-all duration-300">
          <h3 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
            Need something custom?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed font-light transition-colors duration-300">
            Can't find exactly what you're looking for? Use our flexible generator to create a custom boilerplate with
            your specific requirements.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 h-14 px-10 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/generator">
              Create Custom Template
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </Card>
      </div>
    </div>
  )
}
