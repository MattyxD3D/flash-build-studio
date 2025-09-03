import { BentoCard } from './BentoCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ContactSection = () => {
  return (
    <BentoCard className="text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="headline-text mb-6">Let's start building your story today.</h2>
        <p className="body-text text-muted-foreground mb-12">
          Ready to transform your space? Get in touch with our team to discuss your vision and receive a personalized quote.
        </p>
        
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+63 XXX XXX XXXX" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="project">Project Type</Label>
            <Input id="project" placeholder="Residential Fit-Out, Commercial Space, etc." />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your project</Label>
            <Textarea 
              id="message" 
              placeholder="Describe your vision, timeline, and any specific requirements..."
              rows={5}
            />
          </div>
          
          <div className="pt-4">
            <Button size="lg" className="w-full md:w-auto text-lg px-12 py-4 h-auto font-medium">
              Book a Consultation
            </Button>
          </div>
        </form>
      </div>
    </BentoCard>
  );
};