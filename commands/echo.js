//Comando "echo": Imprime el texto después del commando
//Sintaxis: echo [texto a imprimir en pantalla]
//Ejemplo: echo Mi gato tiene botas

module.exports = function echo (args, printer) { 
    printer(args.join(' '));
};
