const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Send one number:', number => {
    readline.question('Send other number:',number2=>{
        let result = parseInt(number) + parseInt(number2);
        console.log('The sum of two number is:', result)
        readline.close
    })
  });