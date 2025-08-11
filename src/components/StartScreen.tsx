import "./StartScreen.css";

type StartScreenProps = {
  onStart: () => void;
  onOpenProjects: () => void;
  onOpenCV: () => void;
};

export default function StartScreen({ onStart, onOpenProjects, onOpenCV }: StartScreenProps) {
  return (
    <div className="start-screen">
      <h1>🕹️ Retro Portfolio</h1>

      <div className="btn-row">
        <button onClick={onStart}>▶️ Play</button>
        <button onClick={onOpenProjects}>🗂️ Projects</button>
        <button onClick={onOpenCV}>📄 CV</button>
      </div>
    </div>
  );
}