//Comando "tail": Imprime las últimas "X" líneas del archivo
//Sintaxis: tail [nombre de archivo] [numero de líneas -opcional-]
//Ejemplo: tail chistes.txt 15
//Observación: Si no se define las "X" líneas, por default se establecera "10"

const fs = require('fs');

module.exports = function tail (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) { throw err };
        let lines = 10;
        args[1] && (lines = args[1]);
        printer(data.split('\n').reverse().join('\n').split('\n', lines).reverse().join('\n'));
    });
};
