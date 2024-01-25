import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat"],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '21/8' : '21 / 8',
      },
    },
  },

};

