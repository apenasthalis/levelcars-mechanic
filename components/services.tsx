import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Car, Cog, Droplet, Gauge, Wrench } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Revisões periódicas para manter seu carro sempre em perfeito estado.",
  },
  {
    icon: Cog,
    title: "Mecânica Geral",
    description: "Reparos e diagnósticos completos para todos os sistemas do veículo.",
  },
  {
    icon: Droplet,
    title: "Troca de Óleo",
    description: "Serviço rápido de troca de óleo e filtros com produtos de qualidade.",
  },
  {
    icon: Battery,
    title: "Sistema Elétrico",
    description: "Diagnóstico e reparo de sistemas elétricos e eletrônicos.",
  },
  {
    icon: Gauge,
    title: "Suspensão e Freios",
    description: "Manutenção especializada em suspensão, amortecedores e freios.",
  },
  {
    icon: Car,
    title: "Funilaria e Pintura",
    description: "Serviços completos de funilaria e pintura automotiva.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Oferecemos uma gama completa de serviços automotivos com qualidade garantida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
