import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"

export default function PlanesPage() {
  return (
    <div className="container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Planes y precios</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades y comienza tu transformación hoy mismo.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <Card className="flex flex-col shadow-lg hover-scale">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">Plan Gratuito</CardTitle>
            <CardDescription>Para comenzar tu viaje fitness</CardDescription>
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
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Rutinas personalizadas</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Planes de nutrición</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Acceso a entrenadores</span>
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
            <CardDescription>Ideal para principiantes</CardDescription>
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
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Planes de nutrición</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Acceso a entrenadores</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Entrenador personal</span>
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
            <CardDescription>Para quienes buscan resultados</CardDescription>
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
                <span className="font-medium">Seguimiento de progreso</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                <span className="font-medium">Comunidad de usuarios</span>
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
                <X className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">Entrenador personal</span>
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
            <CardDescription>La experiencia completa</CardDescription>
            <div className="mt-4 flex items-end">
              <span className="text-5xl font-bold">$29.99</span>
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
                <span className="font-medium">Seguimiento de progreso</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                <span className="font-medium">Comunidad de usuarios</span>
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
                <span className="font-medium">Entrenador personal</span>
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

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas?</h2>
        <p className="text-muted-foreground mb-6">
          Estamos aquí para ayudarte. Contáctanos si necesitas más información sobre nuestros planes.
        </p>
        <Link href="/contacto">
          <Button variant="outline" className="shadow-md">
            Contactar con soporte
          </Button>
        </Link>
      </div>
    </div>
  )
}
