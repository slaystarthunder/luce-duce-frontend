import { useState } from "react";
import type { FormEvent } from "react";


interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  errorMessage?: string | null;
}

export function LoginForm({ onLogin, errorMessage }: LoginFormProps) {
  const [email, setEmail] = useState("student@example.com");
  const [password, setPassword] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onLogin(email, password);
  }

  return (
    <section style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "0.25rem" }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        {errorMessage && (
          <p style={{ color: "red", marginBottom: "0.75rem" }}>
            {errorMessage}
          </p>
        )}

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Log in
        </button>
      </form>
    </section>
  );
}
