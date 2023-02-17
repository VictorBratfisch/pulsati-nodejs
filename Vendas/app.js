const { createVendedor, getVendedor, updateVendedor, deleteVendedor } = require('./controller/vendedores_controller');
const { createProduto, getProduto, updateProduto, deleteProduto } = require('./controller/produtos_controller');
const { createEstoque, getEstoque, updateEstoque, deleteEstoque, getEstoque10 } = require('./controller/estoque_controller');
const { createVenda, getVenda, getVendaAll, updateVenda, deleteVenda } = require('./controller/venda_controller');

const express = require('express');
const app = express();
app.use(express.json());


app.post('/vendedor', createVendedor);
app.get('/vendedor/:codigo', getVendedor);
app.put('/vendedor/:codigo', updateVendedor);
app.delete('/vendedor/:codigo', deleteVendedor);

app.post('/produto', createProduto);
app.get('/produto/:codigo', getProduto);
app.put('/produto/:codigo', updateProduto);
app.delete('/produto/:codigo', deleteProduto);

app.post('/estoque', createEstoque);
app.get('/estoque/:codigo', getEstoque);
app.get('/estoque', getEstoque10)
app.put('/estoque/:codigo', updateEstoque);
app.delete('/estoque/:codigo', deleteEstoque);

app.post('/venda', createVenda);
app.get('/venda/:codigo', getVenda);
app.get('/venda', getVendaAll);
app.put('/venda/:codigo', updateVenda);
app.delete('/venda/:codigo', deleteVenda);


app.listen(8000);