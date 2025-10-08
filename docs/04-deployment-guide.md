# Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic deployments on git push
- Built-in CDN
- Free SSL certificates
- Preview deployments for PRs
- Excellent performance

#### Step-by-Step Deployment

**1. Prepare Repository**

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Human Machine website"

# Create GitHub repository
# Go to github.com/new

# Add remote
git remote add origin https://github.com/yourusername/human-machine.git

# Push
git push -u origin main
```

**2. Deploy to Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Or use Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up / Sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

**3. Configure Custom Domain**

1. In Vercel dashboard, go to Project Settings
2. Navigate to "Domains"
3. Add your domain: `humanmachine.be`
4. Follow DNS configuration instructions
5. Add these DNS records at your registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**4. Environment Variables**

Add in Vercel dashboard under Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://humanmachine.be
```

**5. Automatic Deployments**

Every push to `main` branch triggers a new deployment:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel automatically deploys!
```

### Option 2: Netlify

**1. Configure for Netlify**

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

**2. Deploy**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

**Or use Netlify Dashboard:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect to GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

### Option 3: Static Export (GitHub Pages, S3, etc.)

**1. Configure for Static Export**

Uncomment in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

**2. Build**

```bash
npm run build
```

This creates an `out/` directory with static files.

**3a. Deploy to GitHub Pages**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**3b. Deploy to AWS S3**

```bash
# Build
npm run build

# Sync to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront (if using)
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

**3c. Deploy to Any Static Host**

Just upload the `out/` directory contents to your host:
- Surge.sh
- Firebase Hosting
- Cloudflare Pages
- DigitalOcean App Platform

## Pre-Deployment Checklist

### ✅ Content

- [ ] All interview data is accurate
- [ ] All work projects are complete
- [ ] All images are uploaded
- [ ] All links are tested
- [ ] Contact email is correct
- [ ] Social media links are updated

### ✅ Performance

- [ ] Images are optimized (compressed)
- [ ] No console errors
- [ ] All pages load quickly
- [ ] Mobile experience is smooth
- [ ] Animations are performant

### ✅ SEO

- [ ] Page titles are descriptive
- [ ] Meta descriptions are compelling
- [ ] OpenGraph images are set
- [ ] Sitemap is generated (automatic in Next.js)
- [ ] robots.txt is configured

### ✅ Functionality

- [ ] All navigation links work
- [ ] All internal links work
- [ ] All external links open in new tabs
- [ ] Mobile menu works
- [ ] Back buttons work
- [ ] 404 page displays correctly

### ✅ Code Quality

- [ ] No TypeScript errors: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] All console.logs removed
- [ ] Environment variables set

## Post-Deployment

### 1. Test Production Site

**Manual Testing:**
- [ ] Visit homepage
- [ ] Click through all sections
- [ ] Test on mobile device
- [ ] Test navigation
- [ ] Test contact links
- [ ] Verify images load

**Automated Testing:**
```bash
# Lighthouse audit
npx lighthouse https://humanmachine.be --view

# Check broken links
npx broken-link-checker https://humanmachine.be
```

### 2. Monitor Performance

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Tools:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Vercel Analytics (built-in)

### 3. Set Up Analytics

**Google Analytics:**

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

**Vercel Analytics:**

```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 4. Set Up Error Tracking

**Sentry:**

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 1.0,
});
```

## Continuous Deployment Workflow

### Development → Staging → Production

**1. Development Branch**
```bash
git checkout -b feature/new-content
# Make changes
git commit -m "Add new interview"
git push origin feature/new-content
```

**2. Preview Deployment (Vercel)**
- Automatic preview URL created
- Test changes at preview URL
- Share with team for review

**3. Merge to Main**
```bash
git checkout main
git merge feature/new-content
git push origin main
```

**4. Production Deployment**
- Automatic deployment to production
- Live in ~60 seconds

## Rollback Strategy

### Vercel

**From Dashboard:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**From CLI:**
```bash
vercel rollback
```

### Git-based

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard COMMIT_HASH
git push origin main --force
```

## Domain Configuration

### DNS Settings for humanmachine.be

**Vercel:**
```
A     @       76.76.21.21
CNAME www     cname.vercel-dns.com
```

**Cloudflare (if using):**
```
A     @       76.76.21.21  (Proxied)
CNAME www     cname.vercel-dns.com  (Proxied)
```

### SSL/HTTPS

- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic (Let's Encrypt)
- GitHub Pages: Automatic
- Custom: Use Cloudflare or Certbot

## Performance Optimization

### CDN Configuration

**Vercel Edge Network:**
- Automatic global CDN
- Smart caching
- Image optimization

**Cloudflare:**
```
Page Rules:
- Cache Level: Standard
- Browser Cache TTL: 4 hours
- Edge Cache TTL: 7 days
```

### Caching Strategy

**Next.js Headers:**

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Troubleshooting

### Build Fails

**Check logs:**
```bash
# Vercel
vercel logs

# Or in dashboard: Deployments → [Your deployment] → Build Logs
```

**Common issues:**
- TypeScript errors
- Missing dependencies
- Environment variables not set
- Image paths incorrect

### Site Not Updating

**Clear cache:**
```bash
# Vercel
vercel env rm CACHE_KEY

# Local
rm -rf .next
npm run build
```

**Check deployment:**
- Verify git push succeeded
- Check deployment logs
- Test with cache bypass: Add `?nocache=1` to URL

### DNS Issues

**Verify DNS:**
```bash
# Check A record
dig humanmachine.be

# Check CNAME
dig www.humanmachine.be

# Use online tool
https://dnschecker.org
```

**Wait time:**
- DNS propagation: 24-48 hours
- Cloudflare: ~5 minutes
- Most cases: ~1 hour

## Backup Strategy

### 1. Git Repository

Your content is version controlled:
```bash
# All content in git
git log --all -- data/

# Restore previous version
git checkout COMMIT_HASH data/interviews.json
```

### 2. Vercel Deployments

All deployments are preserved:
- Access previous builds anytime
- Download deployment artifacts
- Restore with one click

### 3. Manual Backups

```bash
# Backup data folder
cp -r data/ backups/data-$(date +%Y%m%d)/

# Backup images
cp -r public/images/ backups/images-$(date +%Y%m%d)/
```

## Cost Estimation

### Vercel (Hobby - Free)
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Global CDN
- ⚠️ Upgrade to Pro ($20/mo) for:
  - Custom deployment protection
  - Advanced analytics
  - Team collaboration

### Netlify (Starter - Free)
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS
- ⚠️ Upgrade to Pro ($19/mo) for more bandwidth

### Static Hosting
- GitHub Pages: Free
- Cloudflare Pages: Free
- AWS S3 + CloudFront: ~$5-10/month

**Recommendation:** Start with Vercel free tier. Upgrade only if you exceed limits.

## Launch Checklist

**1 Week Before:**
- [ ] Final content review
- [ ] Test on all devices
- [ ] Verify all links
- [ ] Set up analytics
- [ ] Configure DNS

**Launch Day:**
- [ ] Final deployment
- [ ] DNS cutover (if switching from old site)
- [ ] Test production site
- [ ] Monitor analytics
- [ ] Announce launch! 🚀

**Post-Launch:**
- [ ] Submit to search engines
- [ ] Set up monitoring
- [ ] Create content calendar
- [ ] Gather feedback

Your site is now live and performing optimally! 🎉

