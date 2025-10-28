import { useMemo } from "react";

export function useBookStats(books) {
  const stats = useMemo(() => {
    const total = books.length;
    const owned = books.filter((book) => book.status === "milik").length;
    const reading = books.filter((book) => book.status === "baca").length;
    const toBuy = books.filter((book) => book.status === "beli").length;

    return { total, owned, reading, toBuy };
  }, [books]);

  return stats;
}
