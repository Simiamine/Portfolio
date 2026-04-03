"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Mail, Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const FORMSPREE_URL = "https://formspree.io/f/xbldanjv";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20">
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
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-12">
            {t("description")}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-1.5"
                >
                  {t("name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  disabled={status === "submitting"}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light/50 transition-colors disabled:opacity-50"
                  placeholder={t("name_placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-1.5"
                >
                  {t("email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  disabled={status === "submitting"}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light/50 transition-colors disabled:opacity-50"
                  placeholder={t("email_placeholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-1.5"
                >
                  {t("message")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  disabled={status === "submitting"}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:border-primary-light/50 transition-colors resize-none disabled:opacity-50"
                  placeholder={t("message_placeholder")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-dark text-white font-medium text-sm h-11 px-6 hover:bg-primary-light transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={15} />
                )}
                {t("send")}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400"
                >
                  <CheckCircle size={16} />
                  {t("success")}
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400"
                >
                  <AlertCircle size={16} />
                  {t("error")}
                </motion.p>
              )}
            </form>

            <div className="flex flex-col justify-center gap-6">
              <p className="text-muted leading-relaxed">
                {t("alternative")}
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="mailto:mzaliamine@gmail.com"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary-light transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card group-hover:border-primary-light/30 transition-colors">
                    <Mail size={16} className="text-primary-light" />
                  </div>
                  mzaliamine@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/mzaliamine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary-light transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card group-hover:border-primary-light/30 transition-colors">
                    <LinkedInIcon size={16} className="text-primary-light" />
                  </div>
                  linkedin.com/in/mzaliamine
                </a>

                <a
                  href="https://github.com/Simiamine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-foreground hover:text-primary-light transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-border bg-card group-hover:border-primary-light/30 transition-colors">
                    <GitHubIcon size={16} className="text-primary-light" />
                  </div>
                  github.com/Simiamine
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
