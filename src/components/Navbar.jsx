import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 relative">
      {/* Logo */}
      <motion.a
        href="#home"
        className="flex items-center gap-2.5 flex-shrink-0"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <img src="/logo-icon.svg" alt="Brainz-Dev" className="w-9 h-9" />
        <span className="font-poppins font-bold text-[20px] text-white tracking-tight">
          Brainz<span className="text-gradient">-Dev</span>
        </span>
      </motion.a>

      {/* Desktop links */}
      <ul className="list-none sm:flex hidden items-center gap-7">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a
              href={`#${nav.id}`}
              className="font-poppins text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
            >
              {nav.title}
              <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-brand-gradient transition-all duration-300" />
            </a>
          </li>
        ))}
        <li>
          <Link
            to="/products"
            className="font-poppins text-[14px] font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
          >
            Products
            <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-brand-gradient transition-all duration-300" />
          </Link>
        </li>
      </ul>

      {/* Desktop CTA */}
      <div className="sm:flex hidden items-center gap-3">
        <motion.a
          href="#contact"
          className="relative font-poppins font-semibold text-[13px] text-white bg-brand-gradient px-5 py-2.5 rounded-lg overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.45)" }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <span className="relative z-10">Get Started →</span>
          <span className="absolute inset-0 bg-white/[0.12] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.a>
      </div>

      {/* Mobile hamburger */}
      <div className="sm:hidden flex flex-1 justify-end">
        <motion.button
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          whileTap={{ scale: 0.92 }}
        >
          <img
            src={open ? close : menu}
            alt="menu"
            className="w-6 h-6 object-contain"
          />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card absolute top-[60px] right-0 min-w-[220px] rounded-2xl p-5 flex flex-col z-50"
            >
              <ul className="list-none flex flex-col gap-1 mb-4">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={() => setOpen(false)}
                      className="block font-poppins font-medium text-[15px] text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-200"
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/products"
                    onClick={() => setOpen(false)}
                    className="block font-poppins font-medium text-[15px] text-slate-300 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-all duration-200"
                  >
                    Products
                  </Link>
                </li>
              </ul>
              <div className="border-t border-white/10 pt-4">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center font-poppins font-semibold text-[14px] text-white bg-brand-gradient px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started →
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
