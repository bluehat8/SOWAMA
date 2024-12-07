/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F4F6E9",
          "primary-content": "#212638",
          secondary: "#afb7ab",
          "secondary-content": "#212638",
          accent: "#93BBFB",
          "accent-content": "#212638",
          neutral: "#212638",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#E5E9E1",
          "base-300": "#afb7ab",
          "base-content": "#212638",
          info: "#93BBFB",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#0D1117", // Fondo principal más oscuro
          "primary-content": "#C9D1D9", // Texto claro
          secondary: "#161B22", // Secundario aún más profundo
          "secondary-content": "#8B949E", // Texto secundario más suave
          accent: "#58A6FF", // Azul neón para acentos
          "accent-content": "#F0F6FC", // Acentos claros
          neutral: "#21262D", // Neutral para áreas generales
          "neutral-content": "#C9D1D9", // Contenido neutral claro
          "base-100": "#0D1117", // Fondo base oscuro
          "base-200": "#161B22", // Fondo base secundario
          "base-300": "#21262D", // Fondo base terciario
          "base-content": "#F0F6FC", // Texto base claro
          info: "#79C0FF", // Color de información brillante
          success: "#56D364", // Verde claro para éxitos
          warning: "#E3B341", // Amarillo cálido para advertencias
          error: "#F85149", // Rojo brillante para errores

          "--rounded-btn": "12px", // Bordes menos redondeados para un estilo más moderno

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "rgba(255, 255, 255, 0.85)",
          },
          ".link": {
            textUnderlineOffset: "3px",
            textDecorationColor: "#58A6FF", // Azul neón para subrayado
          },
          ".link:hover": {
            opacity: "70%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 20px -5px rgba(0, 0, 0, 0.5)", // Sombra más intensa
      },
      animation: {
        "pulse-fast": "pulse 0.7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};