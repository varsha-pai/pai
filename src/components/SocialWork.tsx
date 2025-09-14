/*
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const SocialWork = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
  
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
          reveal.classList.add('active');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const initiatives = [
    {
      title: 'Teaching in Government Schools',
      description: 'Volunteering as a teacher in local government schools, focusing on making STEM subjects accessible and engaging for underprivileged children.',
      image: 'placeholder.svg',
    },
    {
      title: 'Technology Literacy Workshops',
      description: 'Conducting workshops to introduce basic computer skills and technology awareness to communities with limited access to digital resources.',
      image: 'placeholder.svg',
    },
    {
      title: 'Art for All Program',
      description: 'Organizing art sessions for children from diverse backgrounds, using creativity as a tool for self-expression and emotional well-being.',
      image: 'placeholder.svg',
    },
  ];

  return (
    <section id="social-work" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 reveal">
            <h2 className="text-3xl font-bold mb-6">
              <span className="font-handwritten text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Social Work
              </span>
            </h2>
            
            <div className="mb-8 space-y-4">
              <p className="text-gray-700">
                Beyond technology and art, I'm deeply committed to using my skills for social impact. I believe that education and access to resources can transform lives, and I actively volunteer my time to initiatives that promote these values.
              </p>
              
              <p className="text-gray-700">
                My journey in social work began when I realized how many bright, curious minds lack access to quality education and technological tools. This realization inspired me to start teaching in local government schools, where I could share my knowledge and passion for STEM subjects.
              </p>
              
              <p className="text-gray-700">
                What started as occasional volunteering has evolved into a sustained commitment to community development. Through teaching, workshops, and creative programs, I aim to bridge educational gaps and create opportunities for children from underserved communities.
              </p>
            </div>
            
            <div className="relative p-6 bg-brand-soft-peach/30 rounded-lg border border-brand-soft-peach reveal">
              <div className="absolute -top-3 -left-3">
                <div className="p-2 rounded-full bg-white shadow">
                  <Heart className="h-5 w-5 text-accent-foreground" />
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-3 text-gray-800">A Heartwarming Story</h3>
              <p className="text-gray-700 italic">
                "One of my most memorable experiences was teaching a 12-year-old girl who had never used a computer before. After weeks of patient guidance, she created her first digital artwork – a colorful landscape that represented her home village. The pride in her eyes when she saw her creation on screen is a moment I'll never forget. It reminded me why I do this work: to witness the spark that ignites when someone realizes what they're capable of achieving."
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {initiatives.map((initiative, index) => (
                <Card key={initiative.title} className="border-none shadow-md overflow-hidden reveal" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3 bg-gray-100">
                      <img 
                        src={initiative.image} 
                        alt={initiative.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="sm:w-2/3 p-6">
                      <h3 className="text-lg font-medium mb-3 text-gray-800">{initiative.title}</h3>
                      <p className="text-gray-700">{initiative.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialWork;
*/