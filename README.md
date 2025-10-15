# Human×Machine

**Digital infrastructure for sustainable living**

Professional website for Human×Machine - designing enterprise systems for Digital Product Passports, compliance, and manufacturing operations at scale.

🌐 **Live Site:** [https://humanmachine.vercel.app](https://humanmachine.vercel.app)

## About

Human×Machine provides enterprise solutions for sustainable manufacturing:

- **ODPP Platform:** The first open-source DPP platform built on CIRPASS-2
- **DPP Implementation:** Custom deployment and integration services
- **CIRPASS-2 Consulting:** Expert guidance on EU DPP compliance
- **Design Systems:** Multi-stakeholder interfaces for manufacturing operations
- **Workshops & Training:** Expert-led sessions on DPP and sustainable manufacturing

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx                    # Home page
  /layout.tsx                  # Root layout

/components
  /layout                      # Navigation, Footer
  /home                        # Hero, FeaturedProduct, ServicesSection, ContactSection
  /shared                      # Shared UI components

/data
  /types.ts                    # TypeScript types

/public
  /images                      # Static images
```

## Design System

### Colors

- **Cosmic:** Navy (#1e293b), Blue (#1e40af), Purple (#6b21a8), Dark (#0f172a)
- **Brand:** Orange (#f97316), Pink (#ec4899), Red (#ef4444), Green (#10b981)

### Key Sections

1. **Hero** - Value proposition and main CTAs
2. **ODPP Platform** - Featured product showcase with live demo
3. **Services** - 4 service offerings (Implementation, Consulting, Design Systems, Workshops)
4. **Contact** - Lead generation form and contact options

## Deployment

Automatically deployed to Vercel on push to `main` branch.

### Manual Deploy

```bash
git push origin main
```

Vercel will automatically build and deploy in ~2 minutes.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Service cards with timelines (no pricing - discuss in discovery calls)
- ✅ Contact form for lead generation
- ✅ ODPP platform showcase with live demo links
- ✅ Minimal footer design
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimization

## Links

- **Website:** [humanmachine.vercel.app](https://humanmachine.vercel.app)
- **ODPP Demo:** [humanmachinebe.vercel.app](https://humanmachinebe.vercel.app)
- **ODPP Marketing:** [opendpp-marketing.vercel.app](https://opendpp-marketing.vercel.app)
- **GitHub:** [github.com/wardvandewege/odpp](https://github.com/wardvandewege/odpp)

## Contact

- **Email:** ward@humanmachine.be
- **LinkedIn:** [linkedin.com/in/wardvandewege](https://linkedin.com/in/wardvandewege)

## License

© 2025 Human×Machine. All rights reserved.
