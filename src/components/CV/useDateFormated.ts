import i18n from "../../i18n";

const useDateFormated = (date: string) => {
  if (!date) return null;

  if (date === "present") return i18n.t("present");

  const actualDate = new Date(date);
  const monthNames = (
    i18n.t("monthNames", { returnObjects: true }) as { name: string }[]
  ).map((item) => item.name);

  const day = actualDate.getDate();
  const month = monthNames[actualDate.getMonth()];
  const year = actualDate.getFullYear();
  const dateFormated = `${day} ${month} ${year}`;
  return dateFormated;
};

export default useDateFormated;
