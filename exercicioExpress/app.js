const express = require('express');
const Aeroporto = require('./aeroporto').Aeroporto;
const Empresa = require('./empresa').Empresa;
const app = express();
app.use(express.json());

const aeroportos = [];
const empresas = [];
let proximoCodigo = 1;

//POST

app.post('/aeroporto', (req, res) => {
    const { nome } = req.body;
    const aeroporto = new Aeroporto(nome, proximoCodigo);
    proximoCodigo = proximoCodigo + 1;
    aeroportos.push(aeroporto);
    res.json(aeroporto);
  });

  app.post('/empresa', (req, res) => {
    const { nomeE } = req.body;
    const empresa = new Empresa(nomeE, proximoCodigo);
    proximoCodigo = proximoCodigo + 1;
    empresas.push(empresa);
    res.json(empresa);
  });

  //GET

  app.get('/aeroporto/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const aeroporto = aeroportos.find(aeroporto => aeroporto.codigo == codigo);
    res.json(aeroporto);
  });

  app.get('/aeroporto', (req, res) => {
    res.json(aeroportos);
  });



  app.get('/empresa/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const empresa = empresas.find(empresa => empresa.codigo == codigo);
    res.json(empresa);
  });

  app.get('/empresa', (req, res) => {
    res.json(empresas);
  });


  //PUT

  app.put('/aeroporto/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const aeroporto = aeroportos.find(aeroporto => aeroporto.codigo == codigo);
    const { nome } = req.body;
    aeroporto.nome = nome;
    res.json(aeroporto);
  });

  app.put('/empresa/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    const empresa = empresas.find(empresa => empresa.codigo == codigo);
    const { nomeE } = req.body;
    empresa.nomeE = nomeE;
    res.json(empresa);
  });

  //DELETE

  app.delete('/aeroporto/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let posicao;
    aeroportos.forEach((aeroporto, index) => {
        if(aeroporto.codigo == codigo){
            posicao = index;
        }
    });
    delete aeroportos[posicao];
    res.json({ data: 'Deletado com Sucesso' });
  })


  app.delete('/empresa/:codigo', (req, res) => {
    const codigo = req.params.codigo;
    let posicao;
    empresas.forEach((empresa, index) => {
        if(empresa.codigo == codigo){
            posicao = index;
        }
    });
    delete empresas[posicao];
    res.json({ data: 'Deletado com Sucesso' });
  })

app.listen(8000);