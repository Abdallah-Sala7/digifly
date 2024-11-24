import { cn } from "@/lib/utils";

const SpinnerLoading = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-5 h-5 animate-spin text-secondary border-current border-y-transparent border-4 rounded-full",
        className
      )}
    />
  );
};

export default SpinnerLoading;
