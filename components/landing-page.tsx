"use client";

import { BusinessSolutions } from "@/components/home/business-solutions";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Location } from "@/components/home/location";
import { Navbar } from "@/components/home/navbar";
import { ScrollStory } from "@/components/home/scroll-story";
import { Services } from "@/components/home/services";
import { SpaceTechEcosystem } from "@/components/home/space-tech-ecosystem";
import { Testimonials } from "@/components/home/testimonials";
import { WhatsAppFloat } from "@/components/home/whatsapp-float";

export function LandingPage() {
  return (
    <main className="premium-site relative min-h-screen overflow-hidden bg-[#050608] text-white">
      <Navbar />
      <Hero />
      <Services />
      <ScrollStory />
      <SpaceTechEcosystem />
      <BusinessSolutions />
      <Testimonials />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
