const { createSala, getSala, updateSala, deleteSala } = require('./controller/sala_controller');
const { createSessao, getSessao, updateSessao, emitirIngresso, deleteSessao } = require('./controller/sessao_controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/sala', createSala);
app.get('/sala/:codigo', getSala);
app.put('/sala/:codigo', updateSala);
app.delete('/sala/:codigo', deleteSala);

app.post('/sessao', createSessao);
app.get('/sessao/:codigo', getSessao);
app.put('/sessao/:codigo', updateSessao);
app.put('/sessao/:codigo', emitirIngresso);
app.delete('/sessao/:codigo', deleteSessao);

app.listen(8000);