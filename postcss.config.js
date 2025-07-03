module.exports = {
  plugins: [
    require("@fullhuman/postcss-purgecss").default({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      safelist: [
        /^event__icon(_[\w\d]+)?$/,
        /^hero-dashboard__icon(_[\w\d]+)?$/,
      ],
      defaultExtractor: (content) =>
        content.match(/([A-Za-z0-9-_:/]+)(?<!:)/g) || [],
    }),
  ],
};
