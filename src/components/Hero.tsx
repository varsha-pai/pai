

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-brand-soft-blue/30 to-transparent pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-brand-soft-purple/30 blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full bg-brand-soft-peach/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 font-montserrat mb-4">
                Hello, I'm <span className="text-brown-700">Varsha V Pai</span>
              </h1>
              <p className="text-2xl md:text-3xl text-brown-700 font-montserrat font-medium tracking-wide">
                Engineering student passionate about <span className="text-blue-700">AI</span>, <span className="text-blue-800">Learning</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                See My Work
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-soft-blue via-brand-soft-purple to-brand-soft-peach p-1">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Varsha V Pai" 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
