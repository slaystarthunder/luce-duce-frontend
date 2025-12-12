import type { CourseContent } from "../data/coursesData.ts";

interface CourseCardProps {
  course: CourseContent;
  onReadMore: (id: CourseContent["id"]) => void;
}

export function CourseCard({ course, onReadMore }: CourseCardProps) {
  if (!course) {
    return null;
  }

  return (
    <article className="course-card">
      <h3>{course.title}</h3>

      {Array.isArray(course.highlights) && (
        <ul>
          {course.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      <button onClick={() => onReadMore(course.id)}>
        Read more
      </button>
    </article>
  );
}

