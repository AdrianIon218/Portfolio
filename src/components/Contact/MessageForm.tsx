import { FieldValues, useForm } from "react-hook-form";
import classes from "./Contact.module.css";
import toast, { useToasterStore } from "react-hot-toast";
import { supabase } from "../../supabse";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MessageForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isMessageSending, setIsMessageSending] = useState(false);
  const { toasts } = useToasterStore();
  const isToastAlreadyshown = toasts.filter((t) => t.visible).length > 0;
  const disableForm = isMessageSending || isToastAlreadyshown;
  const { t } = useTranslation();

  async function onSubmit(formData: FieldValues) {
    const { name, email, message } = formData;
    const currentDate = new Date().toLocaleDateString();
    setIsMessageSending(true);

    const { error } = await supabase
      .from("Message")
      .insert([{ name, email, message, date: currentDate }])
      .select();

    if (!error) {
      toast.success(t("contacts.messageSent"));
      reset();
    } else {
      toast.error(t("contacts.errorMessage"));
    }
    setIsMessageSending(false);
  }

  return (
    <section>
      <h2>{t("contacts.contactsTitle") as string}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={classes.noBulletList}>
          <li>
            <label htmlFor="name">
              {t("contacts.name")} <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder={t("example", {
                example: t("contacts.namePlaceholder"),
              })}
              required
              disabled={disableForm}
              {...register("name")}
            />
          </li>
          <li>
            <label htmlFor="email">
              {t("contacts.email")} <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("example", {
                example: t("contacts.emailPlaceholder"),
              })}
              required
              disabled={disableForm}
              {...register("email")}
            />
          </li>
          <li>
            <textarea
              rows={10}
              placeholder={t("contacts.messagePlaceholder")}
              required
              disabled={disableForm}
              {...register("message")}
            ></textarea>
          </li>
          <li>
            <button className={classes["submit-btn"]} disabled={disableForm}>
              {t("contacts.send")}
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
}
