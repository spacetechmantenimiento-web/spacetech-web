"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/components/home/site-data";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.62);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a Space Tech por WhatsApp" className={`whatsapp-float ${visible ? "whatsapp-float-visible" : ""}`}>
      <MessageCircle className="size-5" aria-hidden /><span>Hablemos</span>
    </a>
  );
}
