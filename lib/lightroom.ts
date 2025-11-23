import fs from 'fs';
import path from 'path';

export interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

/**
 * Loads photo metadata from the content directory
 * Falls back to an empty array if the file doesn't exist or is invalid
 */
export async function loadPhotos(): Promise<Photo[]> {
  try {
    const mappingPath = path.join(process.cwd(), 'content', 'image-mapping.json');
    
    // Check if the mapping file exists
    if (!fs.existsSync(mappingPath)) {
      console.warn('Image mapping file not found at:', mappingPath);
      return [];
    }

    const fileContents = fs.readFileSync(mappingPath, 'utf8');
    const photos: Photo[] = JSON.parse(fileContents);

    // Validate that we have an array of photos
    if (!Array.isArray(photos)) {
      console.error('Image mapping file does not contain an array');
      return [];
    }

    // Filter out any photos with missing required fields
    const validPhotos = photos.filter(photo => {
      const hasRequiredFields = photo.src && photo.alt && photo.width && photo.height;
      if (!hasRequiredFields) {
        console.warn('Skipping photo with missing required fields:', photo);
      }
      return hasRequiredFields;
    });

    return validPhotos;
  } catch (error) {
    console.error('Error loading photos:', error);
    return [];
  }
}

/**
 * Gets available image formats for a given photo
 * Checks for .avif, .webp, and .jpg versions
 */
export function getImageSources(photoSrc: string): { avif?: string; webp?: string; jpg: string } {
  const basePath = photoSrc.replace(/\.(jpg|webp|avif)$/, '');
  
  return {
    avif: `${basePath}.avif`,
    webp: `${basePath}.webp`,
    jpg: `${basePath}.jpg`,
  };
}

/**
 * Validates that image files exist in the public directory
 * This is a server-side utility function
 */
export function validateImageExists(imagePath: string): boolean {
  try {
    const fullPath = path.join(process.cwd(), 'public', imagePath);
    return fs.existsSync(fullPath);
  } catch (error) {
    console.error('Error validating image:', error);
    return false;
  }
}
