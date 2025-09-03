import { BentoCard } from './BentoCard';
import { Award, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Quality & Precision',
    description: 'Every cut, every joint, every finish is executed with meticulous attention to detail. We don\'t just meet standards—we set them.',
  },
  {
    icon: Clock,
    title: 'Speed & Reliability', 
    description: 'Time is precious, and we respect yours. Our efficient processes and experienced team ensure projects are completed on time, every time.',
  },
  {
    icon: Heart,
    title: 'Human-Centered Care',
    description: 'We believe construction is about people, not just buildings. Every project is treated with the care and respect it deserves.',
  },
];

export const WhyChooseSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="headline-text mb-4">Why Choose Flash Builders PH</h2>
        <p className="body-text text-muted-foreground max-w-2xl mx-auto">
          Three core principles that guide everything we do, ensuring exceptional results for every project.
        </p>
      </div>
      
      <div className="bento-grid grid-cols-1 lg:grid-cols-3">
        {features.map((feature, index) => (
          <BentoCard key={index} className="text-center group">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 group-hover:bg-primary/20 group-hover:shadow-yellow-glow transition-all duration-300">
              <feature.icon className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-6">{feature.title}</h3>
            <p className="body-text text-muted-foreground leading-relaxed">{feature.description}</p>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};