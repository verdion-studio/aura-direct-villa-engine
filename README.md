# Aura Direct — Luxury Villa Direct Booking Engine & iCal Sync Simulator

**Aura Direct** adalah aplikasi portofolio resmi **Veridion Studio** (Hospitality Tech Studio) yang mendemonstrasikan sistem *direct booking engine* modern untuk properti luxury villa & boutique resort. Aplikasi ini dirancang untuk mengeliminasi beban komisi OTA (15%–25%), menyediakan simulasi pembayaran instan QRIS, serta sistem inspeksi sinkronisasi kalender iCal 2-arah (anti-overbooking).

---

## 🏛️ Fitur Utama

### 1. Luxury Villa Showcase
- **Property:** The Maya Sanctuary & Ocean Cliff Villa (Uluwatu, Bali).
- **Spesifikasi:** 3 King Bedroom Suites, Kolam Renang Infinity 18m, Jacuzzi Air Hangat, Dedicated Villa Butler & Private Chef on Demand.
- **Fasilitas Eksklusif:** Starlink Wi-Fi (250+ Mbps), Sonos Multi-room Audio, Smart Keyless Entry, Sunset Yoga Deck.

### 2. Interactive Date Picker & Dynamic Price Engine
- **Kalkulasi Hari Otomatis:** Perhitungan tarif dinamis antara *Weekday* (Rp 6.500.000/malam) vs *Weekend* (Rp 7.800.000/malam).
- **Rincian Transparan:** Biaya sewa villa + *Cleaning & Housekeeping Fee* (Rp 750.000) + Pajak Daerah PB1 / PHR 10%.
- **Opsi Pembayaran:** Pilihan fleksibel antara **DP 50%** atau **Pelunasan Penuh 100%**.

### 3. Instant Payment Simulator (QRIS Interaktif)
- Modal QR Code QRIS berstandar nasional (NMID resmi merchant simulated).
- Tombol **"Simulasi Bayar Berhasil"** yang memicu status reservasi terkonfirmasi tanpa perlu backend eksternal.

### 4. 2-Way iCal Calendar Sync Inspector (Anti-Overbooking Tool)
- Matrix kalender multi-channel visual (Airbnb, Booking.com, dan Direct Booking).
- Fitur **Export iCal (.ics)** yang meng-generate file kalender iCalendar berstandar RFC 5545 siap diimpor ke channel manager OTA.
- Pembaruan otomatis kalender setelah transaksi direct booking berhasil dilakukan.

### 5. Automated WhatsApp Guest Concierge
- Dispatcher pesan reservasi otomatis VIP ke tamu via WhatsApp.
- Berisi kode booking unik, rincian pembayaran, pin smart lock pintu masuk (`#XXXXXX#`), password Starlink Wi-Fi, dan link titik koordinat Google Maps villa.
- Tombol direct link ke WhatsApp resmi Veridion Studio.

### 6. Watermark Kredibilitas Veridion Studio
- Navigasi & Footer terintegrasi dengan kredensial resmi Veridion Studio:
  - **WhatsApp:** 082322370126
  - **Email:** verdionstudio@gmail.com
  - **CTA:** Konsultasi langsung pembuatan custom booking engine villa.

---

## 🛠️ Tech Stack & Standar Arsitektur

- **Framework:** Astro 4 (Static Site Generation / SSG)
- **Styling:** Tailwind CSS (Modern Luxury Color Palette: Dark Charcoal, Slate, Champagne Gold `#D4AF37`)
- **Typography:** *Playfair Display* (Editorial Serif) & *Plus Jakarta Sans*
- **Deployment:** Netlify Ready (`netlify.toml` included)
- **Agent Rules & Skills:** Terstruktur rapi di dalam `.agents/`

---

## 🚀 Menjalankan Proyek di Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:4321`.

3. **Build Produksi:**
   ```bash
   npm run build
   ```
   File hasil kompilasi statis tersedia di direktori `dist/`.

---

© 2026 Veridion Studio — Dedicated Hospitality Tech Studio.
