const { createPassageiro, getPassageiro, updatePassageiro, deletePassageiro } = require('./controller/passageiro_controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/passageiros', createPassageiro);
app.get('/passageiros/:codigo', getPassageiro);
app.put('/passageiros/:codigo', updatePassageiro);
app.delete('/passageiros/:codigo', deletePassageiro);

app.listen(8000);