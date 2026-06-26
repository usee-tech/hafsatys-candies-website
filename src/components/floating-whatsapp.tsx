import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/products";

export function FloatingWhatsapp() {
  return (
    <a
      href={waLink("Hi Hafsatys Candies! I'd like to know more about your products.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/30 px-5 py-3.5 flex items-center gap-2 hover:scale-105 transition-transform"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline text-sm font-semibold">Order via WhatsApp</span>
    </a>
  );
}
