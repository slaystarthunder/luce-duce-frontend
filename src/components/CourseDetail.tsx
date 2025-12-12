import type { CourseContent } from "../data/coursesData";

interface CourseDetailProps {
  course: CourseContent;
  onBack: () => void;
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  return (
    <section className="course-detail">
      <button type="button" className="text-button" onClick={onBack}>
        ← Back to courses
      </button>

      <h1 className="course-detail-title">{course.title}</h1>
      <p className="course-detail-subtitle">{course.subtitle}</p>

      <div className="course-detail-topmeta">
        <span>{course.duration}</span>
        <span className="dot-sep">•</span>
        <span>{course.audience}</span>
      </div>

      <p className="course-detail-intro">{course.detail.intro}</p>

      <h2>Mål</h2>
      <ul>
        {course.detail.goals.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>

      <h2>Innehåll</h2>
      <ul>
        {course.detail.content.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <h2>Upplägg</h2>
      <ul>
        {course.detail.format.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      {course.detail.prerequisites?.length ? (
        <>
          <h2>Förkunskaper</h2>
          <ul>
            {course.detail.prerequisites.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  );
}
