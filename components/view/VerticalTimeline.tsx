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
      <SectionTitle heading='Práce' subHeading='Zjednodušená historie mých brigád, stáží, projektů aj.' />
      <VerticalTimelineElement/>
    </section>
  );
}
