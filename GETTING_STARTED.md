# Getting Started with Human Machine Website

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

The site includes:

- **Home Page** - Hero section with cosmic background, latest content from all sections, and services
- **Interviews Page** - `/interviews` - All podcast interviews
- **Work Page** - `/work` - Case studies and projects
- **Play Page** - `/play` - Side projects and experiments

## Next Steps

### 1. Customize Content

Edit the JSON files in `/data/`:
- `interviews.json` - Add your podcast interviews
- `work.json` - Add your work projects
- `play.json` - Add your side projects

### 2. Add Images

Place images in:
- `/public/images/interviews/` - Interview thumbnails
- `/public/images/work/` - Project screenshots
- `/public/images/play/` - Side project images

### 3. Update Contact Info

Edit `/components/layout/Footer.tsx` to update:
- Email address
- Social media links
- Any other contact information

### 4. Customize Design

The design system is defined in:
- `tailwind.config.ts` - Colors and theme
- `app/globals.css` - Global styles

### 5. Add Your Branding

- Replace `/public/favicon.ico` with your favicon
- Update metadata in `app/layout.tsx`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build locally
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Static Export

For static hosting (GitHub Pages, Netlify, etc.):

1. Uncomment the `output: 'export'` lines in `next.config.js`
2. Run `npm run build`
3. Deploy the `out/` folder

## Project Structure

```
/app                    - Next.js App Router pages
  /interviews          - Interview pages
  /work                - Work pages
  /play                - Play pages
/components            - React components
  /home                - Home page components
  /interviews          - Interview components
  /work                - Work components
  /play                - Play components
  /layout              - Layout components
  /shared              - Shared components
/data                  - JSON data files
/lib                   - Utility functions
/public                - Static assets
```

## Tips

1. **Content is in JSON** - No database needed! Just edit the JSON files.
2. **Static Generation** - All pages are pre-rendered for fast loading.
3. **Responsive Design** - Mobile-first design that looks great on all devices.
4. **SEO Optimized** - Metadata configured for search engines and social sharing.

## Need Help?

- Check the main `README.md` for detailed documentation
- Review the original design doc for component specifications
- Refer to [Next.js Documentation](https://nextjs.org/docs)
- Refer to [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Common Tasks

### Add a New Interview

1. Open `/data/interviews.json`
2. Copy an existing entry
3. Update all fields with new content
4. Add thumbnail image to `/public/images/interviews/`
5. Restart dev server to see changes

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  cosmic: {
    navy: '#YOUR_COLOR',
    // ... more colors
  }
}
```

### Add a New Page

Create a new folder in `/app/` with a `page.tsx` file. Next.js will automatically create the route.

---

**Ready to build! 🚀**

