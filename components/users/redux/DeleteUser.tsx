"use client";

import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import { Button } from "../../ui/button";
import { useDispatch } from "react-redux";
import { deleteUser } from "@/store/reducer/usersSlice";

const DeleteUser = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const t = useTranslations("common");

  const handleDeleteUser = () => {
    dispatch(deleteUser(id));
    toast({
      description: t("user-deleted-successfully"),
      variant: "success",
    });
  };

  return (
    <Button variant={"destructive"} onClick={handleDeleteUser} size={"sm"}>
      {t("delete")}
    </Button>
  );
};

export default DeleteUser;
