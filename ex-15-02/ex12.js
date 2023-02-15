const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Escreva algo:', str => {
    let div = str.split(" ")
    let div2 = div.split("")
    console.log(div2[0])
    readline.close();
  });