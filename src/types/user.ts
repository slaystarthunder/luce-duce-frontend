import type { Course } from "./course";

export interface User {
  id: number;
  name: string;
  email: string;
  courses: Course[];
}
