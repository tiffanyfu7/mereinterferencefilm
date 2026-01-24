import "./App.css";
import { useRef } from "react";

function App() {

  const containerRef = useRef(null);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    containerRef.current.style.setProperty("--reveal", x);
  };

  const handleTouchMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.touches[0].clientX - rect.left) / rect.width;
    containerRef.current.style.setProperty("--reveal", x);
  };

  return (
    <div>
      <header className="header">
        <img
          src="/logo.png"
          alt="Mere Interference Logo"
          id="logo"
          width="200px"
        />
        <h2>mere interference</h2>
      </header>
      <div
        ref={containerRef}
        className="images"
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
      >
        <img
          src="rocks.png"
          alt="Heart Rocks Image"
          className="img rocks"
          width="800px"
          height="450px"
        />
        <img
          src="lab.png"
          alt="Physics Lab Room Image"
          className="img lab"
          width="800px"
          height="450px"
        />
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
