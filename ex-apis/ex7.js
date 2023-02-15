const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número para saber se é primo:', number => {
        for (let i = 2; i <= number; i++)
          if (number % i === 0) {
            console.log('Não é um número primo');
          }else{
            console.log('É número primo');  
          }
    readline.close
  });