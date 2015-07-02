Package.describe({
  name: 'ccorcos:cjsx',
  summary: 'CJSX for Meteor',
  version: '0.0.1',
  git: 'https://github.com/ccorcos/meteor-cjsx'
});

Package.registerBuildPlugin({
  name: "compileCJSX",
  use: [],
  sources: [
    'plugin/compile-cjsx.js'
  ],
  npmDependencies: {
    'coffee-react-transform': "2.4.1", 
    'coffee-script': "1.7.1", 
    'source-map': "0.1.32"
  }
});

