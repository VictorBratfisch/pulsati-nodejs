const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número:', number => {
    if(number %2 == 0){
        console.log('Esse número é par');
    }else{
        console.log('Esse número é ímpar');
    }
        readline.close;
  });