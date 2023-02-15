const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número:', number => {
    readline.question('Digite outro número:',number2=>{
        let result = parseInt(number) * parseInt(number2);
        console.log('A multiplicação entre os dois números é:', result)
        readline.close
    })
  });