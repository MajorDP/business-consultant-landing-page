# Business Consultant Landing Page

A single-page Next.js landing site designed for business consultants. Showcases areas of expertise, services offered, client testimonials, and sectors served.

## Features

- Clean, modern layout built with React and Tailwind CSS
- Uses **lucide-react** for customizable icons
- Responsive design for seamless viewing on all devices
- Sections include Home, About, Services, Sectors, Process, Testimonials, and Contact
- Focused on clear messaging and professional presentation

## Tech Stack

- React
- Tailwind CSS
- lucide-react for icons

# How to Edit Content

This landing page’s main content (navigation links, brand logos, stats, sectors, services and testimonials) is managed through simple data files. Here’s how to update each:

## Editing Text Content

All editable text content is located in the `/data` folder.

- **Navigation**: `/data/navigation.js`  
  Update links shown in navigation. Links in Navigation correspond to the ID of each section.

- **Brand Logos**: `/data/brandLogos.js`  
  Update brands' names and logos and insert/remove new images in /public/brandLogos.

- **Stats**: `/data/stats.js`  
  Update key business statistics displayed on the page.

- **Sectors**: `/data/sectors.js`  
  Update sectors' names and logos displayed on the page and insert/remove new images in /public/sectors.

- **Services**: `/data/services.js`  
  Update service titles, descriptions, and icons here.

- **Testimonials**: `/data/testimonials.js`  
  Modify client names, titles, quotes and images here and insert/remove new images in /public/testimonials.

## Editing Images

All images used on the site are stored in the `/public` folder, organized by type:

- Brand Logos - `/public/brandLogos/`
- Sectors images - `/public/sectors/`
- Client testimonial photos are in `/public/testimonials/`
- General images like hero or about pictures are in `/public/`

To update an image:

1. Replace the existing file in the corresponding `/public` subfolder with your new image.
2. Make sure the file name matches what’s referenced in the data files, or update the data files accordingly.

## Notes

- Keep image formats optimized for the web (WebP, optimized JPEG/PNG).
- Make sure icons and logos have transparent backgrounds where needed.
- Maintain consistent image sizes for layout stability.

That’s it. Updating the data files and images will automatically update the content across the site.
