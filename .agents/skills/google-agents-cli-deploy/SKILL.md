---
name: google-agents-cli-deploy
description: Prosedur build statis & deployment Netlify untuk Aura Direct
---

# Deploy Procedure: Netlify & Static Site Hosting

## Build Target
- Astro output mode: `static` (SSG)
- Build command: `npm run build`
- Output directory: `dist/`

## Konfigurasi netlify.toml
Pastikan file `netlify.toml` tersedia di root repositori dengan konfigurasi:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Checklist Pra-Deployment
1. Jalankan `npm run build` di local dan pastikan exit code `0`.
2. Verifikasi folder `dist/` terisi aset HTML, CSS, dan JS yang utuh.
3. Cek responsifitas dan fungsionalitas tombol simulasi sebelum rilis publik.

