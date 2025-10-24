
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/views/**/*.{hbs,html,js}", "./public/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0c",
        paper: "#ffffff",
        mist: "#f5f6f7",
        silver: "#c9cdd3",
        graphite: "#2a2b2e",
        neon: "#39FF14"
      },
      fontFamily: {
        jet: ["JetBrains Mono","ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas","Liberation Mono","monospace"]
      },
      boxShadow: {
        soft: "0 8px 22px rgba(0,0,0,.10)",
        glass: "0 12px 28px rgba(20,20,22,.18)",
        glow: "0 0 0 2px rgba(0,0,0,.06), 0 8px 40px rgba(0,0,0,.16)"
      },
      keyframes: {
        pulseRing: { "0%":{ boxShadow:"0 0 0 0 rgba(0,0,0,.12)" }, "100%":{ boxShadow:"0 0 0 18px rgba(0,0,0,0)" } },
        slideUp: { "0%":{ transform:"translateY(6px)", opacity:"0" }, "100%":{ transform:"translateY(0)", opacity:"1" } }
      },
      animation: {
        pulseRing: "pulseRing 1.2s ease-out",
        slideUp: "slideUp .25s ease-out"
      },
      borderRadius: { '2xl': '1.25rem' }
    }
  },
  plugins: []
}
