const commands = require('./commands/_matriz.js');

function printer (output) {
    process.stdout.write(output);
    process.stdout.write('\n\nPrompt-mmitacc -> ');
};

// Output un prompt
process.stdout.write('Prompt-mmitacc -> ');
// El evento stdin 'data' se dispara cuando el user escribe un command en la línea de instrucciones
process.stdin.on('data', function (data) {
    let lineArgs = data.toString().trim().split(' '); // remueve el salto de linea y genera un array de argumentos
    [cmd, ...args] = lineArgs;
    commands[cmd] ? commands[cmd](args, printer) : process.stdout.write(`El command "${data.toString().trim()}" No Existe!\n\nPrompt-mmitacc -> `);
    // process.stdout.write('\nPrompt-mmitacc -> ');
});