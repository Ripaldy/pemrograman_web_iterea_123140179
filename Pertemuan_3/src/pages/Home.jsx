import React, { useState, useMemo } from "react";
import { useBooks } from "../context/BookContext";
import BookForm from "../components/BookForm.jsx";
import BookList from "../components/BookList.jsx";
import BookFilter from "../components/BookFilter.jsx";

const Home = () => {
  const { books } = useBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("semua");
  const [editingBook, setEditingBook] = useState(null);

  const filteredBooks = useMemo(() => {
    return books
      .filter((book) => {
        if (statusFilter === "semua") return true;
        return book.status === statusFilter;
      })
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [books, searchTerm, statusFilter]);

  const handleEdit = (book) => {
    setEditingBook(book);
    window.scrollTo(0, 0); // Scroll ke atas untuk melihat form edit
  };

  const handleFormSubmit = () => {
    setEditingBook(null);
  };

  return (
    <div className="home-page">
      <div className="form-section card">
        <BookForm bookToEdit={editingBook} onFormSubmit={handleFormSubmit} />
      </div>

      <div className="list-section card">
        <h2>Daftar Buku Saya</h2>
        <BookFilter
          onSearchChange={setSearchTerm}
          onStatusChange={setStatusFilter}
        />
        <BookList books={filteredBooks} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Home;
