import classes from "./Contact.module.css";
import PhoneNumber from "./PhoneNumber";
import Email from "./Email";
import LinkContact from "./LinkContact";
import React, { useMemo } from "react";
import { ContactType } from "../Context/UserContextTypes";
import { useTranslation } from "react-i18next";

export default function PersonalContacts(props: { contacts: ContactType[] }) {
  const { t } = useTranslation();

  const contactsElements = useMemo(
    () =>
      props.contacts.map((contact, index) => {
        switch (contact.type) {
          case "email":
            return <Email key={contact.label}>{contact.label}</Email>;
          case "phone":
            return (
              <PhoneNumber
                key={contact.number}
                photoName={contact.imageUrl}
                alt={contact.country}
              >
                {contact.number}
              </PhoneNumber>
            );
          case "link":
            return (
              <LinkContact
                key={index}
                href={contact.link}
                name={contact.label}
              />
            );
          default:
            return null;
        }
      }),
    [props.contacts]
  );

  return (
    <React.Fragment>
      <h2 className={classes.contactsHeader}>{t("contacts.title")}</h2>
      <div className={classes.personalContact}>{contactsElements}</div>
    </React.Fragment>
  );
}
