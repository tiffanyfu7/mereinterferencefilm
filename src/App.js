import "./App.css";

function App() {
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
      <div className="images">
        <img
          src="lab.png"
          alt="Physics Lab Room Image"
          id="lab"
          width="800px"
          height="450px"
        />
        <img
          src="rocks.png"
          alt="Heart Rocks Image"
          id="lab"
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
