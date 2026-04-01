"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, BarChart3, Database, Brain } from "lucide-react";

const FLOATING_CARDS = [
  { key: "analysis", icon: BarChart3, delay: 0 },
  { key: "engineering", icon: Database, delay: 0.15 },
  { key: "science", icon: Brain, delay: 0.3 },
] as const;

const CARD_POSITIONS = [
  "top-[10%] left-[8%]",
  "top-[45%] right-[5%]",
  "bottom-[12%] left-[15%]",
];

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden bg-primary-dark"
    >
      <WaveShapes />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <Image
                src="/images/moi.jpg"
                alt="Amine M'Zali"
                width={80}
                height={80}
                className="rounded-full border-3 border-white/30 shadow-lg object-cover"
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
              className="flex flex-wrap gap-3 mt-8"
            >
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-primary-dark text-sm font-semibold hover:bg-white transition-colors shadow-md"
              >
                {t("cta_projects")}
              </button>

              <a
                href="/cvfr.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {t("cta_resume")}
                <Download size={14} />
              </a>
            </motion.div>
          </div>

          <div className="relative hidden lg:block h-[400px]">
            {FLOATING_CARDS.map(({ key, icon: Icon, delay }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + delay, duration: 0.5 }}
                className={`absolute ${CARD_POSITIONS[i]}`}
              >
                <FloatingCard label={t(`cards.${key}`)} icon={Icon} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator />
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
        relative inline-block rounded-2xl shadow-lg mb-3
        ${small ? "px-4 py-2 text-sm" : "px-5 py-3 text-base sm:text-lg font-semibold"}
        ${accent
          ? "bg-gradient-to-r from-primary-light to-accent-brown text-white"
          : "bg-white/95 backdrop-blur-sm text-gray-800"
        }
      `}
    >
      <span
        className={`absolute -left-2 top-4 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
          accent ? "border-r-[8px] border-r-primary-light" : "border-r-[8px] border-r-white/95"
        }`}
      />
      {children}
    </motion.div>
  );
}

function FloatingCard({
  label,
  icon: Icon,
  index,
}: {
  label: string;
  icon: typeof BarChart3;
  index: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        delay: index * 0.7,
        ease: "easeInOut",
      }}
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
    >
      <Icon size={28} className="text-secondary-beige" />
      <span className="text-white font-semibold text-sm">{label}</span>
    </motion.div>
  );
}

function WaveShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-[150%] h-[150%] top-[-50%] left-[-25%] bg-primary-light/30 rounded-[40%_50%_35%_45%] animate-[wave_20s_ease-in-out_infinite]" />
      <div className="absolute w-[150%] h-[150%] bottom-[-50%] right-[-25%] bg-accent-brown/30 rounded-[45%_40%_50%_35%] animate-[wave_25s_ease-in-out_infinite_reverse]" />
    </div>
  );
}

function ScrollIndicator() {
  return (
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
        <div className="w-6 h-10 rounded-full border-2 border-white/50 relative">
          <motion.div
            animate={{ y: [4, 16], opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-2 bg-secondary-beige rounded-full"
          />
        </div>
      </motion.div>
      <span className="text-xs text-white/60">Scroll</span>
    </motion.div>
  );
}
