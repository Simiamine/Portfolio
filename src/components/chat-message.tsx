import { type UIMessage } from "ai";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: UIMessage;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className="shrink-0 mt-0.5">
        {isUser ? (
          <User size={16} className="text-muted" />
        ) : (
          <Bot size={16} className="text-primary-light" />
        )}
      </div>
      <div
        className={`max-w-[85%] text-sm leading-relaxed rounded-xl px-3 py-2 ${
          isUser
            ? "bg-primary-dark text-white rounded-br-sm"
            : "bg-secondary-beige/20 text-foreground rounded-bl-sm"
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text") {
            return (
              <span key={i} className="whitespace-pre-wrap">
                {part.text}
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
