import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FullscreenBanner() {
  return (
    <Card className="w-full h-96 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            className="absolute w-[100vw] h-[56.25vw] min-h-full min-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube-nocookie.com/embed/aVx_NaauewI?autoplay=1&mute=1&controls=0&loop=1&playlist=aVx_NaauewI&modestbranding=1&playsinline=1"
            title="Video Institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <CardContent className="relative z-20 flex flex-col justify-center items-center h-full max-w-3xl mx-auto p-6 text-white">
        <h1 className="text-4xl font-bold mb-4">Conoce la Misión de ...</h1>
        <p className="text-xl mb-8">
          Descripción...
        </p>
        <Link href="https://www.feadventistas.org.br/post/base-mission%C3%A1ria-da-guiana" passHref>
          <Button className="transition-colors hover:text-foreground/80 text-foreground/60">
            Leer más
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
