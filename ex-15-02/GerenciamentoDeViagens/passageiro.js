class Passageiros {
  passageiros = [];

  addPassageiro(nome_passageiro, codigo_vooP) {
    this.passageiros.push(new Passsageiro(nome_passageiro, codigo_vooP));
  }
}
class Passageiro {
    nome_passageiro 
    codigo_vooP
  
    constructor(nome_passageiro, codigo_vooP) {
      this.nome_passageiro = nome_passageiro;
      this.codigo_vooP = codigo_vooP;
    }
    getPassageiroNome() {
      return `${this.nome_passageiro} ${this.codigo_vooP}`;
}
}
const fs = require('fs');
  exports.salvarPassageiro = (nomeArquivo, texto) => {
      const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
          fs.writeFile(nomeArquivo, texto, (erro) => {
            if (erro) {
              reject(erro);
            } else {
              resolve();
            }
          });
        }, Math.random(3));
      });
      return promessa;
    }

    exports.lerPassageiro = (nomeArquivo) => {
      const promessa = new Promise((resolve, reject) => {
        fs.readFile(nomeArquivo, 'utf-8', (erro, texto) => {
        if (erro) {
          reject(erro);
        } else {
          resolve(texto);
        }
        })
      });
      return promessa;
    }
exports.Passageiro = Passageiro;
