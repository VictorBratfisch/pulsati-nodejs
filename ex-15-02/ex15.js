const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Escreva uma frase:', str => {
    let sep = str.split("");
    sep.sort();
    console.log(sep);
    readline.close();
  });