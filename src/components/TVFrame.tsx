import type { ReactNode } from "react";
import "./TVFrame.css";

export default function TVFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="tv-outer">
      <div className="tv-bezel tv--silver">
        <div className="tv-screen">{children}</div>
      </div>
    </div>
  );
}