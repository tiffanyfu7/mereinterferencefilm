import { Link } from "react-router-dom";

function Links() {
  return (
    <div className="links">
      <h4>
        <Link to="/about" className="link-reset">
          about
        </Link>
      </h4>

      <h3 className="red-text" style={{ fontSize: "24px" }}>
        <Link to="/script" className="link-reset">
          script
        </Link>
      </h3>

      <h4>
        <Link to="/castcrew" className="link-reset">
          cast and crew
        </Link>
      </h4>

      <h3 className="red-text" style={{ fontSize: "24px" }}>
        <Link to="/donate" className="link-reset">
          donate
        </Link>
      </h3>

      <h4>
        <Link to="/contact" className="link-reset">
          contact
        </Link>
      </h4>
    </div>
  );
}

export default Links;
