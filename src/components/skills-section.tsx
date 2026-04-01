"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { SKILLS, LANGUAGES, CERTIFICATIONS } from "@/content/data";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-card border border-border text-muted hover:text-foreground hover:border-primary-light/30 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  const t = useTranslations("skills");
  const locale = useLocale() as "fr" | "en";

  const groups = [
    { key: "data_engineering", items: SKILLS.data_engineering },
    { key: "ml_ai", items: SKILLS.ml_ai },
    { key: "backend", items: SKILLS.backend },
    { key: "frontend", items: SKILLS.frontend },
    { key: "infra", items: SKILLS.infra },
  ] as const;

  return (
    <section id="skills" className="py-20">
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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {groups.map(({ key, items }) => (
            <SkillGroup key={key} title={t(key)} items={items} />
          ))}
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t("languages")}
            </h3>
            <div className="space-y-2">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name.en}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground">{lang.name[locale]}</span>
                  <span className="text-xs font-mono text-muted">
                    {lang.level[locale]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-3">
              {t("certifications")}
            </h3>
            <div className="space-y-2">
              {CERTIFICATIONS.map((cert) => (
                <p key={cert} className="text-sm font-mono text-muted">
                  {cert}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
