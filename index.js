const app = require('./src/app');

//conexión asincrona para levantar el servidor
async function main() {
	await app.listen(app.get('port'));
	console.log(`Servidor Ejecutandose en el puerto ${app.get('port')}`);
}

//Seguir en en 37:21

main();