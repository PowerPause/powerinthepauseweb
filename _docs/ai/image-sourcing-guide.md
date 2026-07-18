# Image Sourcing Guide

**Date:** 2026-07-18  
**Status:** Awaiting image assets from Katie

## Overview

The website is built with placeholder gradients where photographs should appear. This guide documents which images are needed and where they should be placed.

## Website Accessibility Note

The following Katie Cooper websites could not be accessed during development:
- katiecoopercoaching.co.uk (DNS resolution failed)
- theartofpausing.co.uk (DNS resolution failed)
- katiecooperart.com (Connection failed)

**Action Required:** Katie will need to provide images directly or grant access to these sites if they're behind access controls.

---

## Images Needed by Page

### 1. Home Page (`app/page.tsx`)

**The Art of Pausing® Section (Line 109)**
```tsx
<div className="w-full aspect-video bg-gradient-to-br from-cream to-navy rounded-lg" />
```
- **Current:** Gradient placeholder (cream to navy)
- **Needed:** Photo showing drawing/art practice, hands with pen on paper, or app interface
- **Style:** Black and white
- **Dimensions:** 16:9 aspect ratio (e.g., 1200x675px or 1600x900px)
- **Location:** Save to `/public/images/art-of-pausing-hero.jpg`
- **Alt text:** "The Art of Pausing drawing practice"

**Meet Katie Section (Line 175)**
```tsx
<div className="w-full aspect-square bg-gradient-to-br from-navy to-cream rounded-lg" />
```
- **Current:** Gradient placeholder (navy to cream)
- **Needed:** Portrait of Katie Cooper
- **Style:** Black and white
- **Dimensions:** 1:1 aspect ratio (e.g., 800x800px or 1000x1000px)
- **Location:** Save to `/public/images/katie-portrait.jpg`
- **Alt text:** "Katie Cooper"

---

### 2. About Page (`app/about/page.tsx`)

**Header Image (Line 16)**
```tsx
<div className="w-full h-96 bg-gradient-to-br from-navy to-cream" aria-hidden="true" />
```
- **Current:** Gradient placeholder (navy to cream), 384px height
- **Needed:** Portrait or lifestyle photo of Katie (alternative to Meet Katie section)
- **Style:** Black and white
- **Dimensions:** Full width, ~1200px height recommended
- **Location:** Save to `/public/images/katie-about-header.jpg`
- **Alt text:** "Katie Cooper"

---

### 3. Intuitive Art Page (`app/art/intuitive-art/page.tsx`)

**Artwork Placeholders (Lines 17-18)**
```tsx
<div className="w-full h-96 bg-gradient-to-r from-magenta to-navy" aria-hidden="true" />
<div className="w-full h-96 bg-gradient-to-l from-cream via-gold to-navy" aria-hidden="true" />
```
- **Current:** Colorful gradient placeholders (allowed for art section per brief)
- **Needed:** 2 photos of Katie's intuitive art paintings
- **Style:** Full color (this is the art section, color is permitted)
- **Dimensions:** Full width, ~1200px height recommended
- **Location:** 
  - `/public/images/intuitive-art-1.jpg`
  - `/public/images/intuitive-art-2.jpg`
- **Alt text:** 
  - "Intuitive painting by Katie Cooper"
  - "Abstract artwork by Katie Cooper"

**Note:** These are the ONLY images where color is allowed per the brief's photography guidelines.

---

### 4. Shop Pages

**Activation Deck (`app/shop/activation-deck/page.tsx`, Line 17)**
```tsx
<div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-magenta via-gold to-navy" aria-hidden="true" />
```
- **Current:** Gradient placeholder (magenta/gold/navy)
- **Needed:** Product photo of The Activation Deck (cards, packaging, or in-use)
- **Style:** Black and white (or sepia) preferred, unless product colors are essential
- **Dimensions:** Full width, ~1200px height recommended
- **Location:** `/public/images/activation-deck-product.jpg`
- **Alt text:** "The Power In The Pause® Activation Deck"

**Gratitude Journal (`app/shop/gratitude-journal/page.tsx`, Line 17)**
```tsx
<div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-cream via-gold to-navy" aria-hidden="true" />
```
- **Current:** Gradient placeholder (cream/gold/navy)
- **Needed:** Product photo of The Gratitude Journal (cover, open pages, or in-use)
- **Style:** Black and white (or sepia) preferred
- **Dimensions:** Full width, ~1200px height recommended
- **Location:** `/public/images/gratitude-journal-product.jpg`
- **Alt text:** "The Power In The Pause® Gratitude Journal"

---

## Logo Files Needed

The Header and Footer components currently use text instead of logo images.

**Files needed:**
- `/public/brand/logo-navy.svg` (for cream backgrounds)
- `/public/brand/logo-cream.svg` (for navy backgrounds)
- `/public/brand/logo-navy.png` (fallback, 2x resolution: 400-600px wide)
- `/public/brand/logo-cream.png` (fallback, 2x resolution: 400-600px wide)

**Component updates required:**
- Update `components/Header.tsx` (Lines 93-95)
- Update `components/Footer.tsx` (Lines 25-27)

---

## Image Optimization Guidelines

### File Format
- **Primary:** JPEG for photographs (.jpg)
- **Alternative:** WebP for modern browsers (next.js can generate these)
- **Logos:** SVG preferred, PNG fallback

### Sizing
- **Full-width photos:** 1200-1600px wide, optimized at 80-85% quality
- **Portraits:** 800-1000px square, optimized at 80-85% quality
- **Product shots:** 1200-1400px wide, optimized at 85% quality
- **Logos:** SVG unlimited, PNG at 2x intended display size

### Color Mode
- **Black and white photography** preferred (per brief)
- **Sepia tone** acceptable for warmth
- **Color only for:** Intuitive Art paintings (per brief exception)

### File Size Targets
- Each image: < 200KB after optimization
- Total images folder: < 2MB

---

## Implementation Steps

Once images are available:

### 1. Add Images to Project
```bash
# Create directories if needed
mkdir public/images
mkdir public/brand

# Copy images to appropriate folders
# Ensure filenames match those documented above
```

### 2. Update Component Code

**Example for Home Page Art of Pausing section:**
```tsx
// Before (current):
<div className="w-full aspect-video bg-gradient-to-br from-cream to-navy rounded-lg" />

// After (with image):
<Image
  src="/images/art-of-pausing-hero.jpg"
  alt="The Art of Pausing drawing practice"
  width={1600}
  height={900}
  className="w-full aspect-video rounded-lg object-cover"
  priority
/>
```

**Don't forget to add the import:**
```tsx
import Image from 'next/image';
```

### 3. Update Header/Footer with Logo

**Header.tsx (Line 93-95):**
```tsx
// Current:
<span className="font-serif text-xl text-navy">
  The Power In The Pause<sup className="text-xs">®</sup>
</span>

// Replace with:
<Image
  src="/brand/logo-navy.svg"
  alt="The Power In The Pause®"
  width={200}
  height={50}
  priority
/>
```

### 4. Configure Next.js Image Optimization

Since this is a static export, images are already configured as `unoptimized: true` in `next.config.ts`. No changes needed.

### 5. Test Build
```bash
npm run build
```

Check that all images appear correctly in `/out/` directory.

---

## Alternative Sources If Websites Are Inaccessible

If Katie's existing websites can't be accessed:

1. **Request direct file sharing:**
   - Google Drive, Dropbox, or WeTransfer link
   - Email attachments (if under 10MB total)

2. **Use stock photography temporarily:**
   - Unsplash/Pexels for black and white business portraits
   - Mark clearly as placeholders in commit message

3. **Commission new photography:**
   - Professional photoshoot with black and white brief
   - Ensure rights clearance for commercial use

---

## Design Brief Reminder

From `the-power-in-the-pause-website-brief.md`:

> **Photography:**
> - Black and white photography only (except for the art/painting content)
> - Editorial feel, similar to Apple, Aesop, Kinfolk
> - Images of people, hands drawing, close-ups
> - Lots of white space, never cluttered

**Current Status:** All placeholders honor the black and white requirement (gradients are navy/cream/gold). Only the Intuitive Art section uses color (magenta/gold gradients) as permitted by the brief.

---

## Next Steps

1. Katie to provide image files or grant access to existing websites
2. Developer to update components with `<Image>` components
3. Run `npm run build` to verify
4. Test on local dev server (`start-dev-server.bat`)
5. Commit images and code updates
6. Deploy to Azure Static Web Apps

**Estimated time:** 2-3 hours once images are received
