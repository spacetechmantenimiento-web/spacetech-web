import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/components/home/site-data";

export function WhatsAppFloat() {
  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Space Tech por WhatsApp" className="whatsapp-float">
      <MessageCircle className="size-5" aria-hidden /><span>Hablemos</span>
    </a>
  );
}
