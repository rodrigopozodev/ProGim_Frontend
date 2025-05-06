"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function CTASection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleAppDownload = () => {
    setIsLoading(true)

    toast({
      title: "Próximamente",
      description: "La aplicación estará disponible muy pronto. ¡Gracias por tu interés!",
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
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
          <Button
            size="lg"
            className="min-w-[220px] bg-white text-primary hover:bg-white/90 shadow-xl text-lg py-7 px-8 rounded-xl"
            onClick={handleAppDownload}
            disabled={isLoading}
          >
            <Lock className="mr-2 h-5 w-5" />
            <span>Descargar App</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
