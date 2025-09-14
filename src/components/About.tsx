
import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, BookOpen, Code, PaintBucket, Heart, MessageSquare } from 'lucide-react';

const About = () => {
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

  const interests = [
    { 
      title: 'Machine Learning', 
      icon: <Code className="h-5 w-5 text-primary" />,
      description: 'Fascinated by AI algorithms and their real-world applications.'
    },
    { 
      title: 'Art & Design', 
      icon: <PaintBucket className="h-5 w-5 text-secondary" />,
      description: 'Exploring creative expression through various art forms.'
    },
    { 
      title: 'Community Service', 
      icon: <Heart className="h-5 w-5 text-accent-foreground" />,
      description: 'Committed to making positive social impact through voluntary work.'
    },
    { 
      title: 'Knowledge Sharing', 
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      description: 'Passionate about learning and growing with technology.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 reveal">
              <span className="font-handwritten text-4xl text-blue-900">
                About Me
              </span>
            </h2>
            
            <div className="space-y-4 reveal">
              <p className="text-brown-700 bg-white rounded-md p-2">
                Hi there! I'm Varsha, a final-year Artificial Intelligence and Machine Learning engineering student at Bangalore Institute of Technology (graduating in 2026). My journey combines technology, art, and community service into a uniquely balanced approach to problem-solving and personal growth.
              </p>
              <p className="text-blue-900 bg-beige-100 rounded-md p-2">
                As an aspiring AI engineer with a creative edge, I'm passionate about developing technological solutions that have a meaningful impact on society. Whether I'm coding algorithms, painting on canvas, or teaching in government schools, I bring the same level of enthusiasm and dedication to everything I do.
              </p>
              <p className="text-brown-700 bg-white rounded-md p-2">
                My diverse interests have taught me to approach challenges from multiple perspectives, combining analytical thinking with creative problem-solving. I believe in technology as a force for good and strive to create innovations that are both technically sound and socially responsible.
              </p>
            </div>
            
            <div className="mt-8 reveal">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Education</h3>
              <p className="text-brown-700 bg-white rounded-md p-2">
                <span className="font-medium text-blue-900">B.Tech in AI & ML</span> - Bangalore Institute of Technology
                <br />
                <span className="text-brown-500">Expected Graduation: 2026</span>
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-6 text-blue-900 reveal">My Interests</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card key={interest.title} className={`reveal border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-gray-50`} style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-full bg-gray-50">
                        {interest.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-brown-700 mb-1">{interest.title}</h4>
                        <p className="text-blue-900 text-sm">{interest.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
