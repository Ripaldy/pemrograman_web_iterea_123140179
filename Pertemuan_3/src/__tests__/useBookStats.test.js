import { renderHook } from "@testing-library/react";
import { useBookStats } from "../hooks/useBookStats";

const mockBooks = [
  { id: 1, title: "A", author: "X", status: "milik" },
  { id: 2, title: "B", author: "Y", status: "baca" },
  { id: 3, title: "C", author: "Z", status: "milik" },
  { id: 4, title: "D", author: "W", status: "beli" },
];

describe("useBookStats Hook", () => {
  test("4. should calculate stats correctly", () => {
    const { result } = renderHook(() => useBookStats(mockBooks));

    expect(result.current.total).toBe(4);
    expect(result.current.owned).toBe(2);
    expect(result.current.reading).toBe(1);
    expect(result.current.toBuy).toBe(1);
  });

  test("5. should return zero for all stats with empty array", () => {
    const { result } = renderHook(() => useBookStats([]));

    expect(result.current.total).toBe(0);
    expect(result.current.owned).toBe(0);
    expect(result.current.reading).toBe(0);
    expect(result.current.toBuy).toBe(0);
  });
});
