# Aplikasi Manajemen Buku Pribadi

## Deskripsi Aplikasi

Aplikasi ini adalah sebuah manajer buku pribadi berbasis web yang memungkinkan pengguna untuk mencatat dan mengelola koleksi buku mereka. Pengguna dapat menambah buku baru, mengedit detail buku yang sudah ada, menghapusnya, serta melakukan pencarian dan filter berdasarkan status kepemilikan.

Aplikasi ini dibangun menggunakan **Vite + React** dan memanfaatkan **localStorage** pada browser untuk menyimpan data. Hal ini memastikan bahwa semua data buku tetap tersimpan bahkan setelah browser ditutup dan dibuka kembali.

---

## Instruksi Instalasi dan Menjalankan

### Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- **Node.js** (versi 18.x atau lebih baru direkomendasikan)
- **npm** (biasanya terinstal bersamaan dengan Node.js)
- **Git**

### Panduan Instalasi

1.  **Clone Repository**
    Buka terminal Anda dan clone repository ini ke komputer lokal.

    ```bash
    git clone [URL_REPOSITORY_GIT_ANDA_DI_SINI]
    ```

2.  **Pindah ke Direktori Proyek**

    ```bash
    cd nama-folder-proyek
    ```

3.  **Instal Dependensi**
    Jalankan perintah berikut untuk menginstal semua paket yang dibutuhkan.
    ```bash
    npm install
    ```
    Perintah ini akan mengunduh dan menginstal semua paket yang tercantum dalam `package.json`, termasuk:
    - **Dependencies (Untuk Produksi):**
      - `react` & `react-dom`: Library inti untuk membangun antarmuka.
      - `react-router-dom`: Untuk menangani navigasi antar halaman.
      - `uuid`: Untuk menghasilkan ID unik bagi setiap buku.
    - **DevDependencies (Untuk Pengembangan & Testing):**
      - `vite`: Build tool dan server pengembangan.
      - `eslint`: Untuk analisis kode statis.
      - `jest` & `babel`: Framework testing dan transpiler.
      - `@testing-library/react`: Library untuk testing komponen React.

### Menjalankan Aplikasi

- **Untuk Menjalankan Server Pengembangan:**

  ```bash
  npm run dev
  ```

  Aplikasi akan tersedia dan dapat diakses melalui `http://localhost:5173`.

- **Untuk Menjalankan Pengujian (Unit Test):**
  ```bash
  npm test
  ```

---

## Screenshot Antarmuka

**Tampilan Halaman Utama**

- Menampilkan form input, fitur filter dan pencarian, serta daftar buku yang ada.

  `[GANTI_INI_DENGAN_SCREENSHOT_HALAMAN_UTAMA]`

**Tampilan Halaman Statistik**

- Menampilkan rekapitulasi jumlah buku berdasarkan statusnya.

  `[GANTI_INI_DENGAN_SCREENSHOT_HALAMAN_STATISTIK]`

---

## Penjelasan Fitur React yang Digunakan

Aplikasi ini mengimplementasikan beberapa fitur inti dan konsep modern dari React.

- **Functional Components & Hooks**: Seluruh aplikasi dibangun menggunakan _functional components_ dan _Hooks_, bukan _class components_.

- **`useState`**: Digunakan untuk mengelola state lokal di dalam komponen, seperti menyimpan data input pada form, menangani pesan error validasi, dan mengelola nilai filter.

- **`useEffect`**: Digunakan untuk menangani _side effects_. Contohnya adalah untuk mengisi data ke dalam form secara otomatis ketika mode "Edit" diaktifkan. Hook ini juga menjadi dasar dari custom hook `useLocalStorage`.

- **Context API (`useContext`)**: Digunakan untuk _state management_ global. `BookContext` dibuat untuk menyediakan data buku dan fungsi-fungsi (`addBook`, `updateBook`, `deleteBook`) ke seluruh komponen tanpa perlu melakukan _prop drilling_.

- **React Router**: Digunakan untuk membuat aplikasi menjadi _Single Page Application_ (SPA) dengan navigasi antar halaman (Beranda dan Statistik) tanpa perlu me-reload halaman.

- **Custom Hooks**: Dua hook kustom dibuat untuk enkapsulasi dan penggunaan kembali logika:
  1.  **`useLocalStorage`**: Sebuah hook untuk menyinkronkan state komponen dengan `localStorage` browser.
  2.  **`useBookStats`**: Sebuah hook yang secara spesifik menghitung jumlah total buku berdasarkan statusnya.

---

## Komentar dalam Kode untuk Bagian Penting

Komentar telah ditambahkan pada bagian-bagian kode yang krusial atau memiliki logika yang kompleks. Tujuannya adalah untuk memperjelas alur kerja, seperti pada fungsi validasi form, logika di dalam _custom hooks_, dan proses penyaringan data buku di halaman utama.

---

## Laporan Testing (Screenshots Hasil Test)

Pengujian unit dilakukan menggunakan **Jest** dan **React Testing Library** untuk memverifikasi fungsionalitas komponen dan logika bisnis. Terdapat total **5 skenario pengujian** yang telah dibuat.

**Hasil Pengujian**

- Screenshot di bawah ini menunjukkan bahwa kelima skenario pengujian berhasil dijalankan tanpa ada yang gagal.

  `[GANTI_INI_DENGAN_SCREENSHOT_HASIL_NPM_TEST]`
