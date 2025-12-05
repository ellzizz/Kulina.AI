import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Menu, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Bell,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [location, setLocation] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { label: "Manajemen Menu", icon: Menu, href: "/admin/menu" },
    { label: "Transaksi", icon: ShoppingBag, href: "/admin/transactions" },
    { label: "Analisis AI", icon: BarChart3, href: "/admin/analytics" },
    { label: "Generator Promo", icon: Sparkles, href: "/admin/promo" },
    { label: "Pelanggan", icon: Users, href: "/admin/customers" },
    { label: "Pengaturan", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 fixed h-full z-20 transition-all duration-300 ease-in-out flex flex-col",
          isSidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3 h-20">
          <div className="w-8 h-8 min-w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-heading">
            K
          </div>
          {isSidebarOpen && (
            <span className="text-xl font-bold font-heading tracking-tight animate-in fade-in duration-300">KULINA.AI</span>
          )}
        </div>
        
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant={isActive ? "secondary" : "ghost"} 
                  className={cn(
                    "w-full justify-start gap-3 mb-1",
                    isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                    !isSidebarOpen && "justify-center px-0"
                  )}
                  title={!isSidebarOpen ? item.label : undefined}
                >
                  <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start gap-3 text-destructive hover:text-destructive/80 hover:bg-destructive/10",
               !isSidebarOpen && "justify-center px-0"
            )}
            onClick={() => setLocation("/")}
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span>Keluar</span>}
          </Button>
        </div>

        {/* Toggle Button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-24 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full p-1 shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
        >
          {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "flex-1 transition-all duration-300 ease-in-out min-h-screen",
        isSidebarOpen ? "ml-64" : "ml-20"
      )}>
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-10">
          <div>
             <h1 className="text-2xl font-bold font-heading">{title}</h1>
             <p className="text-sm text-muted-foreground hidden sm:block">Selamat datang kembali, Pak Budi</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
            <Separator orientation="vertical" className="h-8" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">Rumah Makan Sederhana</p>
                <p className="text-xs text-muted-foreground">Premium Plan</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border-2 border-primary/20">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
