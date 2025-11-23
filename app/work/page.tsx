'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/app/components/ProjectCard';
import { Section } from '@/components/ui';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image?: string;
  href: string;
}

const projects: Project[] = [
  {
    id: 'the-launchpad',
    title: 'The Launchpad',
    category: 'Product Vision',
    description: 'Transformed a static practitioner directory into a revenue engine generating $310K in new revenue through full-funnel growth system.',
    tags: ['Marketing Automation', 'CRM Strategy', 'Lead Nurturing'],
    href: '/case-studies/the-launchpad',
  },
  {
    id: 'the-guardian',
    title: 'The Guardian',
    category: 'Automation',
    description: 'Turned compliance pain into an automated trust-and-sales engine, reducing support tickets by 68% while increasing upsell conversion by 27%.',
    tags: ['Customer Empathy', 'Automation', 'Sales Funnel'],
    href: '/case-studies/the-guardian',
  },
  {
    id: 'the-compass',
    title: 'The Compass',
    category: 'Analytics',
    description: 'Rebuilt analytics and attribution pipeline, improving attribution accuracy by 46 points and CAC efficiency by 32%.',
    tags: ['Analytics Engineering', 'Data Strategy', 'GTM'],
    href: '/case-studies/the-compass',
  },
  {
    id: 'the-fortress',
    title: 'The Fortress',
    category: 'Security',
    description: 'Implemented edge-first security posture blocking 85K+ threats monthly while improving page speeds by 210%.',
    tags: ['Infrastructure Security', 'Performance', 'Cloudflare'],
    href: '/case-studies/the-fortress',
  },
  {
    id: 'the-conductor',
    title: 'The Conductor',
    category: 'Systems Integration',
    description: 'Orchestrated unified data pipeline across 6 platforms, saving 48 hours per week and achieving 99.8% data accuracy.',
    tags: ['Systems Integration', 'Process Automation', 'MarTech'],
    href: '/case-studies/the-conductor',
  },
  {
    id: 'the-engine-room',
    title: 'The Engine Room',
    category: 'Performance',
    description: 'Rebuilt infrastructure reducing page load from 5.8s to 1.2s and checkout failures by 92% while enabling daily deployments.',
    tags: ['DevOps', 'Performance Tuning', 'Infrastructure'],
    href: '/case-studies/the-engine-room',
  },
];

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on search and tags
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => project.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            Work
          </h1>
          <p className="text-xl text-aqua-100">
            A showcase of strategic marketing projects that drive measurable business results through data-driven execution and innovative solutions.
          </p>
        </div>
      </Section>

      {/* Filter & Grid Section */}
      <Section background="neutral" padding="lg">
        {/* Search and Filter Controls */}
        <div className="max-w-5xl mx-auto mb-12">
          {/* Search Bar */}
          <div className="mb-6">
            <label htmlFor="search" className="sr-only">
              Search projects
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                placeholder="Search projects by title, description, or category..."
                aria-label="Search projects"
              />
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider">
                Filter by Tag
              </h2>
              {(selectedTags.length > 0 || searchQuery !== '') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-coral-500 hover:text-coral-600 font-medium transition-colors"
                  aria-label="Clear all filters"
                >
                  Clear All
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedTags.includes(tag)
                      ? 'bg-navy-700 text-white shadow-md'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                  aria-pressed={selectedTags.includes(tag)}
                  aria-label={`Filter by ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-sm text-neutral-600">
            Showing <strong>{filteredProjects.length}</strong> of{' '}
            <strong>{projects.length}</strong> projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              category={project.category}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 max-w-lg mx-auto">
            <svg
              className="w-16 h-16 text-neutral-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">
              No projects found
            </h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Let's Create Something Great Together
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Interested in discussing how strategic marketing can help achieve your business goals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-coral-500 text-white font-semibold rounded-lg hover:bg-coral-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get In Touch
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-700 font-semibold rounded-lg border border-navy-300 hover:border-navy-500 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
