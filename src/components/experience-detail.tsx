"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/content/data";

export function ExperienceDetail() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="experience-detail" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary-light mb-2">
            {t("experience")}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            {t("experience_detail_title")}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="scroll-mt-20 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.company}
                    <span className="font-normal text-muted">
                      {" "}· {exp.location}
                    </span>
                  </h3>
                  <p className="text-sm text-primary-light font-medium">
                    {exp.role[locale]}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {exp.description[locale].map((desc) => (
                  <li
                    key={desc}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-light mt-2 shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
