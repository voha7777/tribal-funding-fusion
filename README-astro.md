
# Tribal Installment Loans - Static Site with Astro

This project contains a static version of the Tribal Installment Loans website built with Astro. The static site can be deployed to any hosting provider that supports static sites.

## Structure

- `src/pages/` - Contains all the page templates for the site
- `src/components/astro/` - Contains reusable Astro components
- `src/layouts/` - Contains the main layout used across all pages
- `public/` - Static assets that will be copied to the build directory

## Building the Static Site

To build the static site, run:

```bash
npm install  # Install dependencies if you haven't already
node build.js  # Run the build script
```

The built static site will be in the `dist/` directory.

## Deployment

After building the site, you can deploy the contents of the `dist/` directory to any static hosting provider, such as:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting
- and many others

Simply upload the contents of the `dist/` directory to your hosting provider according to their documentation.

## Customization

To make changes to the site:

1. Update the Astro components in `src/components/astro/`
2. Modify the page templates in `src/pages/`
3. Rebuild the site using the build script

## Technical Information

This static site:

- Uses Astro as the static site generator
- Maintains the same Tailwind CSS styling from the original site
- Includes all the necessary pages and components
- Optimizes for faster load times by removing React and other client-side dependencies
- Maintains SEO optimization across all pages

## Notes

- The static site does not include any backend functionality
- Forms will need to be integrated with a form submission service (e.g., Formspree, Netlify Forms)
- State-specific pages use static routing
