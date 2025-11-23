import { Button, Tag, Section } from '@/components/ui';
import { notFound } from 'next/navigation';

interface CaseStudyData {
  slug: string;
  title: string;
  category: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

// This would typically come from a CMS or database
const caseStudies: Record<string, CaseStudyData> = {
  'saas-growth': {
    slug: 'saas-growth',
    title: 'SaaS Growth Campaign',
    category: 'B2B Marketing',
    client: 'TechFlow SaaS',
    industry: 'Software / B2B SaaS',
    challenge: 'A mid-market SaaS company was struggling to generate qualified leads and differentiate in a crowded market. Their content was generic, SEO performance was weak, and the sales team lacked marketing-qualified leads.',
    solution: 'Developed an integrated content marketing and SEO strategy focused on targeting high-intent keywords, creating in-depth educational content, and implementing a lead nurturing program. Built thought leadership through executive content and launched targeted campaigns for key buyer personas.',
    results: [
      '240% increase in qualified leads within 6 months',
      '3x organic traffic growth year-over-year',
      '$1.2M in pipeline generated from content marketing',
      'Improved keyword rankings for 85% of target terms',
      'Shortened sales cycle by 30%',
    ],
    testimonial: {
      quote: "Jacob's strategic approach transformed our marketing. The quality of leads improved dramatically, and our sales team finally had the content they needed to close deals.",
      author: 'Sarah Chen',
      position: 'CMO, TechFlow SaaS',
    },
  },
  'ecommerce-rebrand': {
    slug: 'ecommerce-rebrand',
    title: 'E-commerce Rebrand',
    category: 'Brand Strategy',
    client: 'Urban Essentials',
    industry: 'E-commerce / Retail',
    challenge: 'An established e-commerce brand was experiencing declining sales and customer engagement. Their brand identity felt dated, customer experience was inconsistent, and they were losing market share to competitors.',
    solution: 'Led a complete brand transformation including visual identity redesign, messaging framework, customer experience optimization, and content strategy. Repositioned the brand to appeal to a younger demographic while maintaining existing customer loyalty.',
    results: [
      '85% increase in conversion rate post-launch',
      '60% improvement in customer retention',
      '4.8 star average rating across platforms',
      '120% growth in social media engagement',
      'Featured in 3 major industry publications',
    ],
    testimonial: {
      quote: "The rebrand exceeded our expectations. Not only do we look better, but our customers are more engaged and our metrics have never been stronger.",
      author: 'Michael Torres',
      position: 'Founder, Urban Essentials',
    },
  },
  'content-roi': {
    slug: 'content-roi',
    title: 'Content Marketing ROI',
    category: 'Content Strategy',
    client: 'Enterprise Solutions Inc.',
    industry: 'Enterprise Software',
    challenge: 'Enterprise software company needed to establish thought leadership and generate leads in a competitive market. Previous content efforts lacked strategic direction and showed minimal ROI.',
    solution: 'Built comprehensive content strategy based on customer research, competitive analysis, and SEO opportunities. Created pillar content, buyer journey mapping, and implemented attribution tracking to measure content ROI. Established executive thought leadership program.',
    results: [
      '$2M in attributed revenue within first year',
      '450% ROI on content marketing investment',
      '10,000+ marketing qualified leads generated',
      'Established CEO as industry thought leader',
      'Content cited by 15+ industry publications',
    ],
    testimonial: {
      quote: "Jacob proved that content marketing can be a significant revenue driver. The data-driven approach and strategic thinking changed how we view content investment.",
      author: 'David Park',
      position: 'VP Marketing, Enterprise Solutions Inc.',
    },
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <Tag variant="primary" className="mb-4 bg-white/20 text-white border border-white/30">
            {study.category}
          </Tag>
          <h1 className="text-display-md font-display font-bold mb-6">
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-aqua-100">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-1">Client</div>
              <div className="text-lg">{study.client}</div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-1">Industry</div>
              <div className="text-lg">{study.industry}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Challenge */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">The Challenge</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {study.challenge}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">The Solution</h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {study.solution}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">The Results</h2>
            <div className="bg-gradient-to-br from-navy-50 to-aqua-50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-navy-900 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          {study.testimonial && (
            <div className="bg-navy-900 text-white rounded-xl p-8 lg:p-12">
              <svg className="w-12 h-12 text-aqua-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl leading-relaxed mb-6">
                "{study.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-bold">{study.testimonial.author}</div>
                <div className="text-aqua-300">{study.testimonial.position}</div>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="neutral" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Let's discuss how strategic marketing can drive growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Get In Touch
            </Button>
            <Button href="/case-studies" size="lg" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

// Generate static params for known case studies
export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}
