---
name: google-agents-cli-scaffold
description: Panduan scaffolding boilerplate Astro & struktur folder untuk Aura Direct
---

# Scaffolding Guidelines

## Struktur Direktori Proyek
```text
aura-direct-villa-engine/
├── .agents/                 # Folder SOP, rules, dan skills agent Veridion Studio
├── public/
│   ├── favicon.svg
│   ├── images/
│   └── ical-sample.ics
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── HeroGallery.astro
│   │   ├── VillaSpecs.astro
│   │   ├── BookingEngine.astro     # Interaktivitas Kalender, Pricing & Payment
│   │   ├── IcalInspector.astro     # Simulator Sinkronisasi 2-Arah iCal
│   │   ├── WhatsappConcierge.astro # Generator preview pesan WhatsApp
│   │   └── FooterWatermark.astro   # Watermark Veridion Studio & CTA
│   ├── data/
│   │   ├── villaData.ts            # Spesifikasi unit, foto, fasilitas, harga
│   │   └── sampleBookings.ts       # Mock kalender Airbnb & Booking.com
│   ├── layouts/
│   │   └── Layout.astro            # Base HTML wrapper, meta tags, font setup
│   └── pages/
│       └── index.astro             # Single page showcase terpadu
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

