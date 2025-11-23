import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-display font-bold text-white hover:text-aqua-300 transition-colors">
              Jacob Darling
            </Link>
            <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
              Marketing strategist specializing in data-driven campaigns that deliver measurable results.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 hover:bg-navy-700 text-aqua-300 hover:text-aqua-200 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 hover:bg-navy-700 text-aqua-300 hover:text-aqua-200 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@jacobdarling.com"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-navy-800 hover:bg-navy-700 text-aqua-300 hover:text-aqua-200 transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#strategy" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Marketing Strategy
                </Link>
              </li>
              <li>
                <Link href="/services#content" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  SEO & Analytics
                </Link>
              </li>
              <li>
                <Link href="/services#brand" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Brand Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-aqua-300 mb-4">
              Stay Updated
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              Get marketing insights and case study updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-navy-700 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent transition-all text-sm"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Jacob Darling. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
