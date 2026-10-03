import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
export default function MailSuccess() {
  return (
    <section className="status-page container">
      <span className="status-icon">
        <FiMail />
      </span>
      <span className="eyebrow">MESSAGE PREVIEW</span>
      <h1>
        A good conversation
        <br />
        starts with hello.
      </h1>
      <p>
        This is a preview of the confirmation page. No email has been sent. Get
        in touch with us directly from the contact page.
      </p>
      <Link className="button" to="/contact">
        Get in touch <FiArrowUpRight />
      </Link>
      <Link className="text-link" to="/">
        Back to home
      </Link>
    </section>
  );
}
