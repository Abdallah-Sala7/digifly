"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("common");

  return (
    <footer className="bg-primary py-4">
      <div className="flex items-center justify-center gap-1.5">
        <p
          className="text-sm text-primary-foreground text-center"
          dangerouslySetInnerHTML={{
            __html: t("copyright")
              .replace("__copy__", " &copy;")
              .replace("__year__", new Date().getFullYear().toString()),
          }}
        ></p>
      </div>
    </footer>
  );
};

export default Footer;
