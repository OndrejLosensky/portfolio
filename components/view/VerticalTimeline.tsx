"use client";

import React from "react";

import VerticalTimelineElement from "../ui/timeline-element";
import SectionTitle from "../layout/section-title";

export default function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-28 mb-28">
      <SectionTitle
        heading="Práce"
        className=""
        subHeading="Zkrácená historie mého vzdělání, pracovních pozic nebo vetších projektů na kterých sem se podílel"
      />
      <VerticalTimelineElement />
    </section>
  );
}
