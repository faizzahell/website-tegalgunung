import React, { useState, useRef, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  category: string;
}

interface MousePosition {
  x: number;
  y: number;
}

const images: GalleryImage[] = [
  {
    src: '/images/gallery/gallery-1.webp',
    title: 'Puncak Gunung Bismo',
    description: 'Pemandangan spektakuler dari puncak tertinggi Gunung Bismo dengan awan yang menyelimuti lembah di bawahnya.',
    category: 'Summit'
  },
  {
    src: '/images/gallery/gallery-2.webp',
    title: 'Base Camp Malam',
    description: 'Suasana magis base camp di malam hari dengan langit berbintang yang memukau.',
    category: 'Night'
  },
  {
    src: '/images/gallery/gallery-3.webp',
    title: 'Sunrise Golden Hour',
    description: 'Momen golden hour yang menakjubkan saat matahari terbit di balik puncak gunung.',
    category: 'Sunrise'
  },
  {
    src: '/images/gallery/gallery-4.webp',
    title: 'Trail Adventure',
    description: 'Perjalanan menantang melalui jalur pendakian yang eksotis dan penuh tantangan.',
    category: 'Trail'
  },
  {
    src: '/images/gallery/gallery-5.webp',
    title: 'Team Spirit',
    description: 'Kebersamaan tim pendaki yang solid dalam setiap perjalanan menuju puncak.',
    category: 'Team'
  },
  {
    src: '/images/gallery/gallery-6.webp',
    title: 'Flora Gunung Bismo',
    description: 'Detail flora dan fauna unik yang ditemukan selama perjalanan pendakian.',
    category: 'Nature'
  },
  {
    src: '/images/gallery/gallery-7.webp',
    title: 'Pemandangan Lembah',
    description: 'Panorama lembah yang menakjubkan terlihat dari ketinggian.',
    category: 'Summit'
  },
  {
    src: '/images/gallery/gallery-8.webp',
    title: 'Jalur Pendakian',
    description: 'Jalur pendakian yang menantang dengan pemandangan alam yang memukau.',
    category: 'Trail'
  },
  {
    src: '/images/gallery/gallery-9.webp',
    title: 'Malam Berbintang',
    description: 'Langit malam yang jernih dengan bintang-bintang yang berkilauan.',
    category: 'Night'
  },
  {
    src: '/images/gallery/gallery-10.webp',
    title: 'Tim Pendaki',
    description: 'Semangat kebersamaan dalam setiap langkah menuju puncak.',
    category: 'Team'
  },
  {
    src: '/images/gallery/gallery-11.webp',
    title: 'Sunrise Spektakuler',
    description: 'Matahari terbit yang menawan dengan warna-warna hangat di langit.',
    category: 'Sunrise'
  },
  {
    src: '/images/gallery/gallery-12.webp',
    title: 'Ekosistem Gunung',
    description: 'Keanekaragaman hayati yang menakjubkan di lereng Gunung Bismo.',
    category: 'Nature'
  },
  {
    src: '/images/gallery/gallery-13.webp',
    title: 'Puncak Tertinggi',
    description: 'Pencapaian terbesar - mencapai puncak tertinggi Gunung Bismo.',
    category: 'Summit'
  },
  {
    src: '/images/gallery/gallery-14.webp',
    title: 'Perjalanan Malam',
    description: 'Petualangan malam yang penuh tantangan namun mengesankan.',
    category: 'Night'
  },
  {
    src: '/images/gallery/gallery-19.webp',
    title: 'Alam Liar',
    description: 'Keindahan alam liar yang masih terjaga di kawasan Gunung Bismo.',
    category: 'Nature'
  },
];

const categories: string[] = ['Semua', 'Summit', 'Night', 'Sunrise', 'Trail', 'Team', 'Nature'];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<number | null>(null);

  const filteredImages: GalleryImage[] = activeCategory === 'Semua' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const gallery = galleryRef.current;
    if (gallery) {
      gallery.addEventListener('mousemove', handleMouseMove);
      return () => gallery.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    if (isAutoPlay && selectedImage) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === filteredImages.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    } else {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, selectedImage, filteredImages.length]);

  const openLightbox = (index: number): void => {
    setSelectedImage(filteredImages[index]);
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
    setIsAutoPlay(false);
  };

  const navigateImage = (direction: 'next' | 'prev'): void => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (selectedImage) {
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case ' ':
          e.preventDefault();
          setIsAutoPlay(!isAutoPlay);
          break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, isAutoPlay]);

  return (
    <>
      <section 
        ref={galleryRef}
        className="relative px-6 sm:px-10 lg:px-20 py-24 overflow-hidden"
      >
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,69,193,0.1),transparent_50%)]"></div> */}

        <div className="relative z-10 text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Galeri Pendakian Gunung Bismo via Tegalsari
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-2xl rounded-full"></div>
          </div>
          <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
            Jelajahi momen-momen epik pendakian Gunung Bismo via Tegalsari
          </p>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-white text-[#094b65] shadow-2xl shadow-cyan-500/25'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20 backdrop-blur-sm border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative cursor-pointer"
              onClick={() => openLightbox(index)}
              style={{
                transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-cyan-500/25">
                
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    loading={index < 6 ? "eager" : "lazy"} // Eager load first 6 images
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/90 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                    {image.category}
                  </div>
                  
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                    <Camera className="text-white" size={20} />
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
                    {image.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>

              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  transform: 'translateZ(-50px) scale(0.95)'
                }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold text-white">{filteredImages[currentImageIndex].title}</h3>
                <span className="px-3 py-1 bg-cyan-500 rounded-full text-white text-sm font-semibold">
                  {filteredImages[currentImageIndex].category}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    isAutoPlay ? 'bg-green-500' : 'bg-white/20'
                  }`}
                  aria-label={isAutoPlay ? 'Pause slideshow' : 'Start slideshow'}
                >
                  {isAutoPlay ? <Pause className="text-white" size={20} /> : <Play className="text-white" size={20} />}
                </button>
                
                <button
                  onClick={closeLightbox}
                  className="p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors duration-300"
                  aria-label="Close gallery"
                >
                  <X className="text-white" size={20} />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 sm:h-[500px]">
                <img
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                {filteredImages[currentImageIndex].description}
              </p>
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2 overflow-x-auto">
                {filteredImages.map((img, index) => (
                  <button
                    key={`thumb-${img.src}-${index}`}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setSelectedImage(img);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'border-cyan-500 scale-110' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;