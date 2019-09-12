module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  },  
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          "@Types": "./@types",
          "@Component": "./src/components",
          "@Lib": "./src/libs",
          "@Store": "./src/stores",
          "@Middleware": "./src/middlewares",
        },
      },
    ],
  ],  
};
