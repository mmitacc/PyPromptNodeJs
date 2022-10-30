//Comando "uniq": Imprime un archivo ordenado lexicográficamente por líneas y sin duplicados
//Sintaxis: uniq [nombre de archivo]
//Ejemplo: uniq chistes.txt

const fs = require('fs');

module.exports = function uniq (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) throw err;
        let lines = data.split('\n').map(lin => lin.trim());
        printer(lines.filter((ln, id) => (lines.indexOf(ln) === id)).sort((a, b) => a.localeCompare(b, 'es', { ignorePunctuation: true })).join('\n'));
    });
};
