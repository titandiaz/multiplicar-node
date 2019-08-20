const opts = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}
const argv = require('yargs')
	.command('listar', 'imprime en consola la tabla de multiplicar', opts)
	.command('crear', 'crea el archivo txt de la tabla', opts)
	.help()
	.argv


module.exports = {
	argv
}