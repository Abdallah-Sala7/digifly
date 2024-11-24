import Input from "../common/Input";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useTransition } from "react";
import SpinnerLoading from "../loading/SpinnerLoading";
import MobileInput from "../common/MobileInput";

const UsersForm = ({
  onSubmit,
  errors,
  defaultValues,
}: {
  onSubmit: (formData: FormData) => Promise<void>;
  errors?: any;
  defaultValues?: any;
}) => {
  const t = useTranslations("common");
  const [isPending, startTransition] = useTransition();

  return (
    <form action={(e) => startTransition(() => onSubmit(e))}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="form-group">
          <label className="form-label" htmlFor="FirstName">
            {t("first-name")}
          </label>

          <Input
            type="text"
            name="FirstName"
            id="FirstName"
            required
            placeholder={t("first-name")}
            defaultValue={defaultValues?.FirstName}
          />

          {errors?.FirstName && (
            <p className="form-group">{errors?.FirstName}</p>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="LastName">
            {t("last-name")}
          </label>

          <Input
            type="text"
            name="LastName"
            id="LastName"
            required
            placeholder={t("last-name")}
            defaultValue={defaultValues?.LastName}
          />
          {errors?.LastName && <p className="form-group">{errors?.LastName}</p>}
        </div>

        <div className="form-group col-span-full">
          <label className="form-label" htmlFor="Phone">
            {t("phone")}
          </label>

          <MobileInput
            name="Phone"
            id="Phone"
            required
            value={defaultValues?.Phone}
          />
          {errors?.Phone && <p className="form-group">{errors?.Phone}</p>}
        </div>

        <div className="form-group col-span-full">
          <label className="form-label" htmlFor="Email">
            {t("email")}
          </label>

          <Input
            type="email"
            name="Email"
            id="Email"
            placeholder={t("email")}
            required
            defaultValue={defaultValues?.Email}
          />
          {errors?.Email && <p className="form-group">{errors?.Email}</p>}
        </div>

        <div className="col-span-full">
          <Button
            type="submit"
            variant={"secondary"}
            size={"lg"}
            className="w-full h-11"
            disabled={isPending}
          >
            {isPending ? <SpinnerLoading className="text-white" /> : t("send")}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
