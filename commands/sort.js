//Comando "sort": Imprime un archivo ordenado lexicográficamente por líneas
//Sintaxis: sort [nombre de archivo]
//Ejemplo: sort chistes.txt

const fs = require('fs');

module.exports = function sort (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) throw err;
        // printer(data.trim().split('\n').sort().join('\n'));
        printer(data.trim().split('\n').sort((a, b) => a.localeCompare(b, 'es', { ignorePunctuation: true })).join('\n'));
    });
};
