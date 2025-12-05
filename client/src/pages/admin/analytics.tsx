import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from "recharts";

const salesData = [
  { name: 'Sen', total: 1200000 },
  { name: 'Sel', total: 1500000 },
  { name: 'Rab', total: 1100000 },
  { name: 'Kam', total: 1800000 },
  { name: 'Jum', total: 2400000 },
  { name: 'Sab', total: 3500000 },
  { name: 'Min', total: 3200000 },
];

const sentimentData = [
  { name: 'Positif', value: 75, color: '#22c55e' },
  { name: 'Netral', value: 20, color: '#eab308' },
  { name: 'Negatif', value: 5, color: '#ef4444' },
];

export default function AdminAnalytics() {
  return (
    <AdminLayout title="Analisis AI & Laporan">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Grafik Penjualan Mingguan</CardTitle>
            <CardDescription>Total omzet 7 hari terakhir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} tickFormatter={(value) => `Rp${value/1000}k`} />
                  <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    formatter={(value: number) => [`Rp ${value.toLocaleString()}`, "Total"]}
                  />
                  <Area type="monotone" dataKey="total" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Sentimen Pelanggan</CardTitle>
            <CardDescription>Analisis AI dari ulasan</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4 mt-4">
              {sentimentData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rekomendasi AI</CardTitle>
            <CardDescription>Actionable insights untuk bisnis Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-1">Stok Menipis</h4>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Stok "Ayam Potong" diprediksi habis dalam 2 hari. Segera lakukan restock sebanyak 50kg.
              </p>
              <Button size="sm" variant="outline" className="mt-2 border-blue-200 text-blue-700 hover:bg-blue-100">Order Supplier</Button>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-1">Tren Menu</h4>
              <p className="text-sm text-orange-600 dark:text-orange-400">
                Penjualan "Es Kopi Susu" naik 20% minggu ini. Pertimbangkan membuat paket bundling dengan Roti Bakar.
              </p>
              <Button size="sm" variant="outline" className="mt-2 border-orange-200 text-orange-700 hover:bg-orange-100">Buat Promo Bundling</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <CardTitle>Review Terbaru</CardTitle>
             <CardDescription>Apa kata pelanggan hari ini?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sari", rating: 5, comment: "Enak banget ayam gepreknya! Pedesnya pas.", time: "2 jam lalu" },
              { name: "Rudi", rating: 4, comment: "Pelayanan cepat, tapi tempat agak panas.", time: "4 jam lalu" },
              { name: "Dina", rating: 5, comment: "Best nasi goreng in town!", time: "5 jam lalu" },
            ].map((review, i) => (
              <div key={i} className="border-b border-zinc-100 dark:border-zinc-800 last:border-0 pb-4 last:pb-0">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold">{review.name}</span>
                  <span className="text-xs text-muted-foreground">{review.time}</span>
                </div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-sm text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
