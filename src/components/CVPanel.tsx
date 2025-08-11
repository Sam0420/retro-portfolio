import "./ProjectsPanel.css"; // reuse same retro styles

type CVPanelProps = {
  onClose: () => void;
  cvUrl: string; // public PDF link
};

export default function CVPanel({ onClose, cvUrl }: CVPanelProps) {
  return (
    <div className="projects-panel">
      <h2>📄 Curriculum Vitae</h2>
      <p style={{ margin: "1rem 0" }}>
        Download my CV or view it in a new tab.
      </p>
      <div className="links">
        <a href={cvUrl} target="_blank">Open CV</a>
        <a href={cvUrl} download>Download</a>
      </div>
      <button className="close-btn" onClick={onClose}>❌ Close</button>
    </div>
  );
}