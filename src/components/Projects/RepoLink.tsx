import { useTranslation } from "react-i18next";
import classes from "./Projects.module.css";

const GithubURL =
  "https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/icon_github.svg";
const BitbucketURL =
  "https://nxssaifxsplrahljuqkr.supabase.co/storage/v1/object/public/images/icon_bitbucket.svg";

type RepoLinkProps = {
  link: string;
  type: "github" | "bitbucket";
};

function RepoLink(props: RepoLinkProps) {
  const { t } = useTranslation();
  const svgStyle = {
    "--svg-url": `url("${props.type === "github" ? GithubURL : BitbucketURL}")`,
  } as React.CSSProperties;

  return (
    <div className={classes.repoLink}>
      <div className={classes.iconLink} style={svgStyle} />
      <a href={props.link} target="_blank" rel="noreferrer">
        {t("viewRepo")}
      </a>
    </div>
  );
}

export default RepoLink;
