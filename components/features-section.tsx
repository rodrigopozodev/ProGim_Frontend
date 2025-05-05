import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dumbbell, Users, Calendar, Trophy, ArrowRight } from "lucide-react"

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
      title: "Entrenadores Expertos",
      description: "Acceso a profesionales certificados",
      icon: Users,
      href: "/entrenadores",
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
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Todo lo que necesitas para alcanzar tus metas</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuestra aplicación te ofrece todas las herramientas para optimizar tu entrenamiento y maximizar tus
            resultados.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.href} key={index} className="block group">
              <Card className="bg-background shadow-lg hover-scale h-full transition-all duration-200 hover:border-primary/50">
                <CardHeader className="space-y-1 flex flex-row items-start">
                  <div className="mr-4 mt-1 bg-secondary p-3 rounded-full shadow-md">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 flex items-center">
                      {feature.title}
                      <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                    </CardTitle>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
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
