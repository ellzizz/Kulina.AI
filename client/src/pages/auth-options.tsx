import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Store, ChefHat, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function AuthOptions() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-6 left-6">
        <Link href="/">
           <Button variant="ghost" className="gap-2">
             <ArrowLeft className="w-4 h-4" /> Kembali
           </Button>
        </Link>
      </div>

      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl font-bold font-heading mb-4">Masuk sebagai...</h1>
        <p className="text-muted-foreground text-lg">Pilih dashboard yang ingin kamu akses</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full relative z-10">
        {/* Admin Card */}
        <Link href="/admin/login">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all flex flex-col items-center text-center h-full"
          >
            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Store className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-2">Pemilik Restoran</h2>
            <p className="text-muted-foreground mb-6">
              Kelola menu, stok, laporan penjualan, dan analisis AI untuk bisnismu.
            </p>
            <Button variant="outline" className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
              Masuk Dashboard Admin
            </Button>
          </motion.div>
        </Link>

        {/* Consumer Card */}
        <Link href="/consumer/login">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:border-primary/50 transition-all flex flex-col items-center text-center h-full"
          >
            <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <ChefHat className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold font-heading mb-2">Pelanggan</h2>
            <p className="text-muted-foreground mb-6">
              Pesan makanan, lihat rekomendasi menu, dan dapatkan promo menarik.
            </p>
            <Button variant="outline" className="w-full group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600">
              Masuk Aplikasi Konsumen
            </Button>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
