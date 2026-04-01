"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Brain,
  Lightbulb,
  Users,
  Search,
} from "lucide-react";

const HIGHLIGHTS = [
  { key: "analysis", icon: BarChart3 },
  { key: "engineering", icon: Database },
  { key: "science", icon: Brain },
  { key: "innovative", icon: Lightbulb },
  { key: "collaborative", icon: Users },
  { key: "curious", icon: Search },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20">
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
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-8">
            {t("title")}
          </h2>

          <p className="text-lg text-muted leading-relaxed max-w-3xl mb-12">
            {t("text")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {HIGHLIGHTS.map(({ key, icon: Icon }, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card"
              >
                <Icon size={18} className="text-muted shrink-0" />
                <span className="text-sm font-medium">
                  {t(`highlights.${key}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
