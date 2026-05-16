/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#070711",
        dimWhite: "rgba(255, 255, 255, 0.65)",
        dimBlue: "rgba(109, 40, 217, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #9333ea 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(91,33,182,0.25) 0%, rgba(147,51,234,0.15) 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(109, 40, 217, 0.15)",
        glow: "0 0 60px rgba(124, 58, 237, 0.5)",
        "glow-sm": "0 0 28px rgba(124, 58, 237, 0.38)",
        "glow-lg": "0 0 90px rgba(124, 58, 237, 0.55)",
        card: "0 4px 28px rgba(0, 0, 0, 0.55)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out 1.5s infinite",
        "float-med": "float 8s ease-in-out 3s infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "gradient-x": "gradient-x 5s ease infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite 1s",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.22" },
          "50%": { opacity: "0.58" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
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
