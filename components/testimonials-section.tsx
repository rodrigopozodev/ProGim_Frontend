import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Historias reales de personas que han transformado sus vidas con nuestra aplicación.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover-scale">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    alt="Usuario"
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-secondary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary rounded-full p-1">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Carlos Rodríguez</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Miembro desde 2022</p>
                </div>
              </div>
              <p className="italic border-l-4 border-secondary pl-4 py-1">
                "Esta aplicación cambió completamente mi rutina de ejercicios. Los planes personalizados y el
                seguimiento de progreso me han ayudado a alcanzar metas que creía imposibles."
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover-scale">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    alt="Usuario"
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-secondary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary rounded-full p-1">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Laura Martínez</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Miembro desde 2021</p>
                </div>
              </div>
              <p className="italic border-l-4 border-secondary pl-4 py-1">
                "Los entrenadores son increíbles y siempre están disponibles para resolver mis dudas. He perdido 15
                kilos en 6 meses siguiendo el plan que me recomendaron."
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover-scale">
            <CardContent className="pt-8 pb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=70&width=70"
                    alt="Usuario"
                    width={70}
                    height={70}
                    className="rounded-full border-4 border-secondary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-secondary rounded-full p-1">
                    <Star className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Miguel Sánchez</h4>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Miembro desde 2023</p>
                </div>
              </div>
              <p className="italic border-l-4 border-secondary pl-4 py-1">
                "La flexibilidad de los entrenamientos y la facilidad de uso de la app me permiten mantenerme en forma a
                pesar de mi apretada agenda. ¡Totalmente recomendada!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
