"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"

interface CryptoPrice {
  name: string
  symbol: string
  price: number
  change24h: number
}

export default function PriceTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { name: "Bitcoin", symbol: "BTC", price: 65432.1, change24h: 2.34 },
    { name: "Ethereum", symbol: "ETH", price: 3521.45, change24h: 1.56 },
    { name: "Solana", symbol: "SOL", price: 143.21, change24h: 4.78 },
    { name: "Cardano", symbol: "ADA", price: 0.58, change24h: -0.92 },
  ])

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((currentPrices) =>
        currentPrices.map((crypto) => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.01 - 0.005)),
          change24h: crypto.change24h + (Math.random() * 0.2 - 0.1),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-4 py-2 animate-scroll">
        {prices.map((crypto) => (
          <Card key={crypto.symbol} className="min-w-[200px] border-none bg-background/50 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{crypto.name}</p>
                  <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium">
                    ${crypto.price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p
                    className={`text-sm flex items-center justify-end ${crypto.change24h >= 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {crypto.change24h >= 0 ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(crypto.change24h).toFixed(2)}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

