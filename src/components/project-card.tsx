"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import type { Project } from "@/content/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  ctaLabel: string;
}

export function ProjectCard({ project, index, ctaLabel }: ProjectCardProps) {
  const locale = useLocale() as "fr" | "en";
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (card) card.style.transform = "";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/projets/${project.slug}`} className="block group">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glow-card rounded-xl border border-border bg-card p-6 h-full transition-shadow duration-300"
          style={{ willChange: "transform" }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-serif text-2xl tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight
              size={18}
              className="text-muted group-hover:text-primary-light transition-colors shrink-0 mt-1"
            />
          </div>

          <p className="text-sm text-primary-light font-medium mb-3">
            {project.tagline[locale]}
          </p>

          <p className="text-sm text-muted leading-relaxed mb-5">
            {project.description[locale]}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2 py-0.5 rounded bg-background text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
