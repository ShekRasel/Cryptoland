import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-mark">
                c<span />
              </span>
              crypto<span className="brand-light">land</span>
              <span className="brand-dot">.</span>
            </Link>
            <p>
              A clearer way to explore crypto.
              <br />
              Built for your next chapter.
            </p>
            <span className="footer-location">
              <span /> Made for a connected world
            </span>
          </div>
          <div>
            <h3>Explore</h3>
            <Link to="/about">About us</Link>
            <a href="/#features">Our features</a>
            <Link to="/blogGrid">Learning hub</Link>
          </div>
          <div>
            <h3>Get started</h3>
            <Link to="/signup">Create an account</Link>
            <Link to="/signin">Log in</Link>
            <Link to="/passwordReset">Account help</Link>
          </div>
          <div className="footer-contact">
            <h3>Let’s talk</h3>
            <p>
              Have a question or an idea?
              <br />
              We’d love to hear from you.
            </p>
            <Link to="/contact">
              Get in touch <FiArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Cryptoland. Designed with purpose.</p>
          <p>Frontend concept · No real transactions</p>
          <span>
            Developed by Rasel <FiArrowUpRight />
          </span>
        </div>
      </div>
    </footer>
  );
}
