import { useMemo, useState } from "react";
import classes from "./NavComp.module.css";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

export enum NavTabs {
  CV = "CV",
  PROJECTS = "Projects",
  CONTACT = "Contact",
}

export default function NavComp() {
  const [currentNav, setCurrentNav] = useState<NavTabs>(NavTabs.CV);

  function onClickHandler(to: NavTabs) {
    setCurrentNav(to);
    if (to !== NavTabs.CONTACT) {
      toast.dismiss();
    }
  }

  const MenuElements = useMemo(() => {
    return Object.values(NavTabs).map((element, index) => (
      <li key={`${element}-${index}`}>
        <NavLink
          to={element}
          className={classes.nav_element}
          onClick={() => onClickHandler(element)}
        >
          {element}
        </NavLink>
      </li>
    ));
  }, [currentNav]);

  return (
    <nav className={classes.nav}>
      <img
        className={classes.logo}
        src="https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/MyLogo.png"
        alt="LOGO"
      />
      <ul>{MenuElements}</ul>
    </nav>
  );
}
