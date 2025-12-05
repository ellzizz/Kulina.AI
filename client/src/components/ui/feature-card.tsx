import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  delay?: number;
}

export function FeatureCard({ title, description, icon: Icon, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("h-full", className)}
    >
      <Card className="h-full border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 dark:bg-card/50">
        <CardHeader>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-heading text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted-foreground text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}
