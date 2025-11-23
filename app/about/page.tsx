import { Button, Card, Tag, Section } from '@/components/ui';

export default function About() {
  const skills = [
    'Marketing Strategy',
    'Content Marketing',
    'SEO & Analytics',
    'Brand Development',
    'Campaign Management',
    'Data Analysis',
    'Conversion Optimization',
    'Social Media Strategy',
  ];

  const experience = [
    {
      role: 'Senior Marketing Strategist',
      company: 'Independent Consultant',
      period: '2020 - Present',
      description: 'Helping B2B and e-commerce companies develop and execute data-driven marketing strategies that deliver measurable results.',
    },
    {
      role: 'Marketing Director',
      company: 'TechCorp Solutions',
      period: '2018 - 2020',
      description: 'Led marketing team of 8, grew annual revenue by 180% through strategic campaigns and brand positioning.',
    },
    {
      role: 'Content Marketing Manager',
      company: 'Growth Ventures',
      period: '2015 - 2018',
      description: 'Built content marketing program from scratch, generating $5M in attributed revenue over 3 years.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-aqua-100 leading-relaxed">
            Marketing strategist with 10+ years of experience driving growth for B2B and e-commerce companies through data-driven campaigns and compelling storytelling.
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Tag variant="primary" className="mb-6">My Story</Tag>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                From Data Analyst to Marketing Strategist
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  My journey in marketing began with a fascination for data and storytelling. I started as a data analyst, discovering how numbers could tell compelling stories about customer behavior and business opportunities.
                </p>
                <p>
                  Over the past decade, I've helped dozens of companies—from fast-growing startups to established enterprises—develop marketing strategies that drive real business results. My approach combines analytical rigor with creative thinking to build campaigns that resonate with audiences and deliver measurable ROI.
                </p>
                <p>
                  What sets me apart is my ability to translate complex data into actionable insights and compelling narratives that engage customers and drive conversions. I believe the best marketing is both data-driven and deeply human.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-navy-50 to-aqua-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Key Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-navy-900">Generated $15M+ in attributed revenue across campaigns</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-navy-900">Worked with 50+ companies across B2B, SaaS, and e-commerce</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-navy-900">Published 100+ articles on marketing strategy and analytics</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-navy-900">Speaker at 15+ marketing conferences and workshops</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section background="neutral" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Tag variant="secondary" className="mb-4">Expertise</Tag>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Core Skills & Specializations
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Tag key={skill} variant="primary" className="text-base px-5 py-2.5">
                {skill}
              </Tag>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Tag variant="primary" className="mb-4">Experience</Tag>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Professional Journey
            </h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} padding="lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{exp.role}</h3>
                    <p className="text-lg text-neutral-600 mt-1">{exp.company}</p>
                  </div>
                  <span className="text-neutral-500 font-medium mt-2 lg:mt-0">{exp.period}</span>
                </div>
                <p className="text-neutral-700 leading-relaxed">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="navy" padding="lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display-sm font-display font-bold mb-6">
            Start a Conversation
          </h2>
          <p className="text-xl text-aqua-100 mb-8">
            Ready to discuss how strategic marketing can help your business grow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" variant="primary">
              Contact Me
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
