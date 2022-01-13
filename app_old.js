const {crearArchivo} = require('./helpers/multiplicar');


console.clear();



/* el problema de trabajar con argumentos por consola con
    process.argv, es que de esta manera se trabaja por posición
    no por palabra, por lo que si mando cualquier otra palabra
    por consola, la va a tomar como si fuera base.*/
const [ , ,arg3 = 'base=5'] = process.argv;

// separar o dividir lo que está antes y después del =
// genero un nuevo arreglo con 2 elementos, el primero no me interesa ya que es la palabra base, el segundo sería el número.
// ej: --base=10 queda dividido en: [--base, 10]
// si base llega a ser undefined va a tener un valor de 5.
const [ , base = 5] = arg3.split('=');

// console.log(base);
// const base = 12;

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'ha sido creado') )
    .catch(err => console.log(err));