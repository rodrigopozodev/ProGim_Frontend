import Link from "next/link"
import { Dumbbell } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-16 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-6">
              <Dumbbell className="h-7 w-7 text-secondary" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">FitPro</span>
            </div>
            <p className="text-muted-foreground">Tu compañero definitivo para alcanzar tus metas fitness.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Enlaces</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-muted-foreground hover:text-primary transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">info@fitpro.com</li>
              <li className="text-muted-foreground">+34 123 456 789</li>
              <li className="text-muted-foreground">Madrid, España</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} FitPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
