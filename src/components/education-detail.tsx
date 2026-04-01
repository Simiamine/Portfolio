"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { EDUCATION } from "@/content/data";
import { getIcon } from "@/lib/icons";

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

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, index) => {
            const Icon = getIcon(edu.icon);
            return (
              <motion.div
                key={edu.id}
                id={edu.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="scroll-mt-20 rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary-light/20 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-light/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary-light" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground leading-tight">
                        {edu.school}
                      </h3>
                      <span className="text-xs font-mono text-muted shrink-0 mt-0.5">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-primary-light font-medium mt-0.5">
                      {edu.degree[locale]}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1 ml-12">
                  {edu.details[locale].map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-muted leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary-light mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
