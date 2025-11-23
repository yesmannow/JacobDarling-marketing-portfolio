# Voice Conversion Report - Agency to Personal

This document provides detailed before/after comparisons of the voice conversion from agency ("we/our") to personal ("I/my") across the portfolio site.

## Summary

All agency-style CTAs and messaging have been converted to personal voice to reflect Jacob Darling's individual portfolio.

---

## Homepage (`app/page.tsx`)

### CTA Button
**Before:**
```jsx
<Button href="/contact" size="lg" variant="outline">
  Get In Touch
</Button>
```

**After:**
```jsx
<Button href="/contact" size="lg" variant="outline">
  Contact Me
</Button>
```

---

## About Page (`app/about/page.tsx`)

### CTA Section Header
**Before:**
```jsx
<h2 className="text-display-sm font-display font-bold mb-6">
  Let's Work Together
</h2>
```

**After:**
```jsx
<h2 className="text-display-sm font-display font-bold mb-6">
  Start a Conversation
</h2>
```

### CTA Button
**Before:**
```jsx
<Button href="/contact" size="lg" variant="primary">
  Get In Touch
</Button>
```

**After:**
```jsx
<Button href="/contact" size="lg" variant="primary">
  Contact Me
</Button>
```

---

## Photography Page (`app/photography/page.tsx`)

### CTA Section Header
**Before:**
```jsx
<h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
  Let's Work Together
</h2>
```

**After:**
```jsx
<h2 className="text-3xl font-display font-bold text-navy-900 mb-4">
  Start a Conversation
</h2>
```

### CTA Button
**Before:**
```jsx
<a
  href="/contact"
  className="..."
  aria-label="Get in touch"
>
  Get In Touch
</a>
```

**After:**
```jsx
<a
  href="/contact"
  className="..."
  aria-label="Contact me"
>
  Contact Me
</a>
```

---

## Contact Page (`app/contact/page.tsx`)

### Page Header
**Before:**
```jsx
<h1 className="text-display-md font-display font-bold mb-6">
  Get In Touch
</h1>
<p className="text-xl text-aqua-100">
  Ready to discuss how strategic marketing can help your business grow? Let's start the conversation.
</p>
```

**After:**
```jsx
<h1 className="text-display-md font-display font-bold mb-6">
  Contact Me
</h1>
<p className="text-xl text-aqua-100">
  Ready to discuss how strategic marketing can help your business grow? Let's start a conversation.
</p>
```

### Section Header
**Before:**
```jsx
<h2 className="text-3xl font-bold text-navy-900 mb-6">
  Let's Work Together
</h2>
```

**After:**
```jsx
<h2 className="text-3xl font-bold text-navy-900 mb-6">
  Start a Conversation
</h2>
```

### Submit Button
**Before:**
```jsx
<Button
  type="submit"
  variant="primary"
  size="lg"
  fullWidth
  disabled={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Send Message'}
</Button>
```

**After:**
```jsx
<Button
  type="submit"
  variant="primary"
  size="lg"
  fullWidth
  disabled={isSubmitting}
>
  {isSubmitting ? 'Sending...' : 'Contact me'}
</Button>
```

### Contact Information
**Before:**
```jsx
<a href="mailto:hello@jacobdarling.com">
  hello@jacobdarling.com
</a>
<a href="https://linkedin.com">
  Connect with me
</a>
```

**After:**
```jsx
<a href="mailto:hoosierdarling@gmail.com">
  hoosierdarling@gmail.com
</a>
<a href="https://linkedin.com/in/jacobdarling">
  Connect with me
</a>
```

**Added:**
```jsx
{/* Phone with env toggle */}
{process.env.NEXT_PUBLIC_SHOW_PHONE === 'true' ? (
  <a href="tel:+13174438091">+1 317-443-8091</a>
) : (
  <p>Phone available on request</p>
)}

{/* GitHub profile */}
<a href="https://github.com/yesmannow">
  View my code
</a>
```

---

## Footer (`components/layout/Footer.tsx`)

### Description
**Before:**
```jsx
<p className="mt-4 text-neutral-300 text-sm leading-relaxed">
  Marketing strategist specializing in data-driven campaigns that deliver measurable results.
</p>
```

**After:**
```jsx
<p className="mt-4 text-neutral-300 text-sm leading-relaxed">
  Fractional CMO & Marketing Technologist specializing in data-driven campaigns that deliver measurable results.
</p>
```

### Social Links
**Before:**
```jsx
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
  {/* LinkedIn icon */}
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  {/* Twitter icon */}
</a>
<a href="mailto:hello@jacobdarling.com">
  {/* Email icon */}
</a>
```

**After:**
```jsx
<a href="https://linkedin.com/in/jacobdarling" target="_blank" rel="noopener noreferrer">
  {/* LinkedIn icon */}
</a>
<a href="https://github.com/yesmannow" target="_blank" rel="noopener noreferrer">
  {/* GitHub icon */}
</a>
<a href="mailto:hoosierdarling@gmail.com">
  {/* Email icon */}
</a>
```

---

## Layout Metadata (`app/layout.tsx`)

### Metadata
**Before:**
```typescript
export const metadata: Metadata = {
  title: "Jacob Darling - Marketing Strategist & Portfolio",
  description: "Marketing strategist specializing in data-driven campaigns, content marketing, and brand development. View my portfolio and case studies.",
  keywords: ["marketing strategy", "content marketing", "SEO", "brand development", "digital marketing"],
};
```

**After:**
```typescript
export const metadata: Metadata = {
  title: "Jacob Darling - Fractional CMO & Marketing Technologist",
  description: "16+ years of experience blending creative strategy, marketing automation, and systems thinking to drive scalable growth. Explore full-funnel campaigns, CRM architecture, and performance marketing.",
  keywords: ["marketing strategy", "fractional CMO", "marketing automation", "CRM architecture", "content marketing", "SEO", "brand development", "digital marketing"],
  openGraph: {
    title: "Jacob Darling - Fractional CMO & Marketing Technologist",
    description: "16+ years of experience in marketing strategy, automation, and systems architecture.",
    url: "https://jacobdarling.com",
    siteName: "Jacob Darling Portfolio",
    type: "website",
  },
};
```

### Structured Data (NEW)
**Added:**
```typescript
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jacob Darling",
  "jobTitle": "Fractional CMO & Marketing Technologist",
  "email": "hoosierdarling@gmail.com",
  ...(showPhone && { "telephone": "+1-317-443-8091" }),
  "url": "https://jacobdarling.com",
  "sameAs": [
    "https://linkedin.com/in/jacobdarling",
    "https://github.com/yesmannow"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indianapolis",
    "addressRegion": "IN",
    "addressCountry": "US"
  }
};
```

---

## Verification

### Grep Results for Banned Phrases

Command run:
```bash
git grep -niE "(let'?s work together|hire us|work with us|request a quote|our services|our team|marketing agency)" app/ components/ content/
```

**Result:** No matches found ✅

All agency-style language has been successfully removed and replaced with personal voice.

---

## Impact Summary

### Pages Modified: 5
- Homepage
- About page
- Photography page
- Contact page
- Root layout

### Components Modified: 1
- Footer

### Content Files Updated: 1
- Content inventory

### New Files Created: 4
- API contact route
- Environment variable example
- Redirect helper script
- This voice conversion report

### Total CTAs Updated: 7
- All CTAs now use personal voice ("Contact Me", "Start a Conversation")
- All references to agency work removed
- All contact information updated to Jacob Darling's personal details

---

**Last Updated:** 2025-11-23  
**Phase:** Phase 1 - Site Restructure Complete
