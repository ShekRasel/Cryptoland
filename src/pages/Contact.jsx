import { useState } from "react";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { PageHeading } from "../components/Design";
export default function Contact() {
  const [message, setMessage] = useState("");
  return (
    <>
      <PageHeading
        eyebrow="LET’S CONNECT"
        title={
          <>
            Good conversations.
            <br />
            <span>Start right here.</span>
          </>
        }
        description="A question, an idea, or just a hello. We’re glad you stopped by."
      />
      <section className="section container contact-layout">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>We’re all ears.</h2>
          <p className="body-copy">
            Tell us what’s on your mind. For a direct conversation, reach out by
            email or phone.
          </p>
          <div className="contact-method">
            <FiMail />
            <div>
              <small>Email us</small>
              <a href="mailto:swe.rasel@gmail.com">swe.rasel@gmail.com</a>
            </div>
          </div>
          <div className="contact-method">
            <FiPhone />
            <div>
              <small>Give us a call</small>
              <a href="tel:+8801648936921">+880 1648 936921</a>
            </div>
          </div>
          <div className="contact-method">
            <FiMapPin />
            <div>
              <small>Find us in</small>
              <span>Gazipur, Bangladesh</span>
            </div>
          </div>
        </div>
        <form
          className="form-card"
          onSubmit={(e) => {
            e.preventDefault();
            setMessage(
              "Your message is ready, but this demo is not connected to a mail service. Please email swe.rasel@gmail.com to get in touch.",
            );
          }}
        >
          <h3>Leave us a message</h3>
          <p>We’d love to know how we can help.</p>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                autoComplete="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label>
            Subject
            <input name="subject" placeholder="What’s on your mind?" required />
          </label>
          <label>
            Your message
            <textarea
              name="message"
              placeholder="Tell us a little more…"
              rows={5}
              required
            />
          </label>
          <button className="button" type="submit">
            Send message <FiArrowUpRight />
          </button>
          <p className="form-note">
            Frontend preview. Messages are not sent or stored.
          </p>
          {message && (
            <p className="form-feedback" role="status">
              {message}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
