"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { useTranslations } from "next-intl";
import UsersForm from "../UsersForm";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/store/reducer/usersSlice";
import { UserInformationI } from "@/components/interfaces";

const UpdateUser = ({ user }: { user: UserInformationI }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("common");

  const handleUpdateUser = async (formData: FormData) => {
    const FirstName = formData.get("FirstName") as string;
    const LastName = formData.get("LastName") as string;
    const Email = formData.get("Email") as string;
    const Phone = formData.get("Phone") as string;

    const body = {
      ...user,
      FirstName,
      LastName,
      Email,
      Phone,
    };

    dispatch(updateUser(body));

    toast({
      description: t("user-added-successfully"),
      variant: "success",
    });

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size={"sm"}>
          {t("update")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="mb-6">
          <DialogTitle>{t("update")}</DialogTitle>
        </DialogHeader>

        <UsersForm onSubmit={handleUpdateUser} defaultValues={user} />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;
