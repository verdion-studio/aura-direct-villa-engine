---
name: google-agents-cli-observability
description: Pelacakan interaksi booking & simulasi event checkout untuk Aura Direct
---

# Observability & Interaction Tracking

## Event Pelacakan Interaktif
Setiap interaksi krusial pada live demo dipantau dengan logging telemetry/console terformat untuk evaluasi:
1. `booking_dates_selected`: Parameter check-in, check-out, durasi malam, dan total tarif.
2. `payment_tier_chosen`: Pilihan DP 50% atau Pelunasan Penuh 100%.
3. `qris_modal_opened`: Event saat QRIS ditampilkan ke pengguna.
4. `qris_payment_simulated_success`: Event ketika tombol "Simulasi Bayar Berhasil" diklik.
5. `whatsapp_concierge_generated`: Event pembuatan template pesan WhatsApp otomatis beserta link `wa.me`.
6. `ical_export_triggered`: Event unduhan kalender `.ics` atau inspeksi feed iCal.

## Log Format
Gunakan logging bersih dengan prefix `[Aura Direct Engine]` pada debug mode jika dibutuhkan.

