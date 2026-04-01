"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { EDUCATION } from "@/content/data";

export function EducationDetail() {
  const t = useTranslations("journey");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="education-detail" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-mono text-primary-light mb-2">
            {t("education")}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-10">
            {t("education_detail_title")}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              id={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="scroll-mt-20 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-primary-light font-medium">
                    {edu.degree[locale]}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted shrink-0">
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-1.5">
                {edu.details[locale].map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-dark mt-2 shrink-0" />
                    {detail}
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
