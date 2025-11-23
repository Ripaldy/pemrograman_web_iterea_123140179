from abc import ABC, abstractmethod
from typing import List, Optional


class LibraryItem(ABC):
    """Abstract base class untuk semua item perpustakaan"""
    
    def __init__(self, item_id: str, title: str, author: str, year: int):
        self._item_id = item_id  # Protected attribute
        self._title = title
        self._author = author
        self._year = year
        self._is_borrowed = False
    
    @property
    def item_id(self) -> str:
        """Property decorator untuk mengakses item_id"""
        return self._item_id
    
    @property
    def title(self) -> str:
        return self._title
    
    @property
    def is_borrowed(self) -> bool:
        return self._is_borrowed
    
    @abstractmethod
    def get_item_type(self) -> str:
        """Abstract method yang harus diimplementasikan oleh subclass"""
        pass
    
    @abstractmethod
    def display_info(self) -> str:
        """Abstract method untuk menampilkan informasi item"""
        pass
    
    def borrow(self) -> bool:
        """Method untuk meminjam item"""
        if not self._is_borrowed:
            self._is_borrowed = True
            return True
        return False
    
    def return_item(self) -> bool:
        """Method untuk mengembalikan item"""
        if self._is_borrowed:
            self._is_borrowed = False
            return True
        return False


class Book(LibraryItem):
    """Subclass untuk buku"""
    
    def __init__(self, item_id: str, title: str, author: str, year: int, isbn: str):
        super().__init__(item_id, title, author, year)
        self.isbn = isbn
    
    def get_item_type(self) -> str:
        """Implementasi polymorphism"""
        return "Book"
    
    def display_info(self) -> str:
        """Implementasi polymorphism"""
        status = "Dipinjam" if self._is_borrowed else "Tersedia"
        return f"[BUKU] {self._title} oleh {self._author} ({self._year}) - ISBN: {self.isbn} - Status: {status}"


class Magazine(LibraryItem):
    """Subclass untuk majalah"""
    
    def __init__(self, item_id: str, title: str, author: str, year: int, issue_number: int):
        super().__init__(item_id, title, author, year)
        self.issue_number = issue_number
    
    def get_item_type(self) -> str:
        """Implementasi polymorphism"""
        return "Magazine"
    
    def display_info(self) -> str:
        """Implementasi polymorphism"""
        status = "Dipinjam" if self._is_borrowed else "Tersedia"
        return f"[MAJALAH] {self._title} oleh {self._author} ({self._year}) - Edisi: {self.issue_number} - Status: {status}"


class Library:
    """Class untuk mengelola koleksi perpustakaan"""
    
    def __init__(self, name: str):
        self.name = name
        self.__items: List[LibraryItem] = []  # Private attribute dengan encapsulation
    
    def add_item(self, item: LibraryItem) -> None:
        """Menambahkan item ke perpustakaan"""
        self.__items.append(item)
        print(f"✓ Item '{item.title}' berhasil ditambahkan ke perpustakaan")
    
    def display_all_items(self) -> None:
        """Menampilkan semua item di perpustakaan"""
        if not self.__items:
            print("Perpustakaan masih kosong")
            return
        
        print(f"\n{'='*70}")
        print(f"DAFTAR KOLEKSI PERPUSTAKAAN: {self.name}")
        print(f"{'='*70}")
        for item in self.__items:
            print(item.display_info())
        print(f"{'='*70}\n")
    
    def search_by_title(self, title: str) -> Optional[LibraryItem]:
        """Mencari item berdasarkan judul"""
        for item in self.__items:
            if item.title.lower() == title.lower():
                return item
        return None
    
    def search_by_id(self, item_id: str) -> Optional[LibraryItem]:
        """Mencari item berdasarkan ID"""
        for item in self.__items:
            if item.item_id == item_id:
                return item
        return None
    
    def borrow_item(self, item_id: str) -> bool:
        """Meminjam item dari perpustakaan"""
        item = self.search_by_id(item_id)
        if item:
            if item.borrow():
                print(f"✓ Berhasil meminjam: {item.title}")
                return True
            else:
                print(f"✗ Item '{item.title}' sedang dipinjam")
                return False
        else:
            print(f"✗ Item dengan ID '{item_id}' tidak ditemukan")
            return False
    
    def return_item(self, item_id: str) -> bool:
        """Mengembalikan item ke perpustakaan"""
        item = self.search_by_id(item_id)
        if item:
            if item.return_item():
                print(f"✓ Berhasil mengembalikan: {item.title}")
                return True
            else:
                print(f"✗ Item '{item.title}' tidak sedang dipinjam")
                return False
        else:
            print(f"✗ Item dengan ID '{item_id}' tidak ditemukan")
            return False


# ========== DEMO PROGRAM ==========
def main():
    print("\n" + "="*70)
    print("SISTEM MANAJEMEN PERPUSTAKAAN SEDERHANA")
    print("="*70 + "\n")
    
    # Membuat instance perpustakaan
    library = Library("Perpustakaan Kota")
    
    # Menambahkan buku-buku
    book1 = Book("B001", "Python untuk Pemula", "John Doe", 2023, "978-0-123456-78-9")
    book2 = Book("B002", "Data Science Mastery", "Jane Smith", 2022, "978-0-987654-32-1")
    
    # Menambahkan majalah
    mag1 = Magazine("M001", "Tech Monthly", "Tech Publishing", 2024, 42)
    mag2 = Magazine("M002", "Science Today", "Science Press", 2024, 156)
    
    # Menambahkan ke perpustakaan
    library.add_item(book1)
    library.add_item(book2)
    library.add_item(mag1)
    library.add_item(mag2)
    
    # Menampilkan semua item
    library.display_all_items()
    
    # Demo peminjaman
    print("\n--- DEMO PEMINJAMAN ---")
    library.borrow_item("B001")
    library.borrow_item("M001")
    
    # Coba pinjam item yang sudah dipinjam
    library.borrow_item("B001")
    
    # Tampilkan status setelah peminjaman
    library.display_all_items()
    
    # Demo pengembalian
    print("\n--- DEMO PENGEMBALIAN ---")
    library.return_item("B001")
    
    # Tampilkan status setelah pengembalian
    library.display_all_items()
    
    # Demo pencarian
    print("\n--- DEMO PENCARIAN ---")
    found = library.search_by_title("Python untuk Pemula")
    if found:
        print(f"✓ Ditemukan: {found.display_info()}")
    
    found = library.search_by_id("M002")
    if found:
        print(f"✓ Ditemukan: {found.display_info()}")


if __name__ == "__main__":
    main()