const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual é o seu nome?', name => {
    console.log('Satisfação ', name);
    readline.close();
  });