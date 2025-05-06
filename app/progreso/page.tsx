import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, LineChart, Activity, Calendar, Target, TrendingUp, Scale, Ruler } from "lucide-react"

export default function ProgresoPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Link href="/" className="flex items-center text-primary mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Link>
        <h1 className="text-3xl font-bold">Seguimiento de Progreso</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-muted-foreground mb-8">
          Monitorea tus avances, establece objetivos y visualiza tu progreso a lo largo del tiempo. Nuestras
          herramientas de seguimiento te ayudarán a mantenerte motivado y en el camino correcto.
        </p>

        <Tabs defaultValue="metricas" className="w-full mb-8">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="metricas">Métricas</TabsTrigger>
            <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="metricas">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Peso y composición corporal</CardTitle>
                  <CardDescription>Seguimiento de tus métricas principales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Scale className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Peso</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">78.5 kg</span>
                        <span className="text-sm text-success ml-2">-3.5 kg</span>
                      </div>
                    </div>
                    <Progress value={70} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Inicial: 82 kg</span>
                      <span>Objetivo: 75 kg</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Activity className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">% Grasa corporal</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">18%</span>
                        <span className="text-sm text-success ml-2">-4%</span>
                      </div>
                    </div>
                    <Progress value={60} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Inicial: 22%</span>
                      <span>Objetivo: 15%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">% Masa muscular</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">38%</span>
                        <span className="text-sm text-success ml-2">+3%</span>
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Inicial: 35%</span>
                      <span>Objetivo: 40%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medidas corporales</CardTitle>
                  <CardDescription>Seguimiento de tus medidas principales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Pecho</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">100 cm</span>
                        <span className="text-sm text-success ml-2">-2 cm</span>
                      </div>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Cintura</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">85 cm</span>
                        <span className="text-sm text-success ml-2">-4 cm</span>
                      </div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Cadera</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">98 cm</span>
                        <span className="text-sm text-success ml-2">-2 cm</span>
                      </div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Brazos</span>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold">36 cm</span>
                        <span className="text-sm text-success ml-2">+1 cm</span>
                      </div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="objetivos">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos actuales</CardTitle>
                  <CardDescription>Tus metas a corto y medio plazo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">Perder peso</span>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">En progreso</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Perder 7 kg en 3 meses</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progreso</span>
                        <span>3.5/7 kg</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">Aumentar fuerza</span>
                      </div>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">En progreso</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Aumentar press de banca a 80 kg</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progreso</span>
                        <span>70/80 kg</span>
                      </div>
                      <Progress value={87.5} className="h-2" />
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 mr-2 text-primary" />
                        <span className="font-medium">Mejorar resistencia</span>
                      </div>
                      <span className="text-sm bg-success/10 text-success px-2 py-1 rounded">Completado</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Correr 5 km sin parar</p>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progreso</span>
                        <span>5/5 km</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Añadir nuevo objetivo</CardTitle>
                  <CardDescription>Establece nuevas metas para seguir progresando</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full">
                      <Target className="mr-2 h-4 w-4" />
                      Crear objetivo de peso
                    </Button>
                    <Button className="w-full">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Crear objetivo de fuerza
                    </Button>
                    <Button className="w-full">
                      <Activity className="mr-2 h-4 w-4" />
                      Crear objetivo de resistencia
                    </Button>
                    <Button className="w-full">
                      <Calendar className="mr-2 h-4 w-4" />
                      Crear objetivo de hábitos
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h3 className="font-medium mb-2">Consejos para establecer objetivos</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Establece objetivos específicos y medibles</li>
                      <li>• Define un plazo realista para alcanzarlos</li>
                      <li>• Divide objetivos grandes en metas más pequeñas</li>
                      <li>• Celebra tus logros, por pequeños que sean</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="historico">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de progreso</CardTitle>
                <CardDescription>Visualiza tu evolución a lo largo del tiempo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center border-b mb-6">
                  <LineChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-4 text-muted-foreground">Gráfico de progreso</span>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <Scale className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-2xl font-bold">-3.5 kg</p>
                        <p className="text-xs text-muted-foreground">Pérdida de peso</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <Activity className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-2xl font-bold">-4%</p>
                        <p className="text-xs text-muted-foreground">Grasa corporal</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <TrendingUp className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-2xl font-bold">+3%</p>
                        <p className="text-xs text-muted-foreground">Masa muscular</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4 text-center">
                        <Ruler className="h-5 w-5 mx-auto mb-1 text-primary" />
                        <p className="text-2xl font-bold">-4 cm</p>
                        <p className="text-xs text-muted-foreground">Cintura</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-center text-muted-foreground">
                      Para ver un análisis más detallado de tu progreso, actualiza a nuestro plan Premium.
                      <Link href="/planes" className="text-primary ml-1 hover:underline">
                        Ver planes
                      </Link>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Seguimiento avanzado</h2>
          <p className="mb-4">
            Desbloquea análisis detallados, informes personalizados y herramientas avanzadas de seguimiento con nuestro
            plan Premium.
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
