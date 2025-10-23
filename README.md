# 📝 Dashboard Jadwal Kuliah

Ini adalah proyek aplikasi web front-end sederhana yang berfungsi sebagai personal dashboard untuk mengelola jadwal perkuliahan. Aplikasi ini dibangun dengan HTML, CSS, dan JavaScript modern (ES6+), serta memenuhi serangkaian persyaratan teknis khusus.

---

## ✨ Fitur-fitur Aplikasi

* **Manajemen Jadwal (CRUD):**
    * **Create:** Menambahkan jadwal kuliah baru (Mata Kuliah, Dosen, Ruangan, Hari, Waktu).
    * **Read:** Menampilkan semua jadwal yang telah ditambahkan, dikelompokkan berdasarkan hari (Senin - Minggu).
    * **Update:** Mengedit detail jadwal yang sudah ada.
    * **Delete:** Menghapus jadwal dari daftar.
* **Penyimpanan Lokal:** Semua data jadwal disimpan di `localStorage` browser, sehingga data tidak akan hilang saat halaman ditutup atau di-refresh.
* **Antarmuka Responsif:** Tampilan aplikasi dirancang agar tetap fungsional di berbagai ukuran layar.
* **Tata Letak Papan Kanban:** Jadwal ditampilkan dalam kolom-kolom per hari, memudahkan visualisasi jadwal mingguan.

---

## 📸 Tampilan Aplikasi (Screenshot)

Berikut adalah tampilan dari aplikasi Dashboard Jadwal Kuliah yang telah selesai.

![Tampilan Aplikasi](img/screenshot.png)

*(Catatan: Anda perlu mengganti file `screenshot.png` di dalam folder `img` dengan hasil screenshot Anda sendiri)*

---

## 🛠️ Fitur ES6+ yang Diimplementasikan

Aplikasi ini dibangun dengan memanfaatkan fitur-fitur JavaScript ES6+ modern, sesuai dengan persyaratan berikut:

1.  **`let` dan `const`**
    * Digunakan di seluruh file `script.js` untuk deklarasi variabel yang *block-scoped*, menggantikan `var` untuk kode yang lebih aman dan dapat diprediksi.

2.  **Arrow Functions (`=>`)**
    * Digunakan secara ekstensif pada *event listener* dan metode array untuk sintaks yang lebih ringkas.
    ```javascript
    // Contoh pada event listener
    document.querySelector('#schedule-board').addEventListener('click', (e) => {
      // ... logika
    });
    ```

3.  **Template Literals**
    * Digunakan untuk merender blok HTML jadwal secara dinamis dengan menyisipkan variabel langsung ke dalam string.
    ```javascript
    // Contoh pada UI.addScheduleToBoard()
    card.innerHTML = `
        <h4>${schedule.courseName}</h4>
        <p>${schedule.lecturer}</p>
        <p><strong>Ruang:</strong> ${schedule.room}</p>
    `;
    ```

4.  **Classes**
    * Struktur kode utama diorganisir ke dalam kelas-kelas untuk menerapkan prinsip Object-Oriented Programming (OOP), yaitu:
        * `Schedule`: Merepresentasikan objek jadwal.
        * `UI`: Mengelola semua manipulasi DOM dan interaksi antarmuka.
        * `Storage`: Menangani logika penyimpanan data ke `localStorage`.

5.  **Fungsi Asinkron (Promises)**
    * Diimplementasikan menggunakan `new Promise` di dalam metode `Storage.getSchedulesAsync()` untuk menyimulasikan pengambilan data secara asinkron (seperti saat mengambil data dari API).
    ```javascript
    // Contoh pada kelas Storage
    static getSchedulesAsync() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.getSchedules());
            }, 200);
        });
    }
    ```
