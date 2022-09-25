/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      colors: {
        "left-panel-top": "#262832",
        "left-panel-bg": "#292b35",
        revenue: "#5c6bc0",
        "sales-increase": "#66bb6a",
        "total-clients": "#ffa726",
        users: "#42a5f5",
        "menu-color": "#8b939b",
        "menu-title": "#41434d",
        "search-bar": "",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
      },
    },
    fontFamily: {
      "left-arrow": ["Fontawesome"],
    },
  },
  plugins: [],
};
