# Jacob Darling - Marketing Portfolio

A modern, premium personal marketing portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features a water-inspired design theme with deep navy, muted aqua accents, and coral CTAs.

## 🎨 Design Philosophy

- **Modern Editorial + High-End Agency**: Premium visual identity avoiding generic gradients
- **Water-Inspired Theme**: Deep navy/ink, muted aqua/teal accents, warm neutrals
- **Confident Hierarchy**: Clean typography with lots of white space
- **Micro-interactions**: Subtle hover effects, animated underlines, card lift effects

## 🚀 Features

- **Responsive Design**: Mobile-first with full-screen mobile menu overlay
- **Mega Menu**: Desktop mega menu with grouped links and featured case studies
- **Accessibility**: Keyboard navigation and ARIA labels throughout
- **Performance**: Static generation with Next.js App Router
- **Type-Safe**: Full TypeScript implementation
- **Reusable Components**: Modular UI component library

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── case-studies/             # Case studies listing
│   │   └── [slug]/              # Dynamic case study pages
│   ├── contact/                  # Contact form
│   ├── portfolio/                # Portfolio with filters
│   ├── services/                 # Services page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Main header with navigation
│   │   ├── MegaMenu.tsx         # Desktop mega menu
│   │   ├── MobileMenu.tsx       # Mobile overlay menu
│   │   └── Footer.tsx           # Site footer
│   └── ui/                      # Reusable UI components
│       ├── Button.tsx           # Button variants
│       ├── Card.tsx             # Card component
│       ├── Tag.tsx              # Tag/pill component
│       └── Section.tsx          # Section wrapper
├── public/                      # Static assets
│   ├── images/                  # Image files
│   └── fonts/                   # Custom fonts
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.mjs              # Next.js configuration
```

## 🎨 Color Palette

### Primary Colors
- **Navy**: `#08203a` (900) to `#f0f4f8` (50)
- **Aqua**: `#0a3333` (900) to `#f0fafa` (50)
- **Teal**: `#0d2424` (900) to `#f0f9f9` (50)

### Accent Colors
- **Coral** (CTA): `#ff7b55` (500) - Primary action color
- **Amber**: `#ffcc40` (500) - Secondary accent

### Neutrals
- **Neutral**: `#0a0a0a` (950) to `#fafafa` (50)

## 🧩 Component Library

### Button
```tsx
<Button variant="primary" size="lg" href="/contact">
  Get In Touch
</Button>
```
Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Card
```tsx
<Card hover padding="lg" href="/case-studies/slug">
  {/* Content */}
</Card>
```

### Tag
```tsx
<Tag variant="primary">Marketing Strategy</Tag>
```
Variants: `default`, `primary`, `secondary`, `success`

### Section
```tsx
<Section background="gradient" padding="lg" container="normal">
  {/* Content */}
</Section>
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Push to GitHub**
2. **Import project in Vercel**
3. **Deploy** - Vercel auto-detects Next.js configuration

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yesmannow/JacobDarling-marketing-portfolio)

### Environment Variables
No environment variables required for basic deployment.

## 📝 Pages Overview

### Home (`/`)
- Hero section with gradient background
- Introduction/about preview
- Featured case studies grid
- Services overview
- Call-to-action sections

### Portfolio (`/portfolio`)
- Filterable project grid
- Categories: All, Strategy, Content, SEO, Branding
- Interactive filter buttons
- Card hover effects

### Case Studies (`/case-studies`)
- Case study listing with metrics
- Individual case study pages (`/case-studies/[slug]`)
- Challenge → Solution → Results format
- Client testimonials

### About (`/about`)
- Professional story
- Key achievements
- Skills & specializations
- Experience timeline

### Services (`/services`)
- Detailed service descriptions
- Process overview
- Results & statistics
- FAQ section

### Contact (`/contact`)
- Contact form (front-end only, needs backend integration)
- Contact information
- Social links
- FAQ section

## 🎯 Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Skip to main content link
- Alt text for images (when added)
- Color contrast compliance

## 🔧 Customization

### Update Brand Colors
Edit `tailwind.config.ts` to customize the color palette.

### Modify Content
- Case studies: `app/case-studies/[slug]/page.tsx`
- Services: `app/services/page.tsx`
- About info: `app/about/page.tsx`

### Add New Pages
Create new folders in `app/` directory following Next.js App Router conventions.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Performance

- Static generation for optimal performance
- Optimized images (when using next/image)
- CSS optimization via Tailwind's purge
- Code splitting with Next.js
- Fast page transitions

## 📄 License

Private project - All rights reserved.

## 👤 Author

**Jacob Darling**
- Website: [Coming Soon]
- LinkedIn: [Add Link]
- Email: hello@jacobdarling.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
