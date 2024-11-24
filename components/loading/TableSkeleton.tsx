import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import { Skeleton } from "../ui/skeleton";

const TableSkeleton = () => {
  const t = useTranslations("common");
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("first-name")}</TableHead>
          <TableHead>{t("last-name")}</TableHead>
          <TableHead>{t("phone")}</TableHead>
          <TableHead>{t("email")}</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell>
            {" "}
            <Skeleton className="h-4 w-[200px]" />
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
