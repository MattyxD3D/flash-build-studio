import { Button } from '@/components/ui/button';
import { BentoCard } from './BentoCard';
import heroImage from '@/assets/hero-interior.jpg';

export const Hero = () => {
  return (
    <BentoCard className="relative overflow-hidden min-h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="hero-text mb-6 animate-fade-up">
          Building with speed.
          <br />
          <span className="text-primary">Finishing with heart.</span>
        </h1>
        
        <p className="body-text text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
          Your trusted partner in fit-out construction, transforming residential and commercial spaces with tailored designs and high-quality finishes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.4s'}}>
          <Button size="lg" className="text-lg px-8 py-4 h-auto font-medium">
            View Our Works
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto font-medium">
            Get a Quote
          </Button>
        </div>
      </div>
    </BentoCard>
  );
};