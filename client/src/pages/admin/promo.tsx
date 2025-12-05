import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wand2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPromo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI Generation
    setTimeout(() => {
      setGeneratedCaption(`🔥 PROMO SPESIAL HARI INI! 🔥

Lagi lapar tapi bingung mau makan apa? Cobain Ayam Geprek Level 5 kami yang pedasnya nendang banget! 🌶️🐔

Cuma Rp 25.000 aja, kamu udah bisa nikmatin sensasi pedas gurih yang bikin nagih. Cocok banget buat makan siang bareng temen kantor atau keluarga.

✅ Ayam Fresh Pilihan
✅ Sambal Dadakan
✅ Nasi Hangat Pulen

Tunggu apalagi? Yuk mampir ke Rumah Makan Sederhana atau pesan via aplikasi sekarang! 

#AyamGeprek #KulinerPedas #MakanSiang #PromoMakanan #KulinaAI #Foodie`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCaption);
    setCopied(true);
    toast({ title: "Tersalin!", description: "Caption berhasil disalin ke clipboard." });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AdminLayout title="Generator Promo AI">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Buat Materi Promosi</CardTitle>
              <CardDescription>
                Biarkan AI membuatkan caption Instagram, Facebook, atau WhatsApp yang menarik untuk menu Anda.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div className="space-y-2">
                  <Label>Pilih Menu</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih menu yang ingin dipromosikan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ayam">Ayam Geprek Level 5</SelectItem>
                      <SelectItem value="nasgor">Nasi Goreng Spesial</SelectItem>
                      <SelectItem value="sate">Sate Ayam Madura</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Target Pasar</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Siapa target promosi ini?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mahasiswa">Mahasiswa / Pelajar (Hemat)</SelectItem>
                      <SelectItem value="kantor">Orang Kantor (Makan Siang)</SelectItem>
                      <SelectItem value="keluarga">Keluarga (Akhir Pekan)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Tone Bahasa</Label>
                  <div className="flex gap-2">
                    {['Santai', 'Formal', 'Lucu', 'Hype'].map((tone) => (
                      <Button key={tone} type="button" variant="outline" size="sm" className="flex-1">
                        {tone}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Info Tambahan (Opsional)</Label>
                  <Textarea placeholder="Contoh: Diskon 20% khusus hari Jumat, Gratis Es Teh..." />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 transition-opacity" disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Wand2 className="mr-2 h-4 w-4 animate-spin" />
                      Sedang Meracik Kata...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Generate Caption
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="h-full border-2 border-dashed border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Hasil Generator AI</CardTitle>
            </CardHeader>
            <CardContent className="h-full">
              <AnimatePresence mode="wait">
                {generatedCaption ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="relative bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800"
                  >
                    <pre className="whitespace-pre-wrap font-sans text-sm text-foreground leading-relaxed">
                      {generatedCaption}
                    </pre>
                    <div className="absolute top-2 right-2">
                      <Button variant="ghost" size="icon" onClick={handleCopy}>
                        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                    <Sparkles className="w-12 h-12 mb-4 opacity-20" />
                    <p>Hasil caption akan muncul di sini.</p>
                  </div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
