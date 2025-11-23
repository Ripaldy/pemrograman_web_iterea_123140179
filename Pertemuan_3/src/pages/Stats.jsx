import React from "react";
import { useBooks } from "../context/BookContext";
import { useBookStats } from "../hooks/useBookStats";

const Stats = () => {
  const { books } = useBooks();
  const { total, owned, reading, toBuy } = useBookStats(books);

  return (
    <div className="stats-page card">
      <h2>Statistik Buku</h2>
      <ul className="stats-list">
        <li>
          <strong>Total Buku:</strong> <span>{total}</span>
        </li>
        <li>
          <strong>Buku yang Dimiliki:</strong> <span>{owned}</span>
        </li>
        <li>
          <strong>Buku yang Sedang Dibaca:</strong> <span>{reading}</span>
        </li>
        <li>
          <strong>Buku yang Ingin Dibeli:</strong> <span>{toBuy}</span>
        </li>
      </ul>
    </div>
  );
};

export default Stats;
