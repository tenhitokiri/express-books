const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//Configuración de la aplicación
const port = process.env.PORT || 3000;
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));

//Middleware

//Rutas

//Archivos Estáticos

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
