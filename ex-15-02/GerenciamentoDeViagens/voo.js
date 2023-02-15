class Voos {
    passageiros = [];
  
    addPassageiro(codigo_voo, aeroporto_origem, aeroporto_destino, empresa) {
      this.voos.push(new Voo(codigo_voo, aeroporto_origem, aeroporto_destino, empresa));
    }
  }
class Voo {
    codigo_voo 
    aeroporto_origem
    aeroporto_destino
    empresa
  
    constructor(codigo_voo, aeroporto_origem, aeroporto_destino, empresa) {
     this.codigo_voo = codigo_voo;
     this.aeroporto_origem = aeroporto_origem;
     this.aeroporto_destino = aeroporto_destino;
     this.empresa = empresa;
    }
    getVooNome() {
        return `${this.codigo_voo} ${this.aeroporto_origem} ${this.aeroporto_destino} ${this.empresa}`;
  }
  }
  const fs = require('fs');
    exports.salvarVoo = (nomeArquivo, texto) => {
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

      exports.lerVoo = (nomeArquivo) => {
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
exports.Voo = Voo;
