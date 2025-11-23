import React from "react";

const BookFilter = ({ onSearchChange, onStatusChange }) => {
  return (
    <div className="book-filter">
      <input
        type="text"
        className="search-input"
        placeholder="Cari judul atau penulis..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        className="status-select"
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="semua">Semua Status</option>
        <option value="milik">Milik</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
    </div>
  );
};

export default BookFilter;
