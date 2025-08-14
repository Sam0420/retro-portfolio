import type { ReactNode } from "react";
import "./GameShell.css";

export default function GameShell({ children }: { children: ReactNode }) {
  return (
    <div className="shell-outer">
      <div className="shell-frame">
        <div className="shell-screen">
          {/* overlay effects */}
          <div className="shell-scanlines" aria-hidden />
          <div className="shell-vignette" aria-hidden />
          {/* content goes under overlays but above bg */}
          <div className="shell-content">{children}</div>
        </div>

        {/* tiny details */}
        <div className="shell-status">
          <span className="led" />
          <span className="label">RETRO MODE</span>
        </div>
      </div>
    </div>
  );
}