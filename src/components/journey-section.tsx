"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ChevronDown } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/content/data";

interface TimelinePair {
  year: string;
  left: { id: string; title: string; subtitle: string; logo: string };
  right: { id: string; title: string; subtitle: string; logo: string };
}

export function JourneySection() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  const pairs: TimelinePair[] = [
    {
      year: "2021-2023",
      left: {
        id: EDUCATION[3].id,
        title: EDUCATION[3].school,
        subtitle: EDUCATION[3].degree[locale],
        logo: EDUCATION[3].logo,
      },
      right: {
        id: EXPERIENCES[3].id,
        title: EXPERIENCES[3].company,
        subtitle: EXPERIENCES[3].role[locale],
        logo: EXPERIENCES[3].logo,
      },
    },
    {
      year: "2023-2024",
      left: {
        id: EDUCATION[2].id,
        title: EDUCATION[2].school,
        subtitle: EDUCATION[2].degree[locale],
        logo: EDUCATION[2].logo,
      },
      right: {
        id: EXPERIENCES[2].id,
        title: EXPERIENCES[2].company,
        subtitle: EXPERIENCES[2].role[locale],
        logo: EXPERIENCES[2].logo,
      },
    },
    {
      year: "2024-2025",
      left: {
        id: EDUCATION[0].id,
        title: EDUCATION[0].school,
        subtitle: EDUCATION[0].degree[locale],
        logo: EDUCATION[0].logo,
      },
      right: {
        id: EXPERIENCES[1].id,
        title: EXPERIENCES[1].company,
        subtitle: EXPERIENCES[1].role[locale],
        logo: EXPERIENCES[1].logo,
      },
    },
    {
      year: "2025-2026",
      left: {
        id: EDUCATION[1].id,
        title: EDUCATION[1].school,
        subtitle: EDUCATION[1].degree[locale],
        logo: EDUCATION[1].logo,
      },
      right: {
        id: EXPERIENCES[0].id,
        title: EXPERIENCES[0].company,
        subtitle: EXPERIENCES[0].role[locale],
        logo: EXPERIENCES[0].logo,
      },
    },
  ];

  function scrollToDetail(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="journey" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-mono text-primary-light mb-2">
            {t("label")}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-6">
            {t("title")}
          </h2>
          <div className="flex gap-8 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted">
              <GraduationCap size={16} className="text-primary-dark" />
              {t("education")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Briefcase size={16} className="text-primary-light" />
              {t("experience")}
            </div>
          </div>
        </motion.div>

        {/* Desktop: bifurcated timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-dark via-primary-light to-secondary-beige -translate-x-1/2 rounded-full" />

          <div className="space-y-8">
            {pairs.map((pair, rowIndex) => (
              <div key={pair.year} className="relative flex items-stretch">
                <div className="w-[calc(50%-20px)] pr-6">
                  <TimelineCard
                    item={pair.left}
                    index={rowIndex}
                    direction="left"
                    onClick={() => scrollToDetail(pair.left.id)}
                  />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-dark to-primary-light border-[3px] border-background shadow-md" />
                  {rowIndex === pairs.length - 1 && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary-light animate-ping opacity-30" />
                  )}
                  <span className="absolute -bottom-6 text-[10px] font-mono text-muted whitespace-nowrap">
                    {pair.year}
                  </span>
                </div>

                <div className="w-[calc(50%-20px)] pl-6 ml-auto">
                  <TimelineCard
                    item={pair.right}
                    index={rowIndex}
                    direction="right"
                    onClick={() => scrollToDetail(pair.right.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden space-y-6">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-primary-dark" />
            {t("education")}
          </h3>
          {EDUCATION.map((edu) => (
            <button
              key={edu.id}
              onClick={() => scrollToDetail(edu.id)}
              className="block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image src={edu.logo} alt={edu.school} width={24} height={24} className="rounded object-contain" />
                <p className="text-xs font-mono text-muted">{edu.period}</p>
              </div>
              <p className="font-semibold text-foreground">{edu.school}</p>
              <p className="text-sm text-primary-light">{edu.degree[locale]}</p>
            </button>
          ))}

          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 mt-8">
            <Briefcase size={18} className="text-primary-light" />
            {t("experience")}
          </h3>
          {EXPERIENCES.map((exp) => (
            <button
              key={exp.id}
              onClick={() => scrollToDetail(exp.id)}
              className="block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <Image src={exp.logo} alt={exp.company} width={24} height={24} className="rounded object-contain" />
                <p className="text-xs font-mono text-muted">{exp.period}</p>
              </div>
              <p className="font-semibold text-foreground">{exp.company} · {exp.location}</p>
              <p className="text-sm text-primary-light">{exp.role[locale]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  item,
  index,
  direction,
  onClick,
}: {
  item: { title: string; subtitle: string; logo: string };
  index: number;
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group w-full cursor-pointer"
    >
      <div className={`p-4 rounded-xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary-light/30 hover:-translate-y-1 transition-all ${direction === "left" ? "text-right" : "text-left"}`}>
        <div className={`flex items-center gap-2.5 mb-2 ${direction === "left" ? "justify-end" : ""}`}>
          <Image
            src={item.logo}
            alt={item.title}
            width={28}
            height={28}
            className="rounded-md object-contain"
          />
          <ChevronDown
            size={14}
            className="text-muted group-hover:text-primary-light transition-colors"
          />
        </div>
        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary-light transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-primary-light mt-0.5 leading-relaxed">
          {item.subtitle}
        </p>
      </div>
    </motion.button>
  );
}
