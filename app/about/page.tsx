import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { Practitioners } from "@/components/about/Practitioners";
import { Values } from "@/components/about/Values";

export const metadata: Metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Practitioners />
      <Values />
    </>
  );
}
