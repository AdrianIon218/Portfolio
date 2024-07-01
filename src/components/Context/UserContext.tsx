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
} from "./UserContextTypes";

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
  const [userData, setUserData] = useState<UserCtxType>(userCtxInit);

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
        const currentContext: UserCtxType = Object.assign({}, userCtxInit);

        currentContext.cvData = {
          name: profileData[0].name as string,
          photoProfile: profileData[0].photoProfile as string,
          bluredPhotoProfile: profileData[0].bluredPhotoProfile as string,
          address: profileData[0].address as string,
          birthdate: profileData[0].birthdate as string,
          jobTitle: profileData[0].jobTitle as string,
          isEuropean: profileData[0].isEuropean as boolean,
          linkedinLink: profileData[0].linkedinLink as string,
          cvLink: profileData[0].cvLink as string,
        };

        currentContext.footerData = {
          name: profileData[0].name as string,
          linkedinLink: profileData[0].linkedinLink as string,
        };

        currentContext.contactArr = contacts
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

        currentContext.educationArr = educationData.map(
          (item) =>
            ({
              institute: item.institute,
              facultyName: item.faculty,
              degree: item.degree,
              fieldOfStudy: item.field,
              period: item.period,
              detailsLink: item.details,
            } as EduationType)
        );

        currentContext.jobsArr = jobsData.map((item) => item as JobType);

        currentContext.softwareSkills = softwareSkills
          .map((item) => item as SoftwareType)
          .sort((a, b) => a.id - b.id);

        currentContext.languageSkills = languageSkills.map(
          (item) => item as LanguageType
        );

        currentContext.projectsArr = projectArr
          .map((item) => item as ProjectType)
          .sort((a, b) => a.id - b.id);

        setUserData(() => currentContext);
      }
    }

    retrieveMainData().catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  );
}
