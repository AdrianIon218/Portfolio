import classes from "./Footer.module.css";
import ButtonIcon from "../CustomedElements/ButtonIcon";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { useLocation } from "react-router-dom";
import { NavTabs } from "../NavComp/NavComp";

export default function Footer() {
  const footerData = { ...useContext(UserContext).footerData };
  const isContactPage = useLocation().pathname.slice(1) === NavTabs.CONTACT;

  return (
    <footer className={classes.footerCtn}>
      <div className={classes.footer}>
        <div>
          <p>{footerData.name}</p>
        </div>
        <div className={classes.socialMedia}>
          {footerData.linkedinLink && (
            <ButtonIcon
              img="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/linkedin.png"
              alt="Linkedin"
              linkExternalPage={footerData.linkedinLink}
            />
          )}
          <ButtonIcon
            img="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/contact-icon.png"
            alt="Contact"
            linkInternalPage="Contact"
            disable={isContactPage}
          />
        </div>
      </div>
    </footer>
  );
}
