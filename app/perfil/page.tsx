"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit, Save, Calendar, Activity, Trophy, Clock, Dumbbell, Check } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function PerfilPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileData, setProfileData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    genero: "",
    altura: "",
    peso: "",
    objetivo: "",
    bio: "",
  })

  // Datos simulados para la página de perfil
  const [stats] = useState({
    entrenamientos: 24,
    calorias: 12500,
    minutos: 840,
    diasConsecutivos: 5,
  })

  const [progreso] = useState({
    peso: { inicial: 82, actual: 78.5, objetivo: 75 },
    grasa: { inicial: 22, actual: 18, objetivo: 15 },
    musculo: { inicial: 35, actual: 38, objetivo: 40 },
  })

  const [logros] = useState([
    { id: 1, nombre: "Primera semana", descripcion: "Completar 7 días de entrenamiento", completado: true },
    { id: 2, nombre: "Quema calorías", descripcion: "Quemar 10,000 calorías", completado: true },
    { id: 3, nombre: "Constancia", descripcion: "Entrenar 5 días consecutivos", completado: true },
    { id: 4, nombre: "Fuerza", descripcion: "Completar 10 entrenamientos de fuerza", completado: false },
    { id: 5, nombre: "Madrugador", descripcion: "Entrenar antes de las 8 AM", completado: false },
  ])

  const [actividades] = useState([
    {
      fecha: "2023-05-01",
      tipo: "Entrenamiento de fuerza",
      duracion: 45,
      calorias: 320,
    },
    {
      fecha: "2023-05-03",
      tipo: "Cardio - HIIT",
      duracion: 30,
      calorias: 280,
    },
    {
      fecha: "2023-05-04",
      tipo: "Yoga",
      duracion: 60,
      calorias: 180,
    },
    {
      fecha: "2023-05-06",
      tipo: "Entrenamiento de piernas",
      duracion: 50,
      calorias: 350,
    },
    {
      fecha: "2023-05-08",
      tipo: "Natación",
      duracion: 40,
      calorias: 310,
    },
  ])

  // Cargar datos del usuario cuando el componente se monta
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }

    if (user) {
      // En una aplicación real, aquí cargaríamos los datos completos del perfil desde la API
      const [firstName, ...lastNameParts] = user.name.split(" ")
      setProfileData({
        nombre: firstName || "",
        apellido: lastNameParts.join(" ") || "",
        email: user.email || "",
        telefono: "+34 612 345 678",
        fechaNacimiento: "1990-05-15",
        genero: "Masculino",
        altura: "175",
        peso: "78.5",
        objetivo: "Perder peso",
        bio: "Apasionado del fitness y la vida saludable. Buscando mejorar cada día y alcanzar mis objetivos.",
      })
    }
  }, [user, isAuthenticated, isLoading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    setIsSaving(true)

    // Simulación de guardado
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
      toast({
        title: "Perfil actualizado",
        description: "Tus cambios han sido guardados correctamente.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      })
    }, 1000)
  }

  // Calcular porcentaje de progreso para cada métrica
  const calcularPorcentaje = (inicial: number, actual: number, objetivo: number) => {
    if (objetivo > inicial) {
      // Para métricas donde queremos aumentar (como músculo)
      return Math.min(100, Math.max(0, ((actual - inicial) / (objetivo - inicial)) * 100))
    } else {
      // Para métricas donde queremos disminuir (como peso o grasa)
      return Math.min(100, Math.max(0, ((inicial - actual) / (inicial - objetivo)) * 100))
    }
  }

  const pesoPorcentaje = calcularPorcentaje(progreso.peso.inicial, progreso.peso.actual, progreso.peso.objetivo)
  const grasaPorcentaje = calcularPorcentaje(progreso.grasa.inicial, progreso.grasa.actual, progreso.grasa.objetivo)
  const musculoPorcentaje = calcularPorcentaje(
    progreso.musculo.inicial,
    progreso.musculo.actual,
    progreso.musculo.objetivo,
  )

  if (isLoading) {
    return (
      <div className="container py-10 flex justify-center items-center min-h-[60vh]">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Columna izquierda - Información del perfil */}
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <CardHeader className="relative pb-0">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 relative">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Foto de perfil"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md">
                      <Camera className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <CardTitle className="text-2xl text-center">
                  {profileData.nombre} {profileData.apellido}
                </CardTitle>
                <CardDescription className="text-center">{profileData.email}</CardDescription>
                <div className="mt-2 flex gap-2">
                  <Badge variant="outline" className="bg-primary/10">
                    Plan Premium
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/10">
                    Nivel Intermedio
                  </Badge>
                </div>
              </div>
              {!isEditing && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setIsEditing(true)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Teléfono</p>
                    <p className="font-medium">{profileData.telefono}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Fecha de nacimiento</p>
                    <p className="font-medium">{profileData.fechaNacimiento}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Género</p>
                    <p className="font-medium">{profileData.genero}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Altura</p>
                    <p className="font-medium">{profileData.altura} cm</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Peso actual</p>
                    <p className="font-medium">{profileData.peso} kg</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Objetivo</p>
                    <p className="font-medium">{profileData.objetivo}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Sobre mí</h3>
                  <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-2xl font-bold">{stats.entrenamientos}</p>
                      <p className="text-xs text-muted-foreground">Entrenamientos</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <Activity className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-2xl font-bold">{stats.calorias}</p>
                      <p className="text-xs text-muted-foreground">Calorías</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-2xl font-bold">{stats.minutos}</p>
                      <p className="text-xs text-muted-foreground">Minutos</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5">
                    <CardContent className="p-4 text-center">
                      <Trophy className="h-5 w-5 mx-auto mb-1 text-primary" />
                      <p className="text-2xl font-bold">{stats.diasConsecutivos}</p>
                      <p className="text-xs text-muted-foreground">Días consecutivos</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Columna derecha - Tabs con contenido */}
        <div className="w-full md:w-2/3">
          <Tabs defaultValue={isEditing ? "editar" : "progreso"} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="progreso" disabled={isEditing}>
                Progreso
              </TabsTrigger>
              <TabsTrigger value="actividad" disabled={isEditing}>
                Actividad
              </TabsTrigger>
              <TabsTrigger value="logros" disabled={isEditing}>
                Logros
              </TabsTrigger>
              <TabsTrigger value="editar" disabled={isEditing && !isEditing}>
                Editar Perfil
              </TabsTrigger>
            </TabsList>

            <TabsContent value="progreso">
              <Card>
                <CardHeader>
                  <CardTitle>Tu progreso</CardTitle>
                  <CardDescription>Seguimiento de tus métricas principales</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-medium">Peso</h3>
                          <p className="text-sm text-muted-foreground">
                            Inicial: {progreso.peso.inicial} kg • Objetivo: {progreso.peso.objetivo} kg
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">{progreso.peso.actual} kg</span>
                          <p className="text-sm text-success">
                            -{(progreso.peso.inicial - progreso.peso.actual).toFixed(1)} kg
                          </p>
                        </div>
                      </div>
                      <Progress value={pesoPorcentaje} className="h-2" />
                      <p className="text-xs text-right mt-1 text-muted-foreground">
                        {Math.round(pesoPorcentaje)}% completado
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-medium">% Grasa corporal</h3>
                          <p className="text-sm text-muted-foreground">
                            Inicial: {progreso.grasa.inicial}% • Objetivo: {progreso.grasa.objetivo}%
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">{progreso.grasa.actual}%</span>
                          <p className="text-sm text-success">
                            -{(progreso.grasa.inicial - progreso.grasa.actual).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <Progress value={grasaPorcentaje} className="h-2" />
                      <p className="text-xs text-right mt-1 text-muted-foreground">
                        {Math.round(grasaPorcentaje)}% completado
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div>
                          <h3 className="font-medium">% Masa muscular</h3>
                          <p className="text-sm text-muted-foreground">
                            Inicial: {progreso.musculo.inicial}% • Objetivo: {progreso.musculo.objetivo}%
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">{progreso.musculo.actual}%</span>
                          <p className="text-sm text-success">
                            +{(progreso.musculo.actual - progreso.musculo.inicial).toFixed(1)}%
                          </p>
                        </div>
                      </div>
                      <Progress value={musculoPorcentaje} className="h-2" />
                      <p className="text-xs text-right mt-1 text-muted-foreground">
                        {Math.round(musculoPorcentaje)}% completado
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Historial de peso</CardTitle>
                      </CardHeader>
                      <CardContent className="h-[200px] flex items-center justify-center">
                        <Activity className="h-16 w-16 text-muted-foreground opacity-50" />
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Composición corporal</CardTitle>
                      </CardHeader>
                      <CardContent className="h-[200px] flex items-center justify-center">
                        <Activity className="h-16 w-16 text-muted-foreground opacity-50" />
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actividad">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de actividad</CardTitle>
                  <CardDescription>Tus entrenamientos recientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {actividades.map((actividad, index) => (
                      <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Dumbbell className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{actividad.tipo}</h3>
                            <span className="text-sm text-muted-foreground">{actividad.fecha}</span>
                          </div>
                          <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" /> {actividad.duracion} min
                            </span>
                            <span className="flex items-center">
                              <Activity className="h-4 w-4 mr-1" /> {actividad.calorias} kcal
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="logros">
              <Card>
                <CardHeader>
                  <CardTitle>Tus logros</CardTitle>
                  <CardDescription>Desafíos completados y en progreso</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {logros.map((logro) => (
                      <div
                        key={logro.id}
                        className={`flex items-center gap-4 p-4 rounded-lg border ${
                          logro.completado ? "bg-success/5 border-success/20" : "bg-muted/20"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-full ${
                            logro.completado ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {logro.completado ? <Check className="h-5 w-5" /> : <Trophy className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{logro.nombre}</h3>
                          <p className="text-sm text-muted-foreground">{logro.descripcion}</p>
                        </div>
                        {logro.completado && (
                          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                            Completado
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="editar">
              <Card>
                <CardHeader>
                  <CardTitle>Editar perfil</CardTitle>
                  <CardDescription>Actualiza tu información personal</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" name="nombre" value={profileData.nombre} onChange={handleInputChange} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input
                          id="apellido"
                          name="apellido"
                          value={profileData.apellido}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          value={profileData.telefono}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                        <Input
                          id="fechaNacimiento"
                          name="fechaNacimiento"
                          type="date"
                          value={profileData.fechaNacimiento}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="genero">Género</Label>
                        <Select
                          value={profileData.genero}
                          onValueChange={(value) => handleSelectChange("genero", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu género" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Masculino">Masculino</SelectItem>
                            <SelectItem value="Femenino">Femenino</SelectItem>
                            <SelectItem value="No binario">No binario</SelectItem>
                            <SelectItem value="Prefiero no decirlo">Prefiero no decirlo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="altura">Altura (cm)</Label>
                        <Input
                          id="altura"
                          name="altura"
                          type="number"
                          value={profileData.altura}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="peso">Peso actual (kg)</Label>
                        <Input
                          id="peso"
                          name="peso"
                          type="number"
                          step="0.1"
                          value={profileData.peso}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="objetivo">Objetivo principal</Label>
                        <Select
                          value={profileData.objetivo}
                          onValueChange={(value) => handleSelectChange("objetivo", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona tu objetivo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Perder peso">Perder peso</SelectItem>
                            <SelectItem value="Ganar músculo">Ganar músculo</SelectItem>
                            <SelectItem value="Mejorar resistencia">Mejorar resistencia</SelectItem>
                            <SelectItem value="Mantener forma física">Mantener forma física</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Sobre mí</Label>
                      <Textarea id="bio" name="bio" value={profileData.bio} onChange={handleInputChange} rows={4} />
                    </div>

                    <div className="flex justify-end gap-4">
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSaveProfile} disabled={isSaving} className="gradient-primary">
                        {isSaving ? "Guardando..." : "Guardar cambios"}
                        {!isSaving && <Save className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
