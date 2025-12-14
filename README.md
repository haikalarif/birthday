# Website Ucapan Ulang Tahun Romantis & Islami

Website ucapan ulang tahun yang romantis dan islami untuk pasangan wanita, dengan fitur-fitur menarik seperti animasi, musik latar, dan ornamen-ornamen cantik.

## Fitur-Fitur

✨ **Halaman Pembuka**: Kata-kata pembuka dengan tombol untuk membuka ucapan
🎵 **Musik Latar**: Musik romantis/ulang tahun yang akan diputar otomatis
💖 **Animasi Romantis**: Hati-hati terbang, pita-pita bergerak, dan ornamen cantik
🌙 **Tema Islami**: Ucapan dengan doa-doa islami dan ornamen yang sesuai
📱 **Responsive**: Tampil baik di desktop maupun mobile
✨ **Efek Interaktif**: Klik di layar untuk efek sparkle

## Cara Penggunaan

### 1. Persiapan File
- Ganti file `couple-photo.jpg` dengan foto latar belakang berdua Anda
- Tambahkan file `birthday-person.jpg` dengan foto orang yang berulang tahun (akan di-crop bulat)
- Ganti file `romantic-birthday-song.mp3` dengan musik pilihan Anda

### 2. Kustomisasi Pesan
Edit file `index.html` pada bagian `.birthday-message` untuk mengubah ucapan sesuai keinginan:

```html
<div class="birthday-message">
    <p>Ya Allah, berkahilah hari istimewa ini...</p>
    <!-- Ubah pesan di sini -->
</div>
```

### 3. Menjalankan Website
- Buka file `index.html` di browser
- Atau gunakan live server untuk pengalaman yang lebih baik

## Struktur File

```
├── index.html          # File utama HTML
├── style.css           # Styling dan animasi
├── script.js           # JavaScript untuk interaktivitas
├── couple-photo.jpg    # Foto latar belakang (perlu ditambahkan)
├── birthday-person.jpg # Foto orang yang berulang tahun (perlu ditambahkan)
├── romantic-birthday-song.mp3  # Musik latar (perlu ditambahkan)
└── README.md           # Panduan ini
```

## Kustomisasi Lanjutan

### Mengubah Warna Tema
Edit variabel warna di `style.css`:
```css
/* Warna utama */
background: linear-gradient(45deg, #ff6b9d, #ff8e9b);

/* Warna emas untuk teks islami */
color: #ffd700;
```

### Menambah Ornamen
Tambahkan ornamen baru di `index.html`:
```html
<div class="ornaments">
    <div class="new-ornament">🕌</div>
</div>
```

### Mengubah Musik
1. Siapkan file musik format MP3
2. Ganti nama file menjadi `romantic-birthday-song.mp3`
3. Atau ubah nama file di `index.html`:
```html
<source src="nama-musik-anda.mp3" type="audio/mpeg">
```

## Tips Penggunaan

1. **Foto Latar**: Gunakan foto dengan resolusi tinggi (minimal 1920x1080) untuk hasil terbaik
2. **Foto Profil**: Foto `birthday-person.jpg` akan otomatis di-crop menjadi bulat, gunakan foto portrait untuk hasil optimal
3. **Musik**: File musik sebaiknya tidak terlalu besar (maksimal 10MB) agar loading cepat
4. **Browser**: Gunakan browser modern (Chrome, Firefox, Safari) untuk kompatibilitas terbaik
5. **Mobile**: Website sudah dioptimalkan untuk tampilan mobile dengan responsivitas yang baik

## Ucapan Islami yang Tersedia

Website ini menggunakan ucapan-ucapan islami yang indah:
- "Barakallahu laki wa baraka alaiki" (Semoga Allah memberkahi)
- Doa-doa untuk kebahagiaan dan keberkahan
- Ornamen islami seperti bulan, bintang, dan masjid

Semoga website ini dapat memberikan kebahagiaan dan keberkahan untuk pasangan Anda! 💖🤲