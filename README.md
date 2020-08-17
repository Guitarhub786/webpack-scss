# webpack-scss

```bash
$ npm install
```
```bash
$ node dist/server.js
```

# The App
## Created using Webpack 4 and SCSS
## http://localhost:3000/
### Refresh browser to display results "Hello World!" next to a random string with styles created from SCSS

# The Code
## package.json
```js
"scripts": {
    "build": "webpack",
    "watch": "npm run build -- --watch"
  }
```
#### You need to open a new Terminal while 1.bash is running *$ node dist/server.js*
#### 2.bash (Teminal)
### For onetime wepback build
```bash
$ npm run build
```
### For continuous live build as you code
```bash
$ npm run watch
```

## src/index.js
#### imports a module src/utilities/random.js
#### imports src/style.scss
#### Webpack creates/updates minified code dist/assetsbundle.js

## dist/indexhtml
#### Is vanilla HTML and can be run in exploer index.html
#### Links and run script dist/assets/bundle.js

## src/style.css
#### When using Sass on its own you need ouput folder [css] to convert to normal Css. So you need tools like;
* VSCode extention: Live Sass Compiler
* NPM: node-sass
#### Here, Webpack injects it into your src/index.js

## webpack.config.js
#### Links and formats all your files
```js
// File: ./webpack.config.js
let webpack = require('webpack');
let path = require('path');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname + '/src/index.js'),

  output: {
    path: path.resolve(__dirname + '/dist/assets'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }

};
```

