const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número para saber o fatorial:', number => {
    const fatorial = n => {
        if(n > 1){
            return n * fatorial(n - 1)
        }
        return n
    }
    console.log(n);
    readline.close
  });