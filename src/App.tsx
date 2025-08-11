import { useState } from "react";
import "./App.css";
import "./game/index";
import StartScreen from "./components/StartScreen";
import ProjectsPanel from "./components/ProjectsPanel";

function App() {
  const [started, setStarted] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
      {!started && <StartScreen onStart={() => setStarted(true)} />}
      <canvas id="game" />
      {started && (
        <button
          className="projects-button"
          onClick={() => setShowProjects(true)}
        >
          🗂️ Projects
        </button>
      )}
      {showProjects && (
        <ProjectsPanel onClose={() => setShowProjects(false)} />
      )}
    </div>
  );
}

export default App;