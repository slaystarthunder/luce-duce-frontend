import type { Course } from "../types/course";
import { CourseGrid } from "./CourseGrid.tsx";

interface CoursesPageProps {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export function CoursesPage({ courses, loading, error }: CoursesPageProps) {
  return (
    <section>
      <h1>Alla kurser</h1>

      {loading && <p>Loading courses…</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && <CourseGrid courses={courses} />}
    </section>
  );
}
