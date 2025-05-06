import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Trophy, Calendar, Users, Target, Clock, CheckCircle, Lock } from "lucide-react"

export default function RetosPage() {
  // Datos de ejemplo para los retos
  const activeChallenge = [
    {
      title: "Reto de 10.000 pasos",
      description: "Completa 10.000 pasos diarios durante 5 días consecutivos",
      progress: 60,
      progressText: "3/5 días",
      image: "/placeholder.svg?height=200&width=400",
      reward: "200 puntos",
      participants: 1243,
      difficulty: "Medio",
      timeLeft: "2 días",
    },
    {
      title: "Reto de proteínas",
      description: "Consume al menos 120g de proteína diaria durante 7 días",
      progress: 75,
      progressText: "90/120g hoy",
      image: "/placeholder.svg?height=200&width=400",
      reward: "150 puntos",
      participants: 876,
      difficulty: "Fácil",
      timeLeft: "4 días",
    },
  ]

  const upcomingChallenges = [
    {
      title: "Reto de fuerza",
      description: "Completa 10 entrenamientos de fuerza en 30 días",
      image: "/placeholder.svg?height=200&width=400",
      reward: "300 puntos",
      startDate: "Comienza en 3 días",
      difficulty: "Difícil",
      duration: "30 días",
    },
    {
      title: "Reto de hidratación",
      description: "Bebe 2.5 litros de agua diarios durante 14 días",
      image: "/placeholder.svg?height=200&width=400",
      reward: "150 puntos",
      startDate: "Comienza en 5 días",
      difficulty: "Fácil",
      duration: "14 días",
    },
    {
      title: "Reto de madrugador",
      description: "Entrena antes de las 8 AM durante 7 días",
      image: "/placeholder.svg?height=200&width=400",
      reward: "250 puntos",
      startDate: "Comienza en 7 días",
      difficulty: "Medio",
      duration: "7 días",
    },
  ]

  const completedChallenges = [
    {
      title: "Reto de constancia",
      description: "Entrena 3 veces por semana durante 4 semanas",
      image: "/placeholder.svg?height=200&width=400",
      reward: "300 puntos",
      completedDate: "Completado hace 2 semanas",
      difficulty: "Medio",
    },
    {
      title: "Reto de cardio",
      description: "Completa 5 sesiones de cardio de 30 minutos",
      image: "/placeholder.svg?height=200&width=400",
      reward: "150 puntos",
      completedDate: "Completado hace 1 mes",
      difficulty: "Fácil",
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-primary mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Link>
        <h1 className="text-3xl font-bold">Retos y Recompensas</h1>
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          Mantente motivado con nuestros retos semanales y mensuales. Completa desafíos, gana puntos y canjéalos por
          recompensas exclusivas.
        </p>

        <Tabs defaultValue="activos" className="w-full mb-8">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="activos">Retos activos</TabsTrigger>
            <TabsTrigger value="proximos">Próximos retos</TabsTrigger>
            <TabsTrigger value="completados">Completados</TabsTrigger>
          </TabsList>

          <TabsContent value="activos">
            <div className="grid gap-6 md:grid-cols-2">
              {activeChallenge.map((challenge, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-secondary mb-2">{challenge.reward}</Badge>
                      <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progreso</span>
                        <span>{challenge.progressText}</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Users className="h-4 w-4 mb-1" />
                        <span>{challenge.participants} participantes</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Target className="h-4 w-4 mb-1" />
                        <span>Dificultad: {challenge.difficulty}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Clock className="h-4 w-4 mb-1" />
                        <span>Quedan: {challenge.timeLeft}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Ver detalles</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proximos">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingChallenges.map((challenge, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-secondary mb-2">{challenge.reward}</Badge>
                      <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                    <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Calendar className="h-4 w-4 mb-1" />
                        <span>{challenge.startDate}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Target className="h-4 w-4 mb-1" />
                        <span>Dificultad: {challenge.difficulty}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Clock className="h-4 w-4 mb-1" />
                        <span>Duración: {challenge.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Recordármelo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completados">
            <div className="grid gap-6 md:grid-cols-2">
              {completedChallenges.map((challenge, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={challenge.image || "/placeholder.svg"}
                      alt={challenge.title}
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-success/20 p-2 rounded-full">
                        <CheckCircle className="h-6 w-6 text-success" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-secondary mb-2">{challenge.reward}</Badge>
                      <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{challenge.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Calendar className="h-4 w-4 mb-1" />
                        <span>{challenge.completedDate}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 bg-muted/50 rounded">
                        <Target className="h-4 w-4 mb-1" />
                        <span>Dificultad: {challenge.difficulty}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver certificado
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Tus recompensas</CardTitle>
              <CardDescription>Puntos acumulados y premios disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="h-8 w-8 text-primary mx-auto mb-1" />
                    <span className="text-2xl font-bold">750</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">1 mes gratis de Premium</h4>
                      <p className="text-xs text-muted-foreground">1000 puntos</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" disabled>
                    <Lock className="h-3 w-3 mr-1" />
                    Canjear
                  </Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Camiseta FitPro</h4>
                      <p className="text-xs text-muted-foreground">500 puntos</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Canjear
                  </Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Botella de agua</h4>
                      <p className="text-xs text-muted-foreground">300 puntos</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Canjear
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retos exclusivos</CardTitle>
              <CardDescription>Desbloquea retos premium con recompensas especiales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=400"
                    alt="Reto premium"
                    width={400}
                    height={150}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <Lock className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Reto de transformación 30 días</h3>
                      <p className="text-sm">Disponible solo para usuarios Premium</p>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=400"
                    alt="Reto premium"
                    width={400}
                    height={150}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <Lock className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="font-bold mb-1">Reto de entrenador personal</h3>
                      <p className="text-sm">Disponible solo para usuarios Premium</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Actualiza a Premium para desbloquear retos exclusivos con recompensas especiales y seguimiento
                    personalizado.
                  </p>
                  <Link href="/planes">
                    <Button>Ver planes</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
