# Osmosis Landing Page

A pixel-perfect recreation of the Osmosis landing page built with modern web technologies.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **Turbopack** - Fast bundler for development

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable React components
├── lib/          # Utilities and helpers
└── styles/       # Global styles and Tailwind config
```

## Development Server

The app runs on [http://localhost:4322](http://localhost:4322) during development.

## Content Management

### Messaging Variants

The landing page supports A/B testing through messaging variants defined in `src/data/messaging.json`:

- **`mandate_winning`** - Default variant focused on mandate intelligence (default)
- **`current`** - Alternative variant for testing different messaging

**Variant Selection:**
- Default: Uses `mandate_winning` variant
- URL Override: Add `?variant=current` or `?variant=mandate_winning` to the URL
- Component Override: Pass variant to `useMessaging(variant)` hook

**Examples:**
- http://localhost:4322/ → `mandate_winning` variant  
- http://localhost:4322/?variant=current → `current` variant

### Global Styles

CSS is managed centrally in `@ecco_gtm/src/app/globals.css` to maintain consistency across both landing page and solutions page.

## Pixel-Perfect Recreation Process

1. **Analyze Design** - Break down sections, measure spacing, identify patterns
2. **Build Structure** - Create semantic HTML structure with proper accessibility
3. **Style Systematically** - Apply Tailwind classes for exact visual match
4. **Add Interactions** - Implement hover states, animations, smooth scrolling
5. **Test Responsiveness** - Ensure perfect rendering across all screen sizes
6. **Optimize Performance** - Image optimization, code splitting, lazy loading

Ready for your landing page screenshot/URL! 🎨
