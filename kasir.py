print("=======================================")
print("     KASIR CRABPREK (VERSI 2.0)        ")
print("=======================================")
print("Daftar Menu:")
print("1. Paket Baby Crab Sambal Bawang (Rp 20.000)")
print("2. Paket Baby Crab Sambal Matah  (Rp 22.000)")
print("---------------------------------------")

# Meminta input dari kasir
pilihan_menu = input("Masukkan nomor menu (1 atau 2): ")
jumlah_porsi = int(input("Berapa porsi? "))

# Logika penentuan harga berdasarkan pilihan menu
if pilihan_menu == "1":
    nama_menu = "Sambal Bawang"
    total_bayar = jumlah_porsi * 20000
elif pilihan_menu == "2":
    nama_menu = "Sambal Matah"
    total_bayar = jumlah_porsi * 22000
else:
    nama_menu = "Menu Salah / Tidak Ada"
    total_bayar = 0

print("---------------------------------------")
print("Pesanan Anda :", jumlah_porsi, "porsi", nama_menu)
print("Total Tagihan: Rp", total_bayar)
print("=======================================")