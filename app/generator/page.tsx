"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function GeneratorPage() {
  const [framework, setFramework] = useState("")
  const [walletAdapter, setWalletAdapter] = useState("")
  const [styling, setStyling] = useState("")
  const [cluster, setCluster] = useState("")

  const isComplete = framework && walletAdapter && styling && cluster

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
             
              <span className="text-xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                b3
              </span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tight transition-colors duration-300">
            Generate Your dApp
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light transition-colors duration-300">
            Configure your stack and generate a production-ready Solana boilerplate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Configuration Panel */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                <Sparkles className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                Configuration
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                  Framework
                </label>
                <Select value={framework} onValueChange={setFramework}>
                  <SelectTrigger className="h-14 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200">
                    <SelectValue placeholder="Choose your framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                    <SelectItem value="react">React.js</SelectItem>
                    <SelectItem value="vanilla">Vanilla JavaScript</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                  Wallet Adapter
                </label>
                <Select value={walletAdapter} onValueChange={setWalletAdapter}>
                  <SelectTrigger className="h-14 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200">
                    <SelectValue placeholder="Select wallet adapter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solana-wallet-adapter">Solana Wallet Adapter</SelectItem>
                    <SelectItem value="phantom">Phantom Wallet</SelectItem>
                    <SelectItem value="solflare">Solflare</SelectItem>
                    <SelectItem value="custom">Custom Integration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                  Styling Framework
                </label>
                <Select value={styling} onValueChange={setStyling}>
                  <SelectTrigger className="h-14 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200">
                    <SelectValue placeholder="Pick your styling" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tailwind">Tailwind CSS</SelectItem>
                    <SelectItem value="shadcn">ShadCN UI</SelectItem>
                    <SelectItem value="chakra">Chakra UI</SelectItem>
                    <SelectItem value="custom">Custom CSS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                  Network/Cluster
                </label>
                <Select value={cluster} onValueChange={setCluster}>
                  <SelectTrigger className="h-14 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200">
                    <SelectValue placeholder="Choose network" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mainnet">Mainnet</SelectItem>
                    <SelectItem value="devnet">Devnet</SelectItem>
                    <SelectItem value="localnet">Localnet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                className="w-full h-14 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 border-0 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isComplete}
                asChild={isComplete}
              >
                {isComplete ? (
                  <Link href="/summary">
                    Generate Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                ) : (
                  <>
                    Generate Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Preview Panel */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-xl flex items-center justify-center transition-colors duration-300">
                <Check className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
              </div>
              <h2 className="text-3xl font-semibold text-neutral-900 dark:text-white transition-colors duration-300">
                Stack Preview
              </h2>
            </div>
            <Card className="p-10 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-all duration-300">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 transition-colors duration-300">
                    Selected Configuration
                  </h3>
                  <div className="space-y-4">
                    {framework && (
                      <div className="flex items-center justify-between py-3 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                        <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          Framework
                        </span>
                        <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                          {framework}
                        </Badge>
                      </div>
                    )}
                    {walletAdapter && (
                      <div className="flex items-center justify-between py-3 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                        <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          Wallet
                        </span>
                        <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                          {walletAdapter}
                        </Badge>
                      </div>
                    )}
                    {styling && (
                      <div className="flex items-center justify-between py-3 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                        <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          Styling
                        </span>
                        <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                          {styling}
                        </Badge>
                      </div>
                    )}
                    {cluster && (
                      <div className="flex items-center justify-between py-3">
                        <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          Network
                        </span>
                        <Badge className="bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-0 transition-colors duration-300">
                          {cluster}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                {isComplete && (
                  <div className="p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl transition-all duration-300">
                    <div className="flex items-center text-green-700 dark:text-green-400 mb-3">
                      <Check className="w-5 h-5 mr-3" />
                      <span className="font-semibold">Ready to Generate</span>
                    </div>
                    <p className="text-green-600 dark:text-green-500 leading-relaxed">
                      Your configuration is complete. Generate your boilerplate now.
                    </p>
                  </div>
                )}

                <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-4 transition-colors duration-300">
                    What's included:
                  </h4>
                  <ul className="space-y-3 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      Complete project structure
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      Wallet connection setup
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      Solana program integration
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      Transaction handling
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      Error handling & loading states
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      TypeScript support
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
