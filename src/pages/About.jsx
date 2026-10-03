import {
  PageHeading,
  SectionHeading,
  Features,
  Steps,
  CallToAction,
} from "../components/Design";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <PageHeading
        eyebrow="ABOUT CRYPTOLAND"
        title={
          <>
            A fresh perspective.
            <br />
            <span>A shared future.</span>
          </>
        }
        description="We believe the world of digital assets should feel a little more human. So we’re starting with clarity, curiosity, and you."
      />
      <section className="section container about-story">
        <div className="about-art">
          <span className="eyebrow">OPEN TO POSSIBILITY</span>
          <img
            src="/images/about-image.png"
            alt="An illustration of a connected digital economy"
          />
          <span className="art-caption">
            A connected world. A simpler experience.
          </span>
        </div>
        <div>
          <SectionHeading
            eyebrow="THE IDEA BEHIND IT ALL"
            title="Complex technology. Simple experiences."
            description="Crypto opens the door to new ways of thinking about ownership and connection. Exploring it should feel approachable, wherever you’re starting from."
          />
          <p className="body-copy">
            Cryptoland brings that idea to life through thoughtful design. Clear
            information, familiar interactions, and space to learn — because
            confidence begins with understanding.
          </p>
          <Link className="text-link" to="/blogGrid">
            Get to know the basics <FiArrowUpRight />
          </Link>
        </div>
      </section>
      <Features />
      <Steps />
      <CallToAction />
    </>
  );
}
