import "./StartScreen.css";

type StartScreenProps = {
  onStart: () => void;
  onOpenProjects: () => void;
  onOpenCV: () => void;
};

export default function StartScreen({ onStart, onOpenProjects, onOpenCV }: StartScreenProps) {
  return (
    <div className="start-screen">
      <h1 className="glitch-title" aria-label="PRESS START">
        <span aria-hidden>PRESS START</span>
        <span aria-hidden>PRESS START</span>
        PRESS START
      </h1>

      <div className="btn-row">
        <button className="retro-btn" onClick={onStart}>▶️ Play</button>
        <button className="retro-btn" onClick={onOpenProjects}>🗂️ Projects</button>
        <button className="retro-btn" onClick={onOpenCV}>📄 CV</button>
      </div>
    </div>
  );
}