import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
export default function Error() {
  return (
    <section className="status-page container">
      <span className="error-number">
        404<span>✦</span>
      </span>
      <span className="eyebrow">A LITTLE OFF THE MAP</span>
      <h1>Let’s find your way back.</h1>
      <p>
        This page may have moved, or the link may be incorrect. There’s still
        plenty to explore.
      </p>
      <Link className="button" to="/">
        Back to home <FiArrowUpRight />
      </Link>
      <Link className="text-link" to="/contact">
        Need a hand? Contact us
      </Link>
    </section>
  );
}
