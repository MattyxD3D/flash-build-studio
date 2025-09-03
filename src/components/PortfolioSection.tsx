import { BentoCard } from './BentoCard';
import heroImage from '@/assets/hero-interior.jpg';
import commercialFitout from '@/assets/commercial-fitout.jpg';
import customStairs from '@/assets/custom-stairs.jpg';
import handsWork from '@/assets/hands-work.jpg';

const portfolioItems = [
  {
    image: heroImage,
    title: 'Modern Residential Living',
    type: 'Residential Fit-Out',
    size: 'col-span-2 row-span-2',
  },
  {
    image: commercialFitout,
    title: 'Corporate Office Space',
    type: 'Commercial Fit-Out',
    size: 'col-span-1 row-span-1',
  },
  {
    image: customStairs,
    title: 'Custom Wooden Staircase',
    type: 'Custom Carpentry',
    size: 'col-span-1 row-span-1',
  },
  {
    image: handsWork,
    title: 'Artisan Craftsmanship',
    type: 'Detail Work',
    size: 'col-span-1 row-span-1',
  },
];

export const PortfolioSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="headline-text mb-4">Our Work</h2>
        <p className="body-text text-muted-foreground max-w-2xl mx-auto">
          Every project tells a story—of homes, businesses, and dreams brought to life through exceptional craftsmanship.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {portfolioItems.map((item, index) => (
          <BentoCard 
            key={index} 
            className={`relative overflow-hidden group cursor-pointer ${item.size} p-0`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary text-sm font-medium mb-2">{item.type}</p>
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Story
                </p>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};