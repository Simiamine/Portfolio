"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ChevronDown } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/content/data";

interface TimelineItem {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  type: "education" | "experience";
  emoji: string;
}

function buildTimeline(locale: "fr" | "en"): TimelineItem[] {
  const items: TimelineItem[] = [];

  for (const edu of EDUCATION) {
    items.push({
      id: edu.id,
      period: edu.period,
      title: edu.school,
      subtitle: edu.degree[locale],
      type: "education",
      emoji: edu.emoji,
    });
  }

  for (const exp of EXPERIENCES) {
    items.push({
      id: exp.id,
      period: exp.period,
      title: `${exp.company} · ${exp.location}`,
      subtitle: exp.role[locale],
      type: "experience",
      emoji: exp.emoji,
    });
  }

  return items.sort((a, b) => {
    const yearA = parseInt(a.period.match(/\d{4}/)?.[0] ?? "0", 10);
    const yearB = parseInt(b.period.match(/\d{4}/)?.[0] ?? "0", 10);
    return yearB - yearA;
  });
}

export function JourneySection() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";
  const timeline = buildTimeline(locale);

  function scrollToDetail(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="journey" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
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

        <div className="flex gap-6 justify-center mb-10">
          <div className="flex items-center gap-2 text-sm text-muted">
            <GraduationCap size={16} className="text-primary-dark" />
            {t("education")}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <Briefcase size={16} className="text-primary-light" />
            {t("experience")}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-dark via-primary-light to-secondary-beige" />

          <div className="space-y-1">
            {timeline.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToDetail(item.id)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative w-full text-left pl-16 sm:pl-20 pr-4 py-4 rounded-xl hover:bg-card hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-5 h-5 flex items-center justify-center">
                  <span className="text-lg">{item.emoji}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary-light transition-colors text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary-light">{item.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted whitespace-nowrap">
                      {item.period}
                    </span>
                    <ChevronDown
                      size={14}
                      className="text-muted group-hover:text-primary-light transition-colors shrink-0 hidden sm:block"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
