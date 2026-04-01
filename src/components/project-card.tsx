"use client";

import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "next-intl";
import { Link } from "@/lib/i18n/navigation";
import { getIcon } from "@/lib/icons";
import type { Project } from "@/content/data";

interface ProjectCardProps {
  project: Project;
  index: number;
  ctaLabel: string;
}

export function ProjectCard({ project, index, ctaLabel }: ProjectCardProps) {
  const locale = useLocale() as "fr" | "en";
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = getIcon(project.icon);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
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
      className="h-full"
    >
      <Link href={`/projets/${project.slug}`} className="block group h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glow-card rounded-xl border border-border bg-card h-full flex flex-col transition-shadow duration-300"
          style={{ willChange: "transform" }}
        >
          <div
            className="h-2 rounded-t-xl"
            style={{ background: project.color }}
          />

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${project.color}15` }}
                >
                  <Icon size={18} style={{ color: project.color }} />
                </div>
                <h3 className="font-serif text-2xl tracking-tight">
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted group-hover:text-primary-light transition-colors shrink-0 mt-1"
              />
            </div>

            <p className="text-sm font-semibold mb-3" style={{ color: project.color }}>
              {project.tagline[locale]}
            </p>

            <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
              {project.description[locale]}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
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
        </div>
      </Link>
    </motion.div>
  );
}
