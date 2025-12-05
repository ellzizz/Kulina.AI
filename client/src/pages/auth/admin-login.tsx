import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Lock, Mail, Building2, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Import generated asset (using the one we just requested)
import adminBg from "@assets/generated_images/sleek_dark_tech_background_for_admin_login.png"; 

export default function AdminLogin() {
  const [_, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Berhasil",
        description: "Selamat datang kembali di Dashboard Admin.",
      });
      setLocation("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={adminBg} 
          alt="Admin Background" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/50" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold font-heading text-xl shadow-lg shadow-primary/20">
              K
            </div>
            <span className="text-2xl font-bold font-heading text-white tracking-tight">KULINA.AI <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 font-sans border border-zinc-700 ml-2">ADMIN</span></span>
          </div>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4 bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50">
            <TabsTrigger value="login">Masuk</TabsTrigger>
            <TabsTrigger value="register">Daftar Restoran</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-zinc-800 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Masuk ke Dashboard</CardTitle>
                <CardDescription className="text-zinc-400">
                  Masukkan email dan password untuk mengelola restoran Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">Email Bisnis</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                      <Input 
                        id="email" 
                        placeholder="nama@restoran.com" 
                        className="pl-9 bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-zinc-300">Password</Label>
                      <a href="#" className="text-xs text-primary hover:text-primary/80">Lupa password?</a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        className="pl-9 pr-9 bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-primary"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-zinc-500 hover:text-zinc-300"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" className="border-zinc-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-400"
                    >
                      Ingat saya
                    </label>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-10" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      "Masuk Dashboard"
                    )}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center border-t border-zinc-800 pt-6">
                <p className="text-sm text-zinc-500">
                  Butuh bantuan? <a href="#" className="text-primary hover:underline">Hubungi Support</a>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register">
             <Card className="border-zinc-800 bg-zinc-900/80 backdrop-blur-xl shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Daftarkan Restoran</CardTitle>
                <CardDescription className="text-zinc-400">
                  Mulai digitalisasi operasional restoran Anda dengan AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-name" className="text-zinc-300">Nama Restoran</Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                      <Input 
                        id="reg-name" 
                        placeholder="Contoh: Rumah Makan Padang Sederhana" 
                        className="pl-9 bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email" className="text-zinc-300">Email Pemilik</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
                      <Input 
                        id="reg-email" 
                        placeholder="nama@email.com" 
                        className="pl-9 bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <Button type="button" className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium h-10" onClick={() => toast({ title: "Coming Soon", description: "Pendaftaran akan segera dibuka!" })}>
                    Lanjut ke Pendaftaran
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
