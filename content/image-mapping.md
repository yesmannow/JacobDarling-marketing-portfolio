# Image Mapping Documentation

## Purpose

The `image-mapping.json` file serves as the central metadata store for all photography displayed on the Photography page. It maps image files to their descriptive information, dimensions, and captions.

## File Location

- **Metadata File**: `/content/image-mapping.json`
- **Image Directory**: `/public/images/photography/`

## Structure

The JSON file contains an array of photo objects with the following schema:

```json
{
  "src": "/images/photography/filename.jpg",
  "alt": "Descriptive alternative text for accessibility",
  "width": 4000,
  "height": 3000,
  "caption": "Optional caption displayed in lightbox view"
}
```

### Required Fields

- **src** (string): Path to the image file relative to the public directory
  - Format: `/images/photography/filename.jpg`
  - The system will automatically check for `.avif` and `.webp` versions
  
- **alt** (string): Accessible description of the image content
  - Should be descriptive and meaningful for screen readers
  - Avoid phrases like "image of" or "photo of"
  
- **width** (number): Original image width in pixels
  - Used for aspect ratio calculations and responsive layouts
  
- **height** (number): Original image height in pixels
  - Used for aspect ratio calculations and responsive layouts

### Optional Fields

- **caption** (string): User-facing caption displayed in the lightbox modal
  - Keep concise and engaging
  - Will be displayed below the image in full-screen view

## How to Add New Photos

### Step 1: Optimize and Upload Images

1. **Export from Lightroom** or your photo editor in multiple formats:
   - Original JPEG (high quality, 85-90%)
   - WebP format (for modern browsers)
   - AVIF format (for maximum compression)

2. **Naming convention**: Use descriptive, lowercase filenames
   - Format: `YYYYMMDD_HHMMSS.jpg` or descriptive names
   - Example: `20240704_175213.jpg` or `coastal-sunset.jpg`

3. **Upload all formats** to `/public/images/photography/`:
   ```
   /public/images/photography/
     ├── coastal-sunset.jpg
     ├── coastal-sunset.webp
     └── coastal-sunset.avif
   ```

### Step 2: Add Metadata Entry

Add a new object to the `image-mapping.json` array:

```json
{
  "src": "/images/photography/coastal-sunset.jpg",
  "alt": "Golden sunset over the Pacific Ocean with dramatic clouds",
  "width": 4000,
  "height": 3000,
  "caption": "Pacific sunset near Big Sur, California"
}
```

### Step 3: Verify and Test

1. Save the `image-mapping.json` file
2. Rebuild the Next.js application: `npm run build`
3. Test locally: `npm run dev`
4. Check:
   - Images load correctly
   - Lightbox opens and closes
   - Keyboard navigation works
   - Alt text is present
   - Captions display properly

## Image Optimization Guidelines

### Recommended Specifications

- **Dimensions**: 2000-4000px on the longest side
- **File Size**: 
  - JPEG: < 500KB per image
  - WebP: < 300KB per image
  - AVIF: < 200KB per image
- **Quality**: 85-90% for JPEGs
- **Color Profile**: sRGB for web display

### Format Priority

The PhotoGallery component will serve images in this order of preference:
1. AVIF (best compression, modern browsers)
2. WebP (good compression, wide support)
3. JPEG (fallback, universal support)

### Tools for Optimization

- **Lightroom**: Export with web sharpening, sRGB color space
- **ImageOptim** (Mac): Lossless compression
- **Squoosh** (Web): Convert to WebP/AVIF formats
- **Sharp** (CLI): Batch processing for multiple formats

```bash
# Example Sharp command for batch conversion
npm install -g sharp-cli
sharp -i ./originals/*.jpg -o ./output/ -f webp -q 85
sharp -i ./originals/*.jpg -o ./output/ -f avif -q 85
```

## Updating the Lightroom Embed

If you prefer to use the Adobe Lightroom embed as the primary display:

1. Go to Adobe Lightroom web
2. Create or update your shared album
3. Get the embed code
4. Update `/app/components/LightroomEmbed.tsx` with the new iframe source

Current embed URL: `https://lightroom.adobe.com/embed/shares/b1f8050aa3ac452baae9e3590e1c92c8/slideshow`

## Accessibility Notes

### Alt Text Best Practices

- **Be specific**: "Sunset over rocky Pacific coastline" vs. "Landscape photo"
- **Include context**: Mention time of day, weather, location if relevant
- **Avoid redundancy**: Don't start with "Image of" or "Photo of"
- **Keep it concise**: 125 characters or less is ideal
- **Describe the content**: What would someone who can't see the image want to know?

### Caption Best Practices

- **Complement the image**: Add context not obvious from the visual
- **Keep it brief**: One to two sentences maximum
- **Include location**: If relevant and memorable
- **Add technical info**: If interesting (e.g., "Long exposure" or "Aerial view")

## Maintenance

### Regular Tasks

1. **Audit image sizes**: Ensure files remain optimized
2. **Update alt text**: Improve descriptions based on user feedback
3. **Check broken links**: Verify all image paths are valid
4. **Test accessibility**: Use screen readers to validate descriptions
5. **Monitor performance**: Check Core Web Vitals and loading times

### Performance Monitoring

The gallery uses Next.js Image optimization with:
- Automatic responsive srcsets
- Lazy loading for images below the fold
- Blur placeholders during loading
- Modern format serving (AVIF/WebP)

Monitor these metrics:
- **Largest Contentful Paint (LCP)**: Should be < 2.5s
- **Cumulative Layout Shift (CLS)**: Should be < 0.1
- **First Input Delay (FID)**: Should be < 100ms

## Troubleshooting

### Images Not Displaying

1. Check file paths in `image-mapping.json` match actual files
2. Verify images are in `/public/images/photography/` directory
3. Check file permissions (should be readable)
4. Clear Next.js cache: `rm -rf .next` and rebuild

### Lightbox Issues

1. Ensure `yet-another-react-lightbox` is installed
2. Check browser console for JavaScript errors
3. Verify keyboard event handlers are not blocked
4. Test in multiple browsers

### Performance Issues

1. Check individual image file sizes
2. Verify lazy loading is working
3. Test with browser DevTools throttling
4. Consider reducing the number of images loaded initially

## Future Enhancements

Potential improvements to consider:

- **Categories/Tags**: Group photos by subject, location, or style
- **EXIF Data**: Display camera settings, date taken
- **Filtering**: Allow users to filter by category or date
- **Sorting**: Enable different sort orders (date, popularity)
- **Search**: Add search functionality for captions/descriptions
- **Admin Interface**: Build a UI for managing photos without editing JSON

## Support

For questions or issues:
- Check Next.js Image documentation: https://nextjs.org/docs/app/api-reference/components/image
- Review yet-another-react-lightbox docs: https://yet-another-react-lightbox.com/
- Contact: jacob@example.com
