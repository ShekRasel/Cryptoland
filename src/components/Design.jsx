/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiShield,
  FiZap,
  FiGlobe,
  FiCheck,
  FiPlus,
} from "react-icons/fi";

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHeading({ eyebrow, title, description }) {
  return (
    <section className="page-heading">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <FiArrowRight />
          <span>{eyebrow}</span>
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <span className="heading-orbit" aria-hidden="true" />
    </section>
  );
}
export function Features() {
  return (
    <section className="section container" id="features">
      <SectionHeading
        centered
        eyebrow="A LITTLE SIMPLER. A LOT SMARTER."
        title={
          <>
            Everything you need.
            <br />
            Nothing in your way.
          </>
        }
        description="Less complexity. More clarity. A thoughtful crypto experience that puts you first."
      />
      <div className="feature-grid">
        {[
          {
            icon: FiShield,
            number: "01",
            title: "Confidence, built in.",
            text: "Understand your assets with a clear portfolio view and thoughtfully designed account controls.",
            label: "Explore our approach",
            to: "/about",
          },
          {
            icon: FiZap,
            number: "02",
            title: "Keep things simple.",
            text: "From your first look to your next move, find a refreshingly straightforward way to explore crypto.",
            label: "Find your starting point",
            to: "/signup",
          },
          {
            icon: FiGlobe,
            number: "03",
            title: "A world of possibility.",
            text: "Get to know digital assets, discover new ideas, and build your understanding at your own pace.",
            label: "Explore the learning hub",
            to: "/blogGrid",
          },
        ].map(({ icon: Icon, number, title, text, label, to }) => (
          <article className="feature-card" key={number}>
            <div className="feature-top">
              <span className="icon-box">
                <Icon />
              </span>
              <span className="card-number">{number}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link className="text-link" to={to}>
              {label}
              <FiArrowUpRight />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Steps() {
  return (
    <section className="steps-section">
      <div className="container steps-layout">
        <div>
          <SectionHeading
            eyebrow="YOUR NEXT CHAPTER STARTS HERE"
            title={
              <>
                Small steps.
                <br />
                New possibilities.
              </>
            }
            description="You don’t have to know everything to get started. Just bring your curiosity."
          />
          <Link to="/signup" className="button">
            Start your journey <FiArrowUpRight />
          </Link>
        </div>
        <div className="steps-list">
          {[
            [
              "01",
              "Make yourself at home",
              "Explore a clean, intuitive experience designed around you.",
            ],
            [
              "02",
              "Get to know your crypto",
              "Learn the essentials and discover the assets that interest you.",
            ],
            [
              "03",
              "See the bigger picture",
              "Bring your knowledge together with a clear portfolio overview.",
            ],
          ].map(([n, title, text]) => (
            <div className="step" key={n}>
              <span>{n}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <FiCheck />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CallToAction() {
  return (
    <section className="container cta-wrap">
      <div className="cta">
        <div>
          <span className="eyebrow">A FRESH PERSPECTIVE ON CRYPTO</span>
          <h2>
            Your next chapter.
            <br />
            Starts with a little curiosity.
          </h2>
          <p>Meet a simpler way to explore the world of digital assets.</p>
        </div>
        <Link className="button button-white" to="/signup">
          Let’s get started <FiArrowUpRight />
        </Link>
        <span className="cta-orbit" aria-hidden="true" />
      </div>
    </section>
  );
}
export function Faq() {
  return (
    <section className="container section faq-layout">
      <div>
        <SectionHeading
          eyebrow="GOOD QUESTIONS. CLEAR ANSWERS."
          title={
            <>
              A little clarity
              <br />
              goes a long way.
            </>
          }
          description="New to Cryptoland? Let’s start with the basics."
        />
        <Link className="text-link" to="/contact">
          Still curious? Get in touch <FiArrowUpRight />
        </Link>
      </div>
      <div className="faq-list">
        {[
          [
            "What is Cryptoland?",
            "Cryptoland is a frontend concept for a simpler crypto experience. You can explore the interface, example portfolio, and learning resources without connecting a wallet.",
          ],
          [
            "Do I need experience to get started?",
            "No. Start with the learning hub for a plain-language introduction to digital assets and the questions to consider before using a crypto service.",
          ],
          [
            "Can I buy or sell crypto here?",
            "This version is a frontend demonstration. It does not process payments, connect to exchanges, or store real digital assets. All portfolio figures are illustrative.",
          ],
          [
            "How do I create an account?",
            "You can try the account form to preview the experience. Authentication is not connected, so no account is created and your details are not saved.",
          ],
        ].map(([question, answer]) => (
          <details key={question}>
            <summary>
              {question}
              <FiPlus />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
