import "@react-pdf-viewer/core/lib/styles/index.css";
import "./pages.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function Contact() {
  return (
    <div className="main-container">
      <Link to="/" className="link-reset">
        <Header />
      </Link>
      <div>
        <p>email: tiffany.fu7@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact;
