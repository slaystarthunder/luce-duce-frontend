import { useState } from "react";
import type { MouseEvent } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-regular-svg-icons";

import { LoginForm } from "./components/LoginForm";
import { StartPage } from "./components/StartPage";
import { CoursesPanel } from "./components/CoursesPanel";
import { CoursesPage } from "./components/CoursesPage";

import { PublicHeader } from "./components/PublicHeader";
import { PublicHero } from "./components/PublicHero";
import { AboutPage } from "./pages/AboutPage.tsx";

import { mockUser, mockCredentials } from "./data/mockData";
import type { Course } from "./types/course";
import { getCourses } from "./services/CourseService";

type View = "start" | "courses";
type PublicRoute = "home" | "about";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Logged-in UI state
  const [view, setView] = useState<View>("start");
  const [isCoursesPanelOpen, setIsCoursesPanelOpen] = useState(false);

  // Public (logged-out) UI state
  const [publicRoute, setPublicRoute] = useState<PublicRoute>("home");
  const [showLogin, setShowLogin] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Courses data
  const [courses, setCourses] = useState<Course[]>([]);
  const [coursesLoading, setCoursesLoading] = useState(false);
  const [coursesError, setCoursesError] = useState<string | null>(null);

  async function loadCourses() {
    try {
      setCoursesLoading(true);
      setCoursesError(null);
      const data = await getCourses();
      setCourses(data);
    } catch (error) {
      console.error(error);
      setCoursesError(error instanceof Error ? error.message : "Failed to load courses");
    } finally {
      setCoursesLoading(false);
    }
  }

  function handleLogin(email: string, password: string) {
    if (email === mockCredentials.email && password === mockCredentials.password) {
      setIsAuthenticated(true);
      setLoginError(null);

      // reset public UI
      setShowLogin(false);
      setPublicRoute("home");

      // go to logged-in start
      setView("start");
    } else {
      setLoginError("Incorrect email or password");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);

    // reset logged-in state
    setView("start");
    setIsCoursesPanelOpen(false);
    setCourses([]);

    // reset public state
    setShowLogin(false);
    setLoginError(null);
    setPublicRoute("home");
  }

  async function handleShowCoursesPanel(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!courses.length && !coursesLoading) await loadCourses();
    setIsCoursesPanelOpen(true);
  }

  function handleCloseCoursesPanel() {
    setIsCoursesPanelOpen(false);
  }

  async function handleOpenCoursesPage() {
    if (!courses.length && !coursesLoading) await loadCourses();
    setView("courses");
    setIsCoursesPanelOpen(false);
  }

  function handleGoToStart() {
    setView("start");
    setIsCoursesPanelOpen(false);
  }

  // ✅ PUBLIC (logged-out)
  if (!isAuthenticated) {
    return (
      <div className="public-page">
        <PublicHeader
          active={publicRoute}
          onHome={() => {
            setPublicRoute("home");
            setShowLogin(false);
            setLoginError(null);
          }}
          onAbout={() => {
            setPublicRoute("about");
            setShowLogin(false);
            setLoginError(null);
          }}
          onLogin={() => {
            setShowLogin(true);
            setLoginError(null);
          }}
        />

        {/* Hero / About background */}
        {publicRoute === "home" ? (
          <div className="public-hero-wrap">
            <PublicHero onLoginClick={() => setShowLogin(true)} />

            {/* Login card on the RIGHT */}
            {showLogin && (
              <aside className="public-login-right">
                <div className="login-card">
                  <LoginForm onLogin={handleLogin} errorMessage={loginError} />
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => {
                      setShowLogin(false);
                      setLoginError(null);
                    }}
                  >
                    Back
                  </button>
                </div>
              </aside>
            )}
          </div>
        ) : (
          <div className="public-route-wrap">
            <AboutPage />
          </div>
        )}
      </div>
    );
  }

  // ✅ LOGGED-IN
  return (
    <>
      <div className="app-shell">
        <div className="sidebar-logo-cell" onClick={handleGoToStart}>
          Luce Duce
        </div>
        <div className="header-spacer" />
        <div className="top-divider" />

        <aside className="sidebar">
          <nav className="sidebar-nav">
            <div className="sidebar-nav-top">
              <button type="button" className="sidebar-link" onClick={handleGoToStart}>
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <span>Start</span>
              </button>

              <button type="button" className="sidebar-link" onClick={handleShowCoursesPanel}>
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </span>
                <span>Kurser</span>
              </button>
            </div>

            <div className="sidebar-nav-bottom">
              <button type="button" className="sidebar-link" onClick={handleLogout}>
                <span className="sidebar-icon">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </span>
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </aside>

        <main className="main-content">
          <div className="page-container">
            {view === "start" && <StartPage userName={mockUser.name} />}

            {view === "courses" && (
              <CoursesPage courses={courses} loading={coursesLoading} error={coursesError} />
            )}
          </div>
        </main>
      </div>

      <CoursesPanel
        isOpen={isCoursesPanelOpen}
        onClose={handleCloseCoursesPanel}
        onOpenAllCourses={handleOpenCoursesPage}
        courses={courses}
        loading={coursesLoading}
        error={coursesError}
      />
    </>
  );
}

export default App;
