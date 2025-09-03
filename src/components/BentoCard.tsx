import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export const BentoCard = ({ children, className, gradient }: BentoCardProps) => {
  return (
    <div 
      className={cn(
        "bento-card animate-fade-up",
        gradient && "bg-hero-gradient",
        className
      )}
    >
      {children}
    </div>
  );
};