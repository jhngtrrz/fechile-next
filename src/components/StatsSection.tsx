import { Heart, Users, Church } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Heart,
    title: "29 Ministerios",
    description: "apoyados en 2024",
  },
  {
    icon: Church,
    title: "+ de 11 mil",
    description: "bautismos",
  },
  {
    icon: Users,
    title: "+ de 500",
    description: "voluntarios",
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-3 md:py-6 lg:py-12 bg-foreground">
      <div className="container  md:px-6 mx-auto">
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="bg-accent text-card-foreground transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 w-full max-w-xs"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

