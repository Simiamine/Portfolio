import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectSlugs } from "@/lib/mdx";
import { PROJECTS } from "@/content/data";
import { Link } from "@/lib/i18n/navigation";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};

  const loc = locale as "fr" | "en";
  return {
    title: project.title,
    description: project.description[loc],
    openGraph: {
      title: `${project.title} — Amine M'Zali`,
      description: project.description[loc],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/projects/${slug}.${locale}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  return (
    <div className="pt-14">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          {locale === "fr" ? "Retour" : "Back"}
        </Link>

        <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-3">
          {project.title}
        </h1>

        <p className="text-lg text-primary-light mb-4">
          {project.tagline[locale as "fr" | "en"]}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-10">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-card border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="prose max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-primary-dark dark:prose-headings:text-secondary-beige prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:font-mono prose-code:text-sm prose-a:text-primary-light prose-a:no-underline hover:prose-a:underline dark:prose-invert">
          <Content />
        </div>
      </article>
    </div>
  );
}
