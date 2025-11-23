class ProgramNilaiMahasiswa:
    def __init__(self):
        # Data mahasiswa (list of dictionaries)
        self.data_mahasiswa = [
            {"nama": "Gilang Surya", "nim": "123140187", "uts": 75, "uas": 80, "tugas": 85},
            {"nama": "Muhammad Rafiq", "nim": "123140197", "uts": 85, "uas": 88, "tugas": 90},
            {"nama": "Maxavier", "nim": "123140191", "uts": 70, "uas": 75, "tugas": 80},
            {"nama": "Cengko Limbong", "nim": "123140166", "uts": 87, "uas": 92, "tugas": 88},
            {"nama": "Paldy Saputra", "nim": "123140179", "uts": 90, "uas": 88, "tugas": 75},
            {"nama": "Rejon Nababan", "nim": "123144122", "uts": 65, "uas": 50, "tugas": 80},
            {"nama": "Ambis Racing", "nim": "123145123", "uts": 50, "uas": 55, "tugas": 75},
            {"nama": "Pundung Siagian", "nim": "123155021", "uts": 50, "uas": 30, "tugas": 50}
        ]
    
    def hitung_nilai_akhir(self, uts, uas, tugas):
        """Menghitung nilai akhir (30% UTS + 40% UAS + 30% Tugas)"""
        return (uts * 0.3) + (uas * 0.4) + (tugas * 0.3)
    
    def tentukan_grade(self, nilai_akhir):
        """Menentukan grade berdasarkan nilai akhir"""
        if nilai_akhir >= 80:
            return "A"
        elif nilai_akhir >= 70:
            return "B"
        elif nilai_akhir >= 60:
            return "C"
        elif nilai_akhir >= 50:
            return "D"
        else:
            return "E"
    
    def tampilkan_data(self):
        """Menampilkan data dalam format tabel"""
        print("\n" + "="*100)
        print("DATA NILAI MAHASISWA".center(100))
        print("="*100)
        print(f"{'No':<5} {'Nama':<20} {'NIM':<12} {'UTS':<8} {'UAS':<8} {'Tugas':<8} {'Nilai Akhir':<12} {'Grade':<8}")
        print("-"*100)
        
        for i, mhs in enumerate(self.data_mahasiswa, 1):
            nilai_akhir = self.hitung_nilai_akhir(mhs["uts"], mhs["uas"], mhs["tugas"])
            grade = self.tentukan_grade(nilai_akhir)
            print(f"{i:<5} {mhs['nama']:<20} {mhs['nim']:<12} {mhs['uts']:<8} {mhs['uas']:<8} {mhs['tugas']:<8} {nilai_akhir:<12.2f} {grade:<8}")
        
        print("="*100)
    
    def tambah_data(self):
        """Menambah data mahasiswa baru"""
        print("\n--- TAMBAH DATA MAHASISWA ---")
        
        nama = input("Nama: ").strip()
        nim = input("NIM: ").strip()
        
        # Cek NIM duplikat
        for mhs in self.data_mahasiswa:
            if mhs["nim"] == nim:
                print("NIM sudah ada!")
                return
        
        try:
            uts = int(input("Nilai UTS (0-100): "))
            uas = int(input("Nilai UAS (0-100): "))
            tugas = int(input("Nilai Tugas (0-100): "))
            
            if not (0 <= uts <= 100 and 0 <= uas <= 100 and 0 <= tugas <= 100):
                print("Nilai harus antara 0-100!")
                return
            
            self.data_mahasiswa.append({
                "nama": nama,
                "nim": nim,
                "uts": uts,
                "uas": uas,
                "tugas": tugas
            })
            
            print("Data berhasil ditambahkan!")
            
        except ValueError:
            print("Nilai harus berupa angka!")
    
    def edit_data(self):
        """Mengedit data mahasiswa"""
        print("\n--- EDIT DATA MAHASISWA ---")
        self.tampilkan_data()
        
        nim = input("\nMasukkan NIM mahasiswa yang akan diedit: ").strip()
        
        # Cari data
        index = None
        for i, mhs in enumerate(self.data_mahasiswa):
            if mhs["nim"] == nim:
                index = i
                break
        
        if index is None:
            print("Data tidak ditemukan!")
            return
        
        print(f"\nData saat ini:")
        mhs = self.data_mahasiswa[index]
        print(f"Nama: {mhs['nama']}")
        print(f"NIM: {mhs['nim']}")
        print(f"UTS: {mhs['uts']}")
        print(f"UAS: {mhs['uas']}")
        print(f"Tugas: {mhs['tugas']}")
        
        print("\nMasukkan data baru (tekan Enter untuk tidak mengubah):")
        
        nama = input(f"Nama [{mhs['nama']}]: ").strip()
        if nama == "":
            nama = mhs['nama']
        
        try:
            uts_input = input(f"Nilai UTS [{mhs['uts']}]: ").strip()
            uts = int(uts_input) if uts_input != "" else mhs['uts']
            
            uas_input = input(f"Nilai UAS [{mhs['uas']}]: ").strip()
            uas = int(uas_input) if uas_input != "" else mhs['uas']
            
            tugas_input = input(f"Nilai Tugas [{mhs['tugas']}]: ").strip()
            tugas = int(tugas_input) if tugas_input != "" else mhs['tugas']
            
            if not (0 <= uts <= 100 and 0 <= uas <= 100 and 0 <= tugas <= 100):
                print("Nilai harus antara 0-100!")
                return
            
            self.data_mahasiswa[index] = {
                "nama": nama,
                "nim": nim,
                "uts": uts,
                "uas": uas,
                "tugas": tugas
            }
            
            print("Data berhasil diupdate!")
            
        except ValueError:
            print("Nilai harus berupa angka!")
    
    def hapus_data(self):
        """Menghapus data mahasiswa"""
        print("\n--- HAPUS DATA MAHASISWA ---")
        self.tampilkan_data()
        
        nim = input("\nMasukkan NIM mahasiswa yang akan dihapus: ").strip()
        
        # Cari dan hapus data
        for i, mhs in enumerate(self.data_mahasiswa):
            if mhs["nim"] == nim:
                konfirmasi = input(f"Hapus data {mhs['nama']}? (y/n): ").lower()
                if konfirmasi == 'y':
                    self.data_mahasiswa.pop(i)
                    print("Data berhasil dihapus!")
                else:
                    print("Penghapusan dibatalkan!")
                return
        
        print("Data tidak ditemukan!")
    
    def filter_grade(self):
        """Filter data berdasarkan grade"""
        print("\n--- FILTER DATA BERDASARKAN GRADE ---")
        grade = input("Masukkan grade (A/B/C/D/E): ").upper()
        
        if grade not in ['A', 'B', 'C', 'D', 'E']:
            print("Grade tidak valid!")
            return
        
        print(f"\nMahasiswa dengan grade {grade}:")
        print("-"*100)
        print(f"{'No':<5} {'Nama':<20} {'NIM':<12} {'UTS':<8} {'UAS':<8} {'Tugas':<8} {'Nilai Akhir':<12} {'Grade':<8}")
        print("-"*100)
        
        no = 1
        found = False
        for mhs in self.data_mahasiswa:
            nilai_akhir = self.hitung_nilai_akhir(mhs["uts"], mhs["uas"], mhs["tugas"])
            grade_mhs = self.tentukan_grade(nilai_akhir)
            
            if grade_mhs == grade:
                print(f"{no:<5} {mhs['nama']:<20} {mhs['nim']:<12} {mhs['uts']:<8} {mhs['uas']:<8} {mhs['tugas']:<8} {nilai_akhir:<12.2f} {grade_mhs:<8}")
                no += 1
                found = True
        
        if not found:
            print(f"Tidak ada mahasiswa dengan grade {grade}")
        print("-"*100)
    
    def hitung_rata_rata(self):
        """Menghitung rata-rata nilai kelas"""
        if not self.data_mahasiswa:
            print("Tidak ada data mahasiswa!")
            return
        
        total_nilai = 0
        for mhs in self.data_mahasiswa:
            nilai_akhir = self.hitung_nilai_akhir(mhs["uts"], mhs["uas"], mhs["tugas"])
            total_nilai += nilai_akhir
        
        rata_rata = total_nilai / len(self.data_mahasiswa)
        
        print("\n--- RATA-RATA NILAI KELAS ---")
        print(f"Jumlah mahasiswa: {len(self.data_mahasiswa)}")
        print(f"Rata-rata nilai: {rata_rata:.2f}")
    
    def cari_tertinggi(self):
        """Mencari mahasiswa dengan nilai tertinggi"""
        if not self.data_mahasiswa:
            print("Tidak ada data mahasiswa!")
            return
        
        mhs_tertinggi = None
        nilai_tertinggi = 0
        
        for mhs in self.data_mahasiswa:
            nilai_akhir = self.hitung_nilai_akhir(mhs["uts"], mhs["uas"], mhs["tugas"])
            if nilai_akhir > nilai_tertinggi:
                nilai_tertinggi = nilai_akhir
                mhs_tertinggi = mhs
        
        grade = self.tentukan_grade(nilai_tertinggi)
        
        print("\n--- MAHASISWA DENGAN NILAI TERTINGGI ---")
        print(f"Nama: {mhs_tertinggi['nama']}")
        print(f"NIM: {mhs_tertinggi['nim']}")
        print(f"UTS: {mhs_tertinggi['uts']}")
        print(f"UAS: {mhs_tertinggi['uas']}")
        print(f"Tugas: {mhs_tertinggi['tugas']}")
        print(f"Nilai Akhir: {nilai_tertinggi:.2f}")
        print(f"Grade: {grade}")
    
    def cari_terendah(self):
        """Mencari mahasiswa dengan nilai terendah"""
        if not self.data_mahasiswa:
            print("Tidak ada data mahasiswa!")
            return
        
        mhs_terendah = None
        nilai_terendah = 100
        
        for mhs in self.data_mahasiswa:
            nilai_akhir = self.hitung_nilai_akhir(mhs["uts"], mhs["uas"], mhs["tugas"])
            if nilai_akhir < nilai_terendah:
                nilai_terendah = nilai_akhir
                mhs_terendah = mhs
        
        grade = self.tentukan_grade(nilai_terendah)
        
        print("\n--- MAHASISWA DENGAN NILAI TERENDAH ---")
        print(f"Nama: {mhs_terendah['nama']}")
        print(f"NIM: {mhs_terendah['nim']}")
        print(f"UTS: {mhs_terendah['uts']}")
        print(f"UAS: {mhs_terendah['uas']}")
        print(f"Tugas: {mhs_terendah['tugas']}")
        print(f"Nilai Akhir: {nilai_terendah:.2f}")
        print(f"Grade: {grade}")
    
    def menu(self):
        """Menu utama program"""
        while True:
            print("\n" + "="*50)
            print("PROGRAM PENGELOLAAN DATA NILAI MAHASISWA".center(50))
            print("="*50)
            print("1. Tampilkan Data")
            print("2. Tambah Data")
            print("3. Edit Data")
            print("4. Hapus Data")
            print("5. Filter Berdasarkan Grade")
            print("6. Hitung Rata-Rata Kelas")
            print("7. Cari Nilai Tertinggi")
            print("8. Cari Nilai Terendah")
            print("0. Keluar")
            print("="*50)
            
            pilihan = input("Pilih menu (0-8): ").strip()
            
            if pilihan == "1":
                self.tampilkan_data()
            elif pilihan == "2":
                self.tambah_data()
            elif pilihan == "3":
                self.edit_data()
            elif pilihan == "4":
                self.hapus_data()
            elif pilihan == "5":
                self.filter_grade()
            elif pilihan == "6":
                self.hitung_rata_rata()
            elif pilihan == "7":
                self.cari_tertinggi()
            elif pilihan == "8":
                self.cari_terendah()
            elif pilihan == "0":
                print("\nTerima kasih telah menggunakan program ini!")
                break
            else:
                print("Pilihan tidak valid!")

# Jalankan program
if __name__ == "__main__":
    program = ProgramNilaiMahasiswa()
    program.menu()