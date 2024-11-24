"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { useTranslations } from "next-intl";
import LanguageChanger from "../common/LanguageChanger";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/sections", label: "sections" },
  { href: "/about", label: "about" },
  { href: "/contact", label: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navigation");

  const toggleNav = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  };

  return (
    <nav className={`py-4 h-[75px] fixed top-0 w-full z-40 backdrop-blur-md`}>
      <div className="container">
        <div className="flex items-center gap-6">
          <div className="lg:max-w-48 flex-1 flex justify-start">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Digifly"
                unoptimized
                width={80}
                height={60}
                loading="lazy"
                className="w-20 h-14 object-contain"
              />
            </Link>
          </div>

          <div
            className={cn(
              "fixed top-0 end-0 bottom-0 bg-background z-50 max-w-full w-72 h-dvh duration-300 translate-x-full rtl:-translate-x-full overflow-hidden",
              isOpen && "translate-x-0 rtl:translate-x-0",
              "flex-1 lg:flex-row lg:static lg:w-auto lg:rtl:translate-x-0 lg:translate-x-0 lg:h-auto lg:bg-transparent"
            )}
          >
            <div className="w-full h-20 border-b p-4 relative lg:hidden">
              <Link href="/" className="flex w-fit mx-auto">
                <Image
                  src="/logo.png"
                  alt="Digifly"
                  unoptimized
                  width={80}
                  height={60}
                  loading="lazy"
                  className="w-20 h-14 object-contain"
                />
              </Link>

              <button
                className="absolute top-2 start-2 flex justify-center items-center bg-muted rounded-full w-8 h-8 [&_svg]:size-4"
                onClick={toggleNav}
                aria-label="Close Navigation"
                title="Close Navigation"
              >
                <XIcon />
              </button>
            </div>

            <ul className="p-4 flex flex-col lg:items-center lg:justify-start gap-x-6 gap-y-4 lg:flex-row lg:p-0">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{t(item.label)}</NavLink>
                </li>
              ))}

              <li className="lg:hidden">
                <LanguageChanger />
              </li>
            </ul>
          </div>

          <div className="lg:max-w-48 flex-1 flex justify-end">
            <div className="hidden lg:block">
              <LanguageChanger />
            </div>

            <button
              className="lg:hidden"
              onClick={toggleNav}
              aria-label="Open Navigation"
              title="Open Navigation"
            >
              <MenuIcon size={30} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 h-dvh w-dvw opacity-0 bg-black/80 z-40 invisible transition-opacity duration-150 lg:hidden",
          isOpen && "visible opacity-100"
        )}
        aria-label="Navigation Overlay"
        title="Navigation Overlay"
        role="button"
        tabIndex={0}
        onClick={toggleNav}
      />
    </nav>
  );
};

export default Navbar;
