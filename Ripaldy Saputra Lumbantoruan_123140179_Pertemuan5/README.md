# Sistem Manajemen Perpustakaan Sederhana

Sistem manajemen perpustakaan berbasis Python yang mengimplementasikan konsep Object-Oriented Programming (OOP) meliputi class, inheritance, encapsulation, polymorphism, dan property decorator.

## Fitur Utama

- Manajemen koleksi perpustakaan (buku dan majalah)
- Sistem peminjaman dan pengembalian item
- Pencarian item berdasarkan judul atau ID
- Pelacakan status ketersediaan item
- Implementasi konsep OOP yang solid


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


