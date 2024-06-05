const monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const useDateFormated = (date: string) => {
  if (!date) return null;

  if (date === "present") return "present";

  const actualDate = new Date(date);

  const day = actualDate.getDate();
  const month = monthName[actualDate.getMonth()];
  const year = actualDate.getFullYear();
  const dateFormated = `${day} ${month}. ${year}`;
  return dateFormated;
};

export default useDateFormated;
