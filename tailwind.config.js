const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/routes/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2.5rem",
      },
    },
    extend: {
      backgroundImage: {
        "action-button-ornament":
          "url('/images/ornaments/action-button-ornament.svg')",
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      boxShadow: {
        dark: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "dark-lg": "0 0 15px rgba(0, 0, 0, 0.33)",
        "inner-lg": "inset 0 0 10px 0px rgba(0, 0, 0, 1)",
        "inner-sm": "inset 0 0 5px #000000",
        "inner-xl": "inset 0px 0px 10.1553px #000000",
        "inner-glow-gold-200": "inset 0 0 5px #FFC97750",
      },
      fontFamily: {
        sans: ["El Messiri", ...defaultTheme.fontFamily.serif],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        white: "#E7E7E7",
        black: {
          100: "#CACACA",
          200: "#9D9D9D",
          300: "#868686",
          400: "#303030",
          500: "#242424",
          600: "#161616",
          700: "#0f1118",
          800: "#0C0C0C",
        },
        blue: {
          50: "#CFCFEA",
          100: "#63697B",
          200: "#2D323F",
          300: "#262a35",
          400: "#181a21",
        },
        gold: {
          100: "#FFC977",
          200: "#E09606",
          300: "#C09645",
          400: "#AE9368",
          500: "#52452B",
          600: "#493B09",
        },
        green: {
          100: "#719E70",
          200: "#90CC54",
        },
        tan: {
          100: "#FFF5E2",
          200: "#EEDBBC",
          300: "#E2CBA6",
          400: "#BDB4A5",
          500: "#887d6d",
          600: "#88746d",
        },
        item: {
          common: "#D7D7D7",
          uncommon: "#7DD486",
          rare: "#5E9EFF",
          legendary: "#EBC167",
          other: "#DF5959",
        },
        peach: {
          100: "#DFC8C8",
          200: "#AE7165",
        },
        red: {
          100: "#DE7B50",
        },
        percentage: {
          33: "#DF5959",
          50: "#DE7B50",
          66: "#FFF967",
          100: "#90CC54",
        },
      },
      scale: {
        103: "1.03",
      },
      animation: {
        "glow-common": "glow-common 2s ease infinite",
        "glow-uncommon": "glow-uncommon 2s ease infinite",
        "glow-rare": "glow-rare 2s ease infinite",
        "glow-legendary": "glow-legendary 2s ease infinite",
        "glow-other": "glow-other 2s ease infinite",
      },
      keyframes: {
        "glow-common": {
          "0%": { boxShadow: "0 0 #FFF" },
          "100%": { boxShadow: "0 0 10px 8px transparent" },
        },
        "glow-uncommon": {
          "0%": { boxShadow: "0 0 #b0e5b6" },
          "100%": { boxShadow: "0 0 10px 8px transparent" },
        },
        "glow-rare": {
          "0%": { boxShadow: "0 0 #b3d1ff" },
          "100%": { boxShadow: "0 0 10px 8px transparent" },
        },
        "glow-legendary": {
          "0%": { boxShadow: "0 0 #E2C988" },
          "100%": { boxShadow: "0 0 10px 8px transparent" },
        },
        "glow-other": {
          "0%": { boxShadow: "0 0 #fe6666" },
          "100%": { boxShadow: "0 0 10px 8px transparent" },
        },
      },
      cursor: {
        default: "url(/images/cursors/cursor-default.png), default",
        pointer: "url(/images/cursors/cursor-pointer.png), pointer",
        // gives us the flexibility of adding a new cursor for this later,
        // instead of removing all of the usage of not-allowed throughout the UI
        "not-allowed": "url(/images/cursors/cursor-default.png), not-allowed",
      },
      borderWidth: {
        1: "1.4px",
        2: "1.6px", // if this value is changed StyledTab must be updated
      },
      divideWidth: {
        default: "1.4px",
        2: "1.6px",
      },
      linearBorderGradients: ({ theme }) => ({
        colors: {
          gold: [
            theme("colors").tan[500],
            theme("colors").gold[100],
            theme("colors").tan[500],
          ],
          gray: ["#4E4F5E", "#7B7F95", "#4E4F5E"],
          "dark-gray": ["#2A2B32", "#40424C", "#2A2B32"],
        },
        background: theme("colors"),
        borders: theme("borderWidth"),
      }),
      gridTemplateRows: {
        "header-body": "auto minmax(0, 1fr)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
}
