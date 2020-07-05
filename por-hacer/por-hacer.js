const fs = require('fs');
let listadoPorHacer = [];

var crearTarea = (descripcion) => {
    let tareaPorHacer = {
        descripcion: descripcion,
        completado: false

    }
    cargarTareas();
    listadoPorHacer.push(tareaPorHacer)
    console.log(listadoPorHacer);
    guardarBD();
    return tareaPorHacer;

}

const guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Nose pudo guardar', err);
        console.log('El archivo fue guardado');
    });

}

const cargarTareas = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarTareas();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

    cargarTareas();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {

    cargarTareas();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }

}

module.exports = {

    crearTarea: crearTarea,
    guardarBD: guardarBD,
    cargarTareas: cargarTareas,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar
}