import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PreFooter() {
  return (
    <section className="w-full py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="bg-background/80 backdrop-blur-sm">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Patrocinar un proyecto */}
            <div className="flex flex-col justify-center items-start space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Patrocinar un proyecto</h2>
              <p className="text-muted-foreground">Ayúdanos a hacer la diferencia en la vida de las personas.</p>
              <Button
              variant="default"
              className="transition-colors hover:text-foreground/80 text-foreground/60" asChild>
                <Link href="/proyectos">CONOCER</Link>
              </Button>
            </div>

            {/* Contacto */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">CONTACTO</h2>
              <p className="text-sm text-muted-foreground">
              Barros Aranas 492 OF 78 Torre Ligure, Concepción
              </p>
              <Link href="mailto:info@fechile.cl" className="text-sm text-primary hover:underline">
              info@fechile.cl
              </Link>
              <Button
              variant="default"
              className="transition-colors hover:text-foreground/80 text-foreground/60" asChild>
                <Link href="https://api.whatsapp.com/send?phone=56982315645" target="_blank" rel="noopener noreferrer">
                  CONTÁCTENOS A TRAVÉS DE WHATSAPP
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

