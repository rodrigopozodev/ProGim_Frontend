import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dumbbell, Clock, ArrowLeft, Flame, Target } from "lucide-react"

export default function RutinasPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-primary mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Link>
        <h1 className="text-3xl font-bold">Rutinas Personalizadas</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          Nuestras rutinas están diseñadas por profesionales y adaptadas a tus objetivos, nivel de experiencia y
          preferencias. Selecciona una categoría para explorar las rutinas disponibles.
        </p>

        <Tabs defaultValue="fuerza" className="w-full mb-8">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="fuerza">Fuerza</TabsTrigger>
            <TabsTrigger value="cardio">Cardio</TabsTrigger>
            <TabsTrigger value="flexibilidad">Flexibilidad</TabsTrigger>
            <TabsTrigger value="hiit">HIIT</TabsTrigger>
          </TabsList>

          <TabsContent value="fuerza">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Fuerza - Tren Superior",
                  level: "Intermedio",
                  time: "45 min",
                  focus: "Pecho, Espalda, Brazos",
                },
                {
                  title: "Fuerza - Tren Inferior",
                  level: "Intermedio",
                  time: "50 min",
                  focus: "Piernas, Glúteos",
                },
                {
                  title: "Fuerza - Cuerpo Completo",
                  level: "Avanzado",
                  time: "60 min",
                  focus: "Full Body",
                },
                {
                  title: "Fuerza - Core",
                  level: "Principiante",
                  time: "30 min",
                  focus: "Abdomen, Lumbar",
                },
              ].map((routine, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader className="pb-3">
                    <CardTitle>{routine.title}</CardTitle>
                    <CardDescription>{routine.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Dumbbell className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.level}</span>
                      </div>
                    </div>
                    <Button className="w-full">Ver rutina</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cardio">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Cardio - Running",
                  level: "Todos los niveles",
                  time: "30 min",
                  focus: "Resistencia",
                },
                {
                  title: "Cardio - Ciclismo",
                  level: "Intermedio",
                  time: "45 min",
                  focus: "Resistencia, Piernas",
                },
                {
                  title: "Cardio - Natación",
                  level: "Intermedio",
                  time: "40 min",
                  focus: "Cuerpo completo",
                },
                {
                  title: "Cardio - Elíptica",
                  level: "Principiante",
                  time: "25 min",
                  focus: "Bajo impacto",
                },
              ].map((routine, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader className="pb-3">
                    <CardTitle>{routine.title}</CardTitle>
                    <CardDescription>{routine.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.level}</span>
                      </div>
                    </div>
                    <Button className="w-full">Ver rutina</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flexibilidad">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Yoga - Principiantes",
                  level: "Principiante",
                  time: "30 min",
                  focus: "Flexibilidad, Equilibrio",
                },
                {
                  title: "Estiramientos - Full Body",
                  level: "Todos los niveles",
                  time: "20 min",
                  focus: "Recuperación",
                },
                {
                  title: "Pilates - Core",
                  level: "Intermedio",
                  time: "40 min",
                  focus: "Fuerza, Flexibilidad",
                },
                {
                  title: "Yoga - Avanzado",
                  level: "Avanzado",
                  time: "60 min",
                  focus: "Flexibilidad, Fuerza",
                },
              ].map((routine, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader className="pb-3">
                    <CardTitle>{routine.title}</CardTitle>
                    <CardDescription>{routine.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.level}</span>
                      </div>
                    </div>
                    <Button className="w-full">Ver rutina</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hiit">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "HIIT - Quema grasa",
                  level: "Intermedio",
                  time: "25 min",
                  focus: "Cardio, Quema de grasa",
                },
                {
                  title: "HIIT - Tabata",
                  level: "Avanzado",
                  time: "20 min",
                  focus: "Intensidad máxima",
                },
                {
                  title: "HIIT - Principiantes",
                  level: "Principiante",
                  time: "15 min",
                  focus: "Introducción al HIIT",
                },
                {
                  title: "HIIT - Sin equipamiento",
                  level: "Todos los niveles",
                  time: "30 min",
                  focus: "Cuerpo completo",
                },
              ].map((routine, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader className="pb-3">
                    <CardTitle>{routine.title}</CardTitle>
                    <CardDescription>{routine.focus}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.time}</span>
                      </div>
                      <div className="flex items-center">
                        <Flame className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{routine.level}</span>
                      </div>
                    </div>
                    <Button className="w-full">Ver rutina</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Rutinas personalizadas para ti</h2>
          <p className="mb-4">
            Para obtener rutinas completamente personalizadas según tus objetivos, nivel de condición física y
            preferencias, actualiza a nuestro plan Premium.
          </p>
          <div className="flex gap-4">
            <Link href="/planes">
              <Button>Ver planes</Button>
            </Link>
            <Button variant="outline">Saber más</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
