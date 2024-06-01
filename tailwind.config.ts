import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    screens: {
      '-3xl': {'max': '1919px'},
      '-2xl': {'max': '1535px'},
      '-xl': {'max': '1279px'},
      '-lg': {'max': '1023px'},
      '-md': {'max': '767px'},
      '-sm': {'max': '639px'},
      '3xl': {'min': '1919px'},
      '2xl': {'min': '1535px'},
      'xl': {'min': '1279px'},
      'lg': {'min': '1023px'},
      'md': {'min': '767px'},
      'sm': {'min': '639px'},
    },
    container: { center: true },
    extend: {
      colors: {
        'iw-orange-warm': '#ff9518',
        'iw-blue-bright': '#61aaff',
        'iw-industrial-green': '#002824',
        'iw-blue-shade': '#1473e4',
        'iw-hi-vis': '#e6f849',
        'iw-fresh-paint': '#ffffff'
      },
      fontFamily: {
        'tobias': ['"tobias"', 'serif'],
        'kern': ['"kern"', 'sans-serif'],
        'grotesk': ['"Space Grotesk"', 'sans-serif']
      },
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
