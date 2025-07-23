import { useEffect } from "react";
import "./game/index"; // Triggers kaboom init

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <canvas id="game" />
    </div>
  );
}

export default App;