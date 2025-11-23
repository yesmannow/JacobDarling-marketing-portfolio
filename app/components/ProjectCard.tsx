import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  href: string;
  category?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  href,
  category,
}) => {
  return (
    <Link href={href} className="group block">
      <article className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full border border-neutral-200 hover:border-navy-300">
        {/* Image Section */}
        {image ? (
          <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-navy-100 to-aqua-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative w-full h-48 bg-gradient-to-br from-navy-100 to-aqua-100 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-navy-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6">
          {/* Category Badge */}
          {category && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-50 rounded-full">
                {category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-700 mb-4 line-clamp-3">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium text-navy-700 bg-navy-50 rounded border border-navy-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More Link */}
          <div className="flex items-center text-coral-500 font-semibold group-hover:text-coral-600 transition-colors">
            View Project
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
