import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay, 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }}
      className={cn('glass rounded-3xl p-8', className)}
    >
      {children}
    </motion.div>
  );
}
