import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Calendar, Users, Award, Wrench } from "lucide-react"

export default function ContatoPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua das Oficinas, 123 - Centro",
      subInfo: "São Paulo, SP - CEP: 01234-567",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 1234-5678",
      subInfo: "(11) 98765-4321",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@levelcars.com.br",
      subInfo: "atendimento@levelcars.com.br",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h",
      subInfo: "Sábado: 8h às 13h",
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Rápido",
      description: "Reserve seu horário em minutos",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados",
    },
    {
      icon: Award,
      title: "Garantia de Serviço",
      description: "Qualidade assegurada",
    },
    {
      icon: Wrench,
      title: "Equipamentos Modernos",
      description: "Tecnologia de ponta",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Header />

      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30">
                <span className="text-sm font-semibold text-primary">Fale Conosco</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Estamos prontos para atender você e cuidar do seu veículo com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group relative bg-card border border-border rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground mb-2 font-medium">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Por que escolher a LevelCars?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Oferecemos atendimento de excelência com profissionais qualificados e equipamentos modernos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-blue-500/10 border border-primary/20 rounded-3xl p-12 text-center">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">Atendimento Prioritário</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-6">
              Entre em contato através dos canais acima e receba atendimento personalizado. Estamos prontos para cuidar
              do seu veículo com a dedicação que ele merece.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4 text-primary" />
                <span>(11) 1234-5678</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-border" />
              <div className="flex items-center gap-2 text-sm font-medium">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@levelcars.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
