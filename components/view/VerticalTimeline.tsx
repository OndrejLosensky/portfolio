"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-provider";

import VerticalTimelineElement from "../ui/timeline-element";
import SectionTitle from "../layout/section-title";

export default function ExperienceSection() {
  const { ref } = useSectionInView("Práce");
  const { theme } = useTheme();

  return (
    <section id="work" ref={ref} className="scroll-mt-28 mb-28">
      <SectionTitle heading='Práce' subHeading='Zkrácená historie mého vzdělání, pracovních pozic nebo vetších projektů na kterých sem se podílel' />
      <VerticalTimelineElement/>
    </section>
  );
}
