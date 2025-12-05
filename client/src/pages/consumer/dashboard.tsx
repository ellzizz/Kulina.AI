import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Home, Heart, User, ShoppingBag, Plus } from "lucide-react";

export default function ConsumerDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-20 font-sans">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 sticky top-0 z-10 p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
           <div className="flex-1">
             <p className="text-xs text-muted-foreground">Lokasi Kamu</p>
             <div className="flex items-center gap-1 font-bold text-sm">
               Jl. Sudirman No. 45, Jakarta <span className="text-primary">▼</span>
             </div>
           </div>
           <Button size="icon" variant="ghost">
             <ShoppingBag className="w-6 h-6" />
           </Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Mau makan apa hari ini?" className="pl-10 bg-zinc-100 dark:bg-zinc-800 border-none" />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* AI Recommendation Banner */}
        <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-4 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs mb-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AI Recommendation
            </div>
            <h3 className="font-bold text-lg leading-tight mb-2">Hai Budi, lapar ya?</h3>
            <p className="text-sm text-white/90 mb-3">Berdasarkan riwayatmu, sepertinya kamu lagi pengen yang pedas-pedas nih!</p>
            <Button size="sm" variant="secondary" className="text-primary font-bold">Lihat Rekomendasi</Button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
             {/* Abstract pattern */}
             <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
               <circle cx="50" cy="50" r="50" />
             </svg>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {['Semua', 'Promo', 'Terlaris', 'Pedas', 'Minuman', 'Snack'].map((cat, i) => (
            <button key={i} className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-white dark:bg-zinc-800 text-foreground border border-zinc-200 dark:border-zinc-700'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Popular Menu Grid */}
        <div>
          <h2 className="font-bold text-lg mb-4">Menu Terlaris 🔥</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-zinc-200 dark:bg-zinc-800 relative">
                   <img src={`https://source.unsplash.com/random/400x400/?food&sig=${item}`} alt="Food" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-3">
                  <h3 className="font-bold text-sm truncate">Ayam Geprek Level 5</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-bold text-sm">Rp 25.000</span>
                    <Button size="icon" className="h-6 w-6 rounded-full">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-2 px-6 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Beranda</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">Favorit</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary">
          <User className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profil</span>
        </button>
      </nav>
    </div>
  );
}
