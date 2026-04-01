import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif text-lg text-foreground">
              Amine M&apos;Zali
            </span>
            <span className="text-sm text-primary-light font-medium">
              {t("available")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/simiamine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mzaliamine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="mailto:mzaliamine@gmail.com"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Amine M&apos;Zali. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
