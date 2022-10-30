//Comando "ls": Imprime el contenido de la carpeta actual en una columna
//Sintaxis: ls
//Observación: solo el comando

const fs = require('fs');

module.exports = function ls (args, printer) { 
    fs.readdir('.', (err, directory) => {
        if (err) { throw err };
        printer(directory.join('\n'));
    });
};
