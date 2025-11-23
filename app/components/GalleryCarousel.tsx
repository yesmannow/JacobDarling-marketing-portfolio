'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryCarouselProps {
  images: GalleryImage[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Navigate to previous image
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Navigate to next image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Open lightbox at specific index
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) {
        if (e.key === 'ArrowLeft') handlePrevious();
        if (e.key === 'ArrowRight') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Handle lightbox keyboard navigation
  const handleLightboxKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    if (e.key === 'ArrowRight') {
      setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    if (isLightboxOpen) {
      window.addEventListener('keydown', handleLightboxKeyDown);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleLightboxKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen, lightboxIndex]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Carousel */}
      <div className="relative bg-neutral-100 rounded-xl overflow-hidden">
        {/* Main Image */}
        <div className="relative aspect-video">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover cursor-pointer"
            onClick={() => openLightbox(currentIndex)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
          
          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-navy-500"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-navy-500"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Expand Button */}
          <button
            onClick={() => openLightbox(currentIndex)}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-navy-900 p-2 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-navy-500"
            aria-label="Open lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        {images[currentIndex].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6 text-white">
            <p className="text-sm">{images[currentIndex].caption}</p>
          </div>
        )}

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="p-4 bg-white border-t border-neutral-200">
            <div
              ref={thumbnailsRef}
              className="flex gap-2 overflow-x-auto"
              role="tablist"
              aria-label="Image thumbnails"
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-navy-500 ${
                    index === currentIndex
                      ? 'border-navy-500 shadow-md'
                      : 'border-neutral-300 hover:border-navy-300'
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`View image ${index + 1}: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-navy-900/80 text-white px-3 py-1.5 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Close lightbox (press Escape)"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Previous image (press left arrow)"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white z-10"
                aria-label="Next image (press right arrow)"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          {images[lightboxIndex].caption && (
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-lg text-center">
              <p>{images[lightboxIndex].caption}</p>
            </div>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium">
              {lightboxIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default GalleryCarousel;
