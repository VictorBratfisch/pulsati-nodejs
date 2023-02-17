const { createAutor, getAutor, updateAutor, deleteAutor } = require('./controller/autores_controller');
const {createEditora, getEditora, updateEditora, deleteEditora} = require('./controller/editora_controller')

const express = require('express');
const app = express();
app.use(express.json());

app.post('/autor', createAutor);
app.get('/autor/:codigo', getAutor);
app.put('/autor/:codigo', updateAutor);
app.delete('/autor/:codigo', deleteAutor);

app.post('/editora', createEditora);
app.get('/editora/:codigo', getEditora);
app.put('/editora/:codigo', updateEditora);
app.delete('/editora/:codigo', deleteEditora);

app.listen(8001);