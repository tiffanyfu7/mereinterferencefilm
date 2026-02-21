import "@react-pdf-viewer/core/lib/styles/index.css";
import "./pages.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function About() {
  return (
    <div className="main-container">
      <Link to="/" className="link-reset">
        <Header />
      </Link>
      <div>
        {/* Inception */}
        {/* Screenwriting */}
        {/* Preproduction */}
        {/* Production */}

        {/* Logline */}
        {/* Timeline */}
        {/* Inspo */}
      </div>
    </div>
  );
}

export default About;
