"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">LevelCars</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Início
            </Link>
            <Link
              href="/servicos"
              className={`transition-colors ${isActive("/servicos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              className={`transition-colors ${isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className={`transition-colors ${isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contato">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Agendar Serviço
              </Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/"
              className={`block transition-colors ${isActive("/") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/servicos"
              className={`block transition-colors ${isActive("/servicos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="/sobre"
              className={`block transition-colors ${isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className={`block transition-colors ${isActive("/contato") ? "text-primary font-semibold" : "text-foreground hover:text-primary"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link href="/contato">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Agendar Serviço</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
