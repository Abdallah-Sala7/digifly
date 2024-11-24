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
import { addUserAction } from "@/api/actions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const AddUser = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("common");

  const handleAddUser = async (formData: FormData) => {
    setErrors({});

    const FirstName = formData.get("FirstName") as string;
    const LastName = formData.get("LastName") as string;
    const Email = formData.get("Email") as string;
    const Phone = formData.get("Phone") as string;

    const body = {
      FirstName,
      LastName,
      Email,
      Phone: Phone.replaceAll(" ", ""),
    };

    const res = await addUserAction(body);

    if (res.isSuccess) {
      toast({
        description: t("user-added-successfully"),
        variant: "success",
      });

      setIsOpen(false);
    } else {
      setErrors(res.data.message);
      toast({
        description: res?.data?.message || t("error-msg"),
        variant: "destructive",
      });
    }
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

        <UsersForm errors={errors} onSubmit={handleAddUser} />
      </DialogContent>
    </Dialog>
  );
};

export default AddUser;
