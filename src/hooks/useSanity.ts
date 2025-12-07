import { useQuery } from '@tanstack/react-query';
import { sanityClient, queries } from '@/lib/sanity';

// Generic fetch function
async function fetchFromSanity<T>(query: string): Promise<T> {
  return sanityClient.fetch(query);
}

// Personal Info Hook
export function usePersonalInfo() {
  return useQuery({
    queryKey: ['personalInfo'],
    queryFn: () => fetchFromSanity(queries.personalInfo),
  });
}

// Biography Hook
export function useBiography() {
  return useQuery({
    queryKey: ['biography'],
    queryFn: () => fetchFromSanity(queries.biography),
  });
}

// Books Hook
export function useBooks() {
  return useQuery({
    queryKey: ['books'],
    queryFn: () => fetchFromSanity(queries.books),
  });
}

// Single Book Hook
export function useBook(slug: string) {
  return useQuery({
    queryKey: ['book', slug],
    queryFn: () => fetchFromSanity(queries.bookBySlug(slug)),
    enabled: !!slug,
  });
}

// Videos Hook
export function useVideos() {
  return useQuery({
    queryKey: ['videos'],
    queryFn: () => fetchFromSanity(queries.videos),
  });
}

// Vlogs Hook
export function useVlogs() {
  return useQuery({
    queryKey: ['vlogs'],
    queryFn: () => fetchFromSanity(queries.vlogs),
  });
}

// Meetings Hook
export function useMeetings() {
  return useQuery({
    queryKey: ['meetings'],
    queryFn: () => fetchFromSanity(queries.meetings),
  });
}
