import { Button, Card, Tag, Section } from '@/components/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-lg font-display font-bold mb-6 animate-fade-in">
            Marketing Strategy That Drives Real Results
          </h1>
          <p className="text-xl md:text-2xl text-aqua-100 mb-8 leading-relaxed animate-fade-in animation-delay-200">
            Data-driven campaigns • Compelling content • Measurable ROI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button href="/portfolio" size="lg" variant="primary">
              View Portfolio
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
              Contact Me
            </Button>
          </div>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <Tag variant="primary" className="mb-6">About Me</Tag>
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Strategic Marketing Leader with a Track Record of Success
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            I'm Jacob Darling, a marketing strategist who combines creative thinking with data analysis 
            to build campaigns that resonate with audiences and deliver measurable business growth. 
            With expertise spanning content marketing, SEO, brand development, and analytics, 
            I help businesses tell their stories and achieve their goals.
          </p>
          <Button href="/about" variant="secondary">
            Learn More About Me
          </Button>
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section background="neutral" padding="lg">
        <div className="text-center mb-12">
          <Tag variant="secondary" className="mb-4">Featured Work</Tag>
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-4">
            Recent Case Studies
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real projects, real results. See how strategic marketing drives business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <Card hover padding="lg" href="/case-studies/saas-growth">
            <div className="flex gap-2 mb-4">
              <Tag variant="primary">B2B</Tag>
              <Tag variant="success">Growth</Tag>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              SaaS Growth Campaign
            </h3>
            <p className="text-neutral-700 mb-4">
              Drove 240% increase in qualified leads through integrated content marketing and SEO strategy.
            </p>
            <div className="flex items-center text-coral-500 font-semibold">
              Read Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>

          {/* Case Study 2 */}
          <Card hover padding="lg" href="/case-studies/ecommerce-rebrand">
            <div className="flex gap-2 mb-4">
              <Tag variant="primary">E-commerce</Tag>
              <Tag variant="secondary">Branding</Tag>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              E-commerce Rebrand
            </h3>
            <p className="text-neutral-700 mb-4">
              Complete brand refresh that improved conversion rates by 85% and customer retention by 60%.
            </p>
            <div className="flex items-center text-coral-500 font-semibold">
              Read Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>

          {/* Case Study 3 */}
          <Card hover padding="lg" href="/case-studies/content-roi">
            <div className="flex gap-2 mb-4">
              <Tag variant="success">Content</Tag>
              <Tag variant="primary">Strategy</Tag>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">
              Content Marketing ROI
            </h3>
            <p className="text-neutral-700 mb-4">
              Built content strategy generating $2M in attributed revenue with 450% ROI in first year.
            </p>
            <div className="flex items-center text-coral-500 font-semibold">
              Read Case Study
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button href="/case-studies" variant="secondary" size="lg">
            View All Case Studies
          </Button>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <Tag variant="primary" className="mb-4">What I Do</Tag>
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-4">
            Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Strategic marketing solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card padding="lg">
            <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Marketing Strategy</h3>
            <p className="text-neutral-700">
              Data-driven strategies that align with your business goals and deliver measurable results through comprehensive market analysis and competitive positioning.
            </p>
          </Card>

          <Card padding="lg">
            <div className="w-12 h-12 bg-aqua-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-aqua-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Content Marketing</h3>
            <p className="text-neutral-700">
              Compelling content that engages your audience, builds trust, and drives conversions across all channels with SEO-optimized storytelling.
            </p>
          </Card>

          <Card padding="lg">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">SEO & Analytics</h3>
            <p className="text-neutral-700">
              Optimize your visibility and measure what matters with comprehensive SEO strategies and advanced analytics implementation.
            </p>
          </Card>

          <Card padding="lg">
            <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-coral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3">Brand Development</h3>
            <p className="text-neutral-700">
              Build memorable brands that resonate with your target audience through strategic positioning, messaging, and visual identity.
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            Explore All Services
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold mb-6">
            Ready to Elevate Your Marketing?
          </h2>
          <p className="text-xl text-aqua-100 mb-8">
            Let's discuss how strategic marketing can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/portfolio" size="lg" variant="ghost" className="border-2 border-white text-white hover:bg-white hover:text-navy-900">
              View My Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
