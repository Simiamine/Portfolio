import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/content/projects");

export interface ProjectFrontmatter {
  title: string;
  tagline: string;
  stack: string[];
  github?: string;
  url?: string;
}

export function getProjectSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  const slugs = new Set<string>();
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      const slug = file.replace(/\.(fr|en)\.mdx$/, "");
      slugs.add(slug);
    }
  }
  return Array.from(slugs);
}

export async function getProjectContent(
  slug: string,
  locale: string
): Promise<{ default: React.ComponentType; frontmatter: ProjectFrontmatter } | null> {
  try {
    const mod = await import(`@/content/projects/${slug}.${locale}.mdx`);
    return mod;
  } catch {
    return null;
  }
}
