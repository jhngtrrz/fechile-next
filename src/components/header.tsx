"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/docs/components", label: "Components" },
    { href: "/blocks", label: "Blocks" },
    { href: "/charts", label: "Charts" },
    { href: "/themes", label: "Themes" },
    { href: "/colors", label: "Colors" },
]

export function Header() {
    const [open, setOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Image
                            src="/logo.avif"
                            alt="Fe Chile Logo"
                            width={80}
                            height={48}
                            className="h-12 w-24"
                        />
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
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
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex flex-1 items-center justify-end">
                    <nav className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle Theme</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

