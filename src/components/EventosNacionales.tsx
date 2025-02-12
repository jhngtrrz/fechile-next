import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import LiteYoutube from "@/components/LiteYoutube"

export function EventosNacionales() {
    return (
        <section className="w-full py-3 md:py-6 lg:py-12 bg-primary/5 flex items-center justify-center">
            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 rounded-2xl bg-muted/50">
                    {/* Evento 2025 */}
                    <Card className="group relative flex flex-col overflow-hidden h-full transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <CardHeader className="bg-primary/5">
                            <CardTitle className="text-2xl font-bold text-center">Encuentro Nacional de FE 2025</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow p-0">
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
                                    Atención a la nueva fecha:
                                    <br />
                                    <span className="font-semibold">04 al 06 de Septiembre</span>
                                </p>
                            </div>
                        </CardContent>
                        <CardFooter className="justify-center pb-6">
                            <Link href="/inscripcion-encuentro-nacional-2025">
                                <Button size="lg" className="rounded-full">Preinscripción</Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Evento 2024 */}
                    <Card className="group relative flex flex-col overflow-hidden h-full transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <CardHeader className="bg-card">
                        </CardHeader>
                        <CardContent className="flex-grow p-0 flex flex-col">
                            <div className="flex-grow">
                                <LiteYoutube
                                    videoId="BWUkAoEljTQ"
                                    videoTitle="Aftermovie - Encuentro Nacional de FE"
                                    autoload={true}
                                    nocookie={true}
                                    style={{ width: "100%", height: "100%", minHeight: "450px" }}
                                />
                            </div>
                            <div className="p-6 text-center">
                                <CardTitle className="text-2xl font-bold">Encuentro Nacional de FE 2024</CardTitle>
                                <p className="text-xl italic text-primary">Santiago</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
