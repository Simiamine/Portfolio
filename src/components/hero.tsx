"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, BarChart3, Database, Brain, ArrowDown, MapPin, Calendar } from "lucide-react";

const FLOATING_CARDS = [
  { key: "analysis", icon: BarChart3 },
  { key: "engineering", icon: Database },
  { key: "science", icon: Brain },
] as const;

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a0810 0%, #2e1520 25%, #4a2430 50%, #5e3540 75%, #704840 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 sm:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left: text content — 3 cols */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ backgroundColor: "rgba(210,189,177,0.12)", border: "1px solid rgba(210,189,177,0.2)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4ade80" }} />
                <span className="text-xs font-medium" style={{ color: "#d2bdb1" }}>{t("subtitle_bubble")}</span>
              </div>

              {/* Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: "#ffffff" }}>
                Amine
                <br />
                <span style={{ color: "#d2bdb1" }}>M&apos;Zali</span>
              </h1>

              {/* Title */}
              <p className="text-xl sm:text-2xl font-medium mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
                {t("title_bubble")}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <MapPin size={14} />
                  Paris, France
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <Calendar size={14} />
                  EFREI Paris 2026
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: "#ffffff", color: "#1a0810" }}
                >
                  {t("cta_projects")}
                  <ArrowDown size={15} />
                </button>

                <a
                  href="/cvfr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  {t("cta_resume")}
                  <Download size={15} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: photo + floating cards — 2 cols */}
          <div className="md:col-span-2 flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-2xl" style={{ border: "3px solid rgba(210,189,177,0.3)" }}>
                <Image
                  src="/images/moi.jpg"
                  alt="Amine M'Zali"
                  width={208}
                  height={208}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#815443" }} />
            </motion.div>

            <div className="flex flex-col gap-3 w-full max-w-[260px]">
              {FLOATING_CARDS.map(({ key, icon: Icon }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 4 + i * 0.5, ease: "easeInOut" }}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(210,189,177,0.15)" }}>
                      <Icon size={18} style={{ color: "#d2bdb1" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#ffffff" }}>{t(`cards.${key}`)}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full relative" style={{ border: "1.5px solid rgba(255,255,255,0.3)" }}>
            <motion.div
              animate={{ y: [3, 12], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-1.5 left-1/2 -translate-x-1/2 w-0.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#d2bdb1" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
