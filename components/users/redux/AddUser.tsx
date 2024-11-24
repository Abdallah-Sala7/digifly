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
import { setUser } from "@/store/reducer/usersSlice";

const ReduxAddUser = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("common");

  const handleAddUser = async (formData: FormData) => {
    const FirstName = formData.get("FirstName") as string;
    const LastName = formData.get("LastName") as string;
    const Email = formData.get("Email") as string;
    const Phone = formData.get("Phone") as string;

    const body = {
      FirstName,
      LastName,
      Email,
      Phone,
    };

    dispatch(setUser(body));

    toast({
      description: t("user-added-successfully"),
      variant: "success",
    });

    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" size={"lg"} className="h-11">
          {t("add-user")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="mb-6">
          <DialogTitle>{t("add-user")}</DialogTitle>
        </DialogHeader>

        <UsersForm onSubmit={handleAddUser} />
      </DialogContent>
    </Dialog>
  );
};

export default ReduxAddUser;
