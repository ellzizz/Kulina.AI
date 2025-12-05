import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminLayout } from "@/components/layouts/admin-layout";
import { 
  Users, 
  TrendingUp, 
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Clock
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pendapatan</CardTitle>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-heading">Rp 12.450.000</div>
            <div className="flex items-center mt-1 text-xs">
              <span className="text-green-600 font-bold flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +12.5%
              </span>
              <span className="text-muted-foreground ml-2">dari bulan lalu</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pesanan Hari Ini</CardTitle>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-heading">145</div>
            <div className="flex items-center mt-1 text-xs">
              <span className="text-green-600 font-bold flex items-center">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +5.2%
              </span>
              <span className="text-muted-foreground ml-2">dari kemarin</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pelanggan Baru</CardTitle>
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <Users className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold font-heading">32</div>
            <div className="flex items-center mt-1 text-xs">
              <span className="text-red-500 font-bold flex items-center">
                <ArrowDownRight className="w-3 h-3 mr-1" /> -2.1%
              </span>
              <span className="text-muted-foreground ml-2">dari kemarin</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Aktivitas Terkini</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { title: "Pesanan Baru #ORD-009", time: "2 menit lalu", type: "order" },
                { title: "Stok 'Ayam Potong' Menipis", time: "15 menit lalu", type: "alert" },
                { title: "Review Bintang 5 dari Sarah", time: "1 jam lalu", type: "review" },
                { title: "Laporan Harian Siap", time: "3 jam lalu", type: "system" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-1 w-2 h-2 rounded-full ${item.type === 'alert' ? 'bg-red-500' : 'bg-primary'}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 bg-gradient-to-br from-primary to-orange-600 text-white border-none">
          <CardHeader>
            <CardTitle className="text-white">AI Assistant Insight</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                "Halo Pak Budi! Berdasarkan data hari ini, menu <strong>Ayam Geprek</strong> sangat diminati saat jam makan siang. 
                Saran saya, tingkatkan stok ayam untuk besok siang dan coba buat promo <em>Happy Hour</em> jam 2-4 sore untuk meningkatkan penjualan minuman."
              </p>
              <Button variant="secondary" className="w-full text-primary font-bold">
                Lihat Detail Analisis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
