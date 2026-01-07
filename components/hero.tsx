import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
            <Wrench size={16} />
            <span className="text-sm font-medium">Mecânica de Confiança</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {"Eleve seu carro ao próximo nível"}
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Serviços automotivos profissionais com atendimento excepcional. Cuidamos do seu veículo com expertise e
            dedicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contato">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                Agende Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/servicos">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 hover:bg-secondary-foreground/5 text-secondary-foreground bg-transparent"
              >
                Nossos Serviços
              </Button>
            </Link>
            {/* </CHANGE> */}
          </div>
        </div>
      </div>
    </section>
  )
}
