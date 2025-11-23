'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui';

interface MenuItem {
  title: string;
  href: string;
  description: string;
}

interface FeaturedProject {
  title: string;
  category: string;
  href: string;
}

export const MegaMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services: MenuItem[] = [
    {
      title: 'Marketing Strategy',
      href: '/services#strategy',
      description: 'Data-driven strategies that align with business goals',
    },
    {
      title: 'Content Marketing',
      href: '/services#content',
      description: 'Compelling content that converts and engages',
    },
    {
      title: 'SEO & Analytics',
      href: '/services#seo',
      description: 'Optimize visibility and measure what matters',
    },
    {
      title: 'Brand Development',
      href: '/services#brand',
      description: 'Build memorable brands that resonate',
    },
  ];

  const featuredProjects: FeaturedProject[] = [
    {
      title: 'SaaS Growth Campaign',
      category: 'B2B Marketing',
      href: '/case-studies/saas-growth',
    },
    {
      title: 'E-commerce Rebrand',
      category: 'Brand Strategy',
      href: '/case-studies/ecommerce-rebrand',
    },
    {
      title: 'Content Marketing ROI',
      category: 'Content Strategy',
      href: '/case-studies/content-roi',
    },
  ];

  return (
    <div
      className="hidden lg:block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-neutral-200 animate-slide-down">
          <div className="container-custom py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Services Section */}
              <div className="col-span-5">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Services
                </h3>
                <div className="space-y-3">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="font-semibold text-navy-900 group-hover:text-navy-700 mb-1">
                        {service.title}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured Case Studies */}
              <div className="col-span-4">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Featured Case Studies
                </h3>
                <div className="space-y-3">
                  {featuredProjects.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                    >
                      <div className="font-semibold text-navy-900 group-hover:text-navy-700 mb-1">
                        {project.title}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {project.category}
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center mt-4 text-sm font-semibold text-coral-500 hover:text-coral-600"
                >
                  View All Case Studies
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="col-span-3">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/about"
                    className="block text-navy-900 hover:text-navy-700 font-medium transition-colors"
                  >
                    About Me
                  </Link>
                  <Link
                    href="/portfolio"
                    className="block text-navy-900 hover:text-navy-700 font-medium transition-colors"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-navy-900 hover:text-navy-700 font-medium transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
                <div className="mt-6 p-4 bg-gradient-to-br from-navy-50 to-aqua-50 rounded-lg">
                  <p className="text-sm font-semibold text-navy-900 mb-2">
                    Ready to collaborate?
                  </p>
                  <p className="text-xs text-neutral-700 mb-3">
                    Let's discuss your marketing goals
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-coral-500 hover:text-coral-600"
                  >
                    Schedule a Call
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
