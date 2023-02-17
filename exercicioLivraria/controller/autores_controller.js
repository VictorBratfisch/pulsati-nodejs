const Autor = require('../model/autores').Autor;

//create

exports.createAutor = async (req, res) => {
    const { nome, sobrenome, data_nascimento } = req.body;
    const autor = new Autor();
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.data_nascimento = data_nascimento;
    await autor.save();
    res.json(autor);
};

//read

exports.getAutor = async (req, res) => {
    const codigo = req.params.codigo;
    const autor = await Autor.findByPk(codigo)
    res.json(autor)
}

//update

exports.updateAutor = async (req, res) => {
    const codigo = req.params.codigo;
    const autor = await Autor.findByPk(codigo)
    const { nome, sobrenome, data_nascimento } = req.body;
    autor.nome = nome;
    autor.sobrenome = sobrenome;
    autor.data_nascimento = data_nascimento;
    await autor.save();
    res.json(autor)
}

//delete

exports.deleteAutor = async (req, res) => {
    const codigo = req.params.codigo;
    const autor = await Autor.findByPk(codigo)
    await autor.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}