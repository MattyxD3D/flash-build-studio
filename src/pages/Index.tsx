import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 py-8">
          {/* Hero Section */}
          <Hero />
          
          {/* About Section */}
          <AboutSection />
          
          {/* Services Section */}
          <ServicesSection />
          
          {/* Portfolio Section */}
          <PortfolioSection />
          
          {/* Why Choose Us Section */}
          <WhyChooseSection />
          
          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-8 bg-primary rounded transform rotate-45 mr-3"></div>
              <h3 className="text-2xl font-bold">Flash Builders PH</h3>
            </div>
            <p className="body-text text-muted-foreground mb-4">
              Building with speed. Finishing with heart.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Flash Builders PH. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;