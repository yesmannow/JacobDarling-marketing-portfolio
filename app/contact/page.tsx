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
    honeypot: '', // Anti-spam field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', service: '', message: '', honeypot: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            Contact Me
          </h1>
          <p className="text-xl text-aqua-100">
            Ready to discuss how strategic marketing can help your business grow? Let's start a conversation.
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
                Start a Conversation
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
                      <a href="mailto:hoosierdarling@gmail.com" className="text-neutral-700 hover:text-navy-900 transition-colors">
                        hoosierdarling@gmail.com
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
                      <a href="https://linkedin.com/in/jacobdarling" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-navy-900 transition-colors">
                        Connect with me
                      </a>
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-coral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-coral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                      {process.env.NEXT_PUBLIC_SHOW_PHONE === 'true' ? (
                        <a href="tel:+13174438091" className="text-neutral-700 hover:text-navy-900 transition-colors">
                          +1 317-443-8091
                        </a>
                      ) : (
                        <p className="text-neutral-700">Phone available on request</p>
                      )}
                    </div>
                  </div>
                </Card>

                <Card padding="md">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-navy-900 mb-1">GitHub</h3>
                      <a href="https://github.com/yesmannow" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-navy-900 transition-colors">
                        View my code
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">
                      {errorMessage}
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
                  {isSubmitting ? 'Sending...' : 'Contact me'}
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
