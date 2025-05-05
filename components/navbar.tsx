"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Obtener las iniciales del nombre del usuario
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Dumbbell className="h-6 w-6 text-secondary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">FitPro</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "hover:text-primary"}`}
          >
            Inicio
          </Link>
          <Link
            href="/planes"
            className={`text-sm font-medium transition-colors ${
              isActive("/planes") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Planes
          </Link>
          <Link
            href="/contacto"
            className={`text-sm font-medium transition-colors ${
              isActive("/contacto") ? "text-primary" : "hover:text-primary"
            }`}
          >
            Contacto
          </Link>
          {isAuthenticated && (
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors ${
                pathname?.includes("/dashboard") ? "text-primary" : "hover:text-primary"
              }`}
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="ml-4 lg:ml-6">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.name ? getInitials(user.name) : "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/perfil">Mi perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/configuracion">Configuración</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive focus:text-destructive">
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button onClick={logout} className="gradient-primary shadow-md hover:shadow-lg transition-shadow">
                Cerrar Sesión
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button className="gradient-primary shadow-md hover:shadow-lg transition-shadow">Iniciar Sesión</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
