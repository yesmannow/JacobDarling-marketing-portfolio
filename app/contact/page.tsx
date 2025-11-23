'use client';

import { useState } from 'react';
import { Button, Card, Section } from '@/components/ui';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitStatus('idle');
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-display-md font-display font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-aqua-100">
            Ready to discuss how strategic marketing can help your business grow? Let's start the conversation.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section background="neutral" padding="lg">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Let's Work Together
              </h2>
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you need help with marketing strategy, content creation, or brand development, I'd love to discuss how I can help.
              </p>

              <div className="space-y-6">
                <Card padding="md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                      <a href="mailto:hello@jacobdarling.com" className="text-neutral-700 hover:text-navy-900 transition-colors">
                        hello@jacobdarling.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-aqua-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-aqua-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-navy-900 mb-1">LinkedIn</h3>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-navy-900 transition-colors">
                        Connect with me
                      </a>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-navy-900 mb-1">Schedule a Call</h3>
                      <p className="text-neutral-700">Available for consultations Mon-Fri</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">Marketing Strategy</option>
                    <option value="content">Content Marketing</option>
                    <option value="seo">SEO & Analytics</option>
                    <option value="brand">Brand Development</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project and goals..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <p className="text-teal-800 font-medium">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                What types of companies do you work with?
              </h3>
              <p className="text-neutral-700">
                I work with B2B companies, SaaS businesses, and e-commerce brands ranging from startups to established enterprises. My ideal clients are those who value data-driven marketing and are committed to growth.
              </p>
            </Card>
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                What is your typical engagement model?
              </h3>
              <p className="text-neutral-700">
                I offer both project-based and ongoing consulting arrangements. Projects typically range from 1-3 months for specific initiatives, while ongoing engagements can be structured monthly or quarterly.
              </p>
            </Card>
            <Card padding="lg">
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                How quickly can we get started?
              </h3>
              <p className="text-neutral-700">
                After our initial consultation, I can typically start within 1-2 weeks depending on current commitments and project scope. For urgent needs, expedited starts may be available.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
