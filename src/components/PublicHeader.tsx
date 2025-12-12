import { NavLink } from "react-router-dom";
// src/components/PublicHeader.tsx
type PublicRoute = "home" | "about";

export interface PublicHeaderProps {
  active: PublicRoute;
  onHome: () => void;
  onAbout: () => void;
  onLogin: () => void;
}

export function PublicHeader({ active, onHome, onAbout, onLogin }: PublicHeaderProps) {
  return (
    <header className="public-header">
      <div className="public-header-inner">
        <div className="public-brand" onClick={onHome} style={{ cursor: "pointer" }}>
          Luce Duce
        </div>

        <nav className="public-nav">
          <button
            type="button"
            className={`public-link ${active === "home" ? "is-active" : ""}`}
            onClick={onHome}
          >
            Home
          </button>

          <button
            type="button"
            className={`public-link ${active === "about" ? "is-active" : ""}`}
            onClick={onAbout}
          >
            About
          </button>

          <button type="button" className="public-login" onClick={onLogin}>
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}
