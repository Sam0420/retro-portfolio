import { useState } from "react";
import "./App.css";
import "./game/index";
import StartScreen from "./components/StartScreen";
import ProjectsPanel from "./components/ProjectsPanel";
import CVPanel from "./components/CVPanel";

function App() {
  const [started, setStarted] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const cvUrl = "/cv.pdf"; // place cv.pdf in /public or use a full URL

  return (
    <div>
      {!started && (
        <StartScreen
          onStart={() => setStarted(true)}
          onOpenProjects={() => setShowProjects(true)}
          onOpenCV={() => setShowCV(true)}
        />
      )}

      {/* Game canvas always in DOM; overlays sit above it */}
      <canvas id="game" />

      {/* In-game Back button to return home */}
      {started && !showProjects && !showCV && (
        <button
          className="back-button"
          onClick={() => setStarted(false)}
          title="Back to Home"
        >
          ⬅️ Back
        </button>
      )}

      {/* Overlays available on Home or even during game if you want */}
      {showProjects && <ProjectsPanel onClose={() => setShowProjects(false)} />}
      {showCV && <CVPanel onClose={() => setShowCV(false)} cvUrl={cvUrl} />}
    </div>
  );
}

export default App;