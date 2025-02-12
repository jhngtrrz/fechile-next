import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LiteYoutube from "./LiteYoutube"

interface Ministry {
  id: string
  title: string
  description: string
  videoId: string
}

const ministries: Ministry[] = [
  {
    id: "1",
    title: "Los Aromos",
    description:
      "Descripción...",
    videoId: "vBo_DzrfNqo",
  },
  {
    id: "2",
    title: "Aproas",
    description:
      "Descripción...",
    videoId: "Dwhqhlu253g",
  },
  {
    id: "3",
    title: "Manos a la Obra",
    description:
      "Descripción...",
    videoId: "5v3qoWjhMgA",
  },
  {
    id: "4",
    title: "Ventana para Cristo",
    description:
      "Descripción...",
    videoId: "vh4AVtBES0E",
  },
]

export function MinistryGallery() {
  return (
    <section className="w-full py-6 bg-foreground flex items-center justify-center">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">MINISTERIOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ministries.map((ministry) => (
            <Card
              key={ministry.id}
              className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg"
            >
              <div className="relative">
                <LiteYoutube 
                  videoId={ministry.videoId}
                  videoTitle={ministry.title}
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">{ministry.title}</h3>
                <p className="text-sm text-muted-foreground">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/ministerios" passHref>
            <Button className="transition-colors hover:text-foreground/80 text-foreground/60">Ver Más</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
