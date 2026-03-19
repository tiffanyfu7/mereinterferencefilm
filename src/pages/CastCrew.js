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
        <div className="cast-bio">
          <h3 className="cast-header">
            <span className="cast-name">Tiffany Lin Fu</span>
            <span className="cast-title">Director</span>
          </h3>
          <p>
            Inspired by Everything Everywhere All At Once, Alice Wu, Kurt
            Vonnegut, tiny homes, and fun hats. First-time director / producer /
            human trying to live out her best life. Left brain enjoys finite
            state machines, right brain enjoys doodling.
          </p>
        </div>
        <img
          src="/tiffany_card.png"
          alt="Tiffany Fu"
          className="cast_cards"
          width="400px"
        />
      </div>
    </div>
  );
}

export default CastCrew;
