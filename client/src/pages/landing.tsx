import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { 
  ChefHat, 
  Smartphone, 
  TrendingUp, 
  MessageSquare, 
  Camera, 
  ShieldCheck, 
  Utensils, 
  ShoppingBag,
  ArrowRight,
  Menu,
  Store
} from "lucide-react";
import { motion } from "framer-motion";

// Import generated assets
import heroBg from "@assets/generated_images/modern_restaurant_with_digital_overlays.png";
import adminTablet from "@assets/generated_images/tablet_showing_restaurant_admin_dashboard.png";
import consumerPhone from "@assets/generated_images/phone_showing_food_ordering_app_with_ai_chat.png";

export default function LandingPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-heading">
              K
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">KULINA.AI</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Fitur</a>
            <a href="#admin" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Untuk Pemilik</a>
            <a href="#consumer" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Untuk Pelanggan</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth-options">
              <Button variant="ghost" size="sm" className="font-medium">Masuk</Button>
            </Link>
            <Link href="/admin/login">
              <Button size="sm" className="font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">Daftar Sekarang</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Modern Smart Restaurant" 
            className="w-full h-full object-cover opacity-40" // Slightly more visible
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container relative z-10 px-4 py-20 text-center max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI Assistant untuk Digitalisasi Rumah Makan
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight text-foreground leading-[1.1]">
              Satu Platform.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">Dua Solusi Cerdas.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Kelola operasional bisnis sekaligus layani pelanggan secara cerdas. 
              Terintegrasi penuh dengan teknologi AI untuk meningkatkan omzet dan pengalaman pelanggan.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Coba Gratis Sekarang <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl bg-background/50 backdrop-blur-sm border-2 hover:bg-background/80">
                Pelajari Selengkapnya
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section id="features" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Kenapa KULINA.AI?</h2>
            <p className="text-muted-foreground text-lg">
              Kami menggabungkan manajemen bisnis dan pengalaman pelanggan dalam satu ekosistem digital yang didukung oleh kecerdasan buatan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={TrendingUp}
              title="Manajemen Stok Pintar"
              description="AI memprediksi kebutuhan stok harian dan memberikan rekomendasi harga otomatis berdasarkan tren pasar."
              delay={0.1}
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Chatbot Asisten Kuliner"
              description="Asisten virtual yang siap menjawab pertanyaan pelanggan tentang menu, promo, dan rekomendasi 24/7."
              delay={0.2}
            />
            <FeatureCard 
              icon={Camera}
              title="Menu Estetik Instan"
              description="Ubah foto menu biasa menjadi profesional dengan AI: hapus background dan sesuaikan pencahayaan otomatis."
              delay={0.3}
            />
            <FeatureCard 
              icon={Utensils}
              title="Rekomendasi Personal"
              description="Setiap pelanggan mendapatkan saran menu yang berbeda sesuai preferensi rasa dan riwayat pesanan mereka."
              delay={0.4}
            />
            <FeatureCard 
              icon={ShoppingBag}
              title="Promosi Otomatis"
              description="Generator caption dan strategi promosi otomatis untuk media sosial, meningkatkan jangkauan tanpa tim marketing."
              delay={0.5}
            />
            <FeatureCard 
              icon={ShieldCheck}
              title="Keamanan Terjamin"
              description="Didukung oleh Google Services untuk keamanan akun, monitoring aktivitas, dan analitik data yang akurat."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Admin Section (B2B) */}
      <section id="admin" className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 blur-3xl rounded-full opacity-30" />
              <motion.img 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={adminTablet} 
                alt="Admin Dashboard" 
                className="relative z-10 rounded-2xl shadow-2xl border border-border/50 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
                <Store className="w-4 h-4" />
                Untuk Pemilik Rumah Makan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                Kelola Bisnis Lebih Efisien dengan Data
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tidak perlu lagi menebak-nebak. Dashboard Admin memberikan kendali penuh atas operasional bisnis Anda dengan bantuan analisis AI yang mendalam.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Manajemen Data Menu & Stok Real-time",
                  "Analisis Sentimen Review Pelanggan",
                  "Laporan Penjualan Harian & Bulanan",
                  "Generator Konten Promosi Medsos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center dark:bg-green-900/30 dark:text-green-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Button size="lg" variant="secondary" className="mt-4">
                Lihat Demo Admin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Section (B2C) */}
      <section id="consumer" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium dark:bg-orange-900/30 dark:text-orange-300">
                <ChefHat className="w-4 h-4" />
                Untuk Pelanggan
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">
                Pengalaman Kuliner yang Lebih Personal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Berikan pelanggan Anda kemudahan memesan dan rekomendasi menu yang sesuai dengan selera mereka.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-background rounded-xl shadow-sm border border-border">
                  <MessageSquare className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Chatbot Cerdas</h3>
                  <p className="text-sm text-muted-foreground">Tanya rekomendasi menu atau promo langsung ke AI assistant.</p>
                </div>
                <div className="p-6 bg-background rounded-xl shadow-sm border border-border">
                  <ShoppingBag className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Pemesanan Cepat</h3>
                  <p className="text-sm text-muted-foreground">Checkout mudah dengan estimasi harga otomatis dan voucher.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-l from-primary/20 to-purple-500/20 blur-3xl rounded-full opacity-30" />
              <motion.img 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={consumerPhone} 
                alt="Consumer App" 
                className="relative z-10 rounded-[2.5rem] shadow-2xl border-8 border-background mx-auto max-w-[320px] md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Siap Digitalisasi Rumah Makan Anda?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Bergabunglah sekarang dan rasakan kemudahan mengelola bisnis kuliner dengan bantuan Artificial Intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-xl w-full sm:w-auto text-primary font-bold shadow-lg hover:bg-white">
              Daftar Gratis Sekarang
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl w-full sm:w-auto border-white/40 text-white hover:bg-white/10 hover:text-white">
              Hubungi Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-heading">
                  K
                </div>
                <span className="text-xl font-bold font-heading">KULINA.AI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Platform digitalisasi rumah makan berbasis AI pertama di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produk</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Admin Dashboard</a></li>
                <li><a href="#" className="hover:text-primary">Consumer App</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary">Karir</a></li>
                <li><a href="#" className="hover:text-primary">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KULINA.AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
