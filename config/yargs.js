crear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }

}

borrar = {
    descripcion: {
        alias: 'b',
        demand: true
    }
}


const argv = require("yargs")
    .command('crear', 'Crear un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completado de una atarea', actualizar)
    .command('borrar', 'Elimina una atarea', borrar)
    .help()
    .argv;

module.exports = {
    argv: argv
}