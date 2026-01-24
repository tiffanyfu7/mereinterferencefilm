import "./App.css";
import { useRef, useState } from "react";

const PANES = 7;

function App() {
  const [flipped, setFlipped] = useState(
    Array.from({ length: PANES }, (_, i) => i % 2 === 1)
  );

  const onEnter = (i, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const fromLeft = e.clientX < rect.left + rect.width / 2;

    setFlipped((prev) => {
      const next = [...prev];
      next[i] = fromLeft;
      return next;
    });
  };

  return (
    <div className="main-container">
      <header className="header">
        <img
          src="/logo.png"
          alt="Mere Interference Logo"
          className="logo"
          width="200px"
        />
        <h2>mere interference</h2>
      </header>

      <div className="panes">
        {Array.from({ length: PANES }).map((_, i) => (
          <div
            key={i}
            className={`pane ${flipped[i] ? "flipped" : ""}`}
            onMouseEnter={(e) => onEnter(i, e)}
          >
            <div className="pane-inner" style={{ "--i": i, "--count": PANES }}>
              <div className="face front" />
              <div className="face back" />
            </div>
          </div>
        ))}
      </div>

      <div className="links">
        <h4>about</h4>
        <h4>script</h4>
        <h4>cast and crew</h4>
        <h4>donate</h4>
        <h4>contact</h4>
      </div>
    </div>
  );
}

export default App;
