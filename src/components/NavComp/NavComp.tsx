import { useMemo } from "react";
import classes from "./NavComp.module.css";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import LanguageBtn from "./LanguageBtn";
import { useTranslation } from "react-i18next";

export enum NavTabs {
  CV = "CV",
  PROJECTS = "Projects",
  CONTACT = "Contact",
}

export default function NavComp() {
  const { t } = useTranslation();

  function onClickHandler(to: NavTabs) {
    if (to !== NavTabs.CONTACT) {
      toast.dismiss();
    }
  }

  const MenuElements = useMemo(
    () =>
      Object.values(NavTabs).map((element, index) => (
        <li key={`${element}-${index}`}>
          <NavLink
            to={element}
            className={classes.navElement}
            onClick={() => onClickHandler(element)}
          >
            {t(`nav.${element}`)}
          </NavLink>
        </li>
      )),
    [t]
  );

  return (
    <div className={classes.navCtn}>
      <nav className={classes.nav}>
        <img
          className={classes.logo}
          src="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images//logo_header.png"
          alt="LOGO"
        />
        <ul>
          {MenuElements} <LanguageBtn />
        </ul>
      </nav>
    </div>
  );
}
