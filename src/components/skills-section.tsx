"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { SKILLS, LANGUAGES, CERTIFICATIONS } from "@/content/data";
import { Award, Globe } from "lucide-react";

const SKILL_META: Record<string, { emoji: string; color: string }> = {
  data_engineering: { emoji: "🔧", color: "#f59e0b" },
  ml_ai: { emoji: "🧠", color: "#8b5cf6" },
  backend: { emoji: "⚡", color: "#10b981" },
  frontend: { emoji: "🎨", color: "#3b82f6" },
  infra: { emoji: "☁️", color: "#ef4444" },
};

function SkillGroup({
  title,
  items,
  emoji,
  color,
  index,
}: {
  title: string;
  items: string[];
  emoji: string;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary-light/20 transition-all"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{emoji}</span>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-background border border-border text-muted hover:text-foreground hover:border-primary-light/30 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {groups.map(({ key, items }, index) => {
            const meta = SKILL_META[key];
            return (
              <SkillGroup
                key={key}
                title={t(key)}
                items={items}
                emoji={meta.emoji}
                color={meta.color}
                index={index}
              />
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe size={18} className="text-primary-light" />
              <h3 className="text-sm font-bold text-foreground">
                {t("languages")}
              </h3>
            </div>
            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name.en}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-foreground font-medium">{lang.name[locale]}</span>
                  <span className="text-xs font-mono text-primary-light px-2 py-0.5 rounded bg-primary-light/10">
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
            className="rounded-xl border border-border bg-card p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-primary-light" />
              <h3 className="text-sm font-bold text-foreground">
                {t("certifications")}
              </h3>
            </div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <span className="text-lg">🏅</span>
                  <p className="text-sm font-mono text-muted">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
