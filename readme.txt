
==================================
// Installing Babel in our project
==================================

$ npm install --save-dev babel-loader @babel/core

// Configuring the Babel loader
-------------------------------
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }

// Open the src/utilities/random.js file and replace the contents (to ES6 Class module)

// update the main JavaScript file to use the new class. Open the src/index.js 

// Now that we have Babel configured, let’s move on to installing the Babel env preset, which enables transforms for ECMAScript 6+. To install the preset, run the following command:

    $ npm install @babel/preset-env --save-dev

// This will install the dependency and after the installation is complete, we can build the assets using webpack:

    $ npm run build


///////////////////////
// PART 3 CONCLUSION //
///////////////////////


=================================
// Introducing loaders in webpack
=================================

We will be using loaders to handle the styling of our project
-------------------------------------------------------------

$ npm install sass-loader node-sass css-loader style-loader --save-dev

// Open your webpack configuration file and update the configuration with the rules

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

// Open the dist``/index.html file and add;
        <div class="container">
          <h1></h1>
        </div>


Above, we have the Sass file that we want to use as the style to the page. Save it and run the following command below to install all the dependencies and then bundle our assets:

    $ npm install
    $ npm run build


As seen above, the style.scss file is built successfully without issues. When the build is complete, you can now run the Node.js web server with the following command:

    $ node dist/server.js

NOTICE:
src/style.scss
-->
    /* File: ./src/style.scss */
    $primary-color: #c6538c;
    ... color: $primary-color;

And Chrome Inspect Element;
-->
/* File: ./src/style.scss */
...
color: #c6538c;



///////////////////////
// PART 2 CONCLUSION //
///////////////////////

============================
// Understanding ES6 modules
============================

Create a new file src/utilities/random.js

    // File: src/index.js
    import generateRandomString from './utilities/random';

When the build is complete, open the dist/index.html and replace the bundle.js script URL with assets/bundle.js:

Then open the dist/server.js and replace the contents;
app.get('/assets/bundle.js', ...


So now...

app.get('/', (req, res) => (
  res.sendFile(path.join(__dirname + '/index.html'))
));
--> Runs the vanilla html in dist/index.html
--> But.. src/index.js updating HTML with JS DOM

app.get('/assets/bundle.js', (req, res) => (
  res.sendFile(path.join(__dirname + '/assets/bundle.js'))
));
--> displays contents of dist/bundle.js

-----
NOTE:
-----
When you want to develop;
$ npm run watch

When you want one off webpack build;
$ npm run build

Once we finished with webpack we only need to run server.js for results.
$ dist/server.js   --> port 3000 for '/' and '/assets/bundle.js'



======================
// Configuring webpack
======================

// Now create a new webpack.config.js file in the project root.
// you can use whatever file name you want and instruct webpack on where to find the configuration file using the following command:

$ webpack --config "/path/to/webpack.config.js"

    const webpack = require('webpack')
    const path = require('path')

    module.exports = {
      mode: 'development',
      entry: path.resolve(__dirname + '/src/index.js'),
      output: {
        path: path.resolve(__dirname + '/dist/assets'),
        filename: 'bundle.js'
      }
    }


// Open the package.json file and replace the scripts with the following:

      "build": "webpack src/index.js -o dist/bundle.js --mode=development",
    to
      "build": "webpack",

// Now let’s update the ./src/index.js file to see if our changes will take effect. Replace the contents of the file with the following:

    // File: ./src/index.js
    document.addEventListener('DOMContentLoaded', function () {
      window.setTimeout(function () {
        document.getElementsByTagName('h1')[0].innerHTML = 'Hello there sport'
      }, 1000);
    });


Now, if you have not already, run the command below to install the dependencies:
    $ npm install

After installation is complete, run the following command to compile the scripts:
    $ npm run build 


///////////////////////
// PART 1 CONCLUSION //
///////////////////////

=============================================
// Using npm scripts to make commands shorter
=============================================
// Open the package.json file and replace the scripts value with the following:

      "scripts": {
        "build": "webpack src/index.js -o dist/bundle.js --mode=development"
      },

// Now, anytime you update the src/index.js file and want to build it using webpack, all you need to do is run this command from the root of the project:

$ npm run build

// Automatically building the script when it’s updated
------------------------------------------------------
// --watch flag. This flag will keep the terminal active and watch for changes in the filesystem. When it finds changes

      "scripts": {
        "build": "webpack src/index.js -o dist/bundle.js --mode=development",
        "watch": "npm run build -- --watch"
      },

Now, we can run the command below to bundle the script and rebundle every time the script is changed:

    $ npm run watch
  


// =====================================
// Serving the application using Node.js
========================================
// In the dist directory, create a new server.js

// Now cd to the dist directory and run the following commands in the terminal:
    $ npm init -y
    $ npm install express --save


// Run command in [dist folder]
$ node server.js

// http://localhost:3000 --> displays HTML file --> "Hello"
// http://localhost:3000/bundle.js --> displays contents bundle.js file

// -------------------------
// WE CAN DO THREE THING NOW
// 1) Run index.html in explorer
// 2)
$ ls
dist  node_modules  package.json  package-lock.json  readme.txt  src
$ node_modules/.bin/webpack src/index.js -o dist/bundle.js
// 2)
$ node server.js
Example app listening on port 3000!



// =====================================
// Creating your first app using webpack
// =====================================

// $ npm install webpack webpack-cli -D
// Make sure -D for Dev dependency

// Create [src] folder
// Inside [src] create index.js

// The command above will bundle src/index.js into dist/bundle.js.
// create [dist] folder and bundle.js file if there is none]
$ node_modules/.bin/webpack src/index.js -o dist/bundle.js


// Inside [dist] create index.html

// Now, open the index.html file in your browser of choice and you
// It will run the (webpack) created bundle.js we linked to the html.
