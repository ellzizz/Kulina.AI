import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, ArrowRight, Smartphone, Search } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

// Import generated asset
import consumerBg from "@assets/generated_images/vertical_food_photography_for_mobile_login.png";

export default function ConsumerLogin() {
  const [_, setLocation] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Kode OTP Terkirim",
        description: `Kami telah mengirimkan kode ke +62 ${phoneNumber}`,
      });
      // In a real app we'd go to OTP verification, but for mockup we jump to dashboard
      setLocation("/consumer/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side - Image (Hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src={consumerBg} 
          alt="Delicious Food" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-12 z-20 text-white">
          <h2 className="text-4xl font-heading font-bold mb-4">Lapar?</h2>
          <p className="text-xl max-w-md text-white/90">
            Pesan makanan favoritmu sekarang. Biarkan AI kami merekomendasikan menu terbaik untukmu hari ini.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative">
         <Button 
          variant="ghost" 
          className="absolute top-8 right-8"
          onClick={() => setLocation("/")}
        >
          Kembali ke Beranda
        </Button>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center lg:text-left">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold font-heading text-xl shadow-lg shadow-primary/20 mb-6 mx-auto lg:mx-0">
              K
            </div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Selamat Datang! 👋</h1>
            <p className="text-muted-foreground mt-2">
              Masuk untuk mulai memesan dan dapatkan rekomendasi personal.
            </p>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor WhatsApp</Label>
                <div className="relative flex items-center">
                  <div className="absolute left-3 flex items-center gap-2 border-r border-border pr-2">
                    <span className="text-sm font-medium text-muted-foreground">🇮🇩 +62</span>
                  </div>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="812-3456-7890" 
                    className="pl-20 h-12 text-lg"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full h-12 text-lg shadow-lg shadow-primary/20" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Mengirim OTP...
                  </>
                ) : (
                  <>
                    Masuk dengan No. HP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Atau masuk dengan</span>
              </div>
            </div>

            <Button variant="outline" className="w-full h-12 gap-2" onClick={() => toast({title: "Coming Soon", description: "Login Search segera hadir!"})}>
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M12.0003 20.45c4.6667 0 8.4503-3.7836 8.4503-8.4504 0-.7366-.0867-1.4533-.2503-2.1466h-8.2v4.0633h4.6866c-.2033 1.0967-.82 2.0267-1.7433 2.6467l2.8133 2.18c1.6467-1.5167 2.5967-3.7501 2.5967-6.2801 0-6.6267-5.3733-12-12-12-3.3133 0-6.3133 1.3433-8.4533 3.5133l2.5533 2.5534c1.5533-1.5534 3.6933-2.5134 6.0966-2.5134 4.8867 0 8.8501 3.9634 8.8501 8.8501 0 4.8867-3.9634 8.8501-8.8501 8.8501-4.8867 0-8.85-3.9634-8.85-8.8501 0-.4866.04-.9666.1133-1.4333l-3.0533-2.36c-.4534 1.2266-.71 2.55-.71 3.93 0 6.6266 5.3733 12 12 12z" fill="currentColor" />
              </svg>
              Search
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Belum punya akun? <a href="#" className="font-medium text-primary hover:underline">Daftar sebagai Pelanggan</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
