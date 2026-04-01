"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, BarChart3, Database, Brain, ArrowDown } from "lucide-react";

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
      className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #3a0f17 0%, #5e2933 40%, #815443 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[120%] h-[120%] top-[-30%] left-[-10%] bg-white/[0.04] rounded-[40%_50%_35%_45%] animate-[wave_20s_ease-in-out_infinite]" />
        <div className="absolute w-[100%] h-[100%] bottom-[-40%] right-[-10%] bg-white/[0.03] rounded-[45%_40%_50%_35%] animate-[wave_25s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <Image
                src="/images/moi.jpg"
                alt="Amine M'Zali"
                width={90}
                height={90}
                className="rounded-full border-4 border-white/20 shadow-2xl object-cover"
                priority
              />
              <ChatBubble index={0} small>{t("greeting")}</ChatBubble>
            </motion.div>

            <ChatBubble index={1}>{t("name_bubble")}</ChatBubble>
            <ChatBubble index={2}>{t("title_bubble")}</ChatBubble>
            <ChatBubble index={3} accent>{t("subtitle_bubble")}</ChatBubble>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-dark text-sm font-bold hover:bg-secondary-beige transition-colors shadow-lg"
              >
                {t("cta_projects")}
                <ArrowDown size={14} />
              </button>

              <a
                href="/cvfr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {t("cta_resume")}
                <Download size={14} />
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-5">
            {FLOATING_CARDS.map(({ key, icon: Icon }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-4 px-7 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl min-w-[220px]"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                    <Icon size={24} className="text-secondary-beige" />
                  </div>
                  <span className="text-white font-bold text-base">{t(`cards.${key}`)}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
          <div className="w-6 h-10 rounded-full border-2 border-white/40 relative">
            <motion.div
              animate={{ y: [4, 16], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-secondary-beige rounded-full"
            />
          </div>
        </motion.div>
        <span className="text-xs text-white/50 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}

function ChatBubble({
  children,
  index,
  accent,
  small,
}: {
  children: React.ReactNode;
  index: number;
  accent?: boolean;
  small?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.4 }}
      className={`
        relative inline-block rounded-2xl mb-3
        ${small ? "px-4 py-2.5 text-sm" : "px-6 py-3.5 text-base sm:text-lg font-bold"}
        ${accent
          ? "bg-secondary-beige text-primary-dark shadow-lg"
          : "bg-white text-gray-900 shadow-xl"
        }
      `}
    >
      <span
        className={`absolute -left-2 top-4 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
          accent ? "border-r-[8px] border-r-secondary-beige" : "border-r-[8px] border-r-white"
        }`}
      />
      {children}
    </motion.div>
  );
}
