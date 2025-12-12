import { useState } from "react";
import { coursesData } from "../data/coursesData";
import { CourseCard } from "./CourseCard";
import { CourseDetail } from "./CourseDetail";

export function CourseGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // If a course is selected → show detail view
  if (selectedId) {
    const course = coursesData.find((c) => c.id === selectedId);

    if (!course) return null;

    return (
      <CourseDetail
        course={course}
        onBack={() => setSelectedId(null)}
      />
    );
  }

  // Otherwise → show grid of cards
  return (
    <section className="course-grid">
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onReadMore={setSelectedId}
        />
      ))}
    </section>
  );
}
