"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
  Bell,
  Lock,
  CreditCard,
  User,
  Settings,
  Moon,
  Sun,
  Languages,
  Smartphone,
  Save,
  LogOut,
  AlertTriangle,
} from "lucide-react"

export default function ConfiguracionPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)

  // Estados para las diferentes configuraciones
  const [notificaciones, setNotificaciones] = useState({
    recordatorios: true,
    actualizaciones: true,
    logros: true,
    mensajes: false,
    marketing: false,
  })

  const [privacidad, setPrivacidad] = useState({
    perfilPublico: false,
    mostrarEstadisticas: true,
    mostrarActividad: true,
    permitirMensajes: true,
  })

  const [apariencia, setApariencia] = useState({
    tema: "sistema",
    idioma: "es",
    tamanoFuente: "medio",
  })

  const [cuenta, setCuenta] = useState({
    email: "",
    passwordActual: "",
    passwordNueva: "",
    passwordConfirmar: "",
  })

  const [suscripcion, setSuscripcion] = useState({
    plan: "premium",
    renovacionAutomatica: true,
    metodoPago: "tarjeta",
  })

  // Verificar autenticación
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }

    if (user) {
      setCuenta((prev) => ({
        ...prev,
        email: user.email,
      }))
    }
  }, [user, isAuthenticated, isLoading, router])

  // Manejadores de cambios
  const handleNotificacionesChange = (key: string, checked: boolean) => {
    setNotificaciones((prev) => ({ ...prev, [key]: checked }))
  }

  const handlePrivacidadChange = (key: string, checked: boolean) => {
    setPrivacidad((prev) => ({ ...prev, [key]: checked }))
  }

  const handleAparienciaChange = (key: string, value: string) => {
    setApariencia((prev) => ({ ...prev, [key]: value }))
  }

  const handleCuentaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCuenta((prev) => ({ ...prev, [name]: value }))
  }

  const handleSuscripcionChange = (key: string, value: any) => {
    setSuscripcion((prev) => ({ ...prev, [key]: value }))
  }

  // Guardar cambios
  const handleSaveSettings = () => {
    setIsSaving(true)

    // Simulación de guardado
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Configuración guardada",
        description: "Tus preferencias han sido actualizadas correctamente.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      })
    }, 1000)
  }

  // Cambiar contraseña
  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Validar que las contraseñas coincidan
    if (cuenta.passwordNueva !== cuenta.passwordConfirmar) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      })
      setIsSaving(false)
      return
    }

    // Simulación de cambio de contraseña
    setTimeout(() => {
      setIsSaving(false)
      setCuenta((prev) => ({
        ...prev,
        passwordActual: "",
        passwordNueva: "",
        passwordConfirmar: "",
      }))
      toast({
        title: "Contraseña actualizada",
        description: "Tu contraseña ha sido cambiada correctamente.",
      })
    }, 1000)
  }

  // Cancelar suscripción
  const handleCancelSubscription = () => {
    toast({
      title: "Suscripción",
      description: "Para cancelar tu suscripción, por favor contacta con nuestro servicio de atención al cliente.",
    })
  }

  if (isLoading) {
    return (
      <div className="container py-10 flex justify-center items-center min-h-[60vh]">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Configuración</h1>
        <p className="text-muted-foreground mb-8">Gestiona tus preferencias y ajustes de cuenta</p>

        <Tabs defaultValue="notificaciones" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="notificaciones">
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notificaciones</span>
            </TabsTrigger>
            <TabsTrigger value="privacidad">
              <Lock className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Privacidad</span>
            </TabsTrigger>
            <TabsTrigger value="apariencia">
              <Settings className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Apariencia</span>
            </TabsTrigger>
            <TabsTrigger value="cuenta">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Cuenta</span>
            </TabsTrigger>
            <TabsTrigger value="suscripcion">
              <CreditCard className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Suscripción</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notificaciones">
            <Card>
              <CardHeader>
                <CardTitle>Notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="recordatorios">Recordatorios de entrenamiento</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe recordatorios para tus próximos entrenamientos
                      </p>
                    </div>
                    <Switch
                      id="recordatorios"
                      checked={notificaciones.recordatorios}
                      onCheckedChange={(checked) => handleNotificacionesChange("recordatorios", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="actualizaciones">Actualizaciones de la aplicación</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones sobre nuevas funciones y mejoras
                      </p>
                    </div>
                    <Switch
                      id="actualizaciones"
                      checked={notificaciones.actualizaciones}
                      onCheckedChange={(checked) => handleNotificacionesChange("actualizaciones", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="logros">Logros y recompensas</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones cuando completes un logro o recibas una recompensa
                      </p>
                    </div>
                    <Switch
                      id="logros"
                      checked={notificaciones.logros}
                      onCheckedChange={(checked) => handleNotificacionesChange("logros", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mensajes">Mensajes de entrenadores</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones cuando un entrenador te envíe un mensaje
                      </p>
                    </div>
                    <Switch
                      id="mensajes"
                      checked={notificaciones.mensajes}
                      onCheckedChange={(checked) => handleNotificacionesChange("mensajes", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing">Ofertas y promociones</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe información sobre ofertas especiales y promociones
                      </p>
                    </div>
                    <Switch
                      id="marketing"
                      checked={notificaciones.marketing}
                      onCheckedChange={(checked) => handleNotificacionesChange("marketing", checked)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveSettings} disabled={isSaving} className="gradient-primary">
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="privacidad">
            <Card>
              <CardHeader>
                <CardTitle>Privacidad y seguridad</CardTitle>
                <CardDescription>Controla quién puede ver tu información y cómo se utiliza</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="perfilPublico">Perfil público</Label>
                      <p className="text-sm text-muted-foreground">
                        Permite que otros usuarios vean tu perfil y progreso
                      </p>
                    </div>
                    <Switch
                      id="perfilPublico"
                      checked={privacidad.perfilPublico}
                      onCheckedChange={(checked) => handlePrivacidadChange("perfilPublico", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mostrarEstadisticas">Mostrar estadísticas</Label>
                      <p className="text-sm text-muted-foreground">
                        Permite que otros usuarios vean tus estadísticas de entrenamiento
                      </p>
                    </div>
                    <Switch
                      id="mostrarEstadisticas"
                      checked={privacidad.mostrarEstadisticas}
                      onCheckedChange={(checked) => handlePrivacidadChange("mostrarEstadisticas", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mostrarActividad">Mostrar actividad reciente</Label>
                      <p className="text-sm text-muted-foreground">
                        Permite que otros usuarios vean tu actividad reciente
                      </p>
                    </div>
                    <Switch
                      id="mostrarActividad"
                      checked={privacidad.mostrarActividad}
                      onCheckedChange={(checked) => handlePrivacidadChange("mostrarActividad", checked)}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="permitirMensajes">Permitir mensajes</Label>
                      <p className="text-sm text-muted-foreground">Permite que otros usuarios te envíen mensajes</p>
                    </div>
                    <Switch
                      id="permitirMensajes"
                      checked={privacidad.permitirMensajes}
                      onCheckedChange={(checked) => handlePrivacidadChange("permitirMensajes", checked)}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Datos y privacidad</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Lock className="mr-2 h-4 w-4" />
                      Descargar mis datos
                    </Button>
                    <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Eliminar mi cuenta
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveSettings} disabled={isSaving} className="gradient-primary">
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="apariencia">
            <Card>
              <CardHeader>
                <CardTitle>Apariencia y preferencias</CardTitle>
                <CardDescription>Personaliza la apariencia de la aplicación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tema">Tema</Label>
                    <Select value={apariencia.tema} onValueChange={(value) => handleAparienciaChange("tema", value)}>
                      <SelectTrigger id="tema">
                        <SelectValue placeholder="Selecciona un tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="claro">
                          <div className="flex items-center">
                            <Sun className="mr-2 h-4 w-4" />
                            Claro
                          </div>
                        </SelectItem>
                        <SelectItem value="oscuro">
                          <div className="flex items-center">
                            <Moon className="mr-2 h-4 w-4" />
                            Oscuro
                          </div>
                        </SelectItem>
                        <SelectItem value="sistema">
                          <div className="flex items-center">
                            <Settings className="mr-2 h-4 w-4" />
                            Usar configuración del sistema
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="idioma">Idioma</Label>
                    <Select
                      value={apariencia.idioma}
                      onValueChange={(value) => handleAparienciaChange("idioma", value)}
                    >
                      <SelectTrigger id="idioma">
                        <SelectValue placeholder="Selecciona un idioma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="es">
                          <div className="flex items-center">
                            <Languages className="mr-2 h-4 w-4" />
                            Español
                          </div>
                        </SelectItem>
                        <SelectItem value="en">
                          <div className="flex items-center">
                            <Languages className="mr-2 h-4 w-4" />
                            English
                          </div>
                        </SelectItem>
                        <SelectItem value="fr">
                          <div className="flex items-center">
                            <Languages className="mr-2 h-4 w-4" />
                            Français
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tamanoFuente">Tamaño de fuente</Label>
                    <Select
                      value={apariencia.tamanoFuente}
                      onValueChange={(value) => handleAparienciaChange("tamanoFuente", value)}
                    >
                      <SelectTrigger id="tamanoFuente">
                        <SelectValue placeholder="Selecciona un tamaño" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pequeno">Pequeño</SelectItem>
                        <SelectItem value="medio">Medio</SelectItem>
                        <SelectItem value="grande">Grande</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Sonidos y notificaciones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="sonidosApp">Sonidos de la aplicación</Label>
                        <p className="text-sm text-muted-foreground">Reproduce sonidos al completar acciones</p>
                      </div>
                      <Switch id="sonidosApp" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="vibracion">Vibración</Label>
                        <p className="text-sm text-muted-foreground">Vibra al recibir notificaciones</p>
                      </div>
                      <Switch id="vibracion" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveSettings} disabled={isSaving} className="gradient-primary">
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="cuenta">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de cuenta</CardTitle>
                <CardDescription>Gestiona tu cuenta y seguridad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email-cuenta">Email</Label>
                  <Input id="email-cuenta" name="email" value={cuenta.email} onChange={handleCuentaChange} disabled />
                  <p className="text-sm text-muted-foreground">Para cambiar tu email, contacta con soporte</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cambiar contraseña</h3>
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="passwordActual">Contraseña actual</Label>
                      <Input
                        id="passwordActual"
                        name="passwordActual"
                        type="password"
                        value={cuenta.passwordActual}
                        onChange={handleCuentaChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passwordNueva">Nueva contraseña</Label>
                      <Input
                        id="passwordNueva"
                        name="passwordNueva"
                        type="password"
                        value={cuenta.passwordNueva}
                        onChange={handleCuentaChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passwordConfirmar">Confirmar nueva contraseña</Label>
                      <Input
                        id="passwordConfirmar"
                        name="passwordConfirmar"
                        type="password"
                        value={cuenta.passwordConfirmar}
                        onChange={handleCuentaChange}
                      />
                    </div>
                    <Button type="submit" disabled={isSaving} className="w-full">
                      {isSaving ? "Actualizando..." : "Actualizar contraseña"}
                    </Button>
                  </form>
                </div>

                <Separator />

                <div className="pt-2">
                  <h3 className="text-lg font-medium mb-4">Sesiones</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <Smartphone className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium">Este dispositivo</p>
                          <p className="text-sm text-muted-foreground">Última actividad: Ahora</p>
                        </div>
                      </div>
                      <Badge>Activo</Badge>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-destructive hover:text-destructive"
                      onClick={logout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar sesión en todos los dispositivos
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suscripcion">
            <Card>
              <CardHeader>
                <CardTitle>Gestión de suscripción</CardTitle>
                <CardDescription>Administra tu plan y método de pago</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium">Plan Premium</h3>
                      <p className="text-sm text-muted-foreground">Facturación mensual</p>
                    </div>
                    <Badge className="bg-primary">Activo</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio</span>
                      <span className="font-medium">$19.99/mes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Próxima facturación</span>
                      <span className="font-medium">15/06/2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Método de pago</span>
                      <span className="font-medium">•••• 4242</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="renovacionAutomatica">Renovación automática</Label>
                      <p className="text-sm text-muted-foreground">
                        Renueva automáticamente tu suscripción al finalizar el período
                      </p>
                    </div>
                    <Switch
                      id="renovacionAutomatica"
                      checked={suscripcion.renovacionAutomatica}
                      onCheckedChange={(checked) => handleSuscripcionChange("renovacionAutomatica", checked)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metodoPago">Método de pago</Label>
                  <Select
                    value={suscripcion.metodoPago}
                    onValueChange={(value) => handleSuscripcionChange("metodoPago", value)}
                  >
                    <SelectTrigger id="metodoPago">
                      <SelectValue placeholder="Selecciona un método de pago" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tarjeta">Tarjeta de crédito •••• 4242</SelectItem>
                      <SelectItem value="paypal">PayPal</SelectItem>
                      <SelectItem value="nuevo">Añadir nuevo método de pago</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Ver historial de facturación
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-destructive hover:text-destructive"
                    onClick={handleCancelSubscription}
                  >
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Cancelar suscripción
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveSettings} disabled={isSaving} className="gradient-primary">
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                  {!isSaving && <Save className="ml-2 h-4 w-4" />}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
