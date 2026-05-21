export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: [],
      unitPrecision: 5,
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /node_modules/i,
    },
  },
}
