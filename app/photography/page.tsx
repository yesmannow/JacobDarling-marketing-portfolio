import React from 'react';
import type { Metadata } from 'next';
import { PhotoGallery } from '@/app/components/PhotoGallery';
import { LightroomEmbed } from '@/app/components/LightroomEmbed';
import { loadPhotos } from '@/lib/lightroom';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Photography | Jacob Darling',
  description: 'Explore Jacob Darling\'s photography portfolio featuring landscape, nature, and architectural photography captured across diverse locations.',
  openGraph: {
    title: 'Photography | Jacob Darling',
    description: 'Explore Jacob Darling\'s photography portfolio featuring landscape, nature, and architectural photography.',
    type: 'website',
  },
};

export default async function PhotographyPage() {
  const photos = await loadPhotos();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-navy-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-md md:text-display-lg font-display font-bold text-navy-900 mb-6">
            Photography
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">
            A visual exploration of landscapes, architecture, and moments captured through my lens. 
            Each photograph tells a story of light, composition, and the beauty found in everyday scenes.
          </p>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="py-16">
        {photos.length > 0 ? (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
                Featured Work
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Click any image to view in full size. Use keyboard arrows to navigate between photos.
              </p>
            </div>
            <PhotoGallery photos={photos} />
          </>
        ) : (
          <>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
                Gallery
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
                View my complete photography collection below.
              </p>
            </div>
            <LightroomEmbed />
          </>
        )}
      </Section>

      {/* Additional Lightroom Embed Section (if we have photos, show embed as secondary option) */}
      {photos.length > 0 && (
        <Section className="py-16 bg-neutral-50">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
              Complete Collection
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              For the full experience with all my photographs, visit my Adobe Lightroom gallery.
            </p>
          </div>
          <LightroomEmbed />
        </Section>
      )}

      {/* About Section */}
      <Section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-6">
            About My Photography
          </h2>
          <div className="prose prose-lg mx-auto text-neutral-700">
            <p className="mb-4">
              Photography has been a passion of mine for years, serving as a creative outlet 
              that complements my marketing work. Through the lens, I explore composition, 
              lighting, and storytelling—skills that translate directly to visual marketing.
            </p>
            <p className="mb-4">
              My focus is on landscape and architectural photography, capturing the interplay 
              of natural light with the built and natural environment. Each image is carefully 
              composed to evoke emotion and tell a visual story.
            </p>
            <p>
              Whether it's the golden hour along the Pacific coast or the geometric patterns 
              of urban architecture, I seek to find beauty in the world around us and share 
              that perspective through my photographs.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-gradient-to-b from-navy-50 to-aqua-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Interested in discussing marketing strategy, content creation, or just want to chat about photography?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-semibold text-lg rounded-lg hover:bg-coral-600 transition-all duration-200 shadow-md hover:shadow-lg"
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-700 font-semibold text-lg rounded-lg hover:bg-navy-50 transition-all duration-200 shadow-md hover:shadow-lg border border-navy-200"
              aria-label="View my marketing work"
            >
              View My Work
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
