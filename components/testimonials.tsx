import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    role: "Empresário",
    content:
      "Excelente atendimento! Sempre confio na LevelCars para cuidar do meu veículo. Profissionais qualificados e preços justos.",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Professora",
    content:
      "Melhor oficina da região. Serviço de qualidade, transparência no orçamento e prazo de entrega respeitado. Super recomendo!",
    rating: 5,
  },
  {
    name: "Pedro Costa",
    role: "Advogado",
    content:
      "Equipe muito competente. Resolveram um problema que outras oficinas não conseguiram. Agora só faço manutenção aqui.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Veja o que quem já confia na LevelCars tem a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{`"${testimonial.content}"`}</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
