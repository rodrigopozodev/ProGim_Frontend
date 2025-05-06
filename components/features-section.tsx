import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dumbbell, Calendar, Trophy, ArrowRight } from "lucide-react"

export default function FeaturesSection() {
  // Definir las características con sus respectivos enlaces
  const features = [
    {
      title: "Rutinas Personalizadas",
      description: "Entrenamientos adaptados a tus objetivos y nivel",
      icon: Dumbbell,
      href: "/rutinas",
    },
    {
      title: "Seguimiento de Progreso",
      description: "Monitorea tus avances en tiempo real",
      icon: Calendar,
      href: "/progreso",
    },
    {
      title: "Retos y Recompensas",
      description: "Mantente motivado con desafíos semanales",
      icon: Trophy,
      href: "/retos",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-4">
            Todo lo que necesitas para alcanzar tus metas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestra aplicación te ofrece todas las herramientas para optimizar tu entrenamiento y maximizar tus
            resultados.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Link href={feature.href} key={index} className="block group">
              <Card className="bg-background shadow-lg hover-scale h-full transition-all duration-200 hover:border-primary/50">
                <CardHeader className="space-y-1 flex flex-row items-start p-4 sm:p-6">
                  <div className="mr-3 sm:mr-4 mt-1 bg-secondary p-2 sm:p-3 rounded-full shadow-md flex-shrink-0">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 flex items-center">
                      <span className="truncate mr-1">{feature.title}</span>
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 flex-shrink-0" />
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base line-clamp-2">
                      {feature.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
