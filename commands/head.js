//Comando "head": Imprime las primeras "X" líneas del archivo
//Sintaxis: head [nombre de archivo] [numero de líneas -opcional-]
//Ejemplo: head chistes.txt 15
//Observación: Si no se define las "X" líneas, por default se establecera "10"

const fs = require('fs');

module.exports = function head (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) { throw err };
        let lines = 10;
        args[1] && (lines = args[1]);
        printer(data.split('\n', lines).join('\n'));
    });
};
