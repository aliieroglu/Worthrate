# Worthrate - Web Tasarım ve Geliştirme Detaylı Proje Raporu

**Ders:** Web Tasarımı ve Kodlama  
**Hazırlayan:** Ali Buğra Eroğlu  
**Tarih:** 7 Aralık 2024  
**Proje Konusu:** Online Film ve Dizi İnceleme/Listeleme Platformu

---

## 1. Yönetici Özeti
Bu proje, sinema ve dizi tutkunlarına yönelik modern, kullanıcı dostu ve estetik bir dijital platform olan **"WorthRate"**in geliştirilme sürecini kapsamaktadır. Projenin temel amacı, kullanıcıların güncel içeriklere ulaşabileceği, popüler yapımları inceleyebileceği ve kendi görüşlerini paylaşabileceği dinamik bir arayüz oluşturmaktır. Geliştirme sürecinde hazır bir HTML5 şablonu temel alınmış, ancak marka kimliği ve kullanıcı ihtiyaçları doğrultusunda hem tasarımsal hem de fonksiyonel olarak %80 oranında özelleştirilmiştir.

## 2. Proje Altyapısı ve Şablon Seçimi

### 2.1. Şablon Analizi
Projenin iskeleti olarak **"WorthRate - Online Movies, TV Shows & Cinema HTML Template"** tercih edilmiştir. Bu şablonun seçilmesindeki stratejik nedenler şunlardır:

*   **HTML5 & CSS3 Standartları:** Semantik web yapısına uygun, SEO dostu kodlama altyapısı.
*   **Bootstrap 5 Grid Sistemi:** Esnek (flexbox) yerleşim yapısı sayesinde tüm cihazlarda (mobil, tablet, desktop) kusursuz görünüm.
*   **Entegre Kütüphaneler:**
    *   **OwlCarousel:** Duyarlı slider ve carousel yapıları için.
    *   **Plyr:** Özelleştirilebilir video oynatıcı arayüzü.
    *   **Magnific Popup / PhotoSwipe:** Görsel ve video galerileri için lightbox özellikleri.
    *   **Ionicons & Material Icons:** Modern ikon setleri.

### 2.2. Dosya Yapısı
Proje, yönetilebilirliği artırmak adına modüler bir dosya yapısına sahiptir:
*   `css/`: Stil dosyaları (main.css, bootstrap.min.css vb.)
*   `js/`: JavaScript kütüphaneleri ve özel scriptler (main.js).
*   `img/`: Görsel varlıklar (arkaplanlar, posterler, ikonlar).
*   `admin/`: Yönetim paneli arayüz dosyaları.

## 3. Özelleştirme ve Geliştirme Süreci

Proje, şablonun ham halinden çıkarılıp özgün bir ürün haline getirilmesi için üç ana aşamada ele alınmıştır:

### 3.1. Tasarım Dili ve Marka Kimliği (UI/UX)
Sitenin görsel dili, hedef kitle olan genç ve dinamik sinema severlere hitap edecek şekilde yeniden kurgulandı.

*   **Renk Psikolojisi:** Şablonun varsayılan kırmızısı yerine, daha enerjik ve modern duran **Neon Pembe (#ff55a5)** ana renk olarak belirlendi. Bu renk, "Dark Mode" arkaplan (`#2b2b31`) üzerinde yüksek kontrast sağlayarak "Call-to-Action" (Harekete Geçirici) butonlarını ön plana çıkardı.
*   **Tipografi:** Başlıklar ve metinler için **'Inter'** ve **'Open Sans'** font aileleri kullanılarak okunabilirlik artırıldı.
*   **Logo Tasarımı:** "WorthRate" markası tamamen kaldırılarak, modern fontlarla hazırlanan metin tabanlı **"WorthRate"** logosu ve özel bir ikon entegre edildi.

### 3.2. Kodlama ve Önyüz (Frontend) Geliştirmeleri
HTML ve CSS üzerinde yapılan köklü değişiklikler:

*   **Layout Revizyonu:** Sitenin genel yerleşim planı, kullanıcı odaklı bir deneyim sunmak için optimize edildi. Header ve Footer alanları sadeleştirildi.
*   **CSS Değişkenleri:** Renk yönetimi için CSS değişkenleri (variables) tanımlanarak, tema değişikliklerinin tek bir noktadan yönetilmesi sağlandı.

### 3.3. Etkileşim ve Scripting (JavaScript/jQuery)
Kullanıcı etkileşimlerini artırmak için mevcut scriptler üzerinde düzenlemeler yapıldı ve yeni fonksiyonlar eklendi.

## 4. Siteye Eklenen Yenilikler ve Özellikler
Bu başlık altında, şablonun orijinal halinde bulunmayan ve proje kapsamında **sıfırdan geliştirilen** veya **büyük ölçüde değiştirilen** özellikler detaylandırılmıştır.

### 4.1. Gelişmiş "Top 10" Listeleme Modülü
Şablonun standart listeleme yapısı tamamen değiştirilerek, platforma özel bir "Top 10" deneyimi kazandırılmıştır.
*   **Görsel Derinlik:** Her liste öğesi için standart poster yerine özel bir **Kart Tasarımı (Card Component)** geliştirildi. Kartlar, film afişinin yanı sıra; oynatma butonu, kategori etiketleri ve IMDb puanını içeren detaylı bir bilgi bloğu sunmaktadır.
*   **Sıralama İndikatörleri:** Listenin sol tarafına, 1'den 10'a kadar sıralanan devasa numaralar eklendi. Bu numaralar, "stroke" (dış hat) efekti ve arkaplanla uyumlu **gradient dolgu** ile stilize edildi.
*   **Responsive Sahne:** Masaüstü görünümde tam 4 öğenin sığdığı (`min-w-[23%]`), mobilde ise kaydırma hissiyatını güçlendiren özel bir grid yapısı kurgulandı.
*   **Özel Arkaplan:** Tüm bölümün arkaplanına, sitenin gri tonlarıyla uyumlu, premium bir his veren **Kırmızı-Siyah Gradyan** (`from-[#2b2b31] via-red-900/40 to-[#2b2b31]`) uygulandı ve geçişler "seamless" (pürüzsüz) hale getirildi.

### 4.2. Dinamik Kullanıcı Etkileşim Formu
Film detay sayfalarındaki (`details1.html`) yorum/inceleme formu, statik bir yapıdan çıkarılarak etkileşimli hale getirildi.
*   **Anlık Puan Gösterimi:** Kullanıcı yıldızlara tıkladığında, seçim anlık olarak algılanır ve jQuery yardımıyla seçilen puan (Örn: 8/10) kullanıcının görebileceği şekilde yıldızların yanına yazdırılır.
*   **Modern Arayüz Tasarımı:** Form alanı, standart bir kutu olmaktan çıkarılıp, sitenin genel karanlık temasından ayrışması için özel bir **Kırmızı-Gri Gradient** arkaplan ve yuvarlatılmış köşeler (`rounded-lg`) ile modernize edildi.
*   **Tipografi İyileştirmesi:** "Gönder" butonu daha belirgin, kalın ve büyük puntolarla (`text-2xl`) yeniden tasarlandı.

### 4.3. Duyuru ve Güncelleme Sistemi
Kullanıcılarla iletişim kurmak ve site hakkındaki gelişmeleri paylaşmak için ana sayfaya yeni bir blok eklendi.
*   **Modal (Pop-up) Yapısı:** Duyurulara tıklandığında sayfa değişimi olmadan, arka planı karartılmış (backdrop) şık bir pencere (modal) açılmaktadır. Bu sayede kullanıcı akışı bozulmadan bilgi aktarımı sağlanır.

### 4.4. İstatistik Barı ve Veri Görselleştirme
Sitenin doluluğunu, aktifliğini ve güvenilirliğini vurgulamak için ana sayfaya **"Sayılarla WorthRate"** bölümü eklendi.
*   Film, dizi ve kullanıcı sayıları, özel ikonlar ve modern bir tipografi ile sergilendi.

### 4.5. Yerelleştirilmiş İçerik ve Varlık Yönetimi
*   **Görsel Optimizasyonu:** Performansı artırmak için şablondaki tüm dış kaynaklı (external) görseller indirilerek yerel `img/covers/` dizinine taşındı.
*   **Yerel İçerik:** Afişler, kapaklar ve metinler Türkiye'deki popüler içeriklere (Gibi, Şahsiyet, vb.) ve Türk kullanıcı alışkanlıklarına göre güncellendi.

## 5. Karşılaşılan Teknik Zorluklar ve Çözümler

Geliştirme sürecinde karşılaşılan engeller ve üretilen mühendislik çözümleri:

### 5.1. Gradyan Entegrasyon Sorunu
*   **Zorluk:** "Top 10" bölümüne eklenen CSS gradient, sitenin genel düz renk (`flat color`) arkaplanı ile birleştiğinde keskin ve yapay bir çizgi oluşturuyordu.
*   **Çözüm:** CSS3 `linear-gradient` özelliği kullanılarak "Seamless Transition" (Kusursuz Geçiş) tekniği uygulandı. Gradient'in başlangıç ve bitiş renk kodları, sitenin `body` rengi olan `#2b2b31` ile birebir eşitlendi. Böylece bölüm, sayfanın doğal bir parçası gibi "eriyerek" görünüme girdi.

### 5.2. Responsive Grid Problemleri
*   **Zorluk:** Şablondaki kartlar sabit piksel (`width: 200px`) genişliğine sahipti. Bu durum, geniş ekranlarda sağ tarafta boşluk kalmasına, mobilde ise taşmalara neden oluyordu.
*   **Çözüm:** Sabit genişlik yerine **yüzdelik (percentage-based)** ve **flexbox** yapısı benimsendi.
    *   Desktop: `min-w-[23%]` (Satırda 4 öğe)
    *   Tablet: `min-w-[30%]` (Satırda 3 öğe)
    *   Mobil: `min-w-[40%]` (Satırda 2.5 öğe - kaydırma hissiyatı için)
    Bu sayede her cihazda doluluk oranı optimize edildi.

### 5.3. Z-Index Çakışmaları
*   **Zorluk:** Duyuru modalları açıldığında, sayfanın üst menüsü (header) veya Top 10 listesindeki sıralama numaraları modalin üzerinde kalıyordu.
*   **Çözüm:** CSS `z-index` katman yönetimi yeniden yapılandırıldı. Modalların `z-index` değeri `9999` olarak atanırken, header ve diğer elementlerin katmanları hiyerarşik olarak daha düşük seviyelere çekildi.

## 6. Gelecek Planları ve Yol Haritası (Roadmap)
Projenin bir sonraki fazında hayata geçirilmesi hedeflenen özellikler:
*   **Backend Entegrasyonu:** Şu an statik (HTML) olan yapının PHP veya Node.js ile dinamik hale getirilmesi.
*   **Veritabanı:** Dizi ve film verilerinin MySQL veya MongoDB üzerinde tutulması.
*   **Kullanıcı Sistemi:** "Favorilere Ekle" ve "İzleme Listesi" özelliklerinin aktif edilmesi.

## 7. Sonuç
**WorthRate** projesi, web geliştirme disiplinlerinin (Tasarım, Frontend Kodlama, UX İyileştirme) bütünleşik olarak uygulandığı kapsamlı bir çalışmadır. Hazır bir yapı üzerine inşa edilmesine rağmen, yapılan %80 oranındaki özelleştirmelerle proje, kendine has bir kimlik kazanmış ve profesyonel bir ürün niteliğine ulaşmıştır.
