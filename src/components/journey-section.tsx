"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/content/data";

interface TimelinePair {
  left: { id: string; period: string; title: string; subtitle: string } | null;
  right: { id: string; period: string; title: string; subtitle: string } | null;
}

export function JourneySection() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  const pairs: TimelinePair[] = [
    {
      left: {
        id: EDUCATION[0].id,
        period: EDUCATION[0].period,
        title: EDUCATION[0].school,
        subtitle: EDUCATION[0].degree[locale],
      },
      right: {
        id: EXPERIENCES[0].id,
        period: EXPERIENCES[0].period,
        title: `${EXPERIENCES[0].company}`,
        subtitle: EXPERIENCES[0].role[locale],
      },
    },
    {
      left: {
        id: EDUCATION[1].id,
        period: EDUCATION[1].period,
        title: EDUCATION[1].school,
        subtitle: EDUCATION[1].degree[locale],
      },
      right: {
        id: EXPERIENCES[1].id,
        period: EXPERIENCES[1].period,
        title: `${EXPERIENCES[1].company}`,
        subtitle: EXPERIENCES[1].role[locale],
      },
    },
    {
      left: {
        id: EDUCATION[2].id,
        period: EDUCATION[2].period,
        title: EDUCATION[2].school,
        subtitle: EDUCATION[2].degree[locale],
      },
      right: {
        id: EXPERIENCES[2].id,
        period: EXPERIENCES[2].period,
        title: `${EXPERIENCES[2].company}`,
        subtitle: EXPERIENCES[2].role[locale],
      },
    },
    {
      left: {
        id: EDUCATION[3].id,
        period: EDUCATION[3].period,
        title: EDUCATION[3].school,
        subtitle: EDUCATION[3].degree[locale],
      },
      right: {
        id: EXPERIENCES[3].id,
        period: EXPERIENCES[3].period,
        title: `${EXPERIENCES[3].company}`,
        subtitle: EXPERIENCES[3].role[locale],
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
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">
            {t("title")}
          </h2>
        </motion.div>

        {/* Desktop: bifurcated timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-dark to-primary-light -translate-x-1/2 rounded-full" />

          <div className="space-y-12">
            {pairs.map((pair, rowIndex) => (
              <div key={rowIndex} className="relative flex items-start">
                {/* Left side (Education) */}
                <div className="w-1/2 pr-10 text-right">
                  {pair.left && (
                    <TimelineCard
                      item={pair.left}
                      index={rowIndex}
                      direction="left"
                      icon={<GraduationCap size={18} />}
                      onClick={() => scrollToDetail(pair.left!.id)}
                    />
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary-dark to-primary-light border-3 border-background shadow-md" />
                  {rowIndex === 0 && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary-light animate-ping opacity-40" />
                  )}
                </div>

                {/* Right side (Experience) */}
                <div className="w-1/2 pl-10">
                  {pair.right && (
                    <TimelineCard
                      item={pair.right}
                      index={rowIndex}
                      direction="right"
                      icon={<Briefcase size={18} />}
                      onClick={() => scrollToDetail(pair.right!.id)}
                    />
                  )}
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
          {EDUCATION.map((edu, i) => (
            <button
              key={edu.id}
              onClick={() => scrollToDetail(edu.id)}
              className="block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors"
            >
              <p className="text-xs font-mono text-muted mb-1">{edu.period}</p>
              <p className="font-semibold text-foreground">{edu.school}</p>
              <p className="text-sm text-primary-light">{edu.degree[locale]}</p>
            </button>
          ))}

          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 mt-8">
            <Briefcase size={18} className="text-primary-light" />
            {t("experience")}
          </h3>
          {EXPERIENCES.map((exp, i) => (
            <button
              key={exp.id}
              onClick={() => scrollToDetail(exp.id)}
              className="block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors"
            >
              <p className="text-xs font-mono text-muted mb-1">{exp.period}</p>
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
  icon,
  onClick,
}: {
  item: { period: string; title: string; subtitle: string };
  index: number;
  direction: "left" | "right";
  icon: React.ReactNode;
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
      <div className="p-5 rounded-xl border-2 border-transparent bg-card shadow-sm hover:shadow-lg hover:border-primary-light/30 hover:-translate-y-1 transition-all text-left">
        <div className={`flex items-center gap-2 mb-2 ${direction === "left" ? "justify-end" : ""}`}>
          <span className="text-primary-light">{icon}</span>
          <span className="text-xs font-mono text-muted">{item.period}</span>
        </div>
        <h4 className={`font-semibold text-foreground group-hover:text-primary-light transition-colors ${direction === "left" ? "text-right" : ""}`}>
          {item.title}
        </h4>
        <p className={`text-sm text-primary-light ${direction === "left" ? "text-right" : ""}`}>
          {item.subtitle}
        </p>
      </div>
    </motion.button>
  );
}
