import "@react-pdf-viewer/core/lib/styles/index.css";
import "./pages.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function Donate() {
  return (
    <div className="main-container">
      <Link to="/" className="link-reset">
        <Header />
      </Link>
      <div>
        <img src="/venmo_qr.jpg" alt="Venmo" width="370px" />
        <p>venmo: @mereinterferencefilm</p>
      </div>
    </div>
  );
}

export default Donate;
