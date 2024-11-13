export function formatDateForHref(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" }).toLowerCase();
  return `${year}/${month}`;
}

export function convertMonthToNumber(month: string): string {
  const months = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };

  return months[month.toLowerCase() as keyof typeof months] || "";
}
