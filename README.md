# Austin Official - Portofolio

Website portofolio statis (HTML + Tailwind CDN), siap deploy ke Vercel tanpa build.

## Isi folder

```
index.html        halaman utama
vercel.json       konfigurasi Vercel (cache aset + header dasar)
assets/
  avatar.webp       foto profil
  logo.webp         logo Austin Official (navbar + footer)
  favicon-32.png    favicon tab browser
  favicon-48.png    favicon tab browser
  apple-touch-icon.png  icon saat ditambah ke layar utama
  austinpay.webp    logo AustinPay
  mymarket.webp     logo Austin Store (mymarket)
  lucibook.webp     logo LuciBook
  austinplay.webp   logo AustinPlay (versi kastil)
  music.mp3         musik latar untuk tombol Musik
```

## Mode desktop di Android

Skrip kecil di `<head>` `index.html` mengubah viewport jadi lebar 1024 saat terdeteksi Android,
jadi tampilan desktop otomatis. Ubah `DESKTOP_WIDTH` untuk mengatur lebarnya.

## Musik latar

Lagu latar ada di `assets/music.mp3`. Untuk ganti lagu, timpa file itu dengan nama yang sama.

## Peta

Bagian "Lombang, Sumenep" memakai embed Google Maps tingkat desa (tanpa pin rumah).
Ubah lokasi di atribut `src` pada `<iframe id="map-frame">` di `index.html`
(parameter `q=` untuk tempat, `z=` untuk zoom).

## Push ke GitHub

```bash
cd austin-portfolio
git init
git add .
git commit -m "Portofolio Austin Official"
git branch -M main
git remote add origin https://github.com/USERNAME/NAMA-REPO.git
git push -u origin main
```

Ganti `USERNAME/NAMA-REPO` dengan repo kosong yang sudah kamu buat di GitHub.
Saat diminta password, pakai Personal Access Token GitHub, bukan password akun.

## Deploy di Vercel

1. Buka vercel.com, klik Add New, lalu Project.
2. Import repo GitHub tadi.
3. Framework Preset: Other. Build Command dan Output Directory dikosongkan.
4. Klik Deploy. Tiap `git push` berikutnya otomatis deploy ulang.
