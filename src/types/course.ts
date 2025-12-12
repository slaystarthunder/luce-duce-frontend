export type CourseStatus = "Completed" | "In Progress" | "Not Started";

export interface Course {
  id: number;
  name: string;
  term: string;
}
