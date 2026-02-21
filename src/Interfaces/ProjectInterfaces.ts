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

export type SoftwareType = {
  id: number;
  name: string;
  orderNum: number;
};

export type LanguageType = {
  name: string;
  level: string;
};

export type SkillListProps = {
  softwareSkills: SoftwareType[];
  languageSkills: LanguageType[];
};
