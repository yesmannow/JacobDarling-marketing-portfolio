'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isActive = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left font-semibold text-navy-900"
        aria-expanded={isOpen}
      >
        <span className={isActive ? 'text-coral-500' : ''}>{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-4 space-y-2">{children}</div>}
    </div>
  );
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">
        <div className="p-6">
          {/* Close Button */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-display font-bold text-navy-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 text-neutral-600 hover:text-navy-900 hover:bg-neutral-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <Link
              href="/"
              className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                pathname === '/'
                  ? 'bg-navy-50 text-navy-900'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
              onClick={onClose}
            >
              Home
            </Link>

            <Link
              href="/portfolio"
              className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                pathname === '/portfolio'
                  ? 'bg-navy-50 text-navy-900'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
              onClick={onClose}
            >
              Portfolio
            </Link>

            {/* Case Studies Accordion */}
            <AccordionItem
              title="Case Studies"
              isActive={pathname?.startsWith('/case-studies')}
            >
              <Link
                href="/case-studies"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                All Case Studies
              </Link>
              <Link
                href="/case-studies/saas-growth"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                SaaS Growth Campaign
              </Link>
              <Link
                href="/case-studies/ecommerce-rebrand"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                E-commerce Rebrand
              </Link>
              <Link
                href="/case-studies/content-roi"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                Content Marketing ROI
              </Link>
            </AccordionItem>

            {/* Services Accordion */}
            <AccordionItem
              title="Services"
              isActive={pathname === '/services'}
            >
              <Link
                href="/services"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                All Services
              </Link>
              <Link
                href="/services#strategy"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                Marketing Strategy
              </Link>
              <Link
                href="/services#content"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                Content Marketing
              </Link>
              <Link
                href="/services#seo"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                SEO & Analytics
              </Link>
              <Link
                href="/services#brand"
                className="block py-2 px-4 text-neutral-700 hover:text-navy-900 transition-colors"
                onClick={onClose}
              >
                Brand Development
              </Link>
            </AccordionItem>

            <Link
              href="/about"
              className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                pathname === '/about'
                  ? 'bg-navy-50 text-navy-900'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
              onClick={onClose}
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="block w-full py-3 px-6 bg-coral-500 text-white font-semibold text-center rounded-lg hover:bg-coral-600 transition-colors shadow-md"
              onClick={onClose}
            >
              Get In Touch
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-2">
              Ready to elevate your marketing?
            </p>
            <a
              href="mailto:hello@jacobdarling.com"
              className="text-sm font-semibold text-navy-700 hover:text-navy-900 transition-colors"
            >
              hello@jacobdarling.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
