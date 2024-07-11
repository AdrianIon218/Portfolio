import { EducationProps as EduationType } from "../CV/Education";
import { JobProps as JobType } from "../CV/Job";
import { LanguageType, SoftwareType } from "../CV/SkillSection";

export type ProfileData = {
  name: string;
  photoProfile: string;
  bluredPhotoProfile: string;
  address: string;
  birthdate: string;
  jobTitle: string;
  isEuropean: boolean;
  linkedinLink: string;
  cvLink: string;
};

export type FooterDataType = { name: string; linkedinLink: string };

export interface IContact {
  type: "phone" | "email" | "link";
}

export interface PhoneContact extends IContact {
  country: string;
  number: string;
  imageUrl: string;
  type: "phone";
}

export interface EmailContact extends IContact {
  label: string;
  type: "email";
}

export interface LinkContact extends IContact {
  label: string;
  link: string;
  type: "link";
}

export type ContactType = EmailContact | PhoneContact | LinkContact;

export type CategoryIcon = { name: string; photo: string };

export type LangProp = { lang: string };

type ContentParagraph = {
  type: "p";
  text: string;
};

type ContentRepo = {
  type: "github" | "bitbucket";
  link: string;
};

type ContentDependencies = {
  type: "dependencies";
  dependencies: string[];
};

type ContentQrCode = {
  type: "qr_code";
  image: string;
};

export type ContentType =
  | ContentParagraph
  | ContentRepo
  | ContentDependencies
  | ContentQrCode;

export type ProjectType = {
  id: number;
  title: string;
  link: string;
  photo: string;
  description: string;
  linkBtnLabel: string;
  categories: CategoryIcon[];
  content: ContentType[];
};

export type UserCtxType = {
  cvData: false | ProfileData;
  footerData: false | FooterDataType;
  contactArr: false | ContactType[];
  projectsArr: false | ProjectType[];
  educationArr: false | EduationType[];
  softwareSkills: false | SoftwareType[];
  languageSkills: false | LanguageType[];
  jobsArr: false | JobType[];
};
