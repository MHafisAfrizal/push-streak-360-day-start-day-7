# push-streak-360-day-start-day-7
## 📅 Day 7 — 16 Mei 2025  
### 🎯 Fokus: Menambahkan Bagian Testimoni Klien

---

### 🧩 Apa yang Dikerjakan Hari Ini?

Hari ini aku membangun bagian **Testimoni Klien** pada landing page. Testimoni punya peran penting dalam membangun kepercayaan pengguna baru terhadap layanan kita. Kalau testimoni ditata dengan rapi dan menarik, bisa jadi magnet yang kuat untuk konversi.

📸 Inspirasi layout carousel testimoni:

![Testimonial UI](https://i.imgur.com/TZX3mGU.png)  
> Sumber: UIHUT & Dribbble

---

### 🔍 Struktur Konten Bagian Testimoni

Bagian ini terdiri dari:
- **Judul & subjudul** (untuk perkenalan),
- **Carousel atau card testimoni** yang berisi:
  - Foto klien,
  - Nama & jabatan,
  - Kutipan testimoni.

---

### 🧠 Alur Implementasi Hari Ini

#### 1. **Struktur HTML**
Aku menggunakan struktur section `<section>` berisi:
- `h2` dan `p` untuk perkenalan bagian,
- div `.testimonial-wrapper` yang akan menampung setiap testimoni.

#### 2. **Carousel Interaktif (JavaScript)**
Aku gunakan JS untuk membuat carousel sederhana:
- Navigasi dengan tombol prev/next,
- Animasi transisi antar testimoni,
- Data diambil dari JSON agar mudah diatur atau diganti nanti.

> Rencana ke depan: migrasi ke **SwiperJS** atau **Splide.js** biar lebih mulus dan mobile-friendly.

📸 Contoh carousel yang rapi:

![Carousel Preview](https://i.imgur.com/8iJo5GL.png)
