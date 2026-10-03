/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
export default function AccountForm({ mode = "signin" }) {
  const signup = mode === "signup";
  const reset = mode === "reset";
  const [visible, setVisible] = useState(false);
  const [feedback, setFeedback] = useState("");
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (signup && data.get("password") !== data.get("confirm")) {
      setFeedback("Your passwords do not match. Please check and try again.");
      return;
    }
    setFeedback(
      reset
        ? "Preview complete. A reset email cannot be sent until an authentication service is connected."
        : signup
          ? "Your form is ready. This frontend preview does not create accounts or store your details."
          : "This is a frontend preview. Connect an authentication service to enable sign in.",
    );
  }
  return (
    <section className="account-section container">
      <div className="account-story">
        <span className="eyebrow">A NEW PERSPECTIVE</span>
        <h1>
          Your next chapter.
          <br />
          <span>Full of possibility.</span>
        </h1>
        <p>
          A little curiosity can take you a long way. Make yourself at home in
          the world of digital assets.
        </p>
        <div className="account-illustration" aria-hidden="true">
          <div className="account-ring" />
          <span className="big-coin">₿</span>
          <span className="small-coin">Ξ</span>
          <span className="account-spark">✦</span>
        </div>
        <span className="account-promise">
          <FiCheckCircle /> Simple by design. Built around you.
        </span>
      </div>
      <div className="account-form-wrap">
        <form className="form-card account-card" onSubmit={submit}>
          <span className="eyebrow">
            {reset
              ? "LET’S RESET"
              : signup
                ? "WELCOME TO CRYPTOLAND"
                : "GOOD TO SEE YOU AGAIN"}
          </span>
          <h2>
            {reset
              ? "A fresh start."
              : signup
                ? "Start your journey."
                : "Welcome back."}
          </h2>
          <p>
            {reset
              ? "Enter your email to preview the password reset flow."
              : signup
                ? "A new perspective is just a few details away."
                : "Enter your details to pick up where you left off."}
          </p>
          {signup && (
            <label>
              Full name
              <input
                autoComplete="name"
                name="name"
                placeholder="Alex Morgan"
                required
              />
            </label>
          )}
          <label>
            Email address
            <input
              type="email"
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          {!reset && (
            <>
              <label>
                Password
                <div className="password-field">
                  <input
                    type={visible ? "text" : "password"}
                    autoComplete={signup ? "new-password" : "current-password"}
                    name="password"
                    placeholder={
                      signup ? "At least 8 characters" : "Enter your password"
                    }
                    minLength={signup ? 8 : 1}
                    required
                  />
                  <button
                    type="button"
                    aria-label={visible ? "Hide password" : "Show password"}
                    aria-pressed={visible}
                    onClick={() => setVisible(!visible)}
                  >
                    {visible ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </label>
              {signup && (
                <label>
                  Confirm password
                  <input
                    type={visible ? "text" : "password"}
                    autoComplete="new-password"
                    name="confirm"
                    placeholder="Enter your password again"
                    minLength={8}
                    required
                  />
                </label>
              )}
              {!signup && (
                <div className="form-options">
                  <Link to="/passwordReset">Forgot password?</Link>
                </div>
              )}
            </>
          )}
          <button className="button full-width" type="submit">
            {reset
              ? "Preview reset link"
              : signup
                ? "Create account"
                : "Log in"}
            <FiArrowUpRight />
          </button>
          {feedback && (
            <p className="form-feedback" role="status">
              {feedback}
            </p>
          )}
          <p className="form-note">
            Frontend preview. Your details are not sent or stored.
          </p>
          <div className="account-switch">
            {reset ? (
              <Link to="/signin">← Back to log in</Link>
            ) : signup ? (
              <>
                Already feel at home? <Link to="/signin">Log in</Link>
              </>
            ) : (
              <>
                New around here? <Link to="/signup">Create an account</Link>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
