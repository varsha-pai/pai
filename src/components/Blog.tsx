/*
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
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

  const blogPosts = [
    {
      title: 'The Intersection of Art and Technology',
      excerpt: 'Exploring how creative thinking enhances technical problem-solving and how technology can amplify artistic expression.',
      date: 'March 15, 2024',
      category: 'Technology',
      image: 'placeholder.svg',
    },
    {
      title: 'The Intersection of Medical Sciences with Technology',
      excerpt: 'Exploring how creative thinking enhances technical problem-solving and how technology can help in medical field.',
      date: 'May 24, 2025',
      category: ['Technology', 'Medicine'],
      image: 'placeholder.svg',
    },
    {
      title: 'Machine Learning for Social Good',
      excerpt: 'How AI and ML technologies can be leveraged to address social challenges and create positive community impact.',
      date: 'February 28, 2024',
      category: 'AI',
      image: 'placeholder.svg',
    },
    {
      title: 'Reflections on Teaching in Government Schools',
      excerpt: 'Personal insights and lessons learned from my experiences teaching technology to children in under-resourced schools.',
      date: 'January 20, 2024',
      category: 'Social Work',
      image: 'placeholder.svg',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-brand-soft-gray/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center reveal">
          <span className="font-handwritten text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Blog & Notes
          </span>
        </h2>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 reveal">
          My thoughts, experiences, and insights on technology, art, and social impact. A collection of articles where I share my journey and learnings.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal bg-white" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-center gap-4 mb-2">
                  <Badge className="bg-primary text-white">{post.category}</Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700">{post.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Button variant="link" className="pl-0 text-primary flex items-center gap-1 hover:gap-2 transition-all duration-300">
                  Read more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
*/