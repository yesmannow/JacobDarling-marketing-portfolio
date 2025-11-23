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
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="Home"
              >
                Home
              </Link>
              <Link
                href="/work"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/work' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="Work"
              >
                Work
              </Link>
              <Link
                href="/case-studies"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname?.startsWith('/case-studies') ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="Case Studies"
              >
                Case Studies
              </Link>
              <Link
                href="/services"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/services' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="Services"
              >
                Services
              </Link>
              <Link
                href="/insights"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/insights' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="Insights"
              >
                Insights
              </Link>
              <Link
                href="/about"
                className={`link-underline text-base font-medium transition-colors ${
                  pathname === '/about' ? 'text-navy-900' : 'text-neutral-700 hover:text-navy-900'
                }`}
                aria-label="About"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Contact"
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-4 py-2 text-navy-700 hover:text-navy-900 font-medium transition-colors border border-navy-300 rounded-lg hover:border-navy-500"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (opens in new tab)"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
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
