import { useEffect, useRef, useState } from "react";
import "./App.css";
// REMOVE: import "./game/index";
import StartScreen from "./components/StartScreen";
import ProjectsPanel from "./components/ProjectsPanel";
import CVPanel from "./components/CVPanel";
import TVFrame from "./components/TVFrame";
import { initGame } from "./game/index";

function App() {
  const [started, setStarted] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    initGame(canvasRef.current); // init AFTER canvas exists
  }, []);

  const cvUrl = "/cv.pdf";

  return (
    <TVFrame>
      {!started && (
        <StartScreen
          onStart={() => setStarted(true)}
          onOpenProjects={() => setShowProjects(true)}
          onOpenCV={() => setShowCV(true)}
        />
      )}

      <canvas id="game" ref={canvasRef} />

      {started && !showProjects && !showCV && (
        <button className="back-button" onClick={() => setStarted(false)} title="Back to Home">
          ⬅️ Back
        </button>
      )}

      {showProjects && <ProjectsPanel onClose={() => setShowProjects(false)} />}
      {showCV && <CVPanel onClose={() => setShowCV(false)} cvUrl={cvUrl} />}
    </TVFrame>
  );
}

export default App;