"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Dumbbell, Check } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function RegistroPage() {
  const { register } = useAuth()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    edad: "",
    genero: "masculino",
    objetivo: "perder-peso",
    nivel: "principiante",
    frecuencia: "3-4",
    ejercicios: [],
    lugar: "gimnasio",
    plan: "premium",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      setIsLoading(true)

      // Registrar usuario
      register(formData).catch((error) => {
        console.error("Error al registrar:", error)
        setIsLoading(false)
      })
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl mb-6">
            <Dumbbell className="h-6 w-6 text-secondary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">FitPro</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Comienza tu transformación</h1>
          <p className="text-muted-foreground">Completa tu perfil para personalizar tu experiencia</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between relative">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= i
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground border border-muted-foreground/30"
                  }`}
                >
                  {step > i ? <Check className="h-5 w-5" /> : i}
                </div>
                <span className="text-sm mt-2 text-muted-foreground">
                  {i === 1 ? "Información" : i === 2 ? "Objetivos" : i === 3 ? "Preferencias" : "Finalizar"}
                </span>
              </div>
            ))}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-muted -z-0"></div>
            <div
              className="absolute top-5 left-0 h-[2px] bg-primary -z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Información personal</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" value={formData.nombre} onChange={handleInputChange} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input
                        id="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ejemplo@correo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" value={formData.password} onChange={handleInputChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="edad">Edad</Label>
                      <Input
                        id="edad"
                        type="number"
                        placeholder="25"
                        value={formData.edad}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Género</Label>
                      <RadioGroup
                        defaultValue={formData.genero}
                        className="flex gap-4"
                        onValueChange={(value) => handleSelectChange("genero", value)}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="masculino" id="masculino" />
                          <Label htmlFor="masculino">Masculino</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="femenino" id="femenino" />
                          <Label htmlFor="femenino">Femenino</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Tus objetivos fitness</h2>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label>¿Cuál es tu objetivo principal?</Label>
                    <RadioGroup
                      defaultValue={formData.objetivo}
                      onValueChange={(value) => handleSelectChange("objetivo", value)}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Label
                          htmlFor="perder-peso"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="perder-peso" id="perder-peso" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Perder peso"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">Perder peso</span>
                        </Label>
                        <Label
                          htmlFor="ganar-musculo"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="ganar-musculo" id="ganar-musculo" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Ganar músculo"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">Ganar músculo</span>
                        </Label>
                        <Label
                          htmlFor="mejorar-resistencia"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="mejorar-resistencia" id="mejorar-resistencia" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Mejorar resistencia"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">Mejorar resistencia</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="nivel">Nivel de experiencia</Label>
                    <Select defaultValue={formData.nivel} onValueChange={(value) => handleSelectChange("nivel", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="principiante">Principiante</SelectItem>
                        <SelectItem value="intermedio">Intermedio</SelectItem>
                        <SelectItem value="avanzado">Avanzado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="frecuencia">¿Con qué frecuencia entrenas?</Label>
                    <Select
                      defaultValue={formData.frecuencia}
                      onValueChange={(value) => handleSelectChange("frecuencia", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona la frecuencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 veces por semana</SelectItem>
                        <SelectItem value="3-4">3-4 veces por semana</SelectItem>
                        <SelectItem value="5+">5 o más veces por semana</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Tus preferencias</h2>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label>¿Qué tipo de ejercicios prefieres?</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cardio" />
                        <Label htmlFor="cardio">Cardio</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="fuerza" defaultChecked />
                        <Label htmlFor="fuerza">Entrenamiento de fuerza</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="flexibilidad" />
                        <Label htmlFor="flexibilidad">Flexibilidad</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hiit" />
                        <Label htmlFor="hiit">HIIT</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="yoga" />
                        <Label htmlFor="yoga">Yoga</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pilates" />
                        <Label htmlFor="pilates">Pilates</Label>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>¿Dónde prefieres entrenar?</Label>
                    <RadioGroup
                      defaultValue={formData.lugar}
                      onValueChange={(value) => handleSelectChange("lugar", value)}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Label
                          htmlFor="gimnasio"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="gimnasio" id="gimnasio" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Gimnasio"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">Gimnasio</span>
                        </Label>
                        <Label
                          htmlFor="casa"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="casa" id="casa" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="En casa"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">En casa</span>
                        </Label>
                        <Label
                          htmlFor="exterior"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                        >
                          <RadioGroupItem value="exterior" id="exterior" className="sr-only" />
                          <Image
                            src="/placeholder.svg?height=50&width=50"
                            alt="Al aire libre"
                            width={50}
                            height={50}
                            className="mb-3"
                          />
                          <span className="text-center">Al aire libre</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Selecciona tu plan</h2>
                <div className="grid gap-6">
                  <RadioGroup defaultValue={formData.plan} onValueChange={(value) => handleSelectChange("plan", value)}>
                    <div className="grid gap-4">
                      <Label
                        htmlFor="gratuito"
                        className="flex items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem value="gratuito" id="gratuito" className="sr-only" />
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">Plan Gratuito</span>
                          <span className="text-muted-foreground">Acceso básico a rutinas y seguimiento</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold">$0</span>
                          <span className="text-muted-foreground">/mes</span>
                        </div>
                      </Label>
                      <Label
                        htmlFor="basico"
                        className="flex items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem value="basico" id="basico" className="sr-only" />
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">Plan Básico</span>
                          <span className="text-muted-foreground">Acceso a rutinas básicas y seguimiento</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold">$9.99</span>
                          <span className="text-muted-foreground">/mes</span>
                        </div>
                      </Label>
                      <Label
                        htmlFor="premium"
                        className="flex items-start justify-between rounded-md border-2 border-secondary bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary relative"
                      >
                        <div className="absolute -top-3 left-4 bg-secondary text-white px-2 py-0.5 rounded-md text-xs font-semibold">
                          Recomendado
                        </div>
                        <RadioGroupItem value="premium" id="premium" className="sr-only" />
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">Plan Premium</span>
                          <span className="text-muted-foreground">
                            Rutinas personalizadas, planes de nutrición y más
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-secondary">$19.99</span>
                          <span className="text-muted-foreground">/mes</span>
                        </div>
                      </Label>
                      <Label
                        htmlFor="elite"
                        className="flex items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer [&:has([data-state=checked])]:border-primary"
                      >
                        <RadioGroupItem value="elite" id="elite" className="sr-only" />
                        <div className="flex flex-col">
                          <span className="text-lg font-semibold">Plan Elite</span>
                          <span className="text-muted-foreground">
                            Todo lo del plan Premium más entrenador personal
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold">$29.99</span>
                          <span className="text-muted-foreground">/mes</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los{" "}
                      <Link href="/terminos" className="text-primary hover:underline">
                        términos y condiciones
                      </Link>{" "}
                      y la{" "}
                      <Link href="/privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </Link>
                    </Label>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between p-6 pt-0">
            <Button variant="outline" onClick={handleBack} disabled={step === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Atrás
            </Button>
            <Button
              onClick={handleNext}
              className={step === 4 ? "gradient-secondary" : "gradient-primary"}
              disabled={isLoading}
            >
              {isLoading ? (
                "Procesando..."
              ) : step < 4 ? (
                <>
                  Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                "Completar registro"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
