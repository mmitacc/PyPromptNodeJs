//Comando "cat": Imprime todo el contenido de un archivo
//Sintaxis: cat [nombre de archivo]
//Ejemplo: cat ejemplo.txt

module.exports = function date (args, printer) { 
    fs.readFile(args[0], 'utf-8', (err, data) => {
        if (err) { throw err };
        printer(data);
    });
};
