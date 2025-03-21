
# Tribal Installment Loans Static Website

This is a static HTML website for Tribal Installment Loans, built with Astro.

## Building for Deployment

To build the static site:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the site:
   ```bash
   node build.js
   ```
   or
   ```bash
   npx astro build
   ```

3. The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Deployment

The contents of the `dist` directory can be deployed to any static web hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Amazon S3
- Any traditional web hosting service

Simply upload all the files in the `dist` directory to your hosting provider's web root.

## Structure

- `dist/` - The built static files (HTML, CSS, JavaScript, images)
- `src/` - Source files
  - `components/` - Reusable components
  - `layouts/` - Page layouts
  - `pages/` - Individual pages

## Notes

- This site is completely static and doesn't require any server-side processing.
- All forms and interactive elements rely on client-side JavaScript.
- The form on the Apply page uses an external form provider (RNDFrame).
