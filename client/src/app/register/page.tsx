"use client";
import {
  schema,
  SchemaType,
} from "@/features/auth/schemas/registerEmail.schema";
import { validateEmail } from "@/features/auth/services/register/validateEmail";
import AlertMessage from "@/features/shared/components/alertMessage/AlertMessage";
import Button from "@/features/shared/components/button/button";
import FormField from "@/features/shared/components/formfield/FormField";
import EmailIcon from "@/features/shared/components/icons/EmailIcon";
import GoogleIcon from "@/features/shared/components/icons/GoogleIcon";
import LoadingIcon from "@/features/shared/components/icons/LoadingIcon";
import { cn } from "@/features/shared/lib/shadcn";
import { sleep } from "@/features/shared/lib/sleep";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const t = useTranslations("Register");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleForm = async (data: SchemaType) => {
    try {
      setLoading(true);
      await sleep(1000);
      const { isFree } = await validateEmail(data.email);
      if (!isFree) {
        setErrorMessage("Este correo ya esta en uso.");
        setTimeout(() => setErrorMessage(""), 3000);
        return;
      }
      router.push(
        `/register/createPassword?email=${encodeURIComponent(data.email)}`,
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-screen w-screen bg-bg-1 lg:bg-bg-2 lg:grid lg:place-items-center">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="bg-transparent lg:bg-bg-1 rounded-lg py-10 px-7 w-full max-w-md m-auto lg:max-w-[400px] lg:border lg:border-border-2 grid gap-6 animate-bottom-in"
      >
        <div className="grid gap-2">
          <h1 className="text-xl lg:text-center font-semibold">
            {t("title.text")}
          </h1>
          <p className="text-text-2 text-sm lg:text-center">
            {t("title.description")}
          </p>
        </div>
        <Button type="button" variant="outline">
          <GoogleIcon className="h-5 w-5" />
          {t("social.google")}
        </Button>
        <div className="flex items-center justify-center relative">
          <span className="text-text-2 text-sm bg-bg-1 px-4 z-10 relative">
            {t("or")}
          </span>
          <div className="w-full absolute h-[1px] bg-border-2 m-auto" />
        </div>

        <FormField
          placeholder={t("form.fields.email.placeholder")}
          label={t("form.fields.email.label")}
          error={errors.email && t(errors.email.message!)}
          Icon={<EmailIcon className="w-5 h-5 text-text-2" />}
          {...register("email")}
        />
        {errorMessage && <AlertMessage text={errorMessage} />}
        <Button type="submit">
          {loading && (
            <LoadingIcon className="w-5 h-5 text-text-3 animate-spin" />
          )}
          {t("form.submit")}
        </Button>
        <p className="text-sm lg:text-center">
          {t("form.register.text")}
          <Link href="/login" className="text-primary font-semibold">
            {t("form.register.link")}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
