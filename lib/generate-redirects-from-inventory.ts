/**
 * Helper script to generate redirects from the content inventory
 * This reads the content/inventory.md file and generates redirect rules
 * for vercel.json or next.config.mjs
 */

interface RedirectRule {
  source: string;
  destination: string;
  permanent: boolean;
}

/**
 * Parse inventory markdown to extract redirect mappings
 * Format expected: old_source -> new_target
 */
export function parseInventoryRedirects(inventoryContent: string): RedirectRule[] {
  const redirects: RedirectRule[] = [];
  
  // Simple parser for the inventory table format
  const lines = inventoryContent.split('\n');
  let inRedirectsSection = false;
  
  for (const line of lines) {
    if (line.includes('## Redirects Implemented')) {
      inRedirectsSection = true;
      continue;
    }
    
    if (inRedirectsSection && line.trim().startsWith('|') && !line.includes('Old Path')) {
      // Parse table row: | /old/path | /new/path | 301 | Priority | Source |
      const parts = line.split('|').map(p => p.trim()).filter(p => p);
      if (parts.length >= 3) {
        const [source, destination, type] = parts;
        if (source && destination && source !== '---') {
          redirects.push({
            source,
            destination,
            permanent: type === '301',
          });
        }
      }
    }
    
    // Exit when we reach next section
    if (inRedirectsSection && line.startsWith('##') && !line.includes('Redirects')) {
      break;
    }
  }
  
  return redirects;
}

/**
 * Generate vercel.json redirects configuration
 */
export function generateVercelRedirects(inventoryContent: string): object {
  const redirects = parseInventoryRedirects(inventoryContent);
  return {
    redirects: redirects.map(r => ({
      source: r.source,
      destination: r.destination,
      permanent: r.permanent,
    })),
  };
}

/**
 * Generate next.config.mjs redirects
 */
export function generateNextConfigRedirects(inventoryContent: string): string {
  const redirects = parseInventoryRedirects(inventoryContent);
  
  const redirectsCode = redirects.map(r => `    {
      source: '${r.source}',
      destination: '${r.destination}',
      permanent: ${r.permanent},
    }`).join(',\n');
  
  return `  async redirects() {
    return [
${redirectsCode}
    ];
  }`;
}

// Example usage:
// import { readFileSync } from 'fs';
// const inventory = readFileSync('content/inventory.md', 'utf8');
// const vercelConfig = generateVercelRedirects(inventory);
// console.log(JSON.stringify(vercelConfig, null, 2));
