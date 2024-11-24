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
import { updateUserAction } from "@/api/actions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { UserInformationI } from "@/components/interfaces";

const UpdateUser = ({ user }: { user: UserInformationI }) => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("common");

  const handleUpdateUser = async (formData: FormData) => {
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

    const res = await updateUserAction(body, user.id as number);

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
        <Button variant="outline" size={"sm"}>
          {t("update")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="mb-6">
          <DialogTitle>{t("update")}</DialogTitle>
        </DialogHeader>

        <UsersForm
          errors={errors}
          onSubmit={handleUpdateUser}
          defaultValues={user}
        />
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUser;
