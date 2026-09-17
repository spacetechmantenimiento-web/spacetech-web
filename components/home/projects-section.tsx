export type FutureProject = {
  title: string;
  category: string;
  summary: string;
  href?: string;
};

// Prepared for the future “Tecnología en órbita” section.
// Keep this component out of the home render until real projects are ready.
export function ProjectsSection({ projects }: { projects: FutureProject[] }) {
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby="projects-title">
      <h2 id="projects-title">Tecnología en órbita</h2>
    </section>
  );
}
