"use client";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

const NavLink = ({
  href,
  children,
  ...props
}: HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const locale = useLocale();
  const isActive =
    pathname === `/${locale}/${href}` ||
    (href === "/" && pathname === `/${locale}`);

  return (
    <Link
      href={href}
      className={cn(
        "font-semibold duration-300",
        "hover:text-secondary",
        isActive && "text-secondary",
        props.className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
