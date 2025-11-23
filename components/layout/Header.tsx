'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-md'
      : 'bg-transparent'
  }`;

  return (
    <>
      <header className={headerClasses}>
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-display font-bold text-navy-900 hover:text-navy-700 transition-colors"
            >
              Jacob Darling
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
              >
                Home
              </Link>
              <Link
                href="/portfolio"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/portfolio' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/case-studies"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname?.startsWith('/case-studies') ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/about' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/services' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-navy-900 hover:bg-navy-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mega Menu - Desktop only */}
        <MegaMenu />
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
