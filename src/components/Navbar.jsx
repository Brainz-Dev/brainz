import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import brainzLogo from "../assets/brainz-logo.png";

const ease = [0.22, 1, 0.36, 1];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 relative" role="navigation" aria-label="Main navigation">
      {/* ── Logo ──────────────────────────────────────────── */}
      <Link
        to="/"
        className="flex items-center gap-2.5 flex-shrink-0 group"
        aria-label="Brainz-Dev home"
      >
        <img src={brainzLogo} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
        <span className="font-poppins font-bold text-[19px] text-ink tracking-tight">
          Brainz<span className="text-gradient">-Dev</span>
        </span>
      </Link>

      {/* ── Desktop: centered nav links ───────────────────── */}
      <ul className="list-none sm:flex hidden items-center gap-1 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="font-poppins text-[14px] font-medium text-ink-2 hover:text-brand hover:bg-brand-light px-3 py-1.5 rounded-lg transition-all duration-150"
            >
              {nav.title}
            </a>
          </li>
        ))}
        <li>
          <Link
            to="/products"
            className="font-poppins text-[14px] font-medium text-ink-2 hover:text-brand hover:bg-brand-light px-3 py-1.5 rounded-lg transition-all duration-150"
          >
            Products
          </Link>
        </li>
      </ul>

      {/* ── Desktop CTA ───────────────────────────────────── */}
      <div className="sm:flex hidden items-center flex-shrink-0">
        <a
          href="#contact"
          className="btn-brand font-poppins font-semibold text-[13px] px-5 py-2.5 rounded-lg inline-flex items-center gap-1.5 transition-all duration-150 hover:shadow-brand focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Get Started
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* ── Mobile hamburger ──────────────────────────────── */}
      <div className="sm:hidden flex">
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="p-2 rounded-lg border border-line hover:bg-surface transition-colors duration-150"
        >
          {open ? (
            <svg className="w-5 h-5 text-ink-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-ink-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease }}
              className="mobile-menu absolute top-[60px] right-0 min-w-[220px] p-3 flex flex-col z-50"
            >
              <ul className="list-none flex flex-col gap-0.5 mb-3">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => setOpen(false)}
                      className="block font-poppins font-medium text-[14px] text-ink-2 hover:text-brand hover:bg-brand-light px-3 py-2.5 rounded-lg transition-all duration-150"
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="block font-poppins font-medium text-[14px] text-ink-2 hover:text-brand hover:bg-brand-light px-3 py-2.5 rounded-lg transition-all duration-150"
                  >
                    Products
                  </Link>
                </li>
              </ul>
              <div className="border-t border-line pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center btn-brand font-poppins font-semibold text-[14px] px-4 py-2.5 rounded-lg"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
