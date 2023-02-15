class Aeroportos {
  aeroportos = [];

  addAeroporto(nome, codigo, endereco) {
    this.aeroportos.push(new Aeroporto(nome, codigo, endereco));
  }
}
class Aeroporto {
    nome 
    codigo
    endereco
  
    constructor(nome, codigo, endereco) {
      this.nome = nome;
      this.codigo = codigo;
      this.endereco = endereco;
    }
    getAeroportoNome() {
      return `${this.nome} ${this.codigo} ${this.endereco}`;
}
}
const fs = require('fs');
  exports.salvarAeroporto = (nomeArquivo, texto) => {
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
exports.Aeroporto = Aeroporto;
