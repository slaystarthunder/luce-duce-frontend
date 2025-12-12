import type { User } from "../types/user";

export const mockUser: User = {
  id: 1,
  name: "Reidar Thorsen",
  email: "student@example.com",
  courses: [
    { id: 101, name: "Java Foundations", status: "Completed" },
    { id: 102, name: "Databases & SQL", status: "In Progress" },
    { id: 103, name: "React Basics", status: "Not Started" }
  ]
};

// 🔐 Hard-coded login credentials (frontend-only, just for demo)
export const mockCredentials = {
  email: "student@example.com",
  password: "password123"
};