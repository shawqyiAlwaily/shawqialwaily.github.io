import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const SANITY_PROJECT_ID = 'o8u0cayw';
const SANITY_DATASET = 'production';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster responses
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Personal Info
  personalInfo: `*[_type == "personalInfo"][0]{
    name,
    role,
    "heroImage": heroImage.asset->url,
    bio,
    socialLinks
  }`,

  // Biography
  biography: `*[_type == "biography"][0]{
    title,
    content,
    "image": image.asset->url,
    socialLinks
  }`,

  // Books
  books: `*[_type == "book"] | order(publishedDate desc){
    _id,
    title,
    slug,
    "cover": cover.asset->url,
    description,
    excerpt,
    amazonLink,
    publishedDate
  }`,

  bookBySlug: (slug: string) => `*[_type == "book" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    "cover": cover.asset->url,
    description,
    excerpt,
    amazonLink,
    publishedDate
  }`,

  // Videos
  videos: `*[_type == "video"] | order(date desc){
    _id,
    title,
    description,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    date
  }`,

  // Vlogs
  vlogs: `*[_type == "vlog"] | order(date desc){
    _id,
    title,
    description,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    date
  }`,

  // Meetings
  meetings: `*[_type == "meeting"] | order(date desc){
    _id,
    title,
    description,
    location,
    date
  }`,
};
