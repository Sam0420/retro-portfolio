import { useEffect, useRef, useState } from "react";
import "./App.css";
import { initGame } from "./game/index";
import StartScreen from "./components/StartScreen";
import ProjectsPanel from "./components/ProjectsPanel";
import CVPanel from "./components/CVPanel";
import NoiseAndScanlines from "./effects/NoiseAndScanLines";
import GlitchBurst from "./effects/GlitchBurst"; // we'll add this in step 3

function App() {
  const [started, setStarted] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    initGame(canvasRef.current);
  }, []);

  const cvUrl = "/cv.pdf";

  const goToGame = () => {
    setGlitch(true);
    setTimeout(() => { setStarted(true); setGlitch(false); }, 220);
  };
  const goHome = () => {
    setGlitch(true);
    setTimeout(() => { setStarted(false); setGlitch(false); }, 220);
  };

  return (
    <div className="stage">
      {/* HOME vs GAME */}
      {!started && (
        <StartScreen
          onStart={goToGame}
          onOpenProjects={() => setShowProjects(true)}
          onOpenCV={() => setShowCV(true)}
        />
      )}

      {/* Game canvas */}
      <canvas id="game" ref={canvasRef} />

      {/* Back button in game */}
      {started && !showProjects && !showCV && (
        <button
          className="retro-btn"
          style={{ position: "absolute", top: 12, left: 12, zIndex: 30 }}
          title="Back to Home"
          onClick={goHome}
        >
          ⬅️ Back
        </button>
      )}

      {/* Panels (fill screen) */}
      {showProjects && <ProjectsPanel onClose={() => setShowProjects(false)} />}
      {showCV && <CVPanel onClose={() => setShowCV(false)} cvUrl={cvUrl} />}

      {/* Global overlays */}
      <NoiseAndScanlines />
      {glitch && <GlitchBurst />}
    </div>
  );
}

export default App;