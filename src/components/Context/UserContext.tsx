import { createContext, useEffect, useState } from "react";
import React from "react";
import { supabase } from "../../supabse";
import { EducationProps as EduationType } from "../CV/Education";
import { JobProps as JobType } from "../CV/Job";
import { LanguageType, SoftwareType } from "../CV/SkillSection";
import {
  ContactType,
  PhoneContact,
  EmailContact,
  LinkContact,
  ProjectType,
  UserCtxType,
  ProfileData,
  LangProp,
} from "./UserContextTypes";
import { useTranslation } from "react-i18next";

const userCtxInit: UserCtxType = {
  cvData: false,
  footerData: false,
  contactArr: false,
  projectsArr: false,
  educationArr: false,
  softwareSkills: false,
  languageSkills: false,
  jobsArr: false,
};

export const UserContext = createContext(userCtxInit);

export function UserContextProvider(props: React.PropsWithChildren) {
  const { i18n } = useTranslation();
  const [userData, setUserData] = useState<UserCtxType>(userCtxInit);
  const [dataContainer, setDataContainer] = useState<
    | {
        profiles: (ProfileData & LangProp)[];
        contacts: ContactType[];
        education: (EduationType & LangProp)[];
        jobs: (JobType & LangProp)[];
        softwareSkills: SoftwareType[];
        languageSkills: (LanguageType & LangProp)[];
        projects: (ProjectType & LangProp)[];
      }
    | undefined
  >(undefined);

  useEffect(() => {
    async function retrieveMainData() {
      const { data: profileData, error: profileError } = await supabase
        .from("Profile")
        .select("*");

      let { data: contacts, error: contactsError } = await supabase
        .from("Contact")
        .select("*");

      let { data: educationData, error: educationError } = await supabase
        .from("Education")
        .select("*");

      let { data: jobsData, error: jobsError } = await supabase
        .from("Job")
        .select("*");

      let { data: softwareSkills, error: softwareError } = await supabase
        .from("SoftwareSkill")
        .select("*");

      let { data: languageSkills, error: languageError } = await supabase
        .from("LanguageSkill")
        .select("*");

      let { data: projectArr, error: errorProjects } = await supabase
        .from("Project")
        .select("*");

      if (
        !(!profileError && profileData.length > 0) ||
        !(!contactsError && contacts && contacts.length > 0) ||
        !(!educationError && educationData && educationData.length > 0) ||
        !(!jobsError && jobsData && jobsData.length > 0) ||
        !(!softwareError && softwareSkills && softwareSkills.length > 0) ||
        !(!languageError && languageSkills && languageSkills.length > 0) ||
        !(!errorProjects && projectArr && projectArr.length > 0)
      ) {
        return new Error("An error has occurred! Please try again later !");
      } else {
        const profiles = profileData.map((profile) => ({
          name: profile.name as string,
          photoProfile: profile.photoProfile as string,
          bluredPhotoProfile: profile.bluredPhotoProfile as string,
          address: profile.address as string,
          birthdate: profile.birthdate as string,
          jobTitle: profile.jobTitle as string,
          isEuropean: profile.isEuropean as boolean,
          linkedinLink: profile.linkedinLink as string,
          cvLink: profile.cvLink as string,
          lang: profile.lang as string,
        }));

        const allContacts = contacts
          .map((contact) => {
            switch (contact.type) {
              case "phone":
                return {
                  country: contact.country,
                  number: contact.label,
                  imageUrl: contact.phonePhoto,
                  type: "phone",
                } as PhoneContact;
              case "email":
                return {
                  label: contact.label,
                  type: "email",
                } as EmailContact;
              case "link":
                return {
                  label: contact.label,
                  link: contact.link,
                  type: "link",
                } as LinkContact;
            }
          })
          .filter((item) => item !== undefined) as ContactType[];

        const allSoftwareSkills = softwareSkills
          .map((item) => item as SoftwareType)
          .sort((a, b) => a.id - b.id);

        const educationArr = educationData.map(
          (item) =>
            ({
              institute: item.institute,
              facultyName: item.faculty,
              degree: item.degree,
              fieldOfStudy: item.field,
              period: item.period,
              detailsLink: item.details,
              lang: item.lang,
            } as EduationType & LangProp)
        );

        const jobsArr = jobsData as (JobType & LangProp)[];

        const allLanguageSkills = languageSkills as (LanguageType & LangProp)[];

        const allProjects = (projectArr as (ProjectType & LangProp)[]).sort(
          (a, b) => a.id - b.id
        );

        setDataContainer(() => ({
          profiles,
          contacts: allContacts,
          softwareSkills: allSoftwareSkills,
          education: educationArr,
          jobs: jobsArr,
          languageSkills: allLanguageSkills,
          projects: allProjects,
        }));
      }
    }

    retrieveMainData().catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    function updateCtxByLang(Lang: string) {
      const currentContext: UserCtxType = Object.assign({}, userCtxInit);

      const selectedProfileData =
        dataContainer?.profiles.find((item) => item.lang === Lang) ??
        dataContainer?.profiles[0];

      currentContext.cvData = selectedProfileData as ProfileData;

      currentContext.footerData = {
        name: selectedProfileData!.name as string,
        linkedinLink: selectedProfileData!.linkedinLink as string,
      };

      currentContext.contactArr = dataContainer!.contacts;

      currentContext.softwareSkills = dataContainer!.softwareSkills;

      currentContext.educationArr = dataContainer?.education.filter(
        (item) => item.lang === Lang
      ) as EduationType[];

      currentContext.jobsArr = dataContainer?.jobs.filter(
        (item) => item.lang === Lang
      ) as JobType[];

      currentContext.languageSkills = dataContainer?.languageSkills.filter(
        (item) => item.lang === Lang
      ) as LanguageType[];

      currentContext.projectsArr = dataContainer?.projects.filter(
        (item) => item.lang === Lang
      ) as ProjectType[];

      setUserData(() => currentContext);
    }

    if (dataContainer) updateCtxByLang(i18n.language);
  }, [dataContainer, i18n.language]);

  console.log(userData);

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}
