import { BentoCard } from './BentoCard';
import { Home, Building2, Hammer, PenTool } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Fit-Outs',
    description: 'Transform your home into a space that tells your story, with custom designs that reflect your lifestyle and dreams.',
  },
  {
    icon: Building2, 
    title: 'Commercial Fit-Outs',
    description: 'Professional spaces that inspire productivity and success, designed to enhance your business environment.',
  },
  {
    icon: Hammer,
    title: 'Custom Carpentry',
    description: 'Handcrafted stairs, decks, and partitions that combine functionality with artistic craftsmanship.',
  },
  {
    icon: PenTool,
    title: 'Design Collaboration',
    description: 'Working hand-in-hand with architects and designers to bring ambitious visions to life.',
  },
];

export const ServicesSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="headline-text mb-4">Our Services</h2>
        <p className="body-text text-muted-foreground max-w-2xl mx-auto">
          From concept to completion, we offer comprehensive construction services that bring your vision to life.
        </p>
      </div>
      
      <div className="bento-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <BentoCard key={index} className="text-center group cursor-pointer">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="body-text text-muted-foreground">{service.description}</p>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};