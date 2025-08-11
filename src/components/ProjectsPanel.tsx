import "./ProjectsPanel.css";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Pomodoro Timer",
    description: "A sleek timer app with animations and sounds.",
    tech: ["React", "TypeScript", "SCSS"],
    github: "https://github.com/your-name/pomodoro",
    live: "https://your-pomodoro.live",
  },
  {
    title: "FlossFinder",
    description: "Distributed system for booking dentists.",
    tech: ["Node.js", "MongoDB", "MQTT"],
    github: "https://github.com/your-name/flossfinder",
  },
  // Add more as you go!
];

type ProjectsPanelProps = {
  onClose: () => void;
};

export default function ProjectsPanel({ onClose }: ProjectsPanelProps) {
  return (
    <div className="projects-panel">
      <h2>💾 Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="stack">{project.tech.join(", ")}</p>
            <div className="links">
              <a href={project.github} target="_blank">GitHub</a>
              {project.live && (
                <a href={project.live} target="_blank">Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className="close-btn" onClick={onClose}>❌ Close</button>
    </div>
  );
}