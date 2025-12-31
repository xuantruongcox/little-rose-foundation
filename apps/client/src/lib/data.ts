// src/lib/data.ts
import 'server-only'; 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getProjects(category?: string) {
  const url = category 
    ? `${API_URL}/projects?category=${category}` 
    : `${API_URL}/projects`;

  const res = await fetch(url); 

  if (!res.ok) throw new Error('Failed to fetch projects');
  
  return res.json();
}

export async function getProjectBySlug(slug: string) {
  const res = await fetch(`${API_URL}/projects/${slug}`, {
    next: { tags: [`project-${slug}`] } 
  });
  
  if (!res.ok) return null;
  return res.json();
}