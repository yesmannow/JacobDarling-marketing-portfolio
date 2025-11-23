# Setup Guide

## Framework Recommendation: Next.js 15

### Why Next.js?

1. **Performance**: Server-side rendering + static generation for optimal speed
2. **SEO**: Built-in SEO optimization crucial for a marketing portfolio
3. **Developer Experience**: File-based routing, TypeScript support, hot reload
4. **Deployment**: Seamless Vercel deployment with zero configuration
5. **Image Optimization**: Automatic image optimization for faster loads
6. **Code Splitting**: Automatic code splitting for better performance
7. **React Server Components**: Modern React features for better UX

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Deployment**: Vercel (recommended)
- **Package Manager**: npm

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm run start
```

## Project Architecture

### App Router Structure
```
app/
├── layout.tsx          # Root layout with Header & Footer
├── page.tsx           # Homepage
├── about/
│   └── page.tsx       # About page
├── portfolio/
│   └── page.tsx       # Portfolio with filters
├── case-studies/
│   ├── page.tsx       # Case studies listing
│   └── [slug]/
│       └── page.tsx   # Dynamic case study pages
├── services/
│   └── page.tsx       # Services page
└── contact/
    └── page.tsx       # Contact form
```

### Component Organization

#### Layout Components (`components/layout/`)
- **Header**: Sticky header with navigation
- **MegaMenu**: Desktop dropdown with grouped content
- **MobileMenu**: Full-screen overlay with accordions
- **Footer**: Site footer with links and newsletter

#### UI Components (`components/ui/`)
- **Button**: Multiple variants and sizes
- **Card**: Reusable card with hover effects
- **Tag**: Pill-style tags for categorization
- **Section**: Layout wrapper with background options

## Design System

### Color Tokens

```javascript
// Primary
navy-900: '#08203a'   // Headers, text
aqua-600: '#229999'   // Accents
teal-600: '#338e8e'   // Secondary accents

// CTAs
coral-500: '#ff7b55'  // Primary buttons
amber-500: '#ffcc40'  // Secondary accents

// Backgrounds
neutral-50: '#fafafa' // Page background
white: '#ffffff'      // Cards, sections
```

### Typography

- **Display Font**: Georgia (serif) for headings
- **Sans Font**: System UI stack for body text
- **Sizes**: 
  - `text-display-lg`: 4.5rem (72px)
  - `text-display-md`: 3.5rem (56px)
  - `text-display-sm`: 2.5rem (40px)

### Spacing Scale

- Uses Tailwind's default scale with custom additions
- Custom values: `18`, `22`, `26`, `30` (rem units)

## Customization Guide

### Add New Case Study

1. Open `app/case-studies/[slug]/page.tsx`
2. Add new entry to `caseStudies` object:
```typescript
'your-slug': {
  slug: 'your-slug',
  title: 'Your Project Title',
  category: 'Category',
  client: 'Client Name',
  industry: 'Industry',
  challenge: '...',
  solution: '...',
  results: ['...'],
  testimonial: { ... }
}
```

### Modify Navigation

Edit `components/layout/Header.tsx` and `components/layout/MobileMenu.tsx`

### Update Colors

Edit `tailwind.config.ts` under `theme.extend.colors`

### Change Fonts

Update `app/globals.css` CSS variables:
```css
:root {
  --font-display: 'Your Display Font', Georgia, serif;
  --font-sans: 'Your Sans Font', system-ui, sans-serif;
}
```

## Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Post-Deployment

- Configure custom domain in Vercel dashboard
- Enable automatic deployments on push
- Set up preview deployments for PRs

## Development Tips

### Hot Reload
Changes to components automatically refresh in browser.

### TypeScript
- Run type checking: `npm run build`
- VS Code shows inline errors

### Tailwind IntelliSense
Install "Tailwind CSS IntelliSense" VS Code extension for auto-complete.

### Debugging
- Console logs appear in terminal (server components)
- Browser console (client components)

## Performance Optimization

### Images
Use Next.js `Image` component for automatic optimization:
```tsx
import Image from 'next/image';

<Image 
  src="/images/photo.jpg" 
  alt="Description"
  width={800}
  height={600}
/>
```

### Fonts
System fonts are used to avoid external requests and improve load time.

### Code Splitting
Next.js automatically code splits by page.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- All interactive elements have ARIA labels
- Keyboard navigation fully supported
- Focus states visible
- Color contrast meets WCAG AA standards

## Known Limitations

1. **Contact Form**: Front-end only - needs backend integration
2. **Newsletter**: Placeholder form - needs email service integration
3. **Images**: Placeholder content - add actual project images
4. **Analytics**: Not included - add Google Analytics or similar

## Next Steps

### Content
1. Add actual project images
2. Write detailed case studies
3. Update personal information
4. Add real testimonials

### Features
1. Integrate contact form with email service
2. Add blog/articles section
3. Implement newsletter signup
4. Add analytics tracking
5. Set up SEO meta tags per page

### Integrations
Consider adding:
- **Form Service**: Formspree, SendGrid, or custom API
- **Analytics**: Google Analytics, Plausible
- **CMS**: Contentful, Sanity (for easy content updates)
- **Email**: Mailchimp, ConvertKit for newsletter

## Support

For issues or questions:
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- TypeScript docs: [typescriptlang.org/docs](https://typescriptlang.org/docs)

---

Last Updated: November 2024
