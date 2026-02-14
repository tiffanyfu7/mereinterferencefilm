import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Links from "./Links";
import About from "./pages/About";
import Script from "./pages/Script";
import CastCrew from "./pages/CastCrew";
import Contact from "./pages/Contact";
import Header from "./Header";
import Donate from "./pages/Donate";

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

            <Links />
          </div>
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/script" element={<Script />} />
      <Route path="/castcrew" element={<CastCrew />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
