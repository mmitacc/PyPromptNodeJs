//Comando "wc": Imprime el conteo de líneas, palabras y caracteres de un archivo
//Sintaxis: wc [nombre de archivo]
//Ejemplo: wc chistes.txt

const fs = require('fs');

module.exports = function wc (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) throw err;
        const lines = data.split('\n').length;
        const words = data.replace(/\s+/g, ' ').split(' ').length;
        const characters = data.split('').length;
        printer(`El archivo tiene: ${lines} líneas, ${words} palabras y ${characters} caracteres.`);
    });
};
