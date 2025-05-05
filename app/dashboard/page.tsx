"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Calendar, Dumbbell, LineChart, Trophy, Users, Utensils, Clock, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  const [progress, setProgress] = useState(68)

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">¡Bienvenido de nuevo, Carlos!</h1>
          <p className="text-muted-foreground">Continúa con tu progreso y alcanza tus metas fitness.</p>
        </div>
        <Button className="gradient-primary">Iniciar entrenamiento</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Progreso semanal</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{progress}%</div>
            <Progress value={progress} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+5.2% desde la semana pasada</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Calorías quemadas</CardTitle>
            <Utensils className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-muted-foreground mt-2">Objetivo diario: 1,500</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Entrenamientos</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-2">Este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Retos completados</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">+1 desde el mes pasado</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="rutinas" className="mb-8">
        <TabsList className="grid grid-cols-3 md:w-[400px] mb-6">
          <TabsTrigger value="rutinas">Rutinas</TabsTrigger>
          <TabsTrigger value="nutricion">Nutrición</TabsTrigger>
          <TabsTrigger value="progreso">Progreso</TabsTrigger>
        </TabsList>
        <TabsContent value="rutinas">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-scale">
              <CardHeader className="pb-3">
                <CardTitle>Entrenamiento de hoy</CardTitle>
                <CardDescription>Fuerza - Tren superior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">45 min</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Intermedio</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm">• Press de banca - 4 series x 10 reps</li>
                  <li className="text-sm">• Dominadas - 3 series x 8 reps</li>
                  <li className="text-sm">• Remo con mancuerna - 3 series x 12 reps</li>
                  <li className="text-sm">• Curl de bíceps - 3 series x 12 reps</li>
                </ul>
                <Button className="w-full">Comenzar</Button>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader className="pb-3">
                <CardTitle>Próximo entrenamiento</CardTitle>
                <CardDescription>Cardio - HIIT</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">30 min</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Mañana</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm">• Sprints - 10 x 30 seg</li>
                  <li className="text-sm">• Burpees - 5 x 10 reps</li>
                  <li className="text-sm">• Mountain climbers - 5 x 30 seg</li>
                  <li className="text-sm">• Jumping jacks - 5 x 30 seg</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Ver detalles
                </Button>
              </CardContent>
            </Card>
            <Card className="hover-scale">
              <CardHeader className="pb-3">
                <CardTitle>Rutina recomendada</CardTitle>
                <CardDescription>Fuerza - Piernas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">50 min</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Intermedio</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm">• Sentadillas - 4 series x 12 reps</li>
                  <li className="text-sm">• Peso muerto - 4 series x 10 reps</li>
                  <li className="text-sm">• Prensa de piernas - 3 series x 15 reps</li>
                  <li className="text-sm">• Elevaciones de gemelos - 3 series x 20 reps</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Añadir a mi plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="nutricion">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Plan de alimentación</CardTitle>
                <CardDescription>Tu plan personalizado para hoy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3">
                    <div className="font-medium mb-1 flex items-center">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded mr-2">Desayuno</span>
                      8:00 AM
                    </div>
                    <p className="text-sm">Batido de proteínas con plátano y avena</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span className="mr-3">420 kcal</span>
                      <span className="mr-3">30g proteína</span>
                      <span>45g carbohidratos</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="font-medium mb-1 flex items-center">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded mr-2">Almuerzo</span>
                      1:00 PM
                    </div>
                    <p className="text-sm">Pechuga de pollo con arroz integral y verduras</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span className="mr-3">550 kcal</span>
                      <span className="mr-3">40g proteína</span>
                      <span>60g carbohidratos</span>
                    </div>
                  </div>
                  <div className="border rounded-lg p-3">
                    <div className="font-medium mb-1 flex items-center">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded mr-2">Cena</span>
                      8:00 PM
                    </div>
                    <p className="text-sm">Salmón con ensalada y batata asada</p>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <span className="mr-3">480 kcal</span>
                      <span className="mr-3">35g proteína</span>
                      <span>30g carbohidratos</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/nutricion">
                    <Button variant="outline" size="sm" className="w-full">
                      Ver plan completo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Consumo de agua</CardTitle>
                <CardDescription>Mantente hidratado durante el día</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold">1.2L / 2.5L</div>
                    <p className="text-sm text-muted-foreground">48% de tu objetivo diario</p>
                  </div>
                  <div className="h-20 w-20 rounded-full border-8 border-primary/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold">48%</span>
                    </div>
                  </div>
                </div>
                <Progress value={48} className="h-2 mb-6" />
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <Button key={i} variant={i <= 5 ? "default" : "outline"} size="icon" className="h-12 w-full">
                      <span className="sr-only">Vaso {i}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M17.2 22H6.8a2 2 0 0 1-1.98-1.7L3 8h18l-1.82 12.3A2 2 0 0 1 17.2 22Z" />
                        <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                      </svg>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="progreso">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Progreso de peso</CardTitle>
                <CardDescription>Últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-b mb-4">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-4 text-muted-foreground">Gráfico de progreso</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium">Peso inicial</div>
                    <div className="text-2xl font-bold">82 kg</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Peso actual</div>
                    <div className="text-2xl font-bold">78.5 kg</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Diferencia</div>
                    <div className="text-2xl font-bold text-success">-3.5 kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Medidas corporales</CardTitle>
                <CardDescription>Actualizado hace 3 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Pecho</span>
                      <span className="text-sm text-muted-foreground">100 cm (-2 cm)</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Cintura</span>
                      <span className="text-sm text-muted-foreground">85 cm (-4 cm)</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Cadera</span>
                      <span className="text-sm text-muted-foreground">98 cm (-2 cm)</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Brazos</span>
                      <span className="text-sm text-muted-foreground">36 cm (+1 cm)</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Piernas</span>
                      <span className="text-sm text-muted-foreground">58 cm (+2 cm)</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm" className="w-full">
                    Actualizar medidas
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Próximas clases</CardTitle>
            <CardDescription>Clases reservadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Yoga para principiantes</h4>
                  <p className="text-sm text-muted-foreground">Mañana, 10:00 AM</p>
                  <div className="flex items-center mt-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Spinning</h4>
                  <p className="text-sm text-muted-foreground">Jueves, 6:00 PM</p>
                  <div className="flex items-center mt-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/clases">
                <Button variant="outline" size="sm" className="w-full">
                  Ver todas las clases
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Retos activos</CardTitle>
            <CardDescription>Completa retos para ganar recompensas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Reto de 10.000 pasos</h4>
                    <p className="text-sm text-muted-foreground">5 días consecutivos</p>
                  </div>
                  <div className="bg-secondary/10 p-1 rounded">
                    <Trophy className="h-4 w-4 text-secondary" />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progreso</span>
                    <span>3/5 días</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
              <div className="border rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">Reto de proteínas</h4>
                    <p className="text-sm text-muted-foreground">Consume 120g diarios</p>
                  </div>
                  <div className="bg-secondary/10 p-1 rounded">
                    <Trophy className="h-4 w-4 text-secondary" />
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progreso</span>
                    <span>90/120g</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/retos">
                <Button variant="outline" size="sm" className="w-full">
                  Ver todos los retos
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Entrenadores</CardTitle>
            <CardDescription>Tus entrenadores asignados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Entrenador"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">Ana García</h4>
                  <p className="text-sm text-muted-foreground">Entrenadora principal</p>
                  <div className="flex items-center mt-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                      Enviar mensaje
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Entrenador"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-medium">Javier Martínez</h4>
                  <p className="text-sm text-muted-foreground">Nutricionista</p>
                  <div className="flex items-center mt-1">
                    <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                      Enviar mensaje
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/entrenadores">
                <Button variant="outline" size="sm" className="w-full">
                  Ver todos los entrenadores
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
