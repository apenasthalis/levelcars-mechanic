"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Wrench, Settings, Gauge, Droplet, Battery, Wind, Zap, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const iconMap = {
  Wrench,
  Settings,
  Gauge,
  Droplet,
  Battery,
  Wind,
  Zap,
  Shield,
}

interface ServiceCardProps {
  icon: keyof typeof iconMap
  title: string
  description: string
  features: string[]
  price: string
  image: string
  gradient: string
}

export function ServiceCard({ icon, title, description, features, price, image, gradient }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[icon]

  return (
    <Card
      className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 transition-transform duration-300 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform duration-300 ${isHovered ? "scale-110 rotate-6" : "scale-100"}`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Preço</div>
              <div className="text-xl font-bold text-primary">{price}</div>
            </div>
          </div>

          <Link href="/contato">
            <Button className="w-full bg-primary hover:bg-primary/90 group/btn" size="lg">
              Agendar Serviço
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-300`}
      />
    </Card>
  )
}
