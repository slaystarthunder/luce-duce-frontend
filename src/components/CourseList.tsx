import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import type { Course } from "../types/course";

interface CourseListProps {
  courses: Course[];
}

export function CourseList({ courses }: CourseListProps) {
  return (
    <section className="courses-section">
      <h2 className="courses-title">Alla kurser</h2>

      <table className="courses-table">
        <thead>
          <tr>
            <th className="courses-favorite-cell">Favorit</th>
            <th>Kurs</th>
            <th>Termin</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              {/* Favorite */}
              <td className="courses-favorite-cell">
                <button
                  type="button"
                  className="icon-button"
                  aria-label="Markera som favorit"
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
              </td>

              {/* Course name */}
              <td className="courses-name-cell">
                <span className="courses-color-dot" />
                <span className="text-link">{course.name}</span>
              </td>

              {/* Term */}
              <td className="courses-muted">VT2025</td>

              
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
