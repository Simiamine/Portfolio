"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { EXPERIENCES, EDUCATION } from "@/content/data";

export function JourneySection() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="journey" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary-light mb-2">
            {t("label")}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-dark" />
              {t("education")}
            </h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-primary-dark bg-background" />
                  <p className="text-xs font-mono text-muted mb-1">
                    {edu.period}
                  </p>
                  <h4 className="font-semibold text-foreground">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-primary-light mb-2">
                    {edu.degree[locale]}
                  </p>
                  <ul className="space-y-1">
                    {edu.details[locale].map((detail) => (
                      <li
                        key={detail}
                        className="text-xs text-muted leading-relaxed"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-light" />
              {t("experience")}
            </h3>
            <div className="relative border-l-2 border-border pl-6 space-y-8">
              {EXPERIENCES.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative"
                >
                  <TimelineDot index={index} />
                  <p className="text-xs font-mono text-muted mb-1">
                    {exp.period}
                  </p>
                  <h4 className="font-semibold text-foreground">
                    {exp.company}{" "}
                    <span className="font-normal text-muted">
                      · {exp.location}
                    </span>
                  </h4>
                  <p className="text-sm text-primary-light mb-2">
                    {exp.role[locale]}
                  </p>
                  <ul className="space-y-1">
                    {exp.description[locale].map((desc) => (
                      <li
                        key={desc}
                        className="text-xs text-muted leading-relaxed"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineDot({ index }: { index: number }) {
  if (index === 0) {
    return (
      <span className="absolute -left-[31px] top-1.5">
        <span className="block w-3 h-3 rounded-full bg-primary-light" />
        <span className="absolute inset-0 w-3 h-3 rounded-full bg-primary-light animate-ping opacity-40" />
      </span>
    );
  }

  return (
    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-primary-light bg-background" />
  );
}
