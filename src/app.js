const express = require('express');
const ejs = require('ejs');
const path = require('path');
const morgan = require('morgan');
//const bootstrap = require('bootstrap');

const app = express();

//Configuración de la aplicación
const port = process.env.PORT || 3000;
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({
	extended: false
}));

//Rutas
app.use(require('./routes/index'));

//Archivos Estáticos
app.use(express.static(path.join(__dirname, 'public')));

//404 handle
app.use((req, res, next) => {
	res.status(404).send('404 error');
});

//Variables globales
/*
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
});
*/
module.exports = app;