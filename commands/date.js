//Comando "date": Imprime la fecha actual
//Sintaxis: date
//Observación: solo el comando

module.exports = function date (args, printer) { 
    printer(Date());
};
