"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { ChatPanel } from "@/components/chat-panel";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("chat");

  return (
    <>
      <ChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary-dark text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          aria-label={t("open")}
        >
          <MessageCircle size={18} />
          <span className="text-sm font-medium hidden sm:inline">
            {t("open")}
          </span>
        </button>
      )}
    </>
  );
}
