import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container nav-inner">
        <Link
          className="brand"
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Cryptoland home"
        >
          <span className="brand-mark">
            c<span />
          </span>
          crypto<span className="brand-light">land</span>
          <span className="brand-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About us</NavLink>
          <a href={pathname === "/" ? "#features" : "/#features"}>
            Why Cryptoland
          </a>
          <NavLink to="/blogGrid">Learn</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <Link className="sign-in-link" to="/signin">
            Log in
          </Link>
          <Link className="button button-small" to="/signup">
            Get started <FiArrowUpRight />
          </Link>
          <button
            className="menu-button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[
            ["/", "Home"],
            ["/about", "About us"],
            ["/#features", "Why Cryptoland"],
            ["/blogGrid", "Learn"],
            ["/contact", "Contact"],
            ["/signin", "Log in"],
            ["/signup", "Get started"],
          ].map(([url, label]) => (
            <Link key={url} to={url} onClick={() => setOpen(false)}>
              {label}
              <FiArrowUpRight />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
