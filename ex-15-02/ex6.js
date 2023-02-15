const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número para saber a tabuada:', number => {
    for(i = 1;i <= 10;i++){
        mult = number * i;
        console.log(number,'x',i,'=', mult);
    }
    readline.close
  });