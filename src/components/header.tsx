"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/inscripcion-al-encuentro-nacional-2025", label: "Inscripción al Encuentro Nacional 2025" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/ministerios", label: "Ministerios" },
  { href: "/unete", label: "Únete" },
  { href: "/corazones", label: "Corazones" },
  { href: "/fe-en-accion", label: "FE en acción" },
]

const moreItems = [
  { href: "/oportunidades", label: "Oportunidades" },
  { href: "/blog",          label: "Blog" },
  { href: "/contacto",      label: "Contacto" },
  { href: "/eventos",       label: "Eventos" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 
                       backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center">
        {/* BOTÓN HAMBURGUESA MÓVIL (ahora al inicio) */}
        <div className="md:hidden mr-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="p-2 text-base hover:bg-transparent focus-visible:bg-transparent 
                           focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-2 py-1 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {moreItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="block px-2 py-1 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* LOGO */}
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.avif"
              alt="Fe Chile Logo"
              width={80}
              height={48}
              className="h-12 w-24"
            />
          </Link>
        </div>

        {/* MENÚ DE ESCRITORIO */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Más
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[200px] p-3">
                    {moreItems.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem.href}
                        asChild
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link
                          href={subItem.href}
                        >
                          {subItem.label}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* BOTÓN DONAR 
        <div className="flex items-center ml-auto">
          <Link href="/donar">
            <Button
              variant="default"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              DONAR
            </Button>
          </Link>
        </div>
        */}
      </div>
    </header>
  )
}
