# Project Rules - Aura Direct Villa Engine

## Tech Stack
- **Framework:** Astro (Static Site Generation / SSG)
- **Styling:** Tailwind CSS (Modern luxury aesthetic, dark/warm neutral palette, gold/champagne accents, editorial typography)
- **Icons & Assets:** Lucide Icons / SVG inline, Unsplash high-resolution luxury architectural imagery
- **State Management & Interaktivitas:** Lightweight Vanilla JS / Alpine.js / Framework island minimalis dengan performa maksimal

## Standar Kualitas Teknis
1. **Performa & Zero Console Errors:**
   - Tidak boleh ada console error atau warning pada runtime browser.
   - Asset teroptimasi (lazy loading images, responsive srcset).
   - Core Web Vitals optimal (LCP < 1.5s, CLS ~ 0).
2. **Mobile-First Luxury Experience:**
   - Desain responsif sempurna di perangkat mobile (375px+), tablet, hingga desktop ultra-wide.
   - Micro-interaction halus: modal transitions, feedback click, copy-to-clipboard toast.
3. **Simulasi Interaktif Penuh (Zero Mock Broken):**
   - Interactive Date Picker: Validasi check-in/check-out dinamis, minimum stay handling.
   - Dynamic Price Engine: Kalkulasi otomatis tarif weekday/weekend/high season, cleaning fee, pajak PB1 (10%).
   - Payment Simulator: QRIS modal interaktif dengan tombol "Simulasi Bayar Berhasil" yang mengalir mulus ke status konfirmasi & WhatsApp concierge.
   - iCal Sync Inspector: Visual multi-channel simulator (Airbnb, Booking.com, Direct) dengan fitur real-time parse & export file `.ics`.

