import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">L</span>
              </div>
              <span className="text-xl font-bold">LevelCars</span>
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Elevando o padrão de qualidade em serviços automotivos desde 2009.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/servicos" className="hover:text-primary transition-colors">
                  Manutenção Preventiva
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary transition-colors">
                  Mecânica Geral
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary transition-colors">
                  Troca de Óleo
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-primary transition-colors">
                  Sistema Elétrico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/sobre" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-primary transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Segunda - Sexta</li>
              <li>8h às 18h</li>
              <li className="pt-2">Sábado</li>
              <li>8h às 12h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} LevelCars. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
