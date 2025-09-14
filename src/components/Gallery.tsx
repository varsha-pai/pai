/*
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PaintBucket, Camera, Palette, ArrowLeft, ArrowRight, X } from 'lucide-react';

type GalleryItem = {
  id: number;
  title: string;
  type: 'painting' | 'craft' | 'photography';
  image: string;
  description: string;
};

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);

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

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Abstract Dreams',
      type: 'painting',
      image: 'placeholder.svg',
      description: 'Acrylic on canvas exploring themes of dreams and subconscious thoughts.',
    },
    {
      id: 2,
      title: 'Urban Reflections',
      type: 'photography',
      image: 'placeholder.svg',
      description: 'Capturing the beauty of city life through reflections in glass buildings.',
    },
    {
      id: 3,
      title: 'Recycled Art Lamp',
      type: 'craft',
      image: 'placeholder.svg',
      description: 'A handcrafted lamp made from recycled materials and sustainable design principles.',
    },
    {
      id: 4,
      title: 'Sunset Serenity',
      type: 'painting',
      image: 'placeholder.svg',
      description: 'Oil painting of a peaceful sunset over calm waters.',
    },
    {
      id: 5,
      title: 'Mountain Adventure',
      type: 'photography',
      image: 'placeholder.svg',
      description: 'Photos from a trekking expedition in the Himalayan mountains.',
    },
    {
      id: 6,
      title: 'Handcrafted Jewelry',
      type: 'craft',
      image: 'placeholder.svg',
      description: 'Unique jewelry pieces made with natural materials and traditional techniques.',
    },
    {
      id: 7,
      title: 'Watercolor Landscapes',
      type: 'painting',
      image: 'placeholder.svg',
      description: 'A series of watercolor paintings depicting serene natural landscapes.',
    },
    {
      id: 8,
      title: 'Street Life',
      type: 'photography',
      image: 'placeholder.svg',
      description: 'Candid moments of everyday life captured in urban settings.',
    },
  ];

  useEffect(() => {
    if (activeCategory) {
      setFilteredItems(galleryItems.filter(item => item.type === activeCategory));
    } else {
      setFilteredItems(galleryItems);
    }
  }, [activeCategory]);

  const nextImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
  };

  const prevImage = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') setActiveImageIndex(null);
  };

  return (
    <section id="gallery" className="py-20 bg-brand-soft-purple/15">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center reveal">
          <span className="font-handwritten text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Art Gallery
          </span>
        </h2>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 reveal">
          A collection of my creative works spanning various mediums, from traditional paintings to digital photography and handcrafted items.
        </p>
        
        <Tabs defaultValue="all" className="reveal">
          <TabsList className="mb-8 flex justify-center">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveCategory(null)}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              All Works
            </TabsTrigger>
            <TabsTrigger 
              value="painting" 
              onClick={() => setActiveCategory('painting')}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <PaintBucket className="h-4 w-4 mr-2" />
              Paintings
            </TabsTrigger>
            <TabsTrigger 
              value="craft" 
              onClick={() => setActiveCategory('craft')}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Palette className="h-4 w-4 mr-2" />
              Crafts
            </TabsTrigger>
            <TabsTrigger 
              value="photography" 
              onClick={() => setActiveCategory('photography')}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Camera className="h-4 w-4 mr-2" />
              Photography
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="cursor-pointer group relative overflow-hidden rounded-lg aspect-square bg-gray-100 reveal" 
                      onClick={() => setActiveImageIndex(index)}
                      style={{animationDelay: `${index * 0.05}s`}}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-medium">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.type}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-none" onKeyDown={handleKeyDown}>
                    <div className="relative bg-white rounded-lg overflow-hidden">
                      <div className="absolute top-4 right-4 z-10">
                        <button 
                          onClick={() => setActiveImageIndex(null)} 
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <div className="flex flex-col md:flex-row">
                        <div className="relative md:w-2/3 bg-gray-900 aspect-square md:aspect-auto">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                          
                          <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          >
                            <ArrowLeft size={20} />
                          </button>
                          
                          <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          >
                            <ArrowRight size={20} />
                          </button>
                        </div>
                        
                        <div className="p-6 md:w-1/3">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                          </Badge>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="painting" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              =
            </div>
          </TabsContent>
          
          <TabsContent value="craft" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
            </div>
          </TabsContent>
          
          <TabsContent value="photography" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
*/