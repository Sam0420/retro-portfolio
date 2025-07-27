import { useState } from "react";
import "./App.css";
import "./game/index";
import StartScreen from "./components/StartScreen";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {!started && <StartScreen onStart={() => setStarted(true)} />}
      <canvas id="game" />
    </div>
  );
}

export default App;