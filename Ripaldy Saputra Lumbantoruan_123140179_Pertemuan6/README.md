# Aplikasi Manajemen Matakuliah dengan Pyramid

Aplikasi API sederhana untuk manajemen matakuliah berdasarkan apa yang telah dipelajari dalam praktikum.

## Deskripsi Proyek

Aplikasi ini adalah API backend untuk mengelola data matakuliah menggunakan Pyramid Framework. Aplikasi menyediakan endpoint REST API untuk operasi CRUD (Create, Read, Update, Delete) pada data matakuliah.

## Model Data

### Matakuliah

Model `Matakuliah` dengan atribut berikut:

| Atribut   | Tipe    | Deskripsi              | Constraint      |
|-----------|---------|------------------------|-----------------|
| id        | Integer | Primary key            | Auto Increment  |
| kode_mk   | Text    | Kode mata kuliah       | Unique, Not null|
| nama_mk   | Text    | Nama mata kuliah       | Not null        |
| sks       | Integer | Jumlah SKS             | Not null        |
| semester  | Integer | Semester pengambilan   | Not null        |

## API Endpoints

Implementasi endpoint untuk operasi dasar:

| HTTP Method | URL Pattern            | Deskripsi                        |
|-------------|------------------------|----------------------------------|
| GET         | `/api/matakuliah`      | Mendapatkan semua matakuliah     |
| GET         | `/api/matakuliah/{id}` | Mendapatkan detail satu matakuliah|
| POST        | `/api/matakuliah`      | Menambahkan matakuliah baru      |
| PUT         | `/api/matakuliah/{id}` | Mengupdate data matakuliah       |
| DELETE      | `/api/matakuliah/{id}` | Menghapus data matakuliah        |

⚠️ **Penting:** Jangan lupa menambahkan parameter `request_method` pada setiap route untuk memastikan routing berfungsi dengan benar!

## Cara Instalasi

### 1. Langkah membuat virtual environment

```bash
# Buat virtual environment
python -m venv venv

# Aktivasi virtual environment
# Windows PowerShell:
.\venv\Scripts\Activate.ps1

# Windows CMD:
.\venv\Scripts\activate.bat

# Linux/Mac:
source venv/bin/activate
```

### 2. Instalasi dependensi

```bash
cd pyramid_mahasiswa
pip install -e .
```

### 3. Konfigurasi database

Database sudah dikonfigurasi menggunakan SQLite di file `development.ini`:

```ini
sqlalchemy.url = sqlite:///%(here)s/pyramid_mahasiswa.sqlite
```

## Cara Menjalankan

### 1. Menjalankan migrasi

```bash
# Generate migration file (sudah dilakukan)
alembic -c development.ini revision --autogenerate -m "Create matakuliah table"

# Jalankan migration
alembic -c development.ini upgrade head
```

### 2. Menjalankan server

```bash
pserve development.ini --reload
```

Server akan berjalan di `http://localhost:6543`

## Testing

### Tambahkan data awal minimal 3 matakuliah

Anda bisa menggunakan script `initialize_db.py` atau menambahkan manual via API.

## Dokumentasi Testing API dengan Postman

### 1. GET All Matakuliah
Mendapatkan semua data matakuliah yang tersimpan di database.
**Endpoint:** `GET http://localhost:6543/api/matakuliah`

**Screenshot Testing:**
<img width="1071" height="774" alt="Screenshot 2025-11-24 010811" src="https://github.com/user-attachments/assets/1fa230ee-098f-4c3a-a0b8-4769085d2d25" />

---

### 2. GET Matakuliah by ID
Mendapatkan detail satu matakuliah berdasarkan ID.
**Endpoint:** `GET http://localhost:6543/api/matakuliah/{id}`

**Screenshot Testing:**
<img width="1071" height="358" alt="Screenshot 2025-11-24 010842" src="https://github.com/user-attachments/assets/ec1e1088-eece-4d35-87ee-ec66e1493ee9" />

---

### 3. POST - Create Matakuliah
Menambahkan matakuliah baru ke database.
**Endpoint:** `POST http://localhost:6543/api/matakuliah`

**Screenshot Testing:**
<img width="1074" height="660" alt="Screenshot 2025-11-24 013829" src="https://github.com/user-attachments/assets/e5b81351-b9d4-414c-b341-fdceeca7e1d5" />

---

### 4. PUT - Update Matakuliah
Mengupdate data matakuliah yang sudah ada.
**Endpoint:** `PUT http://localhost:6543/api/matakuliah/{id}`

**Screenshot Testing:**
<img width="1066" height="653" alt="Screenshot 2025-11-24 014303" src="https://github.com/user-attachments/assets/a80efae2-53b1-4fdd-a8da-75150b1f7156" />

---

### 5. DELETE - Delete Matakuliah
Menghapus matakuliah dari database.
**Endpoint:** `DELETE http://localhost:6543/api/matakuliah/{id}`

**Screenshot Testing:**
<img width="1067" height="509" alt="Screenshot 2025-11-24 014848" src="https://github.com/user-attachments/assets/53b36f1e-219a-47a0-8d34-3588813f9675" />

---

### Cara Testing dengan Postman

1. Buka Postman
2. Pastikan server sudah running di `http://localhost:6543`
3. Buat request sesuai dengan endpoint di atas
4. Untuk POST dan PUT, jangan lupa set Header `Content-Type: application/json`
5. Screenshot setiap hasil testing untuk dokumentasi
6. Simpan screenshot di folder `screenshots/`


## Teknologi yang Digunakan

- **Framework:** Pyramid 2.0
- **Database:** SQLite (via SQLAlchemy)
- **Migration:** Alembic
- **Server:** Waitress

## Troubleshooting

### Error: Database tidak ditemukan
Pastikan Anda sudah menjalankan migration dengan `alembic upgrade head`

### Error: Module tidak ditemukan
Pastikan Anda sudah install dependencies dengan `pip install -e .`

### Error: Port sudah digunakan
Ubah port di `development.ini` pada section `[server:main]`

## Catatan Penting

- Pastikan virtual environment sudah aktif sebelum menjalankan perintah
- Jangan lupa menjalankan migration sebelum menjalankan server
- Untuk production, gunakan `production.ini` dengan konfigurasi database yang sesuai
- API menggunakan JSON format untuk request dan response

