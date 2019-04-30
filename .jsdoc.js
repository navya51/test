module.exports = {
    plugins: [
      'plugins/markdown',
      'node_modules/jsdoc-vuejs',
    ],
    source: {
      include: [
        'src/',
        'README.md',
      ],
      includePattern: '\\.(vue|js)$',
    },
    opts: {
      encoding: 'utf8',
    },
  };