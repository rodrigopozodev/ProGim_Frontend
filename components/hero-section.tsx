import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Fondo de gimnasio"
          fill
          className="object-cover opacity-70 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply"></div>
      </div>
      <div className="container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white text-shadow">
            Transforma tu cuerpo, <span className="text-secondary">cambia tu vida</span>
          </h1>
          <p className="text-xl text-white text-shadow">
            La aplicación definitiva para alcanzar tus objetivos fitness. Entrenamiento personalizado, seguimiento de
            progreso y nutrición en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/registro">
              <Button size="lg" className="gradient-secondary shadow-lg font-bold text-lg py-6 px-8">
                Comenzar Ahora
              </Button>
            </Link>
            <Link href="/planes">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary transition-colors shadow-lg text-lg py-6 px-8"
              >
                Ver Planes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
