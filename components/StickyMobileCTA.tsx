"use client";

import { WhatsappLogo, Phone } from "@phosphor-icons/react";
import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/content/dictionary";

export default function StickyMobileCTA() {
  const { t } = useI18n();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-burgundy-deep/90 p-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href={`https://wa.me/${CONTACT.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1"
        >
          <WhatsappLogo weight="fill" className="h-5 w-5" />
          {t.nav.cta}
        </a>
        <a
          href={`tel:+${CONTACT.phone1Intl}`}
          aria-label={t.register.callNow}
          className="grid min-h-[48px] w-14 place-items-center rounded-full border border-gold/40 text-gold"
        >
          <Phone weight="fill" className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
