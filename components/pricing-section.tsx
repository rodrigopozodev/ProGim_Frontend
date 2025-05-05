import Link from "next/link"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Planes que se adaptan a ti</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elige el plan que mejor se ajuste a tus necesidades y comienza tu transformación hoy mismo.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="flex flex-col shadow-lg hover-scale">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
              <div className="mt-4 flex items-end">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground ml-1 mb-1">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 border-t border-b py-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Rutinas básicas limitadas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Seguimiento básico</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Acceso a la comunidad</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Link href="/registro" className="w-full">
                <Button className="w-full py-6 text-lg shadow-md hover:shadow-lg transition-shadow">Comenzar</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col shadow-lg hover-scale">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plan Básico</CardTitle>
              <div className="mt-4 flex items-end">
                <span className="text-5xl font-bold">$9.99</span>
                <span className="text-muted-foreground ml-1 mb-1">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 border-t border-b py-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Rutinas básicas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Seguimiento de progreso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Comunidad de usuarios</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Link href="/planes/basico" className="w-full">
                <Button className="w-full py-6 text-lg shadow-md hover:shadow-lg transition-shadow">Seleccionar</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-secondary relative shadow-xl hover-scale scale-105 z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gradient-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              Popular
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plan Premium</CardTitle>
              <div className="mt-4 flex items-end">
                <span className="text-5xl font-bold text-secondary">$19.99</span>
                <span className="text-muted-foreground ml-1 mb-1">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 border-t border-b py-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Rutinas personalizadas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Planes de nutrición</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Acceso a entrenadores</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Análisis avanzado</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Link href="/planes/premium" className="w-full">
                <Button className="w-full py-6 text-lg gradient-secondary shadow-md hover:shadow-lg transition-shadow">
                  Seleccionar
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="flex flex-col shadow-lg hover-scale">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">Plan Elite</CardTitle>
              <div className="mt-4 flex items-end">
                <span className="text-5xl font-bold">$29.99</span>
                <span className="text-muted-foreground ml-1 mb-1">/mes</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1 border-t border-b py-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Todo lo del plan Premium</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Entrenador personal</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Consultas ilimitadas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                  <span className="font-medium">Acceso prioritario</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="pt-6">
              <Link href="/planes/elite" className="w-full">
                <Button className="w-full py-6 text-lg shadow-md hover:shadow-lg transition-shadow">Seleccionar</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
