/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        /* ── Page structure (light, neutral) ───────────────────── */
        primary:   "#FFFFFF",       // page background
        surface:   "#F7F7F5",       // warm off-white — section alternation, bezels
        card:      "#FFFFFF",       // card background
        /* ── Text ──────────────────────────────────────────────── */
        "ink":     "#191919",       // primary text
        "ink-2":   "#5F5E5B",       // secondary text
        "ink-3":   "#8F8E8A",       // muted / placeholder
        /* ── Border ────────────────────────────────────────────── */
        "line":    "#EBEBE9",       // default border
        "line-2":  "#DCDCD9",       // strong border
        /* ── Brand — near-black; colour is used sparingly ─────── */
        brand:     "#191919",
        "brand-hover": "#000000",
        "brand-light": "#F1F1EF",   // neutral tinted bg boxes
        accent:    "#2F6FEB",       // links, focus — the only hue
        /* ── Semantic ──────────────────────────────────────────── */
        success:   "#1F8A4C",
        warning:   "#B7791F",
        danger:    "#D93636",
        /* ── Legacy aliases kept so old refs don't break ───────── */
        dimWhite:  "rgba(255,255,255,0.65)",
        dimBlue:   "rgba(25,25,25,0.06)",
      },
      fontFamily: {
        sans:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        /* Legacy alias — existing `font-poppins` classes now render Inter */
        poppins: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(180deg, #2A2A2A 0%, #191919 100%)",
        "brand-gradient-soft":
          "linear-gradient(180deg, #FAFAF9 0%, #F4F4F2 100%)",
        "surface-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #F7F7F5 100%)",
      },
      boxShadow: {
        sm:    "0 1px 2px rgba(25,25,25,0.05)",
        md:    "0 2px 8px rgba(25,25,25,0.06), 0 1px 2px rgba(25,25,25,0.04)",
        lg:    "0 8px 24px rgba(25,25,25,0.07), 0 2px 6px rgba(25,25,25,0.04)",
        xl:    "0 24px 64px rgba(25,25,25,0.10), 0 4px 12px rgba(25,25,25,0.05)",
        brand: "0 1px 2px rgba(25,25,25,0.12), inset 0 1px 0 rgba(255,255,255,0.12)",
        "brand-lg": "0 8px 24px rgba(25,25,25,0.16)",
        glass: "0 1px 0 rgba(25,25,25,0.04)",
        /* legacy kept */
        glow:  "0 0 0 1px rgba(25,25,25,0.06)",
        card:  "0 1px 2px rgba(25,25,25,0.05)",
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
