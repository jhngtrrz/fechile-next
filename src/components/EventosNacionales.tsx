import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import LiteYoutube from "@/components/LiteYoutube"

export function EventosNacionales() {
  return (
    <section className="w-full py-3 md:py-6 lg:py-12 bg-primary/5 flex items-center justify-center">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* 2 columnas, y items-start para que no se estiren verticalmente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 rounded-2xl bg-muted/50 items-start">
          
          {/* Columna Izquierda: Card 2025 */}
          <Card className="group relative flex flex-col overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl font-bold text-center">
                Encuentro Nacional de FE 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/temuco.avif"
                  alt="Temuco"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <p className="text-xl italic text-primary">Temuco</p>
                <p className="text-lg mt-2">
                  Atención a la fecha:
                  <br />
                  <span className="font-semibold">21 y 22 de Noviembre</span>
                </p>
              </div>
            </CardContent>
            <CardFooter className="justify-center pb-6">
              <Link href="/inscripcion-encuentro-nacional-2025">
                <Button className="transition-colors hover:text-foreground/80 text-foreground/60">
                  Preinscripción
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Columna Derecha: Card 2024 arriba + texto debajo */}
          {/* Importante: sin h-full ni justify-between, para que se “encojen” al contenido */}
          <div className="flex flex-col">
            <Card className="group relative flex flex-col overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <CardHeader className="bg-card" />
              <CardContent className="p-0">
                <div className="relative w-full aspect-video">
                  <LiteYoutube
                    videoId="BWUkAoEljTQ"
                    videoTitle="Aftermovie - Encuentro Nacional de FE"
                    autoload={true}
                    nocookie={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="p-6 text-center">
                  <CardTitle className="text-2xl font-bold">
                    Encuentro Nacional de FE 2024
                  </CardTitle>
                  <p className="text-xl italic text-primary">Santiago</p>
                </div>
              </CardContent>
            </Card>

            {/* Texto grande debajo del card (con un margin-top para separarlo un poco) */}
            <h2 className="text-3xl font-extrabold text-center mt-20">
              ¡Revive el 5to Encuentro!
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
