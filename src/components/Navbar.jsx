import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import brainzLogo from "../assets/brainz-logo.png";

const ease = [0.22, 1, 0.36, 1];

// "Home" is the logo's job; "Contact" is the CTA's
const menuLinks = navLinks.filter((nav) => nav.id !== "home" && nav.id !== "contact");

const linkClass =
  "font-poppins text-[14px] text-ink-2 hover:text-ink px-3 py-1.5 rounded-md transition-colors duration-150";

const mobileLinkClass =
  "block font-poppins text-[15px] text-ink hover:bg-surface px-3 py-2.5 rounded-md transition-colors duration-150";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Hairline border appears once content scrolls under the bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-glass ${scrolled ? "is-scrolled" : ""} sticky top-0 z-50`} role="banner">
      <nav
        className="max-w-[1200px] mx-auto px-6 sm:px-10 h-16 flex items-center gap-8 relative"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* ── Logo ──────────────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Brainz-Dev home">
          <img src={brainzLogo} alt="" aria-hidden="true" className="w-7 h-7 object-contain" />
          <span className="font-poppins font-semibold text-[16px] text-ink tracking-tight">Brainz-Dev</span>
        </Link>

        {/* ── Desktop links ─────────────────────────────────── */}
        <ul className="list-none sm:flex hidden items-center gap-0.5">
          {menuLinks.map((nav) => (
            <li key={nav.id}>
              <a href={`/#${nav.id}`} className={linkClass}>{nav.title}</a>
            </li>
          ))}
          <li>
            <Link to="/products" className={linkClass}>Products</Link>
          </li>
        </ul>

        {/* ── Desktop actions ───────────────────────────────── */}
        <div className="sm:flex hidden items-center gap-2 ml-auto">
          <a href="/#contact" className={linkClass}>Contact</a>
          <a href="/#contact" className="btn-brand font-poppins text-[14px] px-3.5 py-1.5 rounded-lg">
            Start a project
          </a>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────── */}
        <div className="sm:hidden flex ml-auto">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((p) => !p)}
            className="p-2 -mr-2 rounded-md hover:bg-surface transition-colors duration-150"
          >
            {open ? (
              <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-ink" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.16, ease }}
                className="mobile-menu absolute top-[calc(100%+4px)] left-4 right-4 p-2 flex flex-col z-50"
              >
                <ul className="list-none flex flex-col mb-2">
                  {menuLinks.map((nav) => (
                    <li key={nav.id}>
                      <a href={`/#${nav.id}`} onClick={() => setOpen(false)} className={mobileLinkClass}>{nav.title}</a>
                    </li>
                  ))}
                  <li>
                    <Link to="/products" onClick={() => setOpen(false)} className={mobileLinkClass}>Products</Link>
                  </li>
                  <li>
                    <a href="/#contact" onClick={() => setOpen(false)} className={mobileLinkClass}>Contact</a>
                  </li>
                </ul>
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center btn-brand font-poppins text-[15px] px-4 py-2.5 rounded-lg"
                >
                  Start a project
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
