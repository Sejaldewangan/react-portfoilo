import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { images } from './image';

// const portfolioImages = [
//   {
//     id: 1,
//     src:[ \public\Screenshot 2025-06-13 103841.png],
//     title: "Web Development",
//     description: "Modern responsive web applications"
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
//     title: "Frontend Design",
//     description: "Clean and intuitive user interfaces"
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
//     title: "Technical Solutions",
//     description: "Complex problem solving and architecture"
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
//     title: "Code Excellence",
//     description: "Clean, maintainable, and scalable code"
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
//     title: "Innovation",
//     description: "Cutting-edge technology implementations"
//   }
// ];

const MyApps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
        <h1
        className="text-tubeLight-effect text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
      lg:text-[3.8rem] tracking-[15px] dancing_text mx-auto w-fit"
      >
        My Apps
      </h1>
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl bg-[#020817]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute  flex items-end"
            >
              <div className="p-8 text-white">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold mb-2"
                >
                  {images[currentIndex].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-lg text-gray-200"
                >
                  {images[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-all duration-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90 transition-all duration-200"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            onClick={() => goToSlide(index)}
            className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-4 ring-blue-500 ring-offset-2 scale-105' 
                : 'opacity-70 hover:opacity-100 hover:scale-105'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {index === currentIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-blue-500/20"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300 w-2'
            }`}
            animate={{
              width: index === currentIndex ? 32 : 8,
              backgroundColor: index === currentIndex ? '#3b82f6' : '#d1d5db'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyApps;