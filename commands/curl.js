//Comando "curl": Imprime el código de una página web
//Sintaxis: curl [dirección web]
//Ejemplo: curl http://www.google.com

const request = require("request");

module.exports = function curl(args, printer) {
  request(args[0], (err, data) => {
    if (err) throw err;
    printer(data.body);
  });
};
