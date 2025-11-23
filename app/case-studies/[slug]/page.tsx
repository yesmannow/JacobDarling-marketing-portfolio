import { Button, Tag, Section } from '@/components/ui';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/caseStudies';
import CampaignSimulator from '@/app/components/CampaignSimulator';

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.category.map((cat, idx) => (
              <Tag key={idx} variant="primary" className="bg-white/20 text-white border border-white/30">
                {cat}
              </Tag>
            ))}
          </div>
          <h1 className="text-display-md font-display font-bold mb-4">
            {study.title}
          </h1>
          <p className="text-xl text-aqua-100 mb-8">
            {study.tagline}
          </p>
          <div className="flex flex-wrap gap-6 text-aqua-100">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-1">Client</div>
              <div className="text-lg">{study.client}</div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-1">Industry</div>
              <div className="text-lg">{study.industry}</div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider mb-1">Date</div>
              <div className="text-lg">{new Date(study.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Metrics Section */}
      <Section background="neutral" padding="md">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm font-medium text-neutral-600 mb-2">{metric.label}</div>
                <div className="text-3xl font-bold text-navy-900 mb-1">{metric.value}</div>
                <div className="text-xs text-neutral-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Content Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-navy max-w-none
              prose-headings:font-display prose-headings:text-navy-900
              prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-12
              prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
              prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:text-neutral-700
              prose-strong:text-navy-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: study.htmlContent }}
          />
        </div>
      </Section>

      {/* Campaign Simulator Section */}
      <Section background="neutral" padding="lg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-display-sm font-display font-bold text-navy-900 mb-4">
              See the Impact for Yourself
            </h2>
            <p className="text-lg text-neutral-700">
              Use our campaign ROI calculator to estimate potential results for your business
            </p>
          </div>
          <CampaignSimulator />
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

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}
