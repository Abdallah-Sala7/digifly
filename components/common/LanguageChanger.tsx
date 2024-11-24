"use client";

import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";

const LanguageChanger = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  const handleChange = (lang: string) => {
    startTransition(() => {
      router.push(pathname + "?" + searchParams.toString(), { locale: lang });
      router.refresh();
    });
  };

  return (
    <button
      className="flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      disabled={isPending}
      onClick={() => handleChange(locale === "en" ? "ar" : "en")}
      aria-label="Change Language"
      title="Change Language"
    >
      <span>{locale === "en" ? "العربية" : "En"}</span>

      <Image
        src={locale === "en" ? "/flags/ar.png" : "/flags/en.png"}
        alt={locale}
        width={30}
        height={30}
        className="w-6 h-6 object-contain"
      />
    </button>
  );
};

export default LanguageChanger;
