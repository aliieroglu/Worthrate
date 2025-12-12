# 🎬 WorthRate - Modern Film ve Dizi Platformu

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Status](https://img.shields.io/badge/status-Active-success.svg?style=flat-square)

> **"Sinema dünyasını keşfedin, inceleyin ve paylaşın."**

---

## 📋 İçindekiler
- [Proje Hakkında](#-proje-hakkında)
- [Teknolojiler](#%EF%B8%8F-teknolojiler-ve-altyapı)
- [Öne Çıkan Özellikler](#-öne-çıkan-özellikler)
- [Tasarım ve Geliştirme](#-tasarım-ve-geliştirme)
- [Teknik Çözümler](#-teknik-zorluklar-ve-çözümler)
- [Yol Haritası](#%EF%B8%8F-yol-haritası)
- [Künye](#-künye)

---

## 🚀 Proje Hakkında

**WorthRate**, sinema ve dizi tutkunları için geliştirilmiş modern, estetik ve kullanıcı odaklı bir dijital platformdur. Kullanıcıların güncel içeriklere kolayca ulaşmasını, popüler yapımları incelemesini ve deneyimlerini paylaşmasını hedefler.

Mevcut bir HTML5 şablonu üzerine inşa edilen proje, **%80 oranında özelleştirilerek** tamamen özgün bir kimliğe kavuşturulmuştur.

---

## 🛠️ Teknolojiler ve Altyapı

Proje, modern web standartlarına uygun, performanslı ve sürdürülebilir bir altyapı kullanır.

| Kategori | Teknolojiler |
|----------|--------------|
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **Framework** | ![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=flat-square&logo=bootstrap&logoColor=white) |
| **Kütüphaneler** | `jQuery`, `OwlCarousel`, `Plyr`, `Magnific Popup`, `Ionicons` |

---

## ✨ Öne Çıkan Özellikler

Proje kapsamında geliştirilen ve platformu benzersiz kılan temel özellikler:

### 🏆 Gelişmiş "Top 10" Listesi
- **Görsel Zenginlik:** Özel tasarlanmış interaktif kartlar.
- **Dinamik Sıralama:** 1'den 10'a kadar şık, gradient dolgulu devasa numaralar.
- **Responsive Yapı:** Masaüstünde 4, mobilde akıcı kaydırma deneyimi sunan özel grid sistemi.
- **Premium Atmosfer:** `Seamless` (kusursuz) geçişli kırmızı-siyah gradient arka plan.

### 💬 Dinamik Etkileşim Formu
- **Canlı Puanlama:** Kullanıcı tıklamasıyla anlık değişen yıldız puanı gösterimi (Örn: 8/10).
- **Modern UI:** Yuvarlatılmış köşeler ve temaya uygun gradient arka plan.
- **UX Odaklı:** Dikkat çekici butonlar ve iyileştirilmiş tipografi.

### 📢 Duyuru ve Güncelleme Sistemi
- **Modal Yapısı:** Sayfa yenilenmeden açılan, şık popup pencereler.
- **Kullanıcı Dostu:** Arka planı karartarak (backdrop) odaklanmayı sağlayan yapı.

### 📊 İstatistikler ve Veri
- **Sayılarla WorthRate:** Platformun doluluğunu gösteren modern sayaçlar.
- **Yerelleştirme:** Türk izleyicisine özel içerikler (Gibi, Şahsiyet vb.) ve görseller.

---

## 🎨 Tasarım ve Geliştirme

Projenin görsel dünyası, "Genç, Dinamik ve Modern" mottosuyla yeniden yaratıldı.

- **🎨 Renk Paleti:** Varsayılan kırmızı yerine enerjik **Neon Pembe (#ff55a5)** ana renk olarak seçildi. Dark mode tabanında (`#2b2b31`) yüksek kontrast sağlandı.
- **✍️ Tipografi:** Okunabilirlik için **'Inter'** ve **'Open Sans'** font aileleri tercih edildi.
- **🖼️ Logo:** Minimalist ve modern fontlarla hazırlanmış metin tabanlı yeni logo.

---

## 🧩 Teknik Zorluklar ve Çözümler

Geliştirme sürecinde aşılan bazı engeller:

<details>
<summary><b>🌈 Gradyan Entegrasyon Sorunu</b> (Tıklayın)</summary>
<br>
"Top 10" bölümündeki zemin geçişlerinin keskin çizgiler oluşturması sorunu, CSS3 seamless <code>linear-gradient</code> tekniği ile çözüldü. Renkler <code>body</code> rengi ile birebir eşitlendi.
</details>

<details>
<summary><b>📱 Responsive Grid Problemleri</b> (Tıklayın)</summary>
<br>
Sabit genişlik yerine yüzdelik (percentage-based) flexbox yapısı kuruldu. Mobil cihazlarda kullanıcıya "kaydırma" hissiyatı vermek için özel oranlar (min-w-[40%]) belirlendi.
</details>

<details>
<summary><b>🏗️ Z-Index Çakışmaları</b> (Tıklayın)</summary>
<br>
Modal pencerelerin diğer öğelerin altında kalması sorunu, katman yönetimi (Layer Management) yeniden yapılandırılarak ve <code>z-index: 9999</code> atanarak çözüldü.
</details>

---

## 🗺️ Yol Haritası

Gelecekte eklenmesi planlanan özellikler:

- [ ] **Backend:** PHP veya Node.js entegrasyonu.
- [ ] **Veritabanı:** MySQL/MongoDB ile gerçek zamanlı veri yönetimi.
- [ ] **Üyelik Sistemi:** Favori listesi ve izleme geçmişi özellikleri.

---

## 👤 Künye

| Rol | İsim | Ders | Tarih |
|-----|------|------|-------|
| **Geliştirici** | Ali Buğra Eroğlu | Web Tasarımı ve Kodlama | 7 Aralık 2025 |

---

<p align="center">
  <sub>WorthRate © 2024 - Tüm Hakları Saklıdır.</sub>
</p>
