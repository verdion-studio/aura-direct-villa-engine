---
name: google-agents-cli-adk-code
description: Best practice arsitektur komponen Astro & Tailwind CSS untuk Aura Direct
---

# ADK Code Best Practices: Astro & Tailwind

## Panduan Arsitektur Komponen
- Gunakan arsitektur berbasis Astro Island (`client:load`, `client:idle`, atau Vanilla Script inline scoped) hanya jika komponen membutuhkan interaktivitas browser.
- Pisahkan komponen UI statis (Hero, Specifications, Facility Grid, Editorial Stories) dari komponen interaktif (DatePicker, PricingCalculator, PaymentModal, IcalInspector).
- Struktur styling:
  - Gunakan utility Tailwind CSS dengan variasi warna luxury (Slate, Stone, Zinc, aksen Amber/Gold `#D4AF37` / `#C5A880`).
  - Gunakan class readability yang bersih dan mobile-first (`flex flex-col md:flex-row`).
- Hindari ketergantungan library eksternal yang membengkakkan bundle jika dapat diselesaikan dengan Vanilla Web APIs (misal: Date manipulation, SVG icons, Modal dialogs native `<dialog>` atau backdrop Tailwind).

