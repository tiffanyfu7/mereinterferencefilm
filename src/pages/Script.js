import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./pages.css";
import { Link } from "react-router-dom";
import Header from "../Header";

function Script() {
  return (
    <div className="main-container">
      <Link to="/" className="link-reset">
        <Header/>
      </Link>
      <div className="pdf-viewer">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl="/script.pdf" />
        </Worker>
      </div>
    </div>
  );
}

export default Script;
