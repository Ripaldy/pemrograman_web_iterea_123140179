// src/components/BookForm.jsx

import React, { useState, useEffect } from "react";
import { useBooks } from "../context/BookContext";

const BookForm = ({ bookToEdit, onFormSubmit }) => {
  const { addBook, updateBook } = useBooks();
  const [book, setBook] = useState({ title: "", author: "", status: "milik" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    } else {
      setBook({ title: "", author: "", status: "milik" });
    }
  }, [bookToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!book.title.trim()) tempErrors.title = "Judul tidak boleh kosong.";
    if (!book.author.trim()) tempErrors.author = "Penulis tidak boleh kosong.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (book.id) {
        updateBook(book);
      } else {
        addBook(book);
      }
      setBook({ title: "", author: "", status: "milik" }); // Reset form
      if (onFormSubmit) onFormSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h3>{book.id ? "Edit Buku" : "Tambah Buku Baru"}</h3>
      <div className="form-group">
        {/* ▼▼▼ PERUBAHAN DI SINI ▼▼▼ */}
        <label htmlFor="title">Judul:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>
      <div className="form-group">
        {/* ▼▼▼ PERUBAHAN DI SINI ▼▼▼ */}
        <label htmlFor="author">Penulis:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        {errors.author && <p className="error-text">{errors.author}</p>}
      </div>
      <div className="form-group">
        {/* ▼▼▼ PERUBAHAN DI SINI ▼▼▼ */}
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={book.status}
          onChange={handleChange}
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>
      <button type="submit" className="btn-submit">
        {book.id ? "Update Buku" : "Tambah Buku"}
      </button>
    </form>
  );
};

export default BookForm;
