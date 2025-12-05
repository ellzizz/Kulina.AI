import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, Eye, AlertCircle } from "lucide-react";

const transactions = [
  { id: "ORD-001", customer: "Budi Santoso", items: "2x Ayam Geprek, 1x Es Teh", total: 58000, status: "Menunggu Konfirmasi", time: "Baru saja" },
  { id: "ORD-002", customer: "Siti Aminah", items: "1x Nasi Goreng Spesial", total: 30000, status: "Diproses", time: "5 menit lalu" },
  { id: "ORD-003", customer: "Ahmad Rizki", items: "3x Sate Ayam, 2x Nasi Putih", total: 115000, status: "Selesai", time: "15 menit lalu" },
  { id: "ORD-004", customer: "Dewi Lestari", items: "1x Es Jeruk", total: 10000, status: "Selesai", time: "20 menit lalu" },
];

export default function AdminTransactions() {
  return (
    <AdminLayout title="Manajemen Transaksi">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Pesanan Masuk</p>
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">12</h3>
            </div>
            <Clock className="w-8 h-8 text-blue-500/50" />
          </CardContent>
        </Card>
        <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Perlu Diproses</p>
              <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">5</h3>
            </div>
            <AlertCircle className="w-8 h-8 text-yellow-500/50" />
          </CardContent>
        </Card>
        <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <CardContent className="p-4 flex items-center justify-between">
             <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Selesai Hari Ini</p>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">45</h3>
            </div>
            <Check className="w-8 h-8 text-green-500/50" />
          </CardContent>
        </Card>
        <Card>
           <CardContent className="p-4 flex items-center justify-between">
             <div>
              <p className="text-sm text-muted-foreground font-medium">Total Omzet</p>
              <h3 className="text-2xl font-bold">Rp 1.2jt</h3>
            </div>
            <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">+12%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pesanan Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((t) => (
              <div key={t.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <div className="flex flex-col gap-1 mb-4 sm:mb-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{t.id}</span>
                    <span className="text-xs text-muted-foreground">• {t.time}</span>
                  </div>
                  <h4 className="font-medium">{t.customer}</h4>
                  <p className="text-sm text-muted-foreground">{t.items}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="text-right">
                    <p className="font-bold">Rp {t.total.toLocaleString()}</p>
                    <Badge variant={t.status === "Menunggu Konfirmasi" ? "secondary" : t.status === "Diproses" ? "outline" : "default"} className={t.status === "Menunggu Konfirmasi" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : t.status === "Selesai" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}>
                      {t.status}
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    {t.status === "Menunggu Konfirmasi" && (
                      <>
                        <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">Terima</Button>
                        <Button size="sm" variant="destructive">Tolak</Button>
                      </>
                    )}
                    {t.status === "Diproses" && (
                       <Button size="sm" variant="default">Selesai Masak</Button>
                    )}
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
