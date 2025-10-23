# Aplikasi Manajemen Tugas Mahasiswa (Green Task Manager)

## Penjelasan Singkat tentang Fungsi Aplikasi dan Fitur-fiturnya

Aplikasi ini adalah **Manajemen Tugas Mahasiswa** berbasis *client-side* yang dibangun menggunakan **HTML, CSS (Flexbox), dan JavaScript murni**. Aplikasi ini dirancang untuk membantu mahasiswa dalam **mencatat, melacak, dan mengelola** tugas akademik, kuis, dan proyek dengan antarmuka yang bersih, modern, dan didominasi skema warna **Hijau** dengan efek **Shadow** yang elegan.

Data tugas bersifat **persisten** karena disimpan secara lokal di *browser* pengguna menggunakan **`localStorage`**, memastikan data tidak hilang saat halaman di-*refresh* atau *browser* ditutup.

---

## Daftar Fitur yang Telah Diimplementasikan

Berikut adalah daftar fitur utama yang telah berhasil diimplementasikan sesuai kebutuhan:

1.  **Menambahkan Tugas Baru**: Tugas dapat ditambahkan dengan detail **Nama Tugas**, **Mata Kuliah**, dan **Deadline** yang wajib diisi.
2.  **Manajemen Status**: Tombol interaktif untuk **Menandai Selesai** atau **Batal Selesai** (*toggle*). Tugas yang selesai diberikan *class* CSS khusus untuk visualisasi yang jelas (*line-through* dan opacity rendah).
3.  **Aksi Hapus**: Menghapus tugas dari daftar dengan konfirmasi sebelum eksekusi.
4.  **Fitur Filter dan Pencarian**:
    * **Filter Status**: Menyaring daftar tugas berdasarkan status (**Semua, Belum Selesai, Selesai**).
    * **Pencarian Mata Kuliah**: Pencarian teks *real-time* berdasarkan **Nama Mata Kuliah**.
5.  **Statistik Cepat**: Menampilkan **Jumlah Tugas yang Belum Selesai** (*Pending Count*) secara *real-time* di bagian atas halaman.
6.  **Validasi Form**: Mencegah penambahan tugas jika inputan wajib kosong atau jika *deadline* sudah terlewat.

---

## Screenshot Aplikasi yang Sudah Jadi (Minimal 3 Screenshot)

### 1. Tampilan Utama dan Daftar Tugas Aktif
<img width="1878" height="788" alt="image" src="https://github.com/user-attachments/assets/1f983399-fa08-4325-b4ad-067e6e3455a8" />


### 2. Tugas Selesai dan Penggunaan Filter
<img width="1893" height="729" alt="image" src="https://github.com/user-attachments/assets/7248c061-41dd-4a59-9f43-429b2061919c" />


### 3. Contoh Pesan Validasi
<img width="1885" height="647" alt="image" src="https://github.com/user-attachments/assets/bddd6f26-a1a7-4d6c-8b04-a59d30323f12" />

---

## Cara Menjalankan Aplikasi

Aplikasi ini adalah proyek *front-end* sederhana dan tidak memerlukan konfigurasi atau *server* khusus.

1.  **Koleksi File**: Pastikan tiga file kode sumber (`index.html`, `style.css`, `script.js`) berada dalam satu folder yang sama.
2.  **Eksekusi**: Klik dua kali pada file **`index.html`**.
3.  **Akses**: Aplikasi akan terbuka di *browser* default Anda dan siap digunakan.

---

## Penjelasan Teknis tentang Penggunaan `localStorage` dan Validasi Form

### Penggunaan `localStorage`

Fitur persistensi data dicapai dengan menggunakan **`localStorage`** API bawaan *browser*.

* **Penyimpanan (`saveTasks`)**: Array tugas utama (`arrayTasks`) diubah menjadi string JSON menggunakan **`JSON.stringify()`** dan disimpan di *key* `'tasks'`.
* **Pemuatan (`loadTasks`)**: Saat aplikasi dimulai (`window.onload`), data diambil menggunakan **`localStorage.getItem('tasks')`** dan dikembalikan menjadi array JavaScript Objects menggunakan **`JSON.parse()`**.

### Validasi Form

Validasi dilakukan di sisi klien pada fungsi `validateForm()` untuk memastikan kualitas data sebelum disimpan:

1.  **Validasi Input Wajib**: Memastikan bahwa kolom **Nama Tugas**, **Mata Kuliah**, dan **Deadline** tidak kosong (menggunakan `.trim()`).
2.  **Validasi Tanggal *Deadline***: Membandingkan tanggal *deadline* yang dimasukkan dengan tanggal hari ini. Pengguna akan dicegah untuk memasukkan *deadline* yang sudah terlewat.

Validasi ini mencegah data tidak valid masuk ke `arrayTasks` dan `localStorage`.
