import { Button, Card, Tag, Section } from '@/components/ui';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'saas-growth',
      title: 'SaaS Growth Campaign',
      category: 'B2B Marketing',
      description: 'How a strategic content and SEO approach drove 240% increase in qualified leads for a mid-market SaaS company.',
      metrics: ['240% Lead Growth', '3x Organic Traffic', '$1.2M Pipeline'],
      href: '/case-studies/saas-growth',
    },
    {
      id: 'ecommerce-rebrand',
      title: 'E-commerce Rebrand',
      category: 'Brand Strategy',
      description: 'Complete brand transformation that resulted in 85% conversion rate improvement and 60% boost in customer retention.',
      metrics: ['85% Conversion Increase', '60% Better Retention', '4.8★ Rating'],
      href: '/case-studies/ecommerce-rebrand',
    },
    {
      id: 'content-roi',
      title: 'Content Marketing ROI',
      category: 'Content Strategy',
      description: 'Built and executed content strategy that generated $2M in attributed revenue with 450% ROI in the first year.',
      metrics: ['$2M Revenue', '450% ROI', '10K+ Leads'],
      href: '/case-studies/content-roi',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-aqua-100">
            Real projects. Real results. See how strategic marketing drives business growth.
          </p>
        </div>
      </Section>

      {/* Case Studies List */}
      <Section background="neutral" padding="lg">
        <div className="space-y-8 max-w-5xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.id} hover padding="lg" href={study.href}>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <Tag variant="primary" className="mb-4">{study.category}</Tag>
                  <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-lg text-neutral-700 mb-6">
                    {study.description}
                  </p>
                  <div className="flex items-center text-coral-500 font-semibold">
                    Read Full Case Study
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                <div className="lg:w-64 bg-gradient-to-br from-navy-50 to-aqua-50 rounded-lg p-6">
                  <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mb-4">
                    Key Metrics
                  </h3>
                  <div className="space-y-3">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-5 h-5 text-teal-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-navy-900 font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Want Similar Results?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Let's discuss how data-driven marketing strategies can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
