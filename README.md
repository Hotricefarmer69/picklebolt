# Picklebolt Tournament Website

A high-energy, modern website for the Picklebolt pickleball tournament benefiting Central High School Tennis.

## 🎨 Design System

### Brand Colors
- **Primary Red**: `#D72638` (--pb-red)
- **Electric Pink**: `#FF3C7E` (--pb-pink)
- **Deep Black**: `#0A0A0A` (--pb-black)
- **Light Gray**: `#F4F4F5` (--pb-gray)

### Typography
- **Display Font**: Bebas Neue (headings, large text)
- **Body Font**: Inter (paragraphs, UI text)

To change fonts, update the imports in `app/layout.tsx` and the CSS variables in `app/globals.css`.

## 📝 Content Management

All content is managed through `app/_content/picklebolt.json`. This file contains placeholders for:

### Required Content to Add:
1. **Hero Section**
   - Event tagline
   - Prize pool amount
   - Event date
   - Venue name and city
   - Hero action image (16:9 aspect ratio)
   - Registration URL
   - Donation URL

2. **Event Info**
   - Entry fee details
   - Tournament format (Singles/Doubles)
   - Schedule details
   - Rules summary
   - Venue/court image (3:2 aspect ratio)

3. **Cause Page**
   - Donation impact description
   - CHS Tennis team photo (4:3 aspect ratio)
   - Practice or match photo (4:3 aspect ratio)

4. **Sponsors**
   - Sponsor logos (1:1 aspect ratio recommended)
   - Sponsor names and taglines
   - Sponsor website URLs
   - Sponsorship package PDF/form link

5. **Contact**
   - Contact email
   - Contact phone
   - Instagram URL

6. **Branding**
   - Logo image (SVG or PNG)

7. **Footer**
   - Copyright text
   - Privacy policy URL
   - Terms & conditions URL

8. **SEO**
   - Open Graph title
   - Open Graph description
   - Open Graph image

### How to Update Content:
1. Open `app/_content/picklebolt.json`
2. Replace placeholder tokens (e.g., `[DROP TEXT: EVENT_TAGLINE]`) with actual content
3. For images, replace placeholder paths with actual image paths in your `public/` folder

## 🖼️ Adding Images

1. Place images in the `public/` folder (e.g., `public/images/hero.jpg`)
2. Reference them in the JSON config with the path starting from `/` (e.g., `/images/hero.jpg`)

### Recommended Image Sizes:
- **Hero Image**: 1920x1080px (16:9)
- **Venue Image**: 1200x800px (3:2)
- **Team Photos**: 1200x900px (4:3)
- **Sponsor Logos**: 400x400px (1:1)
- **Site Logo**: 200x60px or SVG

## ⚡ Animations

The site uses Framer Motion for smooth animations:
- Lightning glow effect on CTA buttons
- Scroll-triggered fade-ins
- Hover effects on cards and buttons

### Accessibility
The site respects `prefers-reduced-motion` settings. Users who prefer reduced motion will see minimal animations.

## 🎨 Customizing Colors

To change the color scheme:
1. Open `app/globals.css`
2. Update the CSS variables under `:root`:
   \`\`\`css
   --pb-red: #D72638;
   --pb-pink: #FF3C7E;
   --pb-black: #0A0A0A;
   --pb-gray: #F4F4F5;
   \`\`\`

## 🔤 Customizing Fonts

To change fonts:
1. Open `app/layout.tsx`
2. Import your desired Google Fonts
3. Update the font variables
4. Open `app/globals.css` and update the `--font-display` and `--font-body` variables

## 🚀 Deployment

This site is built with Next.js 14 and can be deployed to Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy!

## 📱 Pages

- **Home** (`/`) - Hero, features, stats
- **Event Info** (`/event`) - Tournament details, schedule, rules
- **Cause** (`/cause`) - Impact on CHS Tennis
- **Sponsors** (`/sponsors`) - Sponsor showcase
- **Contact** (`/contact`) - Contact form and info

## 🛠️ Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui components
- Lucide icons

## 📄 License

Built for Picklebolt Tournament. All rights reserved.
