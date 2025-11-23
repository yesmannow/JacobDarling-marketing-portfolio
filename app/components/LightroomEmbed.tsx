'use client';

import React from 'react';

export const LightroomEmbed: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Explanatory Text */}
      <div className="mb-8 text-center">
        <p className="text-lg text-neutral-700 mb-4">
          Explore my complete photography collection on Adobe Lightroom
        </p>
        <a
          href="https://lightroom.adobe.com/shares/b1f8050aa3ac452baae9e3590e1c92c8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-200 shadow-md hover:shadow-lg"
          aria-label="Open full gallery in Adobe Lightroom (opens in new tab)"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          Open Full Gallery
        </a>
      </div>

      {/* Lightroom Embed */}
      <div
        className="relative w-full rounded-lg overflow-hidden shadow-2xl"
        style={{ paddingBottom: '50%', height: 0 }}
      >
        <iframe
          id="lightroom-iframe"
          src="https://lightroom.adobe.com/embed/shares/b1f8050aa3ac452baae9e3590e1c92c8/slideshow?background_color=%232D2D2D&color=%23999999"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 'none' }}
          title="Jacob Darling Photography - Adobe Lightroom Gallery"
          loading="lazy"
          allow="fullscreen"
        />
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-600">
          Best viewed in fullscreen mode. Use arrow keys to navigate between photos.
        </p>
      </div>
    </div>
  );
};
