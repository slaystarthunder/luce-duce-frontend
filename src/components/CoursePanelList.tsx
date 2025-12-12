import type { Course } from "../types/course";

interface CoursesPanelListProps {
  courses: Course[];
}

export function CoursesPanelList({ courses }: CoursesPanelListProps) {
  return (
    <ul className="course-menu">
      {courses.map((c) => (
        <li key={c.id} className="course-menu-item">
          <span className="course-menu-name">{c.name}</span>
          
        </li>
      ))}
    </ul>
  );
}
