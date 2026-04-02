"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useLocale, useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
import { Send, X, Bot, Loader2 } from "lucide-react";
import { ChatMessage } from "@/components/chat-message";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MAX_MESSAGES = 20;
const SUGGESTIONS_FR = [
  "Quelles sont les competences d'Amine ?",
  "Parle-moi de son experience chez Sanofi",
  "Quels projets a-t-il developpes ?",
];
const SUGGESTIONS_EN = [
  "What are Amine's skills?",
  "Tell me about his Sanofi experience",
  "What projects has he built?",
];

export function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const locale = useLocale();
  const t = useTranslations("chat");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [messageCount, setMessageCount] = useState(0);

  const transportRef = useRef(
    new DefaultChatTransport({
      api: "/api/chat",
      body: { locale },
    })
  );

  const { messages, sendMessage, status } = useChat({
    transport: transportRef.current,
  });

  const isStreaming = status === "streaming" || status === "submitted";
  const isLimited = messageCount >= MAX_MESSAGES;
  const suggestions = locale === "fr" ? SUGGESTIONS_FR : SUGGESTIONS_EN;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const userMessages = messages.filter((m) => m.role === "user");
    setMessageCount(userMessages.length);
  }, [messages]);

  function send(text: string): void {
    if (!text.trim() || isStreaming || isLimited) return;
    setInputValue("");
    sendMessage({ text });
  }

  function onFormSubmit(e: React.FormEvent): void {
    e.preventDefault();
    send(inputValue);
  }

  function onSuggestionClick(suggestion: string): void {
    send(suggestion);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-6rem)] rounded-2xl border border-border bg-card shadow-xl sm:bottom-6 sm:right-6">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border rounded-t-2xl bg-primary-dark text-white">
        <div className="flex items-center gap-2">
          <Bot size={18} />
          <div>
            <p className="text-sm font-semibold leading-none">{t("title")}</p>
            <p className="text-xs opacity-70 mt-0.5">{t("subtitle")}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-md hover:bg-white/15 transition-colors"
          aria-label={t("close")}
        >
          <X size={16} />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="shrink-0 mt-0.5">
                <Bot size={16} className="text-primary-light" />
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {t("welcome")}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pl-6">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => onSuggestionClick(suggestion)}
                  className="text-xs px-2.5 py-1.5 rounded-lg border border-border bg-background text-foreground hover:border-accent-brown hover:text-primary-light transition-colors text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}

        {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-2">
            <Bot size={16} className="text-primary-light shrink-0 mt-0.5" />
            <div className="bg-secondary-beige/20 rounded-xl rounded-bl-sm px-3 py-2">
              <Loader2 size={14} className="animate-spin text-muted" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={onFormSubmit} className="px-3 py-3 border-t border-border">
        {isLimited ? (
          <p className="text-xs text-muted text-center py-1">{t("limit_reached")}</p>
        ) : (
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t("placeholder")}
              disabled={isStreaming}
              className="flex-1 text-sm bg-background border border-border rounded-lg px-3 py-2 outline-none focus:border-primary-light transition-colors placeholder:text-muted/60 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isStreaming}
              className="shrink-0 p-2 rounded-lg bg-primary-dark text-white hover:bg-primary-dark/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label={t("send")}
            >
              <Send size={16} />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
