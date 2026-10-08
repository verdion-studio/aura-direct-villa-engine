# Aura Direct — Luxury Villa Direct Booking Engine & iCal Sync Simulator

**Aura Direct** adalah aplikasi portofolio resmi **Veridion Studio** (Hospitality Tech Studio) yang mendemonstrasikan sistem *direct booking engine* modern untuk properti luxury villa & boutique resort. Dirancang dengan pendekatan **Mobile-First Luxury Aesthetic**, sistem ini mengeliminasi beban komisi OTA (15%–25%), menyediakan simulasi pembayaran instan QRIS, serta sinkronisasi kalender iCal 2-arah (anti-overbooking).

---

## 🏛️ Fitur Unggulan

### 1. Minimalist Luxury UI & Dual Theme (Light & Dark Mode)
- **Light Mode ("Warm Alabaster"):** Tampilan bersih, elegan, dengan palet warna natural stone (`#FBFBFA`), kontras teks tinggi, dan aksen emas terkalibrasi (`#C5A059`).
- **Dark Mode ("Obsidian Night"):** Tampilan eksklusif malam hari (`#0A0D10` & `#12171E`) dengan *warm glow effect*.
- **Theme Persistence:** Beralih tema secara mulus tanpa jeda (Zero FOUC), tersimpan di `localStorage` dan tersinkronisasi dengan preferensi sistem OS.

### 2. Mobile-First Optimization
- **Sticky Booking CTA Bar (Mobile Viewport):** Navigasi cepat untuk tamu di perangkat mobile dengan ringkasan harga dan tombol *quick jump* ke form reservasi.
- **Responsive Layout:** Grid adaptif sempurna dari smartphone layar kecil (375px+), tablet, hingga desktop ultrawide.
- **Touch-Friendly Controls:** Target sentuh optimal untuk pemilihan tanggal, jumlah tamu, opsi pembayaran (DP vs Pelunasan), dan penutupan modal.

### 3. Luxury Villa Showcase
- **Property:** The Maya Sanctuary & Ocean Cliff Villa (Uluwatu, Bali).
- **Spesifikasi:** 3 King Bedroom Suites, Kolam Renang Infinity 18m, Jacuzzi Air Hangat, Dedicated Villa Butler & Private Chef on Demand.
- **Fasilitas Eksklusif:** Starlink Wi-Fi (250+ Mbps), Sonos Multi-room Audio, Smart Keyless Entry, Sunset Yoga Deck.

### 4. Interactive Date Picker & Dynamic Price Engine
- **Kalkulasi Hari Otomatis:** Perhitungan tarif dinamis antara *Weekday* (Rp 6.500.000/malam) vs *Weekend* (Rp 7.800.000/malam).
- **Rincian Biaya Transparan:** Biaya sewa villa + *Cleaning & Housekeeping Fee* (Rp 750.000) + Pajak Daerah PB1 / PHR 10%.
- **Opsi Pembayaran Fleksibel:** Pilihan antara **DP 50%** (deposit) atau **Pelunasan Penuh 100%**.

### 5. Instant Payment Simulator (QRIS Interaktif)
- Modal QR Code QRIS berstandar nasional (NMID resmi merchant simulated).
- Tombol **"Simulasi Bayar Berhasil"** yang memicu konfirmasi pemesanan seketika.

### 6. 2-Way iCal Calendar Sync Inspector (Anti-Overbooking Tool)
- Matrix kalender multi-channel visual (Airbnb, Booking.com, dan Direct Booking).
- Fitur **Export iCal (.ics)** yang menghasilkan file kalender iCalendar RFC 5545 langsung di browser untuk diimpor ke OTA channel manager.
- Pembaruan kalender instan saat simulasi reservasi baru dilakukan.

### 7. Automated WhatsApp Guest Concierge
- Dispatcher pesan reservasi otomatis VIP ke tamu via WhatsApp.
- Berisi kode booking unik, rincian pembayaran, pin smart lock pintu masuk (`#XXXXXX#`), password Starlink Wi-Fi, dan link titik koordinat Google Maps villa.
- Tombol direct link ke WhatsApp resmi Veridion Studio.

### 8. Watermark Kredibilitas Veridion Studio
- Navigasi & Footer terintegrasi dengan kredensial resmi Veridion Studio:
  - **WhatsApp:** 082322370126
  - **Email:** verdionstudio@gmail.com
  - **Filosofi:** Practical, Zero Over-Engineering, High-Converting Hospitality Tech.

---

## 🛠️ Tech Stack & Arsitektur

- **Framework:** Astro 4 (Static Site Generation / SSG)
- **Styling:** Tailwind CSS 3 (Custom luxury dark & light color palette, Playfair Display & Plus Jakarta Sans typography)
- **Hosting:** Netlify Ready (`netlify.toml` pre-configured)
- **Agent Rules & Skills:** Terstruktur rapi di direktori `.agents/`

---

## 🚀 Panduan Menjalankan & Deployment

### Menjalankan di Komputer Lokal:
```bash
# 1. Install dependencies
npm install

# 2. Jalankan local development server
npm run dev
# Buka http://localhost:4321 di browser
```

### Build & Deploy:
```bash
# Kompilasi static build ke folder dist/
npm run build
```

#### Deploy ke Netlify:
1. Hubungkan repository GitHub ini (`verdion-studio/aura-direct-villa-engine`) ke [app.netlify.com](https://app.netlify.com).
2. Netlify secara otomatis membaca file `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Klik **Deploy** dan situs langsung aktif secara global.

---

© 2026 Veridion Studio — Dedicated Hospitality Tech Studio.
