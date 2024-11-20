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

export function cleanTitle(title: string) {
  // List of words (cities, states, prepositions) to be removed
  const wordsToRemove = [
    "Atlanta",
    "Fort",
    "Lauderdale",
    "Sunrise",
    "Sunrise",
    "Sandy",
    "Springs",
    "Pembroke",
    "Pines",
    "Saint",
    "Croix",
    "Miami",
    "Gardens",
    "Plantation",
    "Saint",
    "Thomas",
    "Pompano",
    "Beach",
    "Alpharetta",
    "Hollywood",
    "FL",
    "Marietta",
    "Miami",
    "Hialeah",
    "Gainesville",
    "Miramar",
    "Coral",
    "Gables",
    "Florida",
    "Alpharetta",
    "Miami",
    "Georgia",
    "in",
    "for",
    "the",
    "U.S.",
    "Virgin",
    "Islands",
    "Fischer",
    "Redavid",
    "PLLC",
    "Protecting",
    "Your",
    "Family",
    "FREE",
    "Consultations!",
    "Aid",
    "After",
    "Mistakes",
    "Your",
    "Health",
    "Matters",
    "Attorneys",
    "Law",
    "Under",
    "Justice",
  ];

  // Helper function to check if a word is in the removal list (case-insensitive)
  function isRemovable(word: string) {
    return wordsToRemove.some(
      (w) => w.toLowerCase() === word.replace(/[^\w]/g, "").toLowerCase()
    );
  }

  // Remove text after "|"
  let [beforePipe] = title.split("|");

  // Split into words
  let words = beforePipe.trim().split(/\s+/);

  // Remove initial words that are in the removal list
  while (words.length && isRemovable(words[0])) {
    words.shift();
  }

  // Remove final words that are in the removal list
  while (words.length && isRemovable(words[words.length - 1])) {
    words.pop();
  }

  // Join the remaining words
  return words.join(" ");
}
