"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dumbbell, Menu } from "lucide-react"
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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/planes", label: "Planes" },
    { href: "/contacto", label: "Contacto" },
  ]

  // Si el usuario está autenticado, añadir el enlace al dashboard
  if (isAuthenticated) {
    navLinks.push({ href: "/dashboard", label: "Dashboard" })
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mr-4">
            <Dumbbell className="h-6 w-6 text-secondary" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">FitPro</span>
          </Link>

          {/* Navegación para pantallas medianas y grandes */}
          <nav className="hidden md:flex gap-6 ml-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) || (link.href === "/dashboard" && pathname?.includes("/dashboard"))
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Botón de inicio/cierre de sesión para pantallas medianas y grandes */}
          <div className="hidden md:block">
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

          {/* Menú móvil */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <SheetHeader className="mb-6">
                <SheetTitle className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-secondary" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    FitPro
                  </span>
                </SheetTitle>
              </SheetHeader>

              {isAuthenticated && (
                <div className="flex items-center gap-3 mb-6 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user?.name ? getInitials(user.name) : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{user?.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{user?.email}</p>
                  </div>
                </div>
              )}

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-base py-2 px-4 rounded-md transition-colors ${
                        isActive(link.href) || (link.href === "/dashboard" && pathname?.includes("/dashboard"))
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                {isAuthenticated && (
                  <>
                    <SheetClose asChild>
                      <Link
                        href="/perfil"
                        className={`text-base py-2 px-4 rounded-md transition-colors ${
                          pathname === "/perfil" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
                        }`}
                      >
                        Mi perfil
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/configuracion"
                        className={`text-base py-2 px-4 rounded-md transition-colors ${
                          pathname === "/configuracion" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
                        }`}
                      >
                        Configuración
                      </Link>
                    </SheetClose>
                  </>
                )}
              </nav>

              <div className="mt-8 pt-8 border-t">
                {isAuthenticated ? (
                  <Button onClick={logout} className="w-full gradient-primary">
                    Cerrar Sesión
                  </Button>
                ) : (
                  <SheetClose asChild>
                    <Link href="/login" className="w-full block">
                      <Button className="w-full gradient-primary">Iniciar Sesión</Button>
                    </Link>
                  </SheetClose>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
