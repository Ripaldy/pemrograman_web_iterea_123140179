import React from "react";
import { useBooks } from "../context/BookContext";

const BookList = ({ books, onEdit }) => {
  const { deleteBook } = useBooks();

  if (books.length === 0) {
    return <p className="empty-message">Daftar buku kosong.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <div className="book-details">
            <h4>{book.title}</h4>
            <p>oleh {book.author}</p>
            <span className={`status-badge status-${book.status}`}>
              {book.status}
            </span>
          </div>
          <div className="book-actions">
            <button className="btn-edit" onClick={() => onEdit(book)}>
              Edit
            </button>
            <button className="btn-delete" onClick={() => deleteBook(book.id)}>
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
