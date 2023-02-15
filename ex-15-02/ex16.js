const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
      
readline.question('Digite uma palavra para ver se é palindromo:', str => {
    let str2 = str.split('').reverse().join('');
    if(str == str2){
     console.log('É palindromo');
    }else{
     console.log('Não é palndromo');
    }
    readline.close();
});