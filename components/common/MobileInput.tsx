import { InputHTMLAttributes } from "react";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.eg";
import { cn } from "@/lib/utils";

export default function MobileInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <Cleave
      options={{
        phone: true,
        phoneRegionCode: "eg",
      }}
      placeholder="010 000 0000"
      dir="ltr"
      className={cn(
        "h-11 w-full rounded-md border border-input bg-background px-3 py-1 shadow-sm shadow-border/15 transition-colors placeholder:text-muted-foreground focus-visible:border-secondary focus-visible:outline-none focus-visible:ring-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        props?.className
      )}
      {...props}
    />
  );
}
