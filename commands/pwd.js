//Comando "pwd": Imprime la ruta actual
//Sintaxis: pwd
//Observación: solo el comando

module.exports = function pwd (args, printer) { 
    printer(process.cwd());
};
