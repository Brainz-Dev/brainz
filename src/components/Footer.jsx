import { Link } from "react-router-dom";
import brainzLogo from "../assets/brainz-logo.png";

const serviceLinks = [
  "SaaS Integration",
  "Custom Development",
  "Workflow Automation",
  "API Development",
  "Data Pipelines",
];

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function FooterLink({ label, href }) {
  return (
    <li>
      <a
        href={href}
        className="font-poppins text-[14px] text-slate-500 hover:text-white transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );
}

const SocialGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function Footer() {
  return (
    <footer className="pt-16 pb-8 border-t border-white/[0.06]">
      {/* Main grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mb-14">
        {/* Brand column */}
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2.5 mb-4">
            <img
              src={brainzLogo}
              alt="Brainz-Dev"
              className="w-8 h-8 object-contain"
            />
            <span className="font-poppins font-bold text-[18px] text-white tracking-tight">
              Brainz<span className="text-gradient">-Dev</span>
            </span>
          </a>
          <p className="font-poppins text-[14px] text-slate-500 leading-relaxed mb-6">
            Supercharging SaaS stacks for ambitious teams worldwide.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/Brainz-Dev"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all duration-200"
            >
              <SocialGithub />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-[13px] uppercase tracking-wider mb-5">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((label) => (
              <FooterLink key={label} label={label} href="#services" />
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-[13px] uppercase tracking-wider mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <FooterLink
                key={link.label}
                label={link.label}
                href={link.href}
              />
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-[13px] uppercase tracking-wider mb-5">
            Legal
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                to="/privacy"
                className="font-poppins text-[14px] text-slate-500 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="font-poppins text-[14px] text-slate-500 hover:text-white transition-colors duration-200"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a
                href="mailto:support@brainz-dev.com"
                className="font-poppins text-[14px] text-slate-500 hover:text-white transition-colors duration-200"
              >
                support@brainz-dev.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-white/[0.06] mb-7" />
      <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
        <p className="font-poppins text-[13px] text-slate-600">
          © 2024 Brainz-Dev · All rights reserved.
        </p>
        <p className="font-poppins text-[12px] text-slate-700">
          Made with ♥ for ambitious teams
        </p>
      </div>
    </footer>
  );
}

export default Footer;
