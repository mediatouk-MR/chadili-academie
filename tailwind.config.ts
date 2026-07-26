import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#5A1A2B",
          deep: "#3D0F1D",
          night: "#2A0A15",
          soft: "#7A2A3D",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E7CE8F",
          deep: "#A9812F",
        },
        cream: {
          DEFAULT: "#F7F1E6",
          deep: "#EFE6D3",
        },
        ink: "#2A1218",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
        "ar-display": ["var(--font-aref)", "Aref Ruqaa", "serif"],
        "ar-body": ["var(--font-tajawal)", "Tajawal", "sans-serif"],
      },
      boxShadow: {
        luxe: "0 20px 60px -20px rgba(42, 10, 21, 0.35)",
        "luxe-lg": "0 40px 100px -30px rgba(42, 10, 21, 0.45)",
        gold: "0 10px 40px -10px rgba(201, 162, 75, 0.45)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E7CE8F 0%, #C9A24B 45%, #A9812F 100%)",
        "burgundy-radial": "radial-gradient(120% 120% at 50% 0%, #5A1A2B 0%, #3D0F1D 55%, #2A0A15 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        "marquee-x": "marquee-x 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
