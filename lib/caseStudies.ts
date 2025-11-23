import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const caseStudiesDirectory = path.join(process.cwd(), 'content/case-studies');

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  date: string;
  client: string;
  industry: string;
  category: string[];
  tags: string[];
  hero: string;
  tagline: string;
  summary: string;
  featured?: boolean;
  color?: string;
  icon?: string;
  metrics: CaseStudyMetric[];
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content: string;
  htmlContent: string;
}

/**
 * Get all case study slugs for static generation
 */
export function getAllCaseStudySlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(caseStudiesDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading case studies directory:', error);
    return [];
  }
}

/**
 * Get case study data by slug
 */
export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const fullPath = path.join(caseStudiesDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Process markdown content to HTML
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(content);
    const htmlContent = processedContent.toString();

    return {
      ...(data as CaseStudyFrontmatter),
      content,
      htmlContent,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

/**
 * Get all case studies with frontmatter
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const slugs = getAllCaseStudySlugs();
  const caseStudies = await Promise.all(
    slugs.map(slug => getCaseStudyBySlug(slug))
  );

  return caseStudies
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

/**
 * Get featured case studies only
 */
export async function getFeaturedCaseStudies(): Promise<CaseStudy[]> {
  const allStudies = await getAllCaseStudies();
  return allStudies.filter(study => study.featured === true);
}

/**
 * Get case studies by category
 */
export async function getCaseStudiesByCategory(category: string): Promise<CaseStudy[]> {
  const allStudies = await getAllCaseStudies();
  return allStudies.filter(study => 
    study.category.some(cat => cat.toLowerCase() === category.toLowerCase())
  );
}

/**
 * Get case studies by tag
 */
export async function getCaseStudiesByTag(tag: string): Promise<CaseStudy[]> {
  const allStudies = await getAllCaseStudies();
  return allStudies.filter(study =>
    study.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allStudies = await getAllCaseStudies();
  const categories = new Set<string>();
  
  allStudies.forEach(study => {
    study.category.forEach(cat => categories.add(cat));
  });
  
  return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allStudies = await getAllCaseStudies();
  const tags = new Set<string>();
  
  allStudies.forEach(study => {
    study.tags.forEach(tag => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
