import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted flex justify-center">
      <div className="container px-4 md:px-6 flex items-center">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                En FE, nos unimos con un propósito mayor
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Empresarios, emprendedores y profesionales se unen para llevar el amor de Cristo a los demás.
              </p>
            </div>
            <div className="space-y-2">
              <p className="max-w-[600px] text-muted-foreground">
                Apoyamos y promovemos ministerios de voluntariado con acciones solidarias, proyectos sociales y
                educativos. Creemos que el Evangelio transforma vidas y que el mundo de los negocios es un canal
                poderoso para esta misión.
              </p>
              <p className="max-w-[600px] font-bold">¡Sé parte de FE y deja un legado de impacto y transformación!</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/unete" passHref>
              <Button
              variant="default"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >Únete ahora</Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <iframe
              className="w-full h-[315px] md:h-[420px] lg:h-[480px] xl:h-[480px] overflow-hidden rounded-xl object-cover object-center"
              src="https://www.youtube-nocookie.com/embed/c3JdYEAoj0Y?autoplay=1&mute=1&controls=0&loop=1&playlist=c3JdYEAoj0Y"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
