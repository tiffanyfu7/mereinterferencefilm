import "@react-pdf-viewer/core/lib/styles/index.css";
import "./pages.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function CastCrew() {
  return (
    <div className="main-container">
      <Link to="/" className="link-reset">
        <Header />
      </Link>
      <div>
        <h3>Director</h3>
      </div>
    </div>
  );
}

export default CastCrew;
