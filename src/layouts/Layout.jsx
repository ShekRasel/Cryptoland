import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Layout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash)
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo(0, 0);
    const titles = {
      "/": "A smarter start to crypto",
      "/about": "About us",
      "/contact": "Contact",
      "/blogGrid": "Learning hub",
      "/singleBlog": "Crypto essentials",
      "/signin": "Welcome back",
      "/signup": "Get started",
      "/passwordReset": "Reset password",
    };
    document.title = `${titles[pathname] || "Explore"} | Cryptoland`;
  }, [pathname, hash]);
  return (
    <>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
