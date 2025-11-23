'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useInView } from 'react-intersection-observer';

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

interface PhotoCardProps {
  photo: Photo;
  index: number;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, index, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px',
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 cursor-pointer focus-within:ring-2 focus-within:ring-aqua-500 focus-within:ring-offset-2 transition-all duration-300"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open photo: ${photo.alt}`}
    >
      {inView && (
        <>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${btoa(
              `<svg width="${photo.width}" height="${photo.height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e5e5e5"/></svg>`
            )}`}
          />
          <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-lg">
              <svg
                className="w-6 h-6 text-navy-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Convert photos to lightbox format
  const lightboxSlides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    width: photo.width,
    height: photo.height,
    title: photo.caption,
  }));

  if (!photos || photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 text-lg">No photos available at this time.</p>
      </div>
    );
  }

  return (
    <>
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Photography gallery"
      >
        {photos.map((photo, index) => (
          <PhotoCard
            key={`${photo.src}-${index}`}
            photo={photo}
            index={index}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={photoIndex}
        slides={lightboxSlides}
        carousel={{
          finite: true,
          preload: 2,
        }}
        animation={{
          fade: 300,
          swipe: 400,
        }}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
        }}
        render={{
          buttonPrev: photos.length > 1 ? undefined : () => null,
          buttonNext: photos.length > 1 ? undefined : () => null,
        }}
        on={{
          view: ({ index }) => setPhotoIndex(index),
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(13, 32, 54, 0.95)',
          },
        }}
      />
    </>
  );
};
