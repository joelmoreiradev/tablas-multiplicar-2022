const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');

const argv = require('./config/yargs');




console.clear();

// console.log(argv);  // yargs

// console.log('base: yargs', argv.base); // esto imprime el número mandado como base

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado'.green) )
    .catch(err => console.log(err));