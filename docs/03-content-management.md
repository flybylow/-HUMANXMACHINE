# Content Management Guide

## JSON-Based Content System

### Overview

All content is stored in JSON files in the `/data` directory. This approach offers:
- ✅ No database required
- ✅ Version controlled (git)
- ✅ Type-safe with TypeScript
- ✅ Easy to edit
- ✅ Fast builds (static generation)

## File Structure

```
/data
  ├── interviews.json    # Podcast interviews
  ├── work.json         # Work projects/case studies
  ├── play.json         # Side projects
  └── types.ts          # TypeScript interfaces
```

## Data Models

### Interview Schema

```json
{
  "id": "unique-identifier",
  "slug": "url-friendly-slug",
  "title": "Interview Title",
  "guest": {
    "name": "Guest Name",
    "company": "Company Name",
    "role": "Job Title"
  },
  "description": "Short description (1-2 sentences)",
  "longDescription": "Full description with **markdown** support",
  "category": "Category Name",
  "categoryGradient": "from-orange-500 to-pink-500",
  "date": "2025-01-15",
  "duration": "45 min",
  "audioUrl": "https://...",
  "videoUrl": "https://youtube.com/...",
  "thumbnail": "/images/interviews/filename.jpg",
  "featured": true,
  "tags": ["Tag1", "Tag2", "Tag3"],
  "links": [
    {
      "label": "Guest Website",
      "url": "https://..."
    }
  ],
  "transcript": "Full transcript text...",
  "keyTakeaways": [
    "Key point 1",
    "Key point 2",
    "Key point 3"
  ]
}
```

**Field Descriptions:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ | Unique identifier (matches slug usually) |
| `slug` | string | ✅ | URL-friendly version (lowercase, hyphens) |
| `title` | string | ✅ | Interview title |
| `guest.name` | string | ✅ | Guest's full name |
| `guest.company` | string | ✅ | Company/organization |
| `guest.role` | string | ✅ | Job title |
| `description` | string | ✅ | Short summary for cards |
| `longDescription` | string | ✅ | Full description (supports markdown) |
| `category` | string | ✅ | Category/topic |
| `categoryGradient` | string | ✅ | Tailwind gradient classes |
| `date` | string | ✅ | ISO date (YYYY-MM-DD) |
| `duration` | string | ✅ | e.g., "45 min" |
| `audioUrl` | string | ❌ | URL to audio file |
| `videoUrl` | string | ❌ | Embed URL (YouTube, Vimeo) |
| `thumbnail` | string | ✅ | Path to image |
| `featured` | boolean | ✅ | Show on homepage? |
| `tags` | array | ✅ | Topic tags |
| `links` | array | ❌ | Related links |
| `transcript` | string | ❌ | Full transcript |
| `keyTakeaways` | array | ❌ | Bullet points |

### Work Project Schema

```json
{
  "id": "unique-identifier",
  "slug": "url-friendly-slug",
  "company": "Company Name",
  "project": "Project Name",
  "description": "Short description",
  "longDescription": "Full case study with **markdown**",
  "impact": "Impact statement",
  "tags": ["Tag1", "Tag2"],
  "date": "2024-05-15",
  "duration": "6 months",
  "role": "Your Role",
  "team": ["3 designers", "5 developers"],
  "featured": true,
  "thumbnail": "/images/work/filename.jpg",
  "images": [
    "/images/work/image1.jpg",
    "/images/work/image2.jpg"
  ],
  "metrics": [
    {
      "label": "Metric Name",
      "value": "30+"
    }
  ],
  "technologies": ["Tech1", "Tech2"],
  "links": [
    {
      "label": "Live Product",
      "url": "https://..."
    }
  ]
}
```

**Key Differences from Interview:**
- Has `company` and `project` instead of `guest`
- Includes `metrics` array for quantitative results
- Has `team` composition
- Multiple `images` for gallery
- `impact` statement

### Side Project Schema

```json
{
  "id": "unique-identifier",
  "slug": "url-friendly-slug",
  "title": "Project Title",
  "description": "Short description",
  "longDescription": "Full description with **markdown**",
  "type": "Open Source",
  "typeGradient": "from-orange-500 to-pink-500",
  "date": "2025-01-10",
  "featured": true,
  "thumbnail": "/images/play/filename.jpg",
  "images": ["/images/play/image1.jpg"],
  "technologies": ["Tech1", "Tech2"],
  "links": [
    {
      "label": "GitHub",
      "url": "https://github.com/..."
    },
    {
      "label": "Live Demo",
      "url": "https://..."
    }
  ],
  "tags": ["Tag1", "Tag2"]
}
```

**Key Features:**
- Simpler than Work projects
- Focus on `type` (Open Source, Design Resource, Writing)
- Emphasis on external `links` (GitHub, demos)
- Less formal than work projects

## Content Workflows

### Adding New Interview

**1. Prepare Content**
- Write title and description
- Gather guest information
- Upload audio/video (if applicable)
- Prepare thumbnail image (recommended: 1200x630px)

**2. Edit JSON**

```bash
# Open interviews.json
vim /data/interviews.json
```

Add entry (copy existing and modify):

```json
{
  "id": "new-interview-2025",
  "slug": "new-interview-2025",
  "title": "Your New Interview Title",
  "guest": {
    "name": "Jane Doe",
    "company": "TechCorp",
    "role": "CTO"
  },
  "description": "A conversation about...",
  "longDescription": "In this episode...",
  "category": "Technology",
  "categoryGradient": "from-blue-500 to-cyan-500",
  "date": "2025-01-20",
  "duration": "52 min",
  "thumbnail": "/images/interviews/new-interview.jpg",
  "featured": true,
  "tags": ["AI", "Technology", "Leadership"],
  "keyTakeaways": [
    "Point 1",
    "Point 2"
  ]
}
```

**3. Add Image**

```bash
# Copy image to public folder
cp new-interview.jpg /public/images/interviews/
```

**4. Test Locally**

```bash
npm run dev
# Visit http://localhost:3000/interviews/new-interview-2025
```

**5. Deploy**

```bash
git add data/interviews.json public/images/interviews/new-interview.jpg
git commit -m "Add new interview: [Title]"
git push origin main
```

### Content Guidelines

**Writing Descriptions:**
- **Short description:** 1-2 sentences, ~100-150 characters
- **Long description:** 2-3 paragraphs, supports markdown
- Use active voice
- Focus on value/takeaways

**Example:**
```markdown
# Good Short Description
"Exploring the future of self-sovereign identity with a pioneer in decentralized systems."

# Bad Short Description
"This is an interview where we talk about various topics related to identity and stuff."
```

**Using Markdown in Long Descriptions:**

```markdown
# The Challenge

Brief overview of the problem.

# The Solution

How we addressed it:

- Point 1
- Point 2
- Point 3

# The Impact

Results and outcomes.
```

**Choosing Categories:**

Interviews:
- Digital Identity
- Sustainability
- Enterprise UX
- Web3
- Product Design

Work:
- Manufacturing
- Design System
- Enterprise
- Identity
- Blockchain

Play:
- Open Source
- Design Resource
- Writing
- Experiment

**Gradient Color Combinations:**

```json
"from-orange-500 to-pink-500"    // Brand primary
"from-blue-500 to-cyan-500"      // Technology
"from-green-500 to-emerald-500"  // Sustainability
"from-purple-500 to-pink-500"    // Creative
"from-red-500 to-orange-500"     // Energy
"from-indigo-500 to-purple-500"  // Innovation
```

## Data Validation

### Common Errors

**1. Invalid JSON**
```json
// ❌ Bad - trailing comma
{
  "title": "Interview",
  "date": "2025-01-01",  // <-- trailing comma
}

// ✅ Good
{
  "title": "Interview",
  "date": "2025-01-01"
}
```

**2. Missing Required Fields**
```json
// ❌ Bad - missing slug
{
  "id": "interview-1",
  "title": "Interview"
}

// ✅ Good
{
  "id": "interview-1",
  "slug": "interview-1",
  "title": "Interview"
}
```

**3. Incorrect Date Format**
```json
// ❌ Bad
"date": "January 15, 2025"

// ✅ Good
"date": "2025-01-15"
```

### Validation Script

Create a validation script:

```javascript
// scripts/validate-data.js
const interviews = require('../data/interviews.json');

interviews.forEach((item, index) => {
  // Check required fields
  const required = ['id', 'slug', 'title', 'guest', 'description'];
  required.forEach(field => {
    if (!item[field]) {
      console.error(`Item ${index}: Missing ${field}`);
    }
  });
  
  // Check date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) {
    console.error(`Item ${index}: Invalid date format`);
  }
});
```

Run before deployment:
```bash
node scripts/validate-data.js
```

## Content Migration

### From WordPress

```javascript
// scripts/wordpress-import.js
const posts = require('./wordpress-export.json');

const interviews = posts.map(post => ({
  id: post.slug,
  slug: post.slug,
  title: post.title,
  description: post.excerpt,
  longDescription: post.content,
  date: post.date,
  // ... map other fields
}));

fs.writeFileSync('data/interviews.json', JSON.stringify(interviews, null, 2));
```

### From CSV

```javascript
const csv = require('csv-parser');
const fs = require('fs');

const interviews = [];

fs.createReadStream('interviews.csv')
  .pipe(csv())
  .on('data', (row) => {
    interviews.push({
      id: row.ID,
      slug: row.Slug,
      title: row.Title,
      // ... map columns
    });
  })
  .on('end', () => {
    fs.writeFileSync('data/interviews.json', JSON.stringify(interviews, null, 2));
  });
```

## Performance Optimization

### Image Optimization

**Recommended Sizes:**
- Thumbnails: 1200x630px (2:1 ratio)
- Gallery images: 1600x900px (16:9 ratio)
- Format: JPG (photos), PNG (graphics)
- Compression: 80% quality

**Using Next.js Image:**

```tsx
import Image from 'next/image';

<Image
  src={interview.thumbnail}
  alt={interview.title}
  width={1200}
  height={630}
  className="rounded-lg"
/>
```

### Content Chunking

For very long content, consider pagination:

```json
{
  "transcript": "Part 1...",
  "transcriptParts": [
    "Part 1...",
    "Part 2...",
    "Part 3..."
  ]
}
```

## Best Practices

### ✅ Do's

- Use consistent ID/slug naming (lowercase-with-hyphens)
- Write descriptive commit messages when updating content
- Test locally before deploying
- Keep descriptions concise
- Use markdown for formatting long content
- Optimize images before uploading
- Set `featured: true` for homepage content

### ❌ Don'ts

- Don't use special characters in slugs
- Don't forget to add images to `/public` folder
- Don't use absolute URLs for internal images
- Don't make descriptions too long (keep under 150 chars)
- Don't duplicate IDs
- Don't forget to update the date

## Troubleshooting

**Content not showing up?**
1. Check JSON syntax (no trailing commas)
2. Verify file is saved
3. Restart dev server
4. Check browser console for errors

**Images not loading?**
1. Verify path is correct (`/images/` not `images/`)
2. Check file exists in `/public` folder
3. Check file extension matches (case sensitive)

**Build failing?**
1. Validate JSON syntax
2. Check all required fields are present
3. Verify TypeScript types match data
4. Check for duplicate slugs

This content management system is simple, powerful, and scales well for portfolios and content sites!

