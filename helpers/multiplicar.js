const fs = require('fs');
const colors = require('colors');

// la base por defecto si no recibe un valor será de 5.
const crearArchivo = async ( base = 5, listar, hasta = 10 ) => {

    try {
    
        // generar tabla

        // let salida, consola = '';
        let consola = '';
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
        // console.log(`${base} x ${i} = ${base*i}`);
        // += va agregando sin reemplazar lo anterior
        salida += `${base} x ${i} = ${base*i}\n`;
        consola += `${base} x ${i} ${'='.blue} ${base*i}\n`.yellow;
        }

        // especificar con -l o --listar si se muestra la tabla en consola
        // si listar es true, imprimir la tabla en consola además de guardar el archivo.
        if(listar){
            console.log('=========================='.rainbow);
            console.log('   Tabla del', base);
            console.log('=========================='.rainbow);
            console.log(consola);
        }


        // guardar el archivo de la tabla con los datos de salida
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);


        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }

    

}

// exporto crearArchivo para que pueda usarse de manera global
module.exports = {
    crearArchivo
};