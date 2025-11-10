# Sistem Manajemen Perpustakaan Sederhana

Sistem manajemen perpustakaan berbasis Python yang mengimplementasikan konsep Object-Oriented Programming (OOP) meliputi class, inheritance, encapsulation, polymorphism, dan property decorator.

## Fitur Utama

- Manajemen koleksi perpustakaan (buku dan majalah)
- Sistem peminjaman dan pengembalian item
- Pencarian item berdasarkan judul atau ID
- Pelacakan status ketersediaan item
- Implementasi konsep OOP yang solid

## Struktur Program

### 1. **LibraryItem (Abstract Class)**

Class abstrak yang menjadi dasar untuk semua jenis item perpustakaan.

**Atribut:**

- `_item_id`: ID unik item (protected)
- `_title`: Judul item (protected)
- `_author`: Penulis/penerbit (protected)
- `_year`: Tahun terbit (protected)
- `_is_borrowed`: Status peminjaman (protected)

**Method:**

- `get_item_type()`: Abstract method untuk mendapatkan tipe item
- `display_info()`: Abstract method untuk menampilkan informasi item
- `borrow()`: Meminjam item
- `return_item()`: Mengembalikan item

**Property Decorator:**

- `@property item_id`: Akses read-only untuk ID item
- `@property title`: Akses read-only untuk judul
- `@property is_borrowed`: Akses read-only untuk status peminjaman

### 2. **Book (Subclass)**

Class untuk merepresentasikan buku dalam perpustakaan.

**Atribut tambahan:**

- `isbn`: Nomor ISBN buku

**Method yang diimplementasikan:**

- `get_item_type()`: Mengembalikan "Book"
- `display_info()`: Menampilkan informasi buku lengkap dengan ISBN

### 3. **Magazine (Subclass)**

Class untuk merepresentasikan majalah dalam perpustakaan.

**Atribut tambahan:**

- `issue_number`: Nomor edisi majalah

**Method yang diimplementasikan:**

- `get_item_type()`: Mengembalikan "Magazine"
- `display_info()`: Menampilkan informasi majalah lengkap dengan nomor edisi

### 4. **Library (Management Class)**

Class untuk mengelola koleksi perpustakaan dan operasi-operasinya.

**Atribut:**

- `name`: Nama perpustakaan
- `__items`: List private untuk menyimpan koleksi item (encapsulation)

**Method:**

- `add_item(item)`: Menambahkan item baru ke perpustakaan
- `display_all_items()`: Menampilkan semua item yang tersedia
- `search_by_title(title)`: Mencari item berdasarkan judul
- `search_by_id(item_id)`: Mencari item berdasarkan ID
- `borrow_item(item_id)`: Memproses peminjaman item
- `return_item(item_id)`: Memproses pengembalian item

## Cara Menggunakan

### Instalasi

```bash
# Clone atau download file
# Tidak ada dependency eksternal yang diperlukan
python library_system.py
```

### Contoh Penggunaan

```python
# Membuat instance perpustakaan
library = Library("Perpustakaan Kota")

# Menambahkan buku
book1 = Book("B001", "Python untuk Pemula", "John Doe", 2023, "978-0-123456-78-9")
library.add_item(book1)

# Menambahkan majalah
mag1 = Magazine("M001", "Tech Monthly", "Tech Publishing", 2024, 42)
library.add_item(mag1)

# Menampilkan semua item
library.display_all_items()

# Meminjam item
library.borrow_item("B001")

# Mengembalikan item
library.return_item("B001")

# Mencari item
found = library.search_by_title("Python untuk Pemula")
if found:
    print(found.display_info())
```

## Screenshot Hasil Running Program
<img width="1370" height="647" alt="Screenshot 2025-11-11 024213" src="https://github.com/user-attachments/assets/09bb9d8e-595e-4be6-89da-b73fc03132e1" />
<img width="1364" height="440" alt="Screenshot 2025-11-11 024257" src="https://github.com/user-attachments/assets/9ea6477b-15b1-4f48-89c5-e821ed20907d" />



## Konsep OOP yang Diterapkan

### 1. **Abstraction**

- Class `LibraryItem` sebagai abstract base class dengan abstract methods
- Menggunakan modul `abc` (Abstract Base Classes)

### 2. **Inheritance**

- `Book` dan `Magazine` mewarisi dari `LibraryItem`
- Menggunakan `super()` untuk memanggil constructor parent class

### 3. **Encapsulation**

- Protected attributes: `_item_id`, `_title`, `_author`, dll (single underscore)
- Private attributes: `__items` di class Library (double underscore)
- Access modifiers untuk melindungi data internal

### 4. **Polymorphism**

- Method `get_item_type()` dan `display_info()` memiliki implementasi berbeda di setiap subclass
- Method yang sama menghasilkan perilaku berbeda sesuai tipe object

### 5. **Property Decorator**

- `@property` untuk memberikan akses read-only
- Melindungi atribut dari modifikasi langsung
- Memberikan interface yang clean untuk mengakses data

