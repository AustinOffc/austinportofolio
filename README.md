# Austin Official - Portofolio

Website portofolio statis (HTML + Tailwind CDN), siap deploy ke Vercel tanpa build.

## Isi folder

```
index.html        halaman utama
vercel.json       konfigurasi Vercel (cache aset + header dasar)
assets/
  avatar.webp       foto profil (potongan wajah dari foto-1)
  foto-1.webp       potret duduk di kursi kulit (kartu hero + galeri)
  foto-2.webp       potret bersandar di dinding (galeri)
  og-image.jpg      gambar pratinjau saat link dibagikan (WhatsApp, dll)
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

## Animasi scroll (dua arah, berulang)

Elemen muncul bertahap (fade + geser + blur, urut satu per satu) **setiap kali** masuk layar, baik saat
scroll ke bawah maupun ke atas. Begitu keluar layar, efeknya di-reset (elemen disembunyikan lagi), jadi
animasinya muncul terus-menerus. Saat scroll ke atas, elemen meluncur turun dari atas (arah dibalik).
Ada juga progress bar scroll, cahaya biru di hero yang ikut bergerak, parallax halus di foto galeri,
spotlight yang mengikuti kursor di card, dan angka hero yang menghitung naik ulang tiap muncul.

- Semua kodenya ada di bagian `Efek scroll & visual` (CSS di `<style>`, JS di `<script>` terakhir) di `index.html`.
- Mau elemen baru ikut animasi: tambahkan atribut `data-rv="up"` (pilihan: `up`, `blur`, `left`, `right`, `zoom`, `fade`).
- Kecepatan stagger: ubah `STEP` di script. Durasi: ubah `900ms` pada `.rv-in[data-rv]`.
- Mau animasi sekali saja seperti dulu: di `ioHide` (script terakhir), hapus pemanggilan `hide(...)`.
- Pengguna yang mengaktifkan "kurangi animasi" di perangkatnya otomatis melihat semuanya langsung tanpa animasi.

## Hitung mundur ulang tahun

Ada di bagian Biodata (kartu lebar paling bawah). Tanggal lahir diambil dari `portfolioData.birthDate`
(format `YYYY-MM-DD`) di `index.html`, jadi cukup ubah satu tempat itu. Dihitung pakai zona waktu WIB (UTC+7)
supaya sama untuk semua pengunjung. Pada hari-H tampil ucapan selamat ulang tahun, besoknya otomatis
lanjut menghitung ke ulang tahun berikutnya. Kalau tanggal lahir diganti, teks "6 April 2003" di kartu hero,
tile "Lahir", dan FAQ "Kapan ulang tahunnya?" ikut diganti manual.

## Foto & galeri

- Kartu hero memakai `assets/foto-1.webp`; bagian Galeri (`#galeri`) menampilkan `foto-1` dan `foto-2`
  dengan lightbox (klik untuk memperbesar, panah kiri/kanan untuk pindah, Esc untuk menutup).
- Mau ganti foto: timpa file di `assets/` dengan nama sama (rasio 3:4 paling pas, lebar sekitar 900 px),
  lalu naikkan angka `?v=` di `index.html` supaya cache browser diperbarui.

## Kontak email

Email `austinstoreofficial@gmail.com` muncul di kartu sosial, bagian Kontak, footer, menu mobile, dan FAQ.
Form kontak punya dua tombol: "Lewat WhatsApp" dan "Lewat Email" (membuka aplikasi email dengan isian terisi).
Ganti alamatnya lewat konstanta `CONTACT_EMAIL` dan array `socials` di `index.html`.

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
