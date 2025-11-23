'use client';

import { useState } from 'react';
import { Button, Card, Tag, Section } from '@/components/ui';

type Filter = 'all' | 'strategy' | 'content' | 'seo' | 'brand';

interface PortfolioItem {
  id: string;
  title: string;
  category: Filter;
  description: string;
  tags: string[];
  href: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'SaaS Growth Campaign',
    category: 'strategy',
    description: 'Drove 240% increase in qualified leads through integrated content marketing and SEO strategy.',
    tags: ['B2B', 'Lead Generation', 'SEO'],
    href: '/case-studies/saas-growth',
  },
  {
    id: '2',
    title: 'E-commerce Rebrand',
    category: 'brand',
    description: 'Complete brand refresh that improved conversion rates by 85% and customer retention by 60%.',
    tags: ['E-commerce', 'Branding', 'UX'],
    href: '/case-studies/ecommerce-rebrand',
  },
  {
    id: '3',
    title: 'Content Marketing ROI',
    category: 'content',
    description: 'Built content strategy generating $2M in attributed revenue with 450% ROI in first year.',
    tags: ['Content', 'Strategy', 'ROI'],
    href: '/case-studies/content-roi',
  },
  {
    id: '4',
    title: 'Enterprise SEO Optimization',
    category: 'seo',
    description: 'Increased organic traffic by 320% and improved rankings for 150+ target keywords.',
    tags: ['SEO', 'Technical', 'Enterprise'],
    href: '/case-studies/enterprise-seo',
  },
  {
    id: '5',
    title: 'B2B Marketing Strategy',
    category: 'strategy',
    description: 'Comprehensive marketing strategy that shortened sales cycle by 40% and increased deal size by 65%.',
    tags: ['B2B', 'Strategy', 'Sales Enablement'],
    href: '/case-studies/b2b-strategy',
  },
  {
    id: '6',
    title: 'Thought Leadership Program',
    category: 'content',
    description: 'Built executive thought leadership program generating 500K+ impressions and 50+ enterprise leads.',
    tags: ['Content', 'Leadership', 'Enterprise'],
    href: '/case-studies/thought-leadership',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'content', label: 'Content' },
    { value: 'seo', label: 'SEO' },
    { value: 'brand', label: 'Branding' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-aqua-100">
            A collection of strategic marketing projects that drove measurable business results
          </p>
        </div>
      </Section>

      {/* Filter & Grid Section */}
      <Section background="neutral" padding="lg">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                activeFilter === filter.value
                  ? 'bg-navy-700 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} hover padding="lg" href={item.href}>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <Tag key={tag} variant="primary">{tag}</Tag>
                ))}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {item.title}
              </h3>
              <p className="text-neutral-700 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-coral-500 font-semibold">
                View Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-neutral-600">No projects found in this category.</p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Let's discuss how strategic marketing can help achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Get In Touch
            </Button>
            <Button href="/services" size="lg" variant="outline">
              View Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
