/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        /* ── Page structure ────────────────────────────────────── */
        primary:   "#FFFFFF",       // page background
        surface:   "#F8FAFC",       // secondary background / section alternation
        card:      "#FFFFFF",       // card background
        /* ── Text ──────────────────────────────────────────────── */
        "ink":     "#0F172A",       // primary text
        "ink-2":   "#475569",       // secondary text
        "ink-3":   "#94A3B8",       // muted / placeholder
        /* ── Border ────────────────────────────────────────────── */
        "line":    "#E2E8F0",       // default border
        "line-2":  "#CBD5E1",       // strong border
        /* ── Brand ─────────────────────────────────────────────── */
        brand:     "#7C3AED",
        "brand-hover": "#6D28D9",
        "brand-light": "#EDE9FE",   // violet-100 — tinted bg boxes
        /* ── Semantic ──────────────────────────────────────────── */
        success:   "#16A34A",
        warning:   "#F59E0B",
        danger:    "#DC2626",
        /* ── Legacy aliases kept so old refs don't break ───────── */
        dimWhite:  "rgba(255,255,255,0.65)",
        dimBlue:   "rgba(109,40,217,0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #9333ea 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(91,33,182,0.08) 0%, rgba(147,51,234,0.05) 100%)",
        "surface-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      },
      boxShadow: {
        /* light-theme card shadows */
        sm:    "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
        md:    "0 4px 16px rgba(15,23,42,0.08), 0 1px 4px rgba(15,23,42,0.04)",
        lg:    "0 8px 32px rgba(15,23,42,0.10), 0 2px 8px rgba(15,23,42,0.04)",
        xl:    "0 16px 48px rgba(15,23,42,0.12), 0 4px 12px rgba(15,23,42,0.05)",
        brand: "0 4px 24px rgba(124,58,237,0.22), 0 1px 6px rgba(124,58,237,0.12)",
        "brand-lg": "0 8px 40px rgba(124,58,237,0.30)",
        /* legacy kept */
        glass: "0 8px 32px 0 rgba(109,40,217,0.15)",
        glow:  "0 0 60px rgba(124,58,237,0.5)",
        card:  "0 4px 28px rgba(0,0,0,0.55)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      animation: {
        marquee:        "marquee 40s linear infinite",
        "fade-in-up":   "fade-in-up 0.5s ease-out forwards",
        "scale-in":     "scale-in 0.2s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
