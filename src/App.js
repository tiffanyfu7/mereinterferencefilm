import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Script from "./pages/Script";
import Header from "./Header";

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
    <Routes>
      <Route
        path="/"
        element={
          <div className="main-container">
            <Header />

            <div className="panes">
              {Array.from({ length: PANES }).map((_, i) => (
                <div
                  key={i}
                  className={`pane ${flipped[i] ? "flipped" : ""}`}
                  onMouseEnter={(e) => onEnter(i, e)}
                >
                  <div
                    className="pane-inner"
                    style={{ "--i": i, "--count": PANES }}
                  >
                    <div className="face front" />
                    <div className="face back" />
                  </div>
                </div>
              ))}
            </div>

            <div className="links">
              <h4>about</h4>
              <h3 className="red-text">
                <Link to="/script" className="link-reset">
                  script
                </Link>
              </h3>
              <h4>cast and crew</h4>
              <h3 className="red-text">donate</h3>
              <h4>contact</h4>
            </div>
          </div>
        }
      />
      <Route path="/script" element={<Script />} />
    </Routes>
  );
}

export default App;
