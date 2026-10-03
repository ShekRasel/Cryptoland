import { Link } from "react-router-dom";
import { FiArrowUpRight, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { Features, Steps, Faq, CallToAction } from "../components/Design";
import PortfolioPreview from "../components/PortfolioPreview";
import { ArticleCards } from "../components/Journal";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-pill">
              <span /> A smarter start to crypto <FiArrowUpRight />
            </span>
            <h1>
              Your money.
              <br />
              New <span>possibilities.</span>
            </h1>
            <p>
              Make room for what’s next. Discover a simpler, more thoughtful way
              to explore crypto — all in one place.
            </p>
            <div className="hero-actions">
              <Link to="/signup" className="button">
                Start your journey <FiArrowUpRight />
              </Link>
              <Link to="/about" className="button button-ghost">
                Discover Cryptoland <FiArrowRight />
              </Link>
            </div>
            <div className="hero-assurance">
              <span>
                <FiCheckCircle /> Simple by design
              </span>
              <span>
                <FiCheckCircle /> Built around you
              </span>
            </div>
            <div className="hero-community">
              <div className="avatar-stack">
                {[1, 2, 3].map((n) => (
                  <img src={`/images/testi-${n}.png`} key={n} alt="" />
                ))}
              </div>
              <div>
                <span className="stars">✦ ✦ ✦ ✦ ✦</span>
                <p>A fresh perspective. A shared journey.</p>
              </div>
            </div>
          </div>
          <PortfolioPreview />
        </div>
        <div className="container hero-footnote">
          <span>LESS FRICTION. MORE POSSIBILITY.</span>
          <span>
            Built for the way you move <FiArrowUpRight />
          </span>
        </div>
      </section>
      <section className="asset-strip">
        <div className="container asset-strip-inner">
          <span>
            Big ideas.
            <br />
            <strong>Meet digital assets.</strong>
          </span>
          <div>
            <span className="asset-symbol bitcoin">₿</span> Bitcoin{" "}
            <small>BTC</small>
          </div>
          <div>
            <span className="asset-symbol eth-symbol">Ξ</span> Ethereum{" "}
            <small>ETH</small>
          </div>
          <div>
            <span className="asset-symbol sol-symbol">≋</span> Solana{" "}
            <small>SOL</small>
          </div>
          <div>
            <span className="asset-symbol usdc-symbol">$</span> USD Coin{" "}
            <small>USDC</small>
          </div>
        </div>
      </section>
      <Features />
      <Steps />
      <section className="section container">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow">A LITTLE KNOWLEDGE GOES A LONG WAY</span>
            <h2>Stay curious. Get inspired.</h2>
          </div>
          <Link className="text-link" to="/blogGrid">
            Visit the learning hub <FiArrowUpRight />
          </Link>
        </div>
        <ArticleCards limit={3} />
      </section>
      <Faq />
      <CallToAction />
    </>
  );
}
