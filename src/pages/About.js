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
      <div className="about">
        <h2>Logline</h2>
        <p>Willow has one hour open on Sundays. Xyla wants it.</p>

        <h1 className="red-text">Synopsis</h1>
        <div className="paragraphs">
          <p>
            <i>Mere Interference</i> is a romantic drama about two college
            freshmen unexpectedly paired as lab partners in physics class. As
            they explore topics like light interference, momentum, and quantum
            entanglement, they begin drawing surprising parallels between the
            science and their own lives. What begins as a reluctant
            collaboration slowly evolves into something deeper, forcing one of
            them to decide whether to follow her meticulously planned future or
            risk it all for a connection she never saw coming.
          </p>
        </div>

        <h2>Director's Statement</h2>
        <div className="paragraphs">
          <p>
            In the double-slit experiment, light passing through two narrow
            openings doesn't simply arrive at the other side as two points of
            brightness. It interferes with itself — as waves colliding,
            reinforcing, canceling — and what emerges is something neither slit
            could have produced alone: a pattern, luminous and unexpected.
          </p>
          <p>
            <i>Mere Interference</i> grew out of my college experiences — the
            exhausting performance of career networking, the loneliness of
            building new friendships in a world that rewards surfaces, the
            disorientation of trying to discover who you are when every system
            around you insists you already know. I felt, for a long time, like
            Willow: organized against uncertainty, disciplined against feeling,
            moving efficiently toward a destination I had chosen before I
            understood what I was choosing.
          </p>
          <p>
            This film is my attempt to reconcile the two sides of myself I was
            taught to keep separate: the logical and the creative, the
            scientific and the philosophical. At a moment when the humanities
            feel increasingly embattled by the dominance of technology and
            quantifiable outcomes, I wanted to make something that asks whether
            those categories were ever real — whether the most rigorous
            scientific experiment and the most vulnerable human encounter might
            be, at their core, part of the same thing.
          </p>
          <p>
            This film is an ode to the friendships that have altered the course
            of my life and the continuous search for truth in the midst of
            chaos.
          </p>
        </div>

        <h1 className="red-text">Themes</h1>
        <p>Coming-of-age | Queer Romance | Achievement + Sell-out Culture</p>

        <h2>Production Timeline</h2>
        <p>Ideation (Oct 23 - Oct 25) </p>
        <p>Screenwriting (Oct 25 - Dec 25) </p>
        <p>Preproduction (Jan 26 - Mar 26) </p>
        <p>Production (Apr 26) </p>
        <p>Wrap (May 26)</p>
      </div>
    </div>
  );
}

export default About;
