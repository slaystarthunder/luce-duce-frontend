// src/components/StartPage.tsx

interface StartPageProps {
  userName: string;
}

export function StartPage({ userName }: StartPageProps) {
  return (
    <section>
      <h1>Welcome to Luce Duce</h1>
      <p>Hi {userName}, this is your start page.</p>

      <p style={{ marginTop: "1rem", maxWidth: "40rem" }}>
        From here you’ll later be able to access your courses, programs and
        other Luce Duce features. For now, you can use the menu to navigate to
        your courses.
      </p>
    </section>
  );
}
    