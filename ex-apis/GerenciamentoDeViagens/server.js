const http = require('http');
const Passageiro = require('./passageiro').Passageiro;
const salvarPassageiro = require('./passageiro').salvarPassageiro;
const Aeroporto = require('./aeroporto').Aeroporto;
const salvarAeroporto = require('./aeroporto').salvarAeroporto;
const Voo = require('./voo').Voo;
const salvarVoo = require('./voo').salvarVoo;


//server passageiro
http.createServer((req, res) => {
  if (req.method == 'POST') {
    if (req.url.indexOf('/passageiros') >= 0) {
      var body = "";
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        const passageiros = JSON.parse(body);
        const passageiro = new Passageiro (passageiros.nome_passageiro, passageiros.codigo_vooP)
        console.log(passageiro.getPassageiroNome());
        const passageiroJson = JSON.stringify(passageiro)
        salvarPassageiro(passageiro.nome_passageiro +'.json', passageiroJson)
        res.writeHead(201, {
            'Content-Type': 'application/json'
        })
        res.end(passageiroJson);
      });
    } else {
      res.end('Not found');
    }
  } else {
    res.end('Not found');
  }
}).listen(8000, () => console.log('Servidor inicializado na porta 8000'));
  
  //server aeroporto
  http.createServer((req, res) => {
    if (req.method == 'POST') {
      if (req.url.indexOf('/aeroportos') >= 0) {
        var body = "";
        req.on('data', function (chunk) {
          body += chunk;
        });
        req.on('end', function () {
          const aeroportos = JSON.parse(body);
          const aeroporto = new Aeroporto (aeroportos.nome, aeroportos.codigo, aeroportos.endereco)
          console.log(aeroporto.getAeroportoNome());
          const aeroportoJson = JSON.stringify(aeroporto)
          salvarAeroporto(aeroporto.nome +'.json', aeroportoJson)
          res.writeHead(201, {
              'Content-Type': 'application/json'
          })
          res.end(aeroportoJson);
        });
      } else {
        res.end('Not found');
      }
    } else {
      res.end('Not found');
    }
}).listen(8001, () => console.log('Servidor inicializado na porta 8001'));

//server voo
http.createServer((req, res) => {
    if (req.method == 'POST') {
      if (req.url.indexOf('/voos') >= 0) {
        var body = "";
        req.on('data', function (chunk) {
          body += chunk;
        });
        req.on('end', function () {
          const voos = JSON.parse(body);
          const voo = new Voo (voos.codigo_voo, voos.aeroporto_origem, voos.aeroporto_destino, voos.empresa)
          console.log(voo.getVooNome());
          const vooJson = JSON.stringify(voo)
          salvarVoo(voo.codigo_voo +'.json', vooJson)
          res.writeHead(201, {
              'Content-Type': 'application/json'
          })
          res.end(vooJson);
        });
      } else {
        res.end('Not found');
      }
    } else {
      res.end('Not found');
    }
}).listen(8002, () => console.log('Servidor inicializado na porta 8002'));