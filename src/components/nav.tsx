"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/lib/i18n/navigation";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";
import { CvModal } from "@/components/cv-modal";

const NAV_ITEMS = ["about", "projects", "skills", "journey", "contact"] as const;

export function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const otherLocale = locale === "fr" ? "en" : "fr";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function scrollTo(id: string) {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-14">
          <button
            onClick={() => scrollTo("hero")}
            className="font-serif text-lg tracking-tight text-foreground"
          >
            AM
          </button>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {t(item)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCvOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-primary-dark text-white hover:bg-primary-light transition-colors"
            >
              <FileText size={13} />
              {t("resume")}
            </button>

            <button
              onClick={switchLocale}
              className="text-xs font-mono px-2 py-1.5 rounded-md border border-border text-muted hover:text-foreground hover:border-primary-light/30 transition-colors"
            >
              {otherLocale.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-muted hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-md text-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col px-4 py-3 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted hover:text-foreground transition-colors py-1.5 text-left"
                >
                  {t(item)}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setCvOpen(true);
                }}
                className="text-sm text-primary-dark font-medium py-1.5 text-left"
              >
                {t("resume")}
              </button>
            </div>
          </div>
        )}
      </header>

      <CvModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        title={t("resume")}
      />
    </>
  );
}
