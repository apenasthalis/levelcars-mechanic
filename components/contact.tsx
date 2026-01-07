"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Agende seu serviço ou tire suas dúvidas. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua das Oficinas, 123
                    <br />
                    Centro, São Paulo - SP
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    (11) 3456-7890
                    <br />
                    (11) 98765-4321
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground leading-relaxed">contato@levelcars.com.br</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seg - Sex: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
