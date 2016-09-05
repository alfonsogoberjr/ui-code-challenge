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
cd ui-code-challenge && npm install
```

And start with

```
npm start
```

Navigate to http://localhost:5000 and you will be redirected to `/menu`.

![This is a fictional bakery](/client/img/screenshot-desktop.png?raw=true)

`/menu` is the only route included - but you can add more by following the example of [client/js/src/components/menu](/client/js/src/components/menu). Just duplicate that folder and change the names and references. Don't forget to `import` any new components into [client/js/src/main.js](/client/js/src/main.js) also.

The bakery menu was specified by the challenge - and it's a great way to demonstrate Angular in action with ES6 on both client and server. You could also empty out the client/ folder entirely and add your own structure for [React](https://facebook.github.io/react/) or [choo](https://github.com/yoshuawuyts/choo) - whatever floats your boat.

As a side note: Daria is my aunt's name. She always made great cookies. It's also the name of a really cool show from the 90's.   

## Customization

A few noteworthy files and directories come to mind:

* [.env](/.env) will set your environment variables without needing to `export`. It's optional, but handy for development. Remember not to commit this file if you add any sensitive data like API keys, client secrets, etc. And _do not_ use it in production!
* [server/index.js](/server/index.js) contains the server-side app configuration. It uses a handy little module called [paquet](https://github.com/merciba/paquet), which I also wrote. All it does is bootstrap a [Koa](http://koajs.com/) app behind the scenes with some nice-to-have-but-annoying-to-write defaults. Routes and middleware are contained in [server/routes.js](/server/routes.js) and [server/middleware.js](server/middleware.js), respectively. Remember that Koa only accepts generators as middleware!
* [client/js/src](/client/js/src) contains all of the Angular source code. Import/export files using ES6 `import` and `export`. This is handy because normally you need to include 3rd-party dependencies (like `lodash`, for example) via clumsily creating new services and grabbing the libs from the `window` object. No longer, friend. Your FE deps are free at last, and you didn't even need Bower (everything is loaded directly from node_modules). Yay modularity! Everything is compiled by Webpack into `client/js/bundle.min.js`.
* [client/styles/src](/client/styles/src) contains the SASS files, per challenge requirements. These are also compiled into CSS automatically by Webpack and added to `client/js/bundle.min.js`.

## Notes

* The challenge said I could use server-side filtering, but I opted instead for client-side filtering of the inventory. With a large-enough payload, pagination and server-side (query-string) filtering would undoubtedly be necessary.
* I added an extra property `type` on the inventory data in order to facilitate the filtering UI.
* You can filter multiple types at once by clicking multiple boxes in the menu. They're toggle buttons, so clicking them again will remove them from the filter mechanism.
* Style elements are not _directly_ handled by gulp, because (as mentioned earlier) Webpack is just _so much faster_ than any alternatives. Gulp, however, still makes sense as a task runner, and Webpack is just one of the tasks it runs.
* Gulp also runs [apiDoc](http://apidocjs.com/) to automatically generate docs from the source comments in [server/routes.js](/server/routes.js). You can see the docs at http://localhost:5000/docs.
