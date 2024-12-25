import('tailwindcss').Config

export const content = ["./app/**/*.{js,jsx,ts,tsx}", "./assets/**/*.{js,jsx,ts,tsx}"]
export const presets = [require("nativewind/preset")]
export const theme = {
  extend: {
    fontFamily: {
      caveat: ['Caveat'],
      serif: ['Merriweather', 'serif'],
      hand: ['Hand'],
    },
    colors: {
      limeGreen: "#c2d600",
    }
  },
}
export const plugins = []