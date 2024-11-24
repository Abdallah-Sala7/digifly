import { useTranslations } from "next-intl";
import { TableCell, TableRow } from "../ui/table";
import Image from "next/image";
const EmptyTable = () => {
  const t = useTranslations("common");

  return (
    <TableRow className="hover:bg-background">
      <TableCell className="p-0 h-80" colSpan={100}>
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src={"/no-result.svg"}
            alt={"no data"}
            title={t("no-data")}
            width={250}
            height={250}
            className="object-contain object-center"
            loading="lazy"
          />

          <p className="text-muted-foreground shrink-0 text-sm text-center">
            {t("no-data")}
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default EmptyTable;
