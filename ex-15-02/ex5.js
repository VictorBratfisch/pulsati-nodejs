const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Escreva algo:', str => {
    console.log('Essa palavra possui', str.length, 'letras'); 
    console.log('E possui',(str.split(" ")).length,'palavras');   
    readline.close();
  });