"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { ChatPanel } from "@/components/chat-panel";

const TOOLTIP_DELAY_MS = 3000;
const TOOLTIP_DURATION_MS = 8000;
const STORAGE_KEY = "chat-tooltip-dismissed";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);
  const t = useTranslations("chat");

  useEffect(() => {
    const wasDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    setIsDismissed(wasDismissed);

    if (wasDismissed) return;

    const showTimer = setTimeout(() => setShowTooltip(true), TOOLTIP_DELAY_MS);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showTooltip) return;

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
      dismissTooltip();
    }, TOOLTIP_DURATION_MS);

    return () => clearTimeout(hideTimer);
  }, [showTooltip]);

  function dismissTooltip(): void {
    setShowTooltip(false);
    setIsDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  }

  function openChat(): void {
    dismissTooltip();
    setIsOpen(true);
  }

  const showPulse = !isOpen && !isDismissed;

  return (
    <>
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {showTooltip && (
            <div className="relative flex items-start gap-2 max-w-[260px] bg-card border border-border rounded-xl px-3.5 py-2.5 shadow-lg animate-[fadeInUp_0.3s_ease-out]">
              <p className="text-xs leading-relaxed text-foreground">
                {t("tooltip")}
              </p>
              <button
                type="button"
                onClick={dismissTooltip}
                className="shrink-0 p-0.5 rounded hover:bg-border/50 transition-colors"
                aria-label={t("close")}
              >
                <X size={12} className="text-muted" />
              </button>
              <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-card border-b border-r border-border rotate-45" />
            </div>
          )}

          <button
            type="button"
            onClick={openChat}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
            aria-label={t("open")}
          >
            {showPulse && (
              <span className="absolute inset-0 rounded-full bg-primary-dark animate-[chatPulse_2s_ease-out_infinite]" />
            )}
            <MessageCircle size={18} className="relative" />
            <span className="text-sm font-medium hidden sm:inline relative">
              {t("open")}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
