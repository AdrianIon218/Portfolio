import MessageForm from "./MessageForm";
import PersonalContacts from "./PersonalContacts";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import LoadingSpinner from "../Layout/LoadingSpinner";
import classes from "./Contact.module.css";

export default function ContactPage() {
  const { contactArr } = useContext(UserContext);

  if (!contactArr) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.contactContainer}>
      <PersonalContacts contacts={contactArr} />
      <MessageForm />
    </div>
  );
}
