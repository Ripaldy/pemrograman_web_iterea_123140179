**Daftar Fitur yang Telah Diimplementasikan**

Berikut adalah daftar fitur utama yang telah berhasil diimplementasikan:

1.  **Form Input Rapi**: Menambahkan tugas baru dengan **Nama Tugas**, **Mata Kuliah**, dan **Deadline** dalam layout kartu yang elegan.
2.  **Manajemen Status**: Tombol interaktif untuk **Menandai Selesai** atau **Batal Selesai** tugas (*toggle*). Tugas yang selesai diberi gaya visual berbeda (warna gelap dan *line-through*).
3.  **Aksi Hapus**: Menghapus tugas dari daftar dengan konfirmasi (`confirm()`).
4.  **Filter Lanjutan**:
    * **Filter Status**: Menyaring tugas berdasarkan status (**Semua, Belum Selesai, Selesai**).
    * **Pencarian**: Mencari tugas secara *real-time* berdasarkan **Nama Mata Kuliah**.
5.  **Statistik Cepat**: Menampilkan **Jumlah Tugas yang Belum Selesai** (*Pending Count*) di bagian atas.
6.  **Validasi Form**: Memastikan inputan wajib tidak kosong dan tanggal *deadline* valid (tidak di masa lalu).

---

**Screenshot Aplikasi**

### 1. Tampilan Utama dan Form Input
<img width="1251" height="482" alt="Screenshot 2025-10-20 142413" src="https://github.com/user-attachments/assets/5c86cb4c-99b9-4bf2-ad63-099c1d378864" />

### 2. Tugas Selesai dan Fitur Filter
<img width="1254" height="402" alt="Screenshot 2025-10-20 142821" src="https://github.com/user-attachments/assets/de351eb2-bbbf-4803-b43d-f4269b3c4607" />


### 3. Contoh Pesan Validasi
<img width="1251" height="916" alt="Screenshot 2025-10-20 142657" src="https://github.com/user-attachments/assets/cfe8747a-e187-46a7-83e2-a3ac93b4a13a" />

---

**Cara Menjalankan Aplikasi**

Aplikasi ini dibangun murni dengan *frontend* (HTML, CSS, JavaScript) dan tidak memerlukan instalasi server atau *package* (`npm`).

1.  **Unduh Kode Sumber**: Pastikan Anda memiliki tiga file utama berikut dalam satu folder:
    * `index.html`
    * `style.css`
    * `script.js`
2.  **Buka di Browser**: Klik dua kali pada file **`index.html`** atau buka menggunakan *browser* web (Chrome, Firefox, dll.).
3.  **Selesai**: Aplikasi akan langsung berjalan. Semua tugas yang Anda masukkan akan disimpan secara otomatis di *browser* Anda.

---

**Penjelasan Teknis tentang Penggunaan `localStorage`**

Aplikasi ini memanfaatkan Web Storage API, khususnya **`localStorage`**, untuk menjamin persistensi data. Tugas disimpan sebagai array JavaScript Objects (`arrayTasks`) dengan langkah-langkah:

1.  **Penyimpanan**: Array tugas dikonversi menjadi string JSON menggunakan **`JSON.stringify()`** sebelum disimpan di `localStorage` dengan kunci (key) `'tasks'`.
    ```javascript
    localStorage.setItem('tasks', JSON.stringify(arrayTasks));
    ```
2.  **Pemuatan**: Saat aplikasi dimuat (`window.onload`), data diambil dari `localStorage` menggunakan **`localStorage.getItem('tasks')`** dan dikonversi kembali menjadi array objek menggunakan **`JSON.parse()`**.

---

**## Validasi Form**

Validasi diterapkan pada fungsi `validateForm()` untuk memastikan integritas data sebelum tugas dimasukkan:

1.  **Validasi Wajib Isi**: Memeriksa apakah input **Nama Tugas**, **Mata Kuliah**, dan **Deadline** tidak kosong (tidak hanya spasi) menggunakan metode `.trim()`.
2.  **Validasi Tanggal *Deadline***: Memastikan bahwa tanggal *deadline* yang dimasukkan adalah **hari ini atau di masa depan**. Jika tanggal yang dipilih sudah berlalu, validasi akan gagal dan menampilkan `alert()` kepada pengguna.

Jika salah satu validasi gagal, fungsi akan mengembalikan `false`, yang mencegah data dimasukkan ke dalam daftar dan `localStorage`.

---
