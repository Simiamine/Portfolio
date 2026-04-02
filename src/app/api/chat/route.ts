import { type UIMessage, streamText, convertToModelMessages } from "ai";
import { google } from "@ai-sdk/google";
import { buildSystemPrompt } from "@/content/system-prompt";

const MAX_MESSAGES = 20;

interface ChatRequest {
  messages: UIMessage[];
  locale?: string;
}

export async function POST(request: Request): Promise<Response> {
  const body = (await request.json()) as ChatRequest;

  if (!body.messages || !Array.isArray(body.messages)) {
    return new Response("Invalid request", { status: 400 });
  }

  if (body.messages.length > MAX_MESSAGES) {
    return new Response("Too many messages", { status: 429 });
  }

  const locale = body.locale === "en" ? "en" : "fr";

  const modelMessages = await convertToModelMessages(body.messages);

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: buildSystemPrompt(locale),
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
