"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Simular verificación de autenticación al cargar la página
  useEffect(() => {
    const checkAuth = () => {
      // En una aplicación real, verificaríamos con el backend o JWT
      const storedUser = localStorage.getItem("fitpro_user")

      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }

      setIsLoading(false)
    }

    checkAuth()
  }, [])

  // Redirigir a páginas protegidas o públicas según el estado de autenticación
  useEffect(() => {
    if (!isLoading) {
      // Si el usuario está en el dashboard o una ruta protegida pero no está autenticado
      if (pathname?.includes("/dashboard") && !user) {
        router.push("/login")
      }
    }
  }, [isLoading, user, pathname, router])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    try {
      // Simulación de login (en una app real, esto sería una llamada a la API)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Usuario de prueba
      const mockUser = {
        id: "1",
        name: "Carlos Rodríguez",
        email: email,
      }

      // Guardar en localStorage para persistencia
      localStorage.setItem("fitpro_user", JSON.stringify(mockUser))
      setUser(mockUser)

      router.push("/dashboard")
    } catch (error) {
      console.error("Error al iniciar sesión:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData: any) => {
    setIsLoading(true)

    try {
      // Simulación de registro (en una app real, esto sería una llamada a la API)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Usuario registrado
      const newUser = {
        id: Math.random().toString(36).substr(2, 9),
        name: `${userData.nombre} ${userData.apellido || ""}`,
        email: userData.email,
      }

      // Guardar en localStorage para persistencia
      localStorage.setItem("fitpro_user", JSON.stringify(newUser))
      setUser(newUser)

      router.push("/dashboard")
    } catch (error) {
      console.error("Error al registrar:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Eliminar datos de usuario
    localStorage.removeItem("fitpro_user")
    setUser(null)

    // Redirigir a la página de inicio
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}
