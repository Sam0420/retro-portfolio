import type { ReactNode } from "react";
import "./TVFrame.css";

export default function TVFrame({ children }: { children: ReactNode }) {
  return (
    <div className="tv-outer">
      <div className="tv-bezel">
        {/* optional screws */}
        <div className="screw tl" />
        <div className="screw tr" />
        <div className="screw bl" />
        <div className="screw br" />

        {/* the “glass” screen area */}
        <div className="tv-screen">
          {children}
        </div>

        {/* optional speaker grill */}
        <div className="tv-grill" aria-hidden />
      </div>
    </div>
  );
}