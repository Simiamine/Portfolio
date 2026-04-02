"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ArrowDown } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/content/data";

interface TimelinePair {
  year: string;
  education: { id: string; title: string; subtitle: string; logo: string };
  experience: { id: string; title: string; subtitle: string; logo: string };
}

export function JourneySection() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  const pairs: TimelinePair[] = [
    {
      year: "2025 — 2026",
      education: {
        id: EDUCATION[1].id,
        title: EDUCATION[1].school,
        subtitle: EDUCATION[1].degree[locale],
        logo: EDUCATION[1].logo,
      },
      experience: {
        id: EXPERIENCES[0].id,
        title: EXPERIENCES[0].company,
        subtitle: EXPERIENCES[0].role[locale],
        logo: EXPERIENCES[0].logo,
      },
    },
    {
      year: "2024 — 2025",
      education: {
        id: EDUCATION[0].id,
        title: EDUCATION[0].school,
        subtitle: EDUCATION[0].degree[locale],
        logo: EDUCATION[0].logo,
      },
      experience: {
        id: EXPERIENCES[1].id,
        title: EXPERIENCES[1].company,
        subtitle: EXPERIENCES[1].role[locale],
        logo: EXPERIENCES[1].logo,
      },
    },
    {
      year: "2023 — 2024",
      education: {
        id: EDUCATION[2].id,
        title: EDUCATION[2].school,
        subtitle: EDUCATION[2].degree[locale],
        logo: EDUCATION[2].logo,
      },
      experience: {
        id: EXPERIENCES[2].id,
        title: EXPERIENCES[2].company,
        subtitle: EXPERIENCES[2].role[locale],
        logo: EXPERIENCES[2].logo,
      },
    },
    {
      year: "2021 — 2023",
      education: {
        id: EDUCATION[3].id,
        title: EDUCATION[3].school,
        subtitle: EDUCATION[3].degree[locale],
        logo: EDUCATION[3].logo,
      },
      experience: {
        id: EXPERIENCES[3].id,
        title: EXPERIENCES[3].company,
        subtitle: EXPERIENCES[3].role[locale],
        logo: EXPERIENCES[3].logo,
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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
        <div className="hidden md:block">
          <div className="relative">
            {/* Central vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, transparent, #d2bdb1 10%, #815443 50%, #5e2933 90%, transparent)" }}
            />

            {/* Column headers */}
            <div className="grid grid-cols-[1fr_48px_1fr] mb-8">
              <div className="text-right pr-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
                  <GraduationCap size={14} className="text-primary-dark" />
                  {t("education")}
                </span>
              </div>
              <div />
              <div className="text-left pl-6">
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted">
                  <Briefcase size={14} className="text-primary-light" />
                  {t("experience")}
                </span>
              </div>
            </div>

            {/* Timeline rows */}
            {pairs.map((pair, idx) => {
              const isFirst = idx === 0;
              return (
                <div key={pair.year} className="grid grid-cols-[1fr_48px_1fr] mb-6 last:mb-0">
                  {/* Education card (left, right-aligned) */}
                  <div className="pr-6 flex justify-end">
                    <button
                      onClick={() => scrollToDetail(pair.education.id)}
                      className="group w-full max-w-[320px] text-right"
                    >
                      <div className="p-4 rounded-xl border border-border bg-card hover:border-primary-dark/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        <div className="flex items-center gap-3 justify-end mb-2">
                          <ArrowDown size={12} className="text-muted group-hover:text-primary-dark transition-colors" />
                          <Image
                            src={pair.education.logo}
                            alt={pair.education.title}
                            width={28}
                            height={28}
                            className="rounded-md object-contain"
                          />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary-dark transition-colors">
                          {pair.education.title}
                        </h4>
                        <p className="text-xs text-primary-light mt-1 leading-relaxed">
                          {pair.education.subtitle}
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Center dot + year */}
                  <div className="flex flex-col items-center justify-center relative">
                    <div
                      className="w-3.5 h-3.5 rounded-full z-10 shadow-sm"
                      style={{
                        background: isFirst
                          ? "linear-gradient(135deg, #d2bdb1, #815443)"
                          : "linear-gradient(135deg, #5e2933, #815443)",
                        border: "2.5px solid var(--background)",
                      }}
                    />
                    {isFirst && (
                      <div
                        className="absolute w-3.5 h-3.5 rounded-full animate-ping opacity-30"
                        style={{ backgroundColor: "#d2bdb1" }}
                      />
                    )}
                    <span className="text-[9px] font-mono text-muted mt-1.5 whitespace-nowrap leading-none">
                      {pair.year}
                    </span>
                  </div>

                  {/* Experience card (right, left-aligned) */}
                  <div className="pl-6 flex justify-start">
                    <button
                      onClick={() => scrollToDetail(pair.experience.id)}
                      className="group w-full max-w-[320px] text-left"
                    >
                      <div className="p-4 rounded-xl border border-border bg-card hover:border-primary-light/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <Image
                            src={pair.experience.logo}
                            alt={pair.experience.title}
                            width={28}
                            height={28}
                            className="rounded-md object-contain"
                          />
                          <ArrowDown size={12} className="text-muted group-hover:text-primary-light transition-colors" />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary-light transition-colors">
                          {pair.experience.title}
                        </h4>
                        <p className="text-xs text-primary-light mt-1 leading-relaxed">
                          {pair.experience.subtitle}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: single column with mini timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #5e2933, #d2bdb1)" }} />

            <h3 className="text-sm font-semibold flex items-center gap-2 mb-5 -ml-8">
              <GraduationCap size={16} className="text-primary-dark" />
              {t("education")}
            </h3>
            {EDUCATION.map((edu) => (
              <button
                key={edu.id}
                onClick={() => scrollToDetail(edu.id)}
                className="relative block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors mb-3"
              >
                <div className="absolute left-[-22px] top-5 w-2.5 h-2.5 rounded-full" style={{ background: "#5e2933", border: "2px solid var(--background)" }} />
                <div className="flex items-center gap-3 mb-2">
                  <Image src={edu.logo} alt={edu.school} width={24} height={24} className="rounded object-contain" />
                  <p className="text-xs font-mono text-muted">{edu.period}</p>
                </div>
                <p className="font-semibold text-foreground text-sm">{edu.school}</p>
                <p className="text-xs text-primary-light">{edu.degree[locale]}</p>
              </button>
            ))}

            <h3 className="text-sm font-semibold flex items-center gap-2 mb-5 mt-8 -ml-8">
              <Briefcase size={16} className="text-primary-light" />
              {t("experience")}
            </h3>
            {EXPERIENCES.map((exp) => (
              <button
                key={exp.id}
                onClick={() => scrollToDetail(exp.id)}
                className="relative block w-full text-left p-4 rounded-xl border border-border bg-card hover:border-primary-light/40 transition-colors mb-3"
              >
                <div className="absolute left-[-22px] top-5 w-2.5 h-2.5 rounded-full" style={{ background: "#815443", border: "2px solid var(--background)" }} />
                <div className="flex items-center gap-3 mb-2">
                  <Image src={exp.logo} alt={exp.company} width={24} height={24} className="rounded object-contain" />
                  <p className="text-xs font-mono text-muted">{exp.period}</p>
                </div>
                <p className="font-semibold text-foreground text-sm">{exp.company} · {exp.location}</p>
                <p className="text-xs text-primary-light">{exp.role[locale]}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
