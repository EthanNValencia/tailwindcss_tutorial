# React + Vite + Tailwindcss

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Created with ...

`npm create vite@latest`

#### Check https://tailwindcss.com/

### Tailwindcss fix

```
npm install tailwindcss postcss autoprefixer
```

```
npm install postcss-flexbugs-fixes postcss-normalize postcss-preset-env
```

```
npm install react-scripts@latest
```

## postcss.config.cjs

```
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

## tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/containers/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## VSCode Extension

Tailwind CSS IntelliSense
