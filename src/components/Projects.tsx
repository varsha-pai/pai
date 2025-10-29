
import React, { useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Non-Invasive Blood Group Detection',
      description: 'An AI-powered application that uses computer vision to detect blood groups without traditional invasive methods. This project combines machine learning algorithms with medical science to create a more comfortable testing experience.',
      image: '/images/blood.png',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning'],
      links: {
        github: 'https://github.com/varsha-pai/noninvasive-bloodgroup-detection',
      }
    },
    {
      title: 'SAR Image Colorization using Deep Learning',
      image: '/images/sar.png',
      description: ['Engineered an image-to-image translation system to convert Synthetic Aperture Radar (SAR) data into photorealistic optical images (Black and white Satellite images to RGB Images)', 'Implemented a Pix2pix Generative Adversarial Network (GAN) and enhanced image quality by optimizing the model to minimize L1 and L2 reconstruction losses'],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'GANs', 'Image Processing', 'Image-to-Image Translation', 'GANs', 'Deep Learning']
    },
    {
      title: 'Light-Sensing Street Lights',
      description: 'Energy-efficient IoT solution for urban street lighting that automatically adjusts brightness based on ambient light conditions and pedestrian presence. This project aims to reduce energy consumption while maintaining safety.',
      image: '/images/light.png  ',
      used: ['Smart City', 'Energy Efficiency'],
      technologies: ['IoT', 'Sensors', 'Energy Efficiency'],
    },
    {
      title: 'Cognitive Crime Analysis',
      description: 'Architected a full-stack, AI powered intelligence platform to asynchronously process unstructured crime reports, leveraging Google’s Generative AI to build an interconnected knowledge graph for cross-case analysis, power a reasoning based chatbot, and generate suspect image. The platform also integrates a sophisticated computer vision module, featuring a vision-enabled agent that can interactively analyze crime scene images, answer queries',
      image: '/images/cognitive.jpg',
      technologies: ['Python', 'FastAPI', 'Celery', 'React', 'Neo4j']
    },
    
    /*{
      title: 'AI-Risk Game',
      description: 'A Web application that helps users identify risk in building new models and improve on how they manage building and providing funds for it without going into loss with all the on-going progress in the field. It also helps track down their compititors.',
      image: 'placeholder.svg',
      technologies: ['Python', 'Flask', 'React', 'Tailwind CSS'],
    }, */ 
    {
      title: 'PersonaliTea',
      description: 'PersonaliTea is an AI-powered web app that uncovers personality traits by analyzing text from uploaded files. It uses advanced natural language processing (NLP) to identify personality patterns in communication.',
      image: '/images/personality.png',
      technologies: ['TypeScript', 'Vite', 'NLP-library-compromise', 'Personality Analysis-library-sentiment', 'React', 'Tailwind CSS'],
      links: {
        demo: 'https://personali-tea.vercel.app/',
        github: 'https://github.com/varsha-pai/PersonaliTea',
      }
    },


  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center reveal">
          <span className="font-handwritten text-4xl text-blue-900">
            My Projects
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden reveal bg-white`} 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-brown-700">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-blue-900 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-beige-100 text-blue-900 border-brown-400">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="border-brown-400 text-brown-700 bg-beige-100">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                {project.links && project.links.demo && (
                  <a
                    className="text-primary p-0 h-auto flex items-center gap-2 underline hover:text-primary/80 transition-colors"
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.links && project.links.github && (
                  <a
                    className="text-gray-700 p-0 h-auto flex items-center gap-2 underline hover:text-gray-900 transition-colors"
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
