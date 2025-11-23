import { Button, Card, Tag, Section } from '@/components/ui';

export default function Services() {
  const services = [
    {
      id: 'strategy',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Marketing Strategy',
      description: 'Comprehensive marketing strategies that align with your business goals and deliver measurable results.',
      features: [
        'Market research and competitive analysis',
        'Customer persona development',
        'Channel strategy and mix optimization',
        'Budget allocation and ROI planning',
        'KPI framework and measurement',
      ],
    },
    {
      id: 'content',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Content Marketing',
      description: 'Compelling content that engages your audience, builds trust, and drives conversions across all channels.',
      features: [
        'Content strategy and planning',
        'SEO-optimized blog posts and articles',
        'White papers and case studies',
        'Email marketing campaigns',
        'Social media content',
      ],
    },
    {
      id: 'seo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'SEO & Analytics',
      description: 'Optimize your visibility and measure what matters with comprehensive SEO strategies and advanced analytics.',
      features: [
        'Technical SEO audits and optimization',
        'Keyword research and targeting',
        'On-page and off-page SEO',
        'Analytics implementation and tracking',
        'Performance reporting and insights',
      ],
    },
    {
      id: 'brand',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: 'Brand Development',
      description: 'Build memorable brands that resonate with your target audience through strategic positioning and messaging.',
      features: [
        'Brand strategy and positioning',
        'Messaging framework development',
        'Visual identity guidelines',
        'Brand voice and tone',
        'Brand audit and refresh',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            Services
          </h1>
          <p className="text-xl text-aqua-100">
            Strategic marketing solutions tailored to your business goals and designed to deliver measurable results
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="neutral" padding="lg">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-28 ${idx !== 0 ? 'pt-8 border-t border-neutral-200' : ''}`}
            >
              <Card padding="lg">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-aqua-100 rounded-xl flex items-center justify-center text-navy-700 mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button href="/contact" variant="primary">
                      Get Started
                    </Button>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wider mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start">
                          <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Tag variant="primary" className="mb-4">How I Work</Tag>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              My Process
            </h2>
            <p className="text-lg text-neutral-600">
              A proven framework for delivering strategic marketing results
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card padding="lg">
              <div className="w-12 h-12 bg-navy-700 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Discover</h3>
              <p className="text-neutral-700">
                Deep dive into your business, audience, and goals through research and stakeholder interviews.
              </p>
            </Card>
            <Card padding="lg">
              <div className="w-12 h-12 bg-navy-700 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Strategize</h3>
              <p className="text-neutral-700">
                Develop data-driven strategies and actionable plans aligned with your objectives.
              </p>
            </Card>
            <Card padding="lg">
              <div className="w-12 h-12 bg-navy-700 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">Execute</h3>
              <p className="text-neutral-700">
                Implement campaigns and continuously optimize based on performance data.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="navy" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold mb-6">
            Proven Results
          </h2>
          <p className="text-xl text-aqua-100 mb-12">
            Track record of delivering measurable business impact
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-coral-400 mb-2">$15M+</div>
              <div className="text-aqua-100">Attributed Revenue</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-coral-400 mb-2">50+</div>
              <div className="text-aqua-100">Companies Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-coral-400 mb-2">300%</div>
              <div className="text-aqua-100">Avg. Growth Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-coral-400 mb-2">95%</div>
              <div className="text-aqua-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="neutral" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Let's discuss how these services can help your business achieve its marketing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Schedule a Consultation
            </Button>
            <Button href="/case-studies" size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
