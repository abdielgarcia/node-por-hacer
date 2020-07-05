const argv = require('./config/yargs').argv;
const tareasPorHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tareaCreada = tareasPorHacer.crearTarea(argv.descripcion);
        console.log(tareaCreada);
        break;

    case 'listar':
        let listado = tareasPorHacer.getListado();
        console.log(listado);
        for (let tarea of listado) {
            console.log('=======Por hacer====='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('====================='.green);
        }
        break;

    case 'actualizar':
        tareasPorHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        console.log(argv.descripcion);
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea eliminada');
        } else {
            console.log('No fue posible eliminar');
        }
        break;
    default:
        console.log('comando desconocido')
        break;

}