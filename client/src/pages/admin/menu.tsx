import { AdminLayout } from "@/components/layouts/admin-layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash, Image as ImageIcon, Sparkles } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

// Mock Data
const initialMenu = [
  { id: 1, name: "Ayam Geprek Level 5", category: "Makanan", price: 25000, stock: 50, status: "Tersedia", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&auto=format&fit=crop" },
  { id: 2, name: "Es Teh Manis Jumbo", category: "Minuman", price: 8000, stock: 100, status: "Tersedia", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop" },
  { id: 3, name: "Nasi Goreng Spesial", category: "Makanan", price: 30000, stock: 35, status: "Tersedia", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop" },
  { id: 4, name: "Sate Ayam Madura", category: "Makanan", price: 35000, stock: 0, status: "Habis", image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&auto=format&fit=crop" },
];

export default function AdminMenu() {
  const [menuItems, setMenuItems] = useState(initialMenu);

  const handleAIUpload = () => {
    toast({
      title: "AI Photo Enhancement",
      description: "Mengupload foto, menghapus background, dan menyesuaikan pencahayaan...",
    });
    setTimeout(() => {
       toast({
        title: "Selesai!",
        description: "Foto menu berhasil dipercantik oleh AI.",
      });
    }, 2000);
  };

  return (
    <AdminLayout title="Manajemen Menu">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cari menu..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full sm:w-auto shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Tambah Menu Baru
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border-none shadow-md">
          <CardHeader>
            <CardTitle>Daftar Menu Restoran</CardTitle>
            <CardDescription>
              Kelola semua menu makanan dan minuman Anda di sini.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Foto</TableHead>
                  <TableHead>Nama Menu</TableHead>
                  <TableHead>Kategori</TableHead>
                  <TableHead>Harga</TableHead>
                  <TableHead>Stok</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-100 relative group cursor-pointer" onClick={handleAIUpload}>
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <Sparkles className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>Rp {item.price.toLocaleString()}</TableCell>
                    <TableCell>{item.stock}</TableCell>
                    <TableCell>
                      <Badge variant={item.status === "Tersedia" ? "default" : "destructive"}>
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
