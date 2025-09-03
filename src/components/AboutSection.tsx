import { BentoCard } from './BentoCard';
import handsWork from '@/assets/hands-work.jpg';

export const AboutSection = () => {
  return (
    <div className="bento-grid grid-cols-1 lg:grid-cols-2">
      <BentoCard className="flex flex-col justify-center">
        <h2 className="headline-text mb-6">About Flash Builders PH</h2>
        <p className="body-text text-muted-foreground mb-6">
          We don't just build spaces—we build stories you can live in. Every project is a collaboration between our craftsmanship and your vision, creating environments that truly reflect who you are.
        </p>
        <p className="body-text text-muted-foreground">
          With years of experience in residential and commercial fit-outs, we've learned that the magic happens in the details. From the first sketch to the final touch, we're with you every step of the way.
        </p>
      </BentoCard>
      
      <BentoCard className="min-h-[400px] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[calc(var(--radius)-2rem)]"
          style={{ backgroundImage: `url(${handsWork})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[calc(var(--radius)-2rem)]" />
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-lg font-medium">Craftsmanship in every detail</p>
        </div>
      </BentoCard>
    </div>
  );
};