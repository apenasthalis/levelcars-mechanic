import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export default function ServicosPage() {
  const services = [
    {
      icon: "Wrench",
      title: "Manutenção Preventiva",
      description: "Revisões completas para manter seu veículo sempre em perfeito estado",
      features: ["Troca de óleo", "Filtros", "Velas de ignição", "Inspeção geral"],
      price: "A partir de R$ 299",
      image: "/car-maintenance-workshop.jpg",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: "Settings",
      title: "Motor",
      description: "Especialistas em diagnóstico e reparos de motor com equipamentos de ponta",
      features: ["Diagnóstico computadorizado", "Retífica", "Troca de peças", "Injeção eletrônica"],
      price: "Sob consulta",
      image: "/car-engine-repair.png",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: "Gauge",
      title: "Suspensão e Freios",
      description: "Segurança em primeiro lugar com serviços de freios e suspensão",
      features: ["Troca de pastilhas", "Discos de freio", "Amortecedores", "Alinhamento"],
      price: "A partir de R$ 399",
      image: "/car-suspension-brake.jpg",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: "Droplet",
      title: "Sistema de Arrefecimento",
      description: "Mantenha o motor na temperatura ideal com nosso serviço especializado",
      features: ["Radiador", "Bomba d'água", "Válvula termostática", "Aditivos"],
      price: "A partir de R$ 249",
      image: "/car-cooling-system.jpg",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      icon: "Battery",
      title: "Sistema Elétrico",
      description: "Diagnóstico e reparo completo do sistema elétrico do seu veículo",
      features: ["Bateria", "Alternador", "Motor de partida", "Fiação"],
      price: "A partir de R$ 179",
      image: "/car-electrical-system.png",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      icon: "Wind",
      title: "Ar Condicionado",
      description: "Climatização perfeita com manutenção e recarga de ar condicionado",
      features: ["Recarga de gás", "Higienização", "Troca de filtro", "Compressor"],
      price: "A partir de R$ 199",
      image: "/car-air-conditioning.jpg",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: "Zap",
      title: "Injeção Eletrônica",
      description: "Especialistas em diagnóstico e reparo de sistemas de injeção",
      features: ["Scanner automotivo", "Limpeza de bicos", "Corpo de borboleta", "Sensores"],
      price: "A partir de R$ 149",
      image: "/car-fuel-injection.jpg",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: "Shield",
      title: "Revisão Completa",
      description: "Pacote completo de revisão para máxima tranquilidade",
      features: ["Todos os sistemas", "Relatório detalhado", "Garantia estendida", "Diagnóstico premium"],
      price: "A partir de R$ 699",
      image: "/complete-car-inspection.jpg",
      gradient: "from-emerald-500 to-emerald-600",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Soluções completas em mecânica automotiva com a qualidade e confiança que seu veículo merece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
