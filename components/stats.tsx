import { Award, Clock, Users, Wrench } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "5.000+",
    label: "Clientes Satisfeitos",
  },
  {
    icon: Wrench,
    value: "15.000+",
    label: "Serviços Realizados",
  },
  {
    icon: Clock,
    value: "15 Anos",
    label: "de Experiência",
  },
  {
    icon: Award,
    value: "98%",
    label: "Taxa de Satisfação",
  },
]

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
