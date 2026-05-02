import { PropsWithChildren } from "react";

export interface IAvatarProps {
  title: string;
  icon: JSX.Element;
}

export interface ILinkButtonProps extends PropsWithChildren {
  href: string;
}

export interface IGradientButtonProps extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
}
