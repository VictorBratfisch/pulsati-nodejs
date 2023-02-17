const { createAutor, getAutor, updateAutor, deleteAutor } = require('./controller/autores_controller');

const express = require('express');
const app = express();
app.use(express.json());

app.post('/autor', createAutor);
app.get('/autor/:codigo', getAutor);
app.put('/autor/:codigo', updateAutor);
app.delete('/autor/:codigo', deleteAutor);

app.listen(8001);