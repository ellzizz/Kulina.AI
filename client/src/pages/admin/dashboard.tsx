import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  LayoutDashboard, 
  Menu, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  Search,
  MessageSquare
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 hidden md:flex flex-col fixed h-full z-10">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-heading">
            K
          </div>
          <span className="text-xl font-bold font-heading tracking-tight">KULINA.AI</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <Button variant="secondary" className="w-full justify-start gap-3 mb-4">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Menu className="w-4 h-4" />
            Manajemen Menu
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <ShoppingBag className="w-4 h-4" />
            Pesanan
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Users className="w-4 h-4" />
            Pelanggan
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <MessageSquare className="w-4 h-4" />
            AI Insights
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <BarChart3 className="w-4 h-4" />
            Laporan
          </Button>
        </nav>

        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:text-destructive/80 hover:bg-destructive/10">
            <LogOut className="w-4 h-4" />
            Keluar
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold font-heading">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
               {/* Avatar placeholder */}
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Pendapatan</CardTitle>
                <span className="text-xs text-green-500 font-bold">+12%</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Rp 12.450.000</div>
                <p className="text-xs text-muted-foreground mt-1">Bulan ini</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Pesanan Baru</CardTitle>
                <span className="text-xs text-green-500 font-bold">+5%</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145</div>
                <p className="text-xs text-muted-foreground mt-1">Hari ini</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sentimen Pelanggan</CardTitle>
                <span className="text-xs text-blue-500 font-bold">AI Analysis</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Positif (92%)</div>
                <p className="text-xs text-muted-foreground mt-1">Berdasarkan 50 review terakhir</p>
              </CardContent>
            </Card>
          </div>

          <Card className="h-96 flex items-center justify-center border-dashed">
             <div className="text-center text-muted-foreground">
               <p>Grafik Analisis AI akan ditampilkan di sini.</p>
               <Button variant="link" className="mt-2 text-primary">Lihat Laporan Lengkap</Button>
             </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
