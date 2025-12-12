import type { Course } from "../types/course";

const API_BASE = "http://localhost:8080";

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${API_BASE}/api/courses`);

  if (!res.ok) {
    throw new Error(`Failed to load courses (${res.status})`);
  }

  return res.json() as Promise<Course[]>;
}
