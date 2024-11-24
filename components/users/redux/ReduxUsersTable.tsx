"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import EmptyTable from "../../loading/EmptyTable";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ReduxUsersTable = ({ search }: { search?: string }) => {
  const t = useTranslations("common");
  const { users } = useSelector((state: RootState) => state.users);

  const filteredUsers = users.filter((user) => {
    return user.FirstName?.toLowerCase().includes(search?.toLowerCase() || "");
  });

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
        {filteredUsers?.length ? (
          filteredUsers?.map((user) => (
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

export default ReduxUsersTable;
