# Human Machine Website

A portfolio and podcast website showcasing work in digital identity, product passports, and enterprise UX. Features a cosmic gradient design with animated stars.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
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
  /interviews                  # Interviews section
  /work                        # Work/projects section
  /play                        # Side projects section
  /layout.tsx                  # Root layout

/components
  /layout                      # Navigation, Footer
  /home                        # Hero, LatestSection
  /interviews                  # Interview components
  /work                        # Work components
  /play                        # Play components
  /shared                      # Shared components

/data
  /interviews.json             # Interview data
  /work.json                   # Work/project data
  /play.json                   # Side project data
  /types.ts                    # TypeScript types

/public
  /images                      # Static images
```

## Adding Content

### Add a New Interview

1. Edit `/data/interviews.json` and add a new entry
2. Add thumbnail image to `/public/images/interviews/`
3. Rebuild/redeploy - Next.js will automatically generate the new page

### Add a New Work Project

1. Edit `/data/work.json` and add a new entry
2. Add images to `/public/images/work/`
3. Rebuild/redeploy

### Add a New Side Project

1. Edit `/data/play.json` and add a new entry
2. Add images to `/public/images/play/`
3. Rebuild/redeploy

## Design System

### Colors

- **Cosmic:** Navy (#1e293b), Blue (#1e40af), Purple (#6b21a8), Dark (#0f172a)
- **Brand:** Orange (#f97316), Pink (#ec4899), Red (#ef4444)

### Gradients

- `cosmic-gradient`: Dark cosmic background
- `brand-gradient`: Orange to pink
- `brand-gradient-alt`: Orange to red

## Deployment

This site is configured for static export and can be deployed to:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Vercel

```bash
vercel --prod
```

## License

All rights reserved.

