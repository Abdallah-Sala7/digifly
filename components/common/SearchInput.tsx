"use client";

import { SearchIcon } from "lucide-react";
import { useTransition } from "react";
import Input from "./Input";
import { useRouter, useSearchParams } from "next/navigation";
import SpinnerLoading from "../loading/SpinnerLoading";

const SearchInput = ({
  className,
  searchKey = "search",
  placeholder = "Search...",
}: {
  className?: string;
  searchKey?: string;
  placeholder?: string;
}) => {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const search = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  const handleSearch = (formData: FormData) => {
    startTransition(() => {
      const value = formData.get(searchKey);

      if (value) {
        search.set(searchKey, value.toString());
        router.push(`?${search.toString()}`);
      } else {
        search.delete(searchKey);
        router.push(`?${search.toString()}`, { scroll: false });
      }
    });
  };

  return (
    <form action={handleSearch}>
      <div className="relative">
        <span className="w-10 h-full absolute top-0 start-0 flex items-center justify-center">
          {isPending ? (
            <SpinnerLoading />
          ) : (
            <SearchIcon size={18} className="text-muted-foreground" />
          )}
        </span>

        <Input
          type="search"
          placeholder={placeholder}
          className={"ps-10 " + className}
          name={searchKey}
          defaultValue={search.get(searchKey) || ""}
          disabled={isPending}
        />
      </div>
    </form>
  );
};

export default SearchInput;
