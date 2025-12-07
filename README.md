# 🍽️ KULINA.AI

<div align="center">

**AI-Powered Restaurant Management System**

Platform berbasis Artificial Intelligence untuk digitalisasi rumah makan dengan Dashboard Admin dan Konsumen yang terintegrasi.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.21-green.svg)](https://expressjs.com/)

</div>

---

## 📸 Demo

<img width="1770" height="808" alt="image" src="https://github.com/user-attachments/assets/ecf1c9b5-42ae-4acd-95fb-a9588d366be2" />

### 🎥 Video Demo
<!--  -->
https://www.youtube.com/watch?v=b0yoxZ4z_iU&feature=youtu.be
---

## ✨ Features

### 🖥️ Dashboard Admin (Pemilik Rumah Makan)

- **📋 Manajemen Menu**
  - Tambah, edit, hapus menu
  - Kategori makanan & minuman
  - Status ketersediaan menu real-time

- **💰 Manajemen Harga & Stok**
  - Update harga otomatis/manual
  - Tracking stok bahan baku harian
  - Notifikasi stok menipis

- **📊 Manajemen Transaksi**
  - Pemantauan pesanan masuk real-time
  - Status pesanan (pending, diproses, selesai)
  - Laporan pembayaran lengkap

- **🤖 Analisis Review Pelanggan (AI)**
  - Analisis kepuasan pelanggan otomatis
  - Identifikasi keluhan pelayanan
  - Evaluasi kualitas rasa
  - Visualisasi data dengan grafik & insights

- **📱 Generator Caption Promosi (AI)**
  - Generate caption Instagram otomatis
  - Hashtag promosi yang relevan
  - Copywriting iklan profesional

- **🎨 Edit Foto Menu Berbasis AI**
  - Upload foto dari kamera HP
  - Hapus background otomatis
  - Ganti background estetik
  - Penyesuaian pencahayaan otomatis

- **📈 Laporan Penjualan**
  - Laporan harian, mingguan, bulanan
  - Grafik omzet & produk terlaris
  - Analisis tren penjualan

- **💡 Rekomendasi Harga & Stok Otomatis (AI)**
  - Rekomendasi kenaikan/penurunan harga
  - Prediksi kebutuhan restock bahan mentah
  - Analisis berdasarkan penjualan, review, dan tren

- **⚙️ Pengaturan Akun**
  - Profil usaha lengkap
  - Jam buka & lokasi
  - Rekening pembayaran

### 🧑‍🍳 Dashboard Konsumen (Pelanggan)

- **🎯 Rekomendasi Menu Berbasis AI**
  - Rekomendasi personal berdasarkan riwayat pesanan
  - Analisis preferensi rasa
  - Rekomendasi waktu makan optimal

- **💬 Chatbot Asisten Kuliner**
  - Tanya menu & rekomendasi
  - Cek promo & diskon
  - Estimasi harga otomatis
  - Dijawab oleh AI 24/7

- **🛒 Pemesanan & Keranjang Digital**
  - Tambah menu ke keranjang
  - Catatan pesanan custom
  - Checkout cepat & mudah
  - Estimasi harga real-time

- **⭐ Review & Rating**
  - Rating 1–5 bintang
  - Komentar pelanggan
  - Upload foto setelah makan
  - Review dianalisis AI untuk admin

- **📸 Galeri Menu Estetik**
  - Foto menu hasil edit AI
  - Tampilan menarik & profesional
  - Zoom & detail makanan

- **🎁 Promo & Voucher Otomatis**
  - Promo personal dari AI
  - Diskon pelanggan loyal
  - Promo jam sepi otomatis

- **📜 Riwayat Pesanan**
  - Lihat semua pesanan sebelumnya
  - Download struk digital
  - Pesan ulang dengan 1 klik

- **❤️ Menu Favorit**
  - Simpan menu favorit
  - Notifikasi promo menu favorit

- **🔔 Notifikasi Pintar**
  - Status pesanan real-time
  - Promo terbaru
  - Rekomendasi waktu makan

---

## 🚀 Quickstart

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 atau **yarn** >= 1.22.0
- **PostgreSQL** >= 16.0 (opsional, menggunakan in-memory storage by default)

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/ellzizz/kulina-welcome.git
   cd kulina-welcome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   
   Buat file `.env` di root project:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # AI API Keys (pilih salah satu atau semua)
   # Kolosal AI
   KOLOSAL_API_KEY=api key here

   # Google AI Studio (Gemini)
   GOOGLE_AI_API_KEY=api key here

   # OpenRouter
   OPENROUTER_API_KEY=api key here
   ```

   > **Note:** Ganti `api key here` dengan API key yang valid dari masing-masing provider.

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5000
   - Landing Page: http://localhost:5000/
   - Admin Login: http://localhost:5000/admin/login
   - Consumer Login: http://localhost:5000/consumer/login

### Default Credentials

**Admin:**
- Username: `admin`
- Password: `admin123`

**Consumer:**
- Username: `consumer-1`
- Password: `password123`

> ⚠️ **Security Note:** Ubah credentials default di production!

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Wouter** - Lightweight routing
- **Tailwind CSS** - Utility-first CSS
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **TanStack Query** - Data fetching & state management
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **Express Session** - Session management
- **Passport** - Authentication middleware

### AI Integration
- **OpenRouter** - Primary AI provider (supports multiple models)
- **Kolosal AI** - Alternative AI provider
- **Google AI Studio (Gemini)** - Fallback AI provider

### Database & Storage
- **In-memory storage** - Default (no setup required)
- **PostgreSQL** - Optional (via Drizzle ORM)
- **Drizzle ORM** - Type-safe ORM

---

## 📖 Documentation

### Project Structure

```
kulina-welcome/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Base UI components (Radix UI)
│   │   │   └── ai-chatbot.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── admin/     # Admin dashboard pages
│   │   │   ├── consumer/  # Consumer pages
│   │   │   └── auth/      # Authentication pages
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── use-ai.ts  # AI integration hooks
│   │   └── lib/           # Utility functions
│   └── public/            # Static assets
├── server/                 # Backend Express server
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   ├── kolosal.ts         # Kolosal AI client
│   ├── openrouter.ts      # OpenRouter AI client
│   ├── google-ai.ts       # Google AI client
│   └── index.ts           # Server entry point
├── shared/                 # Shared types & schemas
│   └── schema.ts          # Zod schemas
└── package.json           # Dependencies & scripts
```

### API Endpoints

#### Authentication
- `POST /api/auth/admin/login` - Admin login
- `POST /api/auth/consumer/login` - Consumer login
- `POST /api/auth/logout` - Logout

#### Menu Management
- `GET /api/menus` - Get all menus
- `POST /api/menus` - Create menu (admin only)
- `PUT /api/menus/:id` - Update menu (admin only)
- `DELETE /api/menus/:id` - Delete menu (admin only)

#### Orders
- `GET /api/orders` - Get orders (filtered by role)
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/status` - Update order status (admin only)

#### AI Features
- `POST /api/ai/chatbot` - Chat with AI assistant
- `POST /api/ai/menu-recommendations` - Get AI menu recommendations
- `POST /api/ai/analyze-reviews` - Analyze customer reviews (admin)
- `POST /api/ai/generate-promo-caption` - Generate promo caption (admin)
- `POST /api/ai/price-stock-recommendations` - Get price/stock recommendations (admin)

#### Reviews
- `GET /api/reviews` - Get reviews
- `POST /api/reviews` - Create review

#### Cart & Favorites
- `GET /api/cart/:userId` - Get user cart
- `POST /api/cart/:userId/add` - Add item to cart
- `PUT /api/cart/:userId/update` - Update cart item
- `DELETE /api/cart/:userId/:itemId` - Remove item from cart
- `GET /api/favorites/:userId` - Get user favorites
- `POST /api/favorites/:userId` - Add to favorites
- `DELETE /api/favorites/:userId/:menuId` - Remove from favorites

### AI Models Configuration

Default model yang digunakan adalah **Amazon Nova 2 Lite** via OpenRouter. Untuk mengganti model, edit `DEFAULT_MODEL` di `server/openrouter.ts`:

```typescript
const DEFAULT_MODEL = "amazon/nova-2-lite-v1:free";
```

Model yang didukung (via OpenRouter):
- `amazon/nova-2-lite-v1:free`
- `arcee-ai/trinity-mini:free`
- Dan model lainnya yang tersedia di [OpenRouter](https://openrouter.ai/models)

---

## 🤝 Contributing
Terima kasih untuk para kontribusi:
Naacht
Putri Anggriyani

Kontribusi sangat diterima! Berikut cara untuk berkontribusi:

### Getting Started

1. **Fork repository**
   ```bash
   # Klik tombol Fork di GitHub
   ```

2. **Clone fork Anda**
   ```bash
   git clone https://github.com/ellzizz/kulina-welcome.git
   cd kulina-welcome
   ```

3. **Buat branch baru**
   ```bash
   git checkout -b feature/your-feature-name
   # atau
   git checkout -b fix/bug-description
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Buat perubahan Anda**
   - Tulis kode yang clean dan mudah dibaca
   - Ikuti style guide yang ada
   - Tambahkan komentar jika perlu
   - Test perubahan Anda

6. **Commit perubahan**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   # atau
   git commit -m "fix: fix bug description"
   ```

   Gunakan [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - Feature baru
   - `fix:` - Bug fix
   - `docs:` - Dokumentasi
   - `style:` - Formatting, missing semicolons, etc.
   - `refactor:` - Code refactoring
   - `test:` - Menambah tests
   - `chore:` - Maintenance tasks

7. **Push ke fork Anda**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Buat Pull Request**
   - Buka GitHub repository fork Anda
   - Klik "New Pull Request"
   - Isi deskripsi perubahan dengan jelas
   - Tunggu review dari maintainer

### Code Style Guidelines

- Gunakan **TypeScript** untuk type safety
- Ikuti **ESLint** dan **Prettier** configuration
- Format kode sebelum commit: `npm run format` (jika ada)
- Tulis komentar untuk logic yang kompleks
- Gunakan meaningful variable names
- Keep functions small dan focused

### Reporting Bugs

Jika menemukan bug, buat [GitHub Issue](https://github.com/ellzizz/kulina-welcome/issues) dengan:
- Deskripsi bug yang jelas
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (jika ada)
- Environment info (OS, Node.js version, etc.)

### Requesting Features

Untuk request feature baru:
- Buka [GitHub Issue](https://github.com/ellzizz/kulina-welcome/issues)
- Gunakan label "feature request"
- Jelaskan use case dan manfaat feature tersebut
- Jika mungkin, berikan contoh atau mockup

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 KULINA.AI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Attribution

### AI Providers

- **[OpenRouter](https://openrouter.ai/)** - Primary AI API provider
- **[Kolosal AI](https://kolosal.ai/)** - Alternative AI provider
- **[Google AI Studio (Gemini)](https://aistudio.google.com/)** - Fallback AI provider

### UI Components & Libraries

- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide Icons](https://lucide.dev/)** - Icon library
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Images

- **[Unsplash](https://unsplash.com/)** - Stock photos untuk menu items

### Tools & Services

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM
- **[TanStack Query](https://tanstack.com/query)** - Data fetching library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Inspiration

Terinspirasi dari kebutuhan digitalisasi rumah makan modern dengan integrasi AI untuk meningkatkan efisiensi operasional dan pengalaman pelanggan.

---

## 📞 Support

Jika Anda memiliki pertanyaan atau butuh bantuan:

- 📧 **Email:** paturohmanabdulaziz01@example.com
- 💬 **Discussions:** [GitHub Discussions](https://github.com/ellzizz/kulina-welcome/discussions)
- 🐛 **Issues:** [GitHub Issues](https://github.com/ellzizz/kulina-welcome/issues)
- 📖 **Documentation:** [Wiki](https://github.com/ellzizz/kulina-welcome/wiki)

---

## 🌟 Show Your Support

Jika project ini membantu Anda, berikan ⭐ star di repository ini!

---

<div align="center">

**Dibuat dengan ❤️ untuk digitalisasi rumah makan Indonesia**

[⬆ Back to Top](#-kulinaai)

</div>
