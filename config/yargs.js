const yargs = require('yargs');

const argv = require('yargs')
                .option('b', { // crear una opción o "parámetro" de consola.
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', { // creo otro parámetro de consola
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Multiplicar hasta X número'
                })
                .check( (argv, options) => { // checkear los datos del argv para hacerle validaciones
                    if(isNaN(argv.base)) { // Si base es NotANumber
                        throw 'La base tiene que ser un número!';
                    }
                    // Si no hay ningún error, retornar true.
                    return true;
                })
                .argv;



module.exports = argv;