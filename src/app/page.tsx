import { Hero } from "@/components/hero"
import { StatsSection } from "@/components/StatsSection"
import { EventosNacionales } from "@/components/EventosNacionales"
import { MinistryGallery } from "@/components/MinistryGallery";

export default function Home() {
  return (
    <>
    <Hero />
    <StatsSection />
    <EventosNacionales />
    <MinistryGallery />
    </>
  );
}
