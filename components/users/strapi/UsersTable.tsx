import { getAllUsers } from "@/api/mainApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTranslations } from "next-intl/server";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import EmptyTable from "../../loading/EmptyTable";
import { UserInformationI } from "@/components/interfaces";

const UsersTable = async ({ search }: { search?: string }) => {
  const users = await getAllUsers({ search });
  const t = await getTranslations("common");

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
        {users.isSuccess && users?.data?.length ? (
          users?.data?.map((user: UserInformationI) => (
            <TableRow key={user.id}>
              <TableCell>{user.FirstName}</TableCell>
              <TableCell>{user.LastName}</TableCell>
              <TableCell>{user.Phone}</TableCell>
              <TableCell>{user.Email}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <UpdateUser user={user} />

                  <DeleteUser id={user.id as number} />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <EmptyTable />
        )}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
