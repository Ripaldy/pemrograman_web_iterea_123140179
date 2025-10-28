import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookForm from "../components/BookForm.jsx";
import { BookProvider } from "../context/BookContext";

// Helper function untuk merender komponen dengan Provider
const renderWithProvider = (ui) => {
  return render(<BookProvider>{ui}</BookProvider>);
};

describe("BookForm Component", () => {
  test("1. renders the form correctly", () => {
    renderWithProvider(<BookForm />);
    expect(screen.getByLabelText(/Judul/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Penulis/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Tambah Buku/i })
    ).toBeInTheDocument();
  });

  test("2. shows error messages for empty fields", () => {
    renderWithProvider(<BookForm />);
    fireEvent.click(screen.getByRole("button", { name: /Tambah Buku/i }));
    expect(screen.getByText(/Judul tidak boleh kosong/i)).toBeInTheDocument();
    expect(screen.getByText(/Penulis tidak boleh kosong/i)).toBeInTheDocument();
  });

  test("3. updates input fields on change", () => {
    renderWithProvider(<BookForm />);
    const titleInput = screen.getByLabelText(/Judul/i);
    fireEvent.change(titleInput, { target: { value: "New Book" } });
    expect(titleInput.value).toBe("New Book");
  });
});
