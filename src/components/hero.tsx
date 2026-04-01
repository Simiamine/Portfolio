"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-mono text-muted mb-3">{t("greeting")}</p>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4">
            <span className="gradient-text">{t("name")}</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
            {t("title")}
          </h2>

          <p className="text-sm font-mono text-primary-light mb-6">
            {t("subtitle")}
          </p>

          <p className="text-lg text-muted leading-relaxed max-w-2xl mb-10">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-dark text-white text-sm font-medium hover:bg-primary-light transition-colors"
            >
              {t("cta_projects")}
              <ArrowDown size={14} />
            </button>

            <a
              href="/cv-amine-mzali.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary-light/40 transition-colors"
            >
              {t("cta_resume")}
              <Download size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
