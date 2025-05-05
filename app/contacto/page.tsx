"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle,
} from "lucide-react"

// Esquema de validación para el formulario
const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un email válido" }),
  asunto: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres" }),
  mensaje: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  departamento: z.enum(["soporte", "ventas", "facturacion", "otro"], {
    required_error: "Por favor selecciona un departamento",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Configuración del formulario con React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      departamento: "soporte",
    },
  })

  // Manejar el envío del formulario
  function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    // Simulación de envío a servidor
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      toast({
        title: "Mensaje enviado",
        description: "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
        action: <ToastAction altText="Ok">Ok</ToastAction>,
      })

      form.reset()

      // Resetear el estado de éxito después de 5 segundos
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  // Preguntas frecuentes
  const faqs = [
    {
      pregunta: "¿Cómo puedo cancelar mi suscripción?",
      respuesta:
        "Puedes cancelar tu suscripción en cualquier momento desde la sección de 'Configuración > Suscripción'. La cancelación será efectiva al final del período de facturación actual.",
    },
    {
      pregunta: "¿Puedo cambiar de plan?",
      respuesta:
        "Sí, puedes cambiar entre los planes Básico, Premium y Elite en cualquier momento. Si cambias a un plan superior, se te cobrará la diferencia prorrateada. Si cambias a un plan inferior, el cambio será efectivo en tu próximo ciclo de facturación.",
    },
    {
      pregunta: "¿Cómo puedo recuperar mi contraseña?",
      respuesta:
        "En la página de inicio de sesión, haz clic en '¿Olvidaste tu contraseña?' y sigue las instrucciones para restablecerla. Recibirás un correo electrónico con un enlace para crear una nueva contraseña.",
    },
    {
      pregunta: "¿La aplicación funciona sin conexión a internet?",
      respuesta:
        "Algunas funciones básicas de la aplicación están disponibles sin conexión, como ver tus rutinas guardadas. Sin embargo, para sincronizar tu progreso, acceder a nuevos entrenamientos o utilizar funciones como el chat con entrenadores, necesitarás conexión a internet.",
    },
    {
      pregunta: "¿Puedo usar la aplicación en múltiples dispositivos?",
      respuesta:
        "Sí, puedes iniciar sesión en tu cuenta desde cualquier dispositivo compatible. Tus datos se sincronizarán automáticamente entre todos tus dispositivos.",
    },
  ]

  // Horarios de atención
  const horarios = [
    { dia: "Lunes a Viernes", horas: "9:00 - 20:00" },
    { dia: "Sábados", horas: "10:00 - 15:00" },
    { dia: "Domingos y Festivos", horas: "Cerrado" },
  ]

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacta con nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo para cualquier duda o sugerencia.
          </p>
        </div>

        <Tabs defaultValue="formulario" className="w-full mb-12">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="formulario">Formulario</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="info">Información</TabsTrigger>
          </TabsList>

          <TabsContent value="formulario">
            <div className="grid md:grid-cols-5 gap-8">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos lo antes posible.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground mb-6">
                        Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.
                      </p>
                      <Button onClick={() => setIsSuccess(false)}>Enviar otro mensaje</Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="nombre"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                  <Input placeholder="Tu nombre" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="tu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="departamento"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Departamento</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-wrap gap-4"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="soporte" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Soporte técnico</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="ventas" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Ventas</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="facturacion" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Facturación</FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="otro" />
                                    </FormControl>
                                    <FormLabel className="font-normal">Otro</FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="asunto"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Asunto</FormLabel>
                              <FormControl>
                                <Input placeholder="Asunto de tu mensaje" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mensaje"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Mensaje</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Escribe tu mensaje aquí..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full gradient-primary" disabled={isSubmitting}>
                          {isSubmitting ? (
                            "Enviando..."
                          ) : (
                            <>
                              Enviar mensaje
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>

              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:info@fitpro.com" className="text-sm text-primary hover:underline">
                          info@fitpro.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Teléfono</h3>
                        <a href="tel:+34123456789" className="text-sm text-primary hover:underline">
                          +34 123 456 789
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Dirección</h3>
                        <p className="text-sm text-muted-foreground">
                          Calle Fitness 123
                          <br />
                          28001 Madrid, España
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Horario de atención</h3>
                        <div className="text-sm text-muted-foreground">
                          {horarios.map((horario, index) => (
                            <div key={index} className="flex justify-between">
                              <span>{horario.dia}</span>
                              <span className="font-medium">{horario.horas}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Soporte en línea</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Iniciar chat en vivo
                    </Button>

                    <div className="pt-2">
                      <h3 className="text-sm font-medium mb-3">Síguenos en redes sociales</h3>
                      <div className="flex gap-3">
                        <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                          <Facebook className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                          <Instagram className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                          <Twitter className="h-5 w-5 text-primary" />
                        </Link>
                        <Link href="#" className="bg-primary/10 p-2 rounded-full hover:bg-primary/20 transition-colors">
                          <Youtube className="h-5 w-5 text-primary" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Preguntas frecuentes</CardTitle>
                <CardDescription>Encuentra respuestas a las preguntas más comunes sobre FitPro.</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.pregunta}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.respuesta}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <p className="text-center text-muted-foreground">
                    ¿No encuentras lo que buscas?
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-normal"
                      onClick={() =>
                        document.querySelector('[data-value="formulario"]')?.dispatchEvent(new MouseEvent("click"))
                      }
                    >
                      Contáctanos directamente
                    </Button>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="info">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Nuestra ubicación</CardTitle>
                  <CardDescription>Visítanos en nuestras oficinas centrales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden border mb-4">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mapa de ubicación"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <p className="text-sm">Calle Fitness 123, 28001 Madrid, España</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <p className="text-sm">Lunes a Viernes: 9:00 - 20:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información adicional</CardTitle>
                  <CardDescription>Otros recursos que pueden ser de tu interés</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <Link
                      href="/terminos"
                      className="flex items-center p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                          <path d="M9 9h1" />
                          <path d="M9 13h6" />
                          <path d="M9 17h6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Términos y condiciones</h3>
                        <p className="text-sm text-muted-foreground">Consulta nuestros términos de servicio</p>
                      </div>
                    </Link>

                    <Link
                      href="/privacidad"
                      className="flex items-center p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
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
                          className="h-5 w-5 text-primary"
                        >
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Política de privacidad</h3>
                        <p className="text-sm text-muted-foreground">Información sobre el uso de tus datos</p>
                      </div>
                    </Link>

                    <Link
                      href="/ayuda"
                      className="flex items-center p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
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
                          className="h-5 w-5 text-primary"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                          <path d="M12 17h.01" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Centro de ayuda</h3>
                        <p className="text-sm text-muted-foreground">Guías y tutoriales sobre la aplicación</p>
                      </div>
                    </Link>

                    <Link
                      href="/blog"
                      className="flex items-center p-3 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <div className="mr-4 bg-primary/10 p-2 rounded-full">
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
                          className="h-5 w-5 text-primary"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium">Blog de fitness</h3>
                        <p className="text-sm text-muted-foreground">Artículos y consejos sobre entrenamiento</p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para empezar tu transformación?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Únete a miles de personas que ya están alcanzando sus objetivos fitness con FitPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registro">
              <Button size="lg" className="gradient-secondary shadow-lg font-bold">
                Comenzar ahora
              </Button>
            </Link>
            <Link href="/planes">
              <Button size="lg" variant="outline">
                Ver planes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
