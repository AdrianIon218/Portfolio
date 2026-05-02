import { CategoryIcon, ContentType } from "./UserContextTypes";

export interface IProjectData {
  photoLink: string;
  projectLink: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  description: string;
  title: string;
  content: ContentType[];
}

export interface ICardProps {
  photoLink: string;
  projectLink: string;
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

export type ISkillListProps = {
  softwareSkills: SoftwareType[];
  languageSkills: LanguageType[];
};

export interface IEducationProps {
  institute: string;
  facultyName: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  location: [number, number] | null;
  detailsLink?: string;
}

export interface ILocationMapProps {
  position: [number, number];
  title: string;
}

export interface IEducationSectionProps {
  educationArr: IEducationProps[];
}

export interface IJobProps {
  id: number;
  position: string;
  startDate: string;
  endDate: string;
  companyName: string;
  location: string;
  description: string;
  order: number;
}

export interface IJobSectionProps {
  jobsArr: IJobProps[];
}

export interface IProjectPanelProps {
  content: ContentType[];
  title: string;
  link: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  onClosePanel: () => void;
}
