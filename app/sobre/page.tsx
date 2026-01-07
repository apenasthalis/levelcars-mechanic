import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada serviço prestado",
    },
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais certificados e constantemente treinados",
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Respeito ao seu tempo com prazos cumpridos",
    },
    {
      icon: CheckCircle,
      title: "Garantia",
      description: "Garantia em todos os serviços e peças utilizadas",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                Sobre a <span className="text-primary">LevelCars</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Há mais de 15 anos no mercado, a LevelCars é referência em manutenção e reparos automotivos. Nossa
                missão é oferecer serviços de excelência com transparência, qualidade e respeito ao cliente.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Com uma equipe de mecânicos especializados e equipamentos de última geração, garantimos que seu veículo
                receba o melhor tratamento possível.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Fale Conosco
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img src="/professional-car-mechanic-workshop.jpg" alt="Oficina LevelCars" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
