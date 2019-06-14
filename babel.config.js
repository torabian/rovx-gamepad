module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
    plugins: [
      ['@babel/plugin-transform-flow-strip-types'],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true
        }
      ],
      [
        '@babel/transform-runtime',
        {
          regenerator: false
        }
      ]
    ]
  };
};
