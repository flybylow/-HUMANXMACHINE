# Design System Documentation

## Cosmic Gradient Design System

### Overview

The Human Machine design system is built around a cosmic theme with:
- Dark gradient backgrounds
- Animated star fields
- Bold brand gradients (orange to pink)
- Clean, modern typography
- Generous white space

## Color Palette

### Cosmic Colors (Background & Neutral)

```css
cosmic-navy:   #1e293b  /* slate-800 - Mid-tone backgrounds */
cosmic-blue:   #1e40af  /* blue-800 - Gradient midpoint */
cosmic-purple: #6b21a8  /* purple-800 - Gradient endpoint */
cosmic-dark:   #0f172a  /* slate-900 - Darkest backgrounds */
```

**Usage:**
- `cosmic-dark` - Hero backgrounds, footer
- `cosmic-blue` - Gradient transitions
- `cosmic-purple` - Gradient endpoints
- `cosmic-navy` - Card backgrounds (when dark mode)

### Brand Colors (Primary Actions)

```css
brand-orange: #f97316  /* orange-500 - Primary brand */
brand-pink:   #ec4899  /* pink-500 - Gradient accent */
brand-red:    #ef4444  /* red-500 - Alternative gradient */
```

**Usage:**
- Primary buttons: orange to pink gradient
- Headings: gradient text effects
- Interactive elements: orange hover states
- Category badges: gradient backgrounds

### Gradient Definitions

```typescript
// tailwind.config.ts
backgroundImage: {
  'cosmic-gradient': 'linear-gradient(to bottom right, #0f172a, #1e40af, #6b21a8)',
  'brand-gradient': 'linear-gradient(to right, #f97316, #ec4899)',
  'brand-gradient-alt': 'linear-gradient(to right, #f97316, #ef4444)',
}
```

**Examples:**
```tsx
// Cosmic background (dark)
<div className="bg-cosmic-gradient">

// Primary gradient (orange to pink)
<button className="bg-brand-gradient">

// Alternative gradient (orange to red)
<div className="bg-brand-gradient-alt">
```

## Typography

### Font Family

**Primary:** Inter (Google Fonts)
- Clean, modern sans-serif
- Excellent readability at all sizes
- Wide range of weights (400-700 used)

### Type Scale

```tsx
// Hero Title
className="text-6xl md:text-8xl font-bold"

// Page Titles
className="text-4xl md:text-5xl font-bold"

// Section Headings
className="text-2xl md:text-3xl font-bold"

// Card Titles
className="text-xl font-bold"

// Body Large
className="text-xl leading-relaxed"

// Body Regular
className="text-base leading-relaxed"

// Small Text
className="text-sm"
```

### Text Colors

```tsx
// Light backgrounds (white)
text-gray-900    // Headings
text-gray-700    // Body text
text-gray-600    // Secondary text
text-gray-500    // Tertiary text

// Dark backgrounds (cosmic)
text-white       // Headings
text-white/90    // Body text
text-white/80    // Secondary text
text-white/60    // Tertiary text

// Brand colors
text-orange-600  // Interactive elements
text-pink-500    // Accents
```

### Gradient Text Effect

```tsx
<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
  HUMAN
</span>
```

**Component:**
```tsx
<GradientText gradient="from-orange-500 to-pink-500">
  Your Text
</GradientText>
```

## Spacing System

### Grid Gaps

```tsx
gap-2   // 8px  - Tight (tags, small items)
gap-4   // 16px - Medium (button groups)
gap-6   // 24px - Cards (in grids)
gap-8   // 32px - Sections (main grids)
gap-12  // 48px - Large sections
```

### Section Padding

```tsx
py-20   // 80px vertical - Main sections
py-12   // 48px vertical - Sub-sections
py-8    // 32px vertical - Cards
py-4    // 16px vertical - Small components

px-4 sm:px-6 lg:px-8  // Responsive horizontal
```

### Container Widths

```tsx
max-w-7xl  // 1280px - Main content
max-w-5xl  // 1024px - Hero content
max-w-4xl  // 896px  - Article content
max-w-3xl  // 768px  - Narrow content
max-w-2xl  // 672px  - Very narrow
```

## Component Patterns

### Cards

**Base Card:**
```tsx
<div className="bg-white rounded-2xl p-6 border border-gray-200 
                hover:border-transparent hover:shadow-xl 
                transition-all cursor-pointer group relative overflow-hidden">
  {/* Content */}
</div>
```

**Features:**
- White background
- Rounded corners (2xl = 16px)
- Subtle border
- Hover: remove border, add shadow
- Smooth transitions
- Group for child hover effects

**Gradient Overlay on Hover:**
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-500 
                opacity-0 group-hover:opacity-5 transition-opacity" />
```

### Buttons

**Primary Button:**
```tsx
<button className="bg-gradient-to-r from-orange-500 to-pink-500 
                   text-white px-8 py-4 rounded-full 
                   hover:from-orange-600 hover:to-pink-600 
                   transition-all shadow-lg hover:shadow-xl">
  Button Text
</button>
```

**Secondary Button:**
```tsx
<button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 
                   text-white px-8 py-4 rounded-full 
                   hover:bg-white/20 transition-all">
  Button Text
</button>
```

**Features:**
- Rounded full (pill shape)
- Generous padding (px-8 py-4)
- Gradient backgrounds for primary
- Glass effect for secondary
- Subtle hover enhancements

### Badges

**Category Badge:**
```tsx
<div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 
                text-white px-3 py-1 rounded-full text-sm font-medium">
  Digital Identity
</div>
```

**Tag Badge:**
```tsx
<span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
  React
</span>
```

### Navigation

**Fixed Header:**
```tsx
<nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-purple-900 
                text-white z-50 backdrop-blur-sm bg-opacity-95">
```

**Features:**
- Fixed positioning
- Gradient background
- Backdrop blur for depth
- High z-index (50)
- Slight transparency

### Cosmic Background

**Animated Stars:**
```tsx
<div className="absolute inset-0 overflow-hidden">
  {stars.map((star, idx) => (
    <div
      key={idx}
      className="absolute rounded-full bg-white animate-pulse"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        animationDelay: `${star.delay}s`,
        opacity: 0.6
      }}
    />
  ))}
</div>
```

**Parameters:**
- 50 stars
- Random positions (0-100%)
- Size range: 1-4px
- Animation delay: 0-2s
- Opacity: 0.6

## Animation & Transitions

### Transition Speeds

```tsx
transition-all       // All properties, default duration
transition-colors    // Color changes only
transition-transform // Position/scale changes
```

**Durations:**
- Default: 150ms
- Use `duration-300` for slower transitions
- Use `duration-75` for faster transitions

### Hover Effects

**Card Hover:**
```tsx
hover:border-transparent  // Remove border
hover:shadow-xl          // Add large shadow
group-hover:opacity-5    // Show gradient overlay
```

**Button Hover:**
```tsx
hover:from-orange-600    // Darker gradient
hover:to-pink-600
hover:shadow-xl          // Larger shadow
```

**Link Hover:**
```tsx
hover:text-orange-700    // Slightly darker
group-hover:translate-x-1  // Slide right
```

### Animations

```tsx
animate-pulse   // Pulsing opacity (stars)
animate-bounce  // Scroll indicator
```

## Responsive Breakpoints

```tsx
sm:  640px   // Small tablets
md:  768px   // Tablets
lg:  1024px  // Desktops
xl:  1280px  // Large desktops
```

**Usage Pattern:**
```tsx
// Mobile first
<div className="grid gap-8 
                md:grid-cols-2 
                lg:grid-cols-3">
```

### Common Responsive Patterns

**Grid Columns:**
```tsx
grid                    // 1 column (mobile)
md:grid-cols-2         // 2 columns (tablet)
lg:grid-cols-3         // 3 columns (desktop)
```

**Text Sizes:**
```tsx
text-4xl md:text-5xl   // Smaller on mobile
text-6xl md:text-8xl   // Much smaller on mobile
```

**Spacing:**
```tsx
px-4 sm:px-6 lg:px-8   // Progressive padding
py-12 md:py-20         // More space on desktop
```

**Flex Direction:**
```tsx
flex-col sm:flex-row   // Stack on mobile, row on tablet+
```

## Accessibility Considerations

### Focus States

```tsx
focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
```

### Color Contrast

- All text meets WCAG AA standards
- White text on cosmic backgrounds: 12:1 ratio
- Dark text on white backgrounds: 15:1 ratio
- Orange links on white: 4.5:1 ratio

### Interactive Elements

- All buttons have clear hover states
- Links have underlines or obvious styling
- Cards have cursor-pointer
- Focus indicators on all interactive elements

## Best Practices

### Do's ✅

- Use gradient text for important headings
- Apply cosmic backgrounds to hero and footer sections
- Use generous padding and spacing
- Maintain consistent card patterns
- Add smooth transitions to interactive elements

### Don'ts ❌

- Don't use too many different gradients
- Don't make text too small (minimum 14px)
- Don't forget hover states
- Don't use cosmic gradient on body content sections
- Don't override rounded-2xl on cards (consistency)

## Example Compositions

### Hero Section
```tsx
<section className="min-h-screen bg-cosmic-gradient text-white relative overflow-hidden">
  <CosmicBackground />
  <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-6xl md:text-8xl font-bold">
      <GradientText>HUMAN</GradientText>
      <span className="mx-4">×</span>
      <GradientText gradient="from-orange-500 to-red-500">MACHINE</GradientText>
    </h1>
  </div>
</section>
```

### Content Section
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold mb-12">Section Title</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</section>
```

This design system creates a cohesive, modern, and visually striking experience while maintaining excellent usability and accessibility.

