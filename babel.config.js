module.exports = {
  env: {
    test: {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
    },
    build: {
      presets: [
        ['@babel/preset-env'],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
      ],
    },
  },
}