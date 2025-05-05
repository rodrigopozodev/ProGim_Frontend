import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="Fondo CTA"
          fill
          className="object-cover mix-blend-overlay"
        />
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-white text-shadow mb-4">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-xl text-white text-shadow">
              Únete hoy y obtén acceso a todas las herramientas que necesitas para alcanzar tus objetivos fitness.
            </p>
          </div>
          <Link href="/registro">
            <Button
              size="lg"
              className="min-w-[220px] bg-white text-primary hover:bg-white/90 shadow-xl text-lg py-7 px-8 rounded-xl"
            >
              <span>Descargar App</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
