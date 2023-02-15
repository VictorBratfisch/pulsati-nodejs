const num = [8,9,15,16];

var sum = 0;

for(var i =0;i<num.length;i++){
   sum+=num[i];
}
let media = sum/num.length
console.log(media);

const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
   let sum = 0;
   for(i=0;i != 'pare';){
      readline.question('Digite um número:', number => {
         i = number;
         sum = number + i;
         
         readline.close
      });
      continue
   }
   console.log(sum)

