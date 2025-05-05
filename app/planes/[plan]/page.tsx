"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, CreditCard } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function PlanDetailPage({ params }: { params: { plan: string } }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (params.plan === "gratuito") {
      router.push("/registro")
    }
  }, [params.plan, router])

  const planInfo = {
    gratuito: {
      name: "Plan Gratuito",
      price: "$0",
      description: "Para comenzar tu viaje fitness",
      features: ["Rutinas básicas limitadas", "Seguimiento básico", "Acceso a la comunidad"],
    },
    basico: {
      name: "Plan Básico",
      price: "$9.99",
      description: "Ideal para principiantes",
      features: ["Rutinas básicas", "Seguimiento de progreso", "Comunidad de usuarios"],
    },
    premium: {
      name: "Plan Premium",
      price: "$19.99",
      description: "Para quienes buscan resultados",
      features: [
        "Rutinas personalizadas",
        "Seguimiento de progreso",
        "Comunidad de usuarios",
        "Planes de nutrición",
        "Acceso a entrenadores",
      ],
    },
    elite: {
      name: "Plan Elite",
      price: "$29.99",
      description: "La experiencia completa",
      features: [
        "Rutinas personalizadas",
        "Seguimiento de progreso",
        "Comunidad de usuarios",
        "Planes de nutrición",
        "Acceso a entrenadores",
        "Entrenador personal",
      ],
    },
  }

  const plan = planInfo[params.plan as keyof typeof planInfo] || planInfo.basico

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulación de procesamiento de pago
    setTimeout(() => {
      setIsLoading(false)
      router.push("/registro")
    }, 1500)
  }

  if (params.plan === "gratuito") {
    return (
      <div className="container py-10 flex items-center justify-center">
        <p>Redirigiendo al registro...</p>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Link href="/planes" className="flex items-center text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Volver a planes
      </Link>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">{plan.name}</h1>
          <p className="text-muted-foreground mb-6">{plan.description}</p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Incluye</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalles de la suscripción</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Precio mensual</span>
                  <span className="font-bold">{plan.price}/mes</span>
                </div>
                <div className="flex justify-between">
                  <span>Facturación</span>
                  <span>Mensual</span>
                </div>
                <div className="flex justify-between">
                  <span>Cancelación</span>
                  <span>En cualquier momento</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Completa tu suscripción</CardTitle>
              <CardDescription>Introduce tus datos de pago</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Nombre en la tarjeta</Label>
                    <Input id="name" placeholder="Nombre completo" required />
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="card">Número de tarjeta</Label>
                    <div className="relative">
                      <Input id="card" placeholder="1234 5678 9012 3456" required />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="expiry">Fecha de expiración</Label>
                      <Input id="expiry" placeholder="MM/AA" required />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <Label>Método de pago</Label>
                    <RadioGroup defaultValue="credit" className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                        <RadioGroupItem value="credit" id="credit" className="sr-only" />
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
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        <Label htmlFor="credit" className="text-xs">
                          Tarjeta de crédito
                        </Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                        <RadioGroupItem value="debit" id="debit" className="sr-only" />
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
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <line x1="2" x2="22" y1="10" y2="10" />
                        </svg>
                        <Label htmlFor="debit" className="text-xs">
                          Tarjeta de débito
                        </Label>
                      </div>
                      <div className="flex flex-col items-center space-y-2 border rounded-md p-4">
                        <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
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
                          <path d="M7 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                          <path d="M17 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                          <path d="M7 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                        </svg>
                        <Label htmlFor="paypal" className="text-xs">
                          PayPal
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>{plan.price}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Impuestos</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{plan.price}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full mt-6 gradient-primary" disabled={isLoading}>
                  {isLoading ? "Procesando..." : "Confirmar suscripción"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
              <p>
                Al confirmar, aceptas nuestros{" "}
                <Link href="/terminos" className="text-primary hover:underline">
                  términos y condiciones
                </Link>{" "}
                y{" "}
                <Link href="/privacidad" className="text-primary hover:underline">
                  política de privacidad
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
