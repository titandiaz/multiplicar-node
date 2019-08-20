const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite=10) => {
	console.log('=================='.green);
	console.log(`== Tabla del ${base} ==`.green);
	console.log('=================='.green);
	
	for (let index = 1; index <= limite; index++) {
		console.log(`${base} x ${index} = ${base * index}`);
	}
}

let crearArchivo = (base, limite) => {
	return new Promise((resolve, reject) => {

		if (!Number(base)) {
			reject(`El valor introducido "${base}" no es un número`)
			return;
		}
		let data = '';
		for (let num = 1; num <= limite; num++) {
			data += `${base} x ${num} = ${base * num}\n`
		}

		fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
			if (err) 
				reject(err)
			else
				resolve(`tabla-${base}`.blue)
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}