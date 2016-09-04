const fs = require('fs')
const Paquet = require('paquet')
const path = require('path')
const dotenv = require('dotenv')

try {
    fs.accessSync(process.cwd(), '.env');
    dotenv.config({silent: true})
} catch (e) {}

const middleware = require('./middleware.js')
const routes = require('./routes.js')

var app = new Paquet('es6')

app.start({
	name: 'UI_Code_Challenge',
	port: parseInt(process.env.PORT),
	public: `./client`,
	middleware,
  routes
})

app.start({
	name: 'UI_Code_Challenge - Docs',
	port: parseInt(process.env.PORT) + 1,
	public: `./docs`,
	middleware
})
