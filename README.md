# UI Code Challenge

An angular@1.5 ES6 starter app

## What is this?

This repo was originally created as a code challenge for a job interview. It also serves as a boilerplate project for Angular 1.5 in ECMAScript 2015 (ES6). It uses [Gulp](http://gulpjs.com/) to orchestrate builds, incorporating [Webpack](https://webpack.github.io) behind the scenes. No, this is [not an oxymoron](https://webpack.github.io/docs/usage-with-gulp.html). Gulp and Webpack are better together (and Webpack is a thousand times faster than Browserify)!

But I digress. Let's build this thing.

## Dependencies

* Node v6.x or later (We _are_ using ES6 after all)

## Installation

```
git clone https://github.com/alfonsogoberjr/ui-code-challenge.git
npm install && npm start
```

## Customization

A few noteworthy files and directories come to mind:

* [.env](/.env) will set your environment variables without needing to `export`. It's optional, but handy for development. Remember not to commit this file if you add any sensitive data like API keys, client secrets, etc. And _do not_ use it in production!
* [server/index.js](/server/index.js) contains the server-side app configuration. It uses a handy little module called [paquet](https://github.com/merciba/paquet), which I also wrote. All it does is bootstrap a [Koa](http://koajs.com/) app behind the scenes with some nice-to-have-but-annoying-to-write defaults. Routes and middleware are contained in [server/routes.js](/server/routes.js) and [server/middleware.js](server/middleware.js), respectively. Remember that Koa only accepts generators as middleware!
* [client/js/src](/client/js/src) contains all of the Angular source code. Import/export files using ES6 `import` and `export`. This is handy because normally you need to include 3rd-party dependencies (like `lodash`, for example) via clumsily creating new services and grabbing the libs from the `window` object. No longer, friend. Your FE deps are free at last, and you didn't even need Bower (everything is loaded directly from node_modules). Yay modularity! Everything is compiled by Webpack into `client/js/bundle.min.js`.
* [client/styles/src](/client/styles/src) contains the SASS files, per challenge requirements. These are also compiled into CSS automatically by Webpack and added to `client/js/bundle.min.js`.
