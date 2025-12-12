import { useMemo, useState } from "react";
import { coursesData, type CourseId } from "../data/coursesData";
import { CourseCard } from "../components/CourseCard";
import { CourseDetail } from "../components/CourseDetail";

export function CoursesCatalogPage() {
  const [selectedId, setSelectedId] = useState<CourseId | null>(null);

  const selected = useMemo(
    () => coursesData.find((c) => c.id === selectedId) ?? null,
    [selectedId]
  );

  if (selected) {
    return <CourseDetail course={selected} onBack={() => setSelectedId(null)} />;
  }

  return (
    <section>
      <h1>Kurser</h1>
      <p style={{ color: "#555", marginTop: "0.5rem" }}>
        Utforska våra utbildningar inom ledarskap, grupputveckling och samarbete.
      </p>

      <div className="course-grid" style={{ marginTop: "1rem" }}>
        {coursesData.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onReadMore={(id) => setSelectedId(id)}
          />
        ))}
      </div>
    </section>
  );
}
