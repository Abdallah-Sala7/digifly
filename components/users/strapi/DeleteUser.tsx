"use client";

import { deleteUserAction } from "@/api/actions";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import { Button } from "../../ui/button";
import { useTransition } from "react";
import SpinnerLoading from "../../loading/SpinnerLoading";

const DeleteUser = ({ id }: { id: number }) => {
  const { toast } = useToast();
  const t = useTranslations("common");
  const [isPending, startTransition] = useTransition();

  const handleDeleteUser = async () => {
    const res = await deleteUserAction(id);

    if (res.isSuccess) {
      toast({
        description: t("user-deleted-successfully"),
        variant: "success",
      });
    } else {
      toast({
        description: res?.data?.message || t("error-msg"),
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant={"destructive"}
      onClick={() => startTransition(() => handleDeleteUser())}
      size={"sm"}
      disabled={isPending}
    >
      {isPending ? <SpinnerLoading className="text-white" /> : t("delete")}
    </Button>
  );
};

export default DeleteUser;
