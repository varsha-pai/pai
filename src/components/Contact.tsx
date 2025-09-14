
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-brand-soft-blue/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center reveal">
          <span className="font-handwritten text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 reveal">
          Have a question or want to collaborate? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 reveal">
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can I help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1 reveal-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                <p className="text-gray-700 mb-6">
                  Feel free to reach out to me through any of the channels below. I'll do my best to respond as quickly as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <a href="mailto:contact@varshapai.com" className="text-primary hover:underline">
                        paivarshavp@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-[#0077B5]/10 group-hover:bg-[#0077B5]/20 transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-[#0077B5]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">LinkedIn</h4>
                      <p className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        Connect for professional updates
                      </p>
                    </div>
                  </a>
                  
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors duration-300">
                      <Github className="h-5 w-5 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">GitHub</h4>
                      <p className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        Explore my code repositories
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-brand-soft-purple/20 rounded-lg border border-brand-soft-purple/30">
                <h4 className="font-medium text-gray-800 mb-2">Looking for collaborations</h4>
                <p className="text-gray-700">
                  I'm always interested in working on projects that combine technology with social impact or creative expression. If you have an idea, let's discuss how we can bring it to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
