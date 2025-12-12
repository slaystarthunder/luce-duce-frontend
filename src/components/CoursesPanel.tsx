import { CourseList } from "./CourseList";
import type { Course } from "../types/course";

interface CoursesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAllCourses: () => void;
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export function CoursesPanel({
  isOpen,
  onClose,
  onOpenAllCourses,
  courses,
  loading,
  error,
  
}: CoursesPanelProps) {
  return (
    
    <>
      {/* Backdrop */}
      <div
        className={`courses-panel-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      {/* Sliding panel */}
      <aside className={`courses-panel ${isOpen ? "open" : ""}`}>
        <header className="courses-panel-header">
          <h2>Kurser</h2>
          <button
            type="button"
            className="icon-button"
            aria-label="Stäng"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <button
          type="button"
          className="link-button courses-all-link"
          onClick={onOpenAllCourses}
        >
          Alla kurser
        </button>

        <hr className="courses-panel-divider" />

        {loading && <p>Loading courses…</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}

        {!loading && !error && <CourseList courses={courses} />}
      </aside>
    </>
  );
}
