import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { WhatIsCat } from "@/components/landing/WhatIsCat";
import { Sharia } from "@/components/landing/Sharia";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Ethics } from "@/components/landing/Ethics";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <LandingHeader />
      <main className="bg-cat-dark pt-20">
        <HeroSection />
        <WhatIsCat />
        <Sharia />
        <HowItWorks />
        <Ethics />
        <FinalCTA />
      </main>
    </>
  );
}
