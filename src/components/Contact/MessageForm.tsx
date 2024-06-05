import { FieldValues, useForm } from "react-hook-form";
import classes from "./Contact.module.css";
import toast, { useToasterStore } from "react-hot-toast";
import { supabase } from "../../supabse";
import { useState } from "react";

export default function MessageForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isMessageSending, setIsMessageSending] = useState(false);
  const { toasts } = useToasterStore();
  const isToastAlreadyshown = toasts.filter((t) => t.visible).length > 0;
  const disableForm = isMessageSending || isToastAlreadyshown;

  async function onSubmit(formData: FieldValues) {
    const { name, email, message } = formData;
    const currentDate = new Date().toLocaleDateString();
    setIsMessageSending(true);

    const { error } = await supabase
      .from("Message")
      .insert([{ name, email, message, date: currentDate }])
      .select();

    if (!error) {
      toast.success("Message sent!");
      reset();
    } else {
      toast.error("An error has occurred, please try again later!");
    }
    setIsMessageSending(false);
  }

  return (
    <section>
      <h2>Write a message ?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className={classes.noBulletList}>
          <li>
            <label htmlFor="name">
              Name <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="name"
              type="text"
              placeholder="ex: Andrew"
              required
              disabled={disableForm}
              {...register("name")}
            />
          </li>
          <li>
            <label htmlFor="email">
              Email <span className={classes.redSpan}>*</span>{" "}
            </label>
            <input
              id="email"
              type="email"
              placeholder="ex: name@yahoo.com"
              required
              disabled={disableForm}
              {...register("email")}
            />
          </li>
          <li>
            <textarea
              rows={10}
              placeholder="Message ..."
              required
              disabled={disableForm}
              {...register("message")}
            ></textarea>
          </li>
          <li>
            <button className={classes["submit-btn"]} disabled={disableForm}>
              Send
            </button>
          </li>
        </ul>
      </form>
    </section>
  );
}
