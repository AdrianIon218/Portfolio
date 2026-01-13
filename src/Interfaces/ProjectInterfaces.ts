import { CategoryIcon, ContentType } from "./UserContextTypes";

export interface IProjectData {
  photoLink: string;
  porjectLink: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  description: string;
  title: string;
  content: ContentType[];
}

export interface ICardProps {
  photoLink: string;
  porjectLink: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  description: string;
  title: string;
  content: ContentType[];
  onLoad: () => void;
  onClick: () => void;
}
