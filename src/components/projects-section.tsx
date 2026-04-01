"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS, SMALL_PROJECTS } from "@/content/data";
import { ProjectCard } from "@/components/project-card";
import { getIcon } from "@/lib/icons";

export function ProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en";

  return (
    <section id="projects" className="py-20">
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

        <div className="grid gap-6 md:grid-cols-3 mb-16 items-stretch">
          {PROJECTS.filter((p) => p.featured).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              ctaLabel={t("view_detail")}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold tracking-tight mb-6">
            {t("other_title")}
          </h3>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {SMALL_PROJECTS.map((project, index) => {
            const Icon = getIcon(project.icon);
            return (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group flex items-start gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary-light/30 hover:shadow-md transition-all"
              >
                <Icon size={18} className="text-primary-light mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold truncate">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-primary-light shrink-0">
                      {project.tech}
                    </span>
                  </div>
                  <p className="text-xs text-muted line-clamp-2">
                    {project.description[locale]}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-muted group-hover:text-primary-light transition-colors shrink-0 mt-0.5"
                />
              </motion.a>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/simiamine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary-light transition-colors"
          >
            {t("more_github")}
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
