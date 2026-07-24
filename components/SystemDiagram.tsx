export function SystemDiagram() {
  return (
    <div className="system-diagram" aria-label="Diagram showing fragmented operational inputs becoming a governed operating system">
      <div className="diagram-titlebar">
        <span>Operational systems model / Reference architecture</span>
        <span>Status: Integrated</span>
      </div>
      <div className="diagram-flow">
        <div className="diagram-group" aria-label="Fragmented inputs">
          <span>People</span><span>Data</span><span>Tools</span><span>Rules</span><span>Decisions</span>
        </div>
        <span className="diagram-arrow" aria-hidden="true" />
        <div className="diagram-core">
          <span className="core-mark">IOA</span>
          <strong>Integrated Operations Architecture</strong>
          <small>Structure · Logic · Control</small>
        </div>
        <span className="diagram-arrow" aria-hidden="true" />
        <div className="diagram-output" aria-label="Integrated outputs">
          <span>Structured workflows</span><span>Authoritative data</span><span>Operational control</span>
        </div>
      </div>
      <span className="diagram-pulse" aria-hidden="true" />
    </div>
  );
}
