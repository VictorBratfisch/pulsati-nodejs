const Produto = require('../model/produtos').Produto;

//create

exports.createProduto = async (req, res) => {
    const { nome, marca, descricao, preco } = req.body;
    const produto = new Produto();
    produto.nome = nome;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.preco = preco;

    await produto.save();
    res.json(produto);
};

//read

exports.getProduto = async (req, res) => {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo)
    res.json(produto)
}

//update

exports.updateProduto = async (req, res) => {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo)
    const { nome, marca, descricao, preco } = req.body;
    produto.nome = nome;
    produto.marca = marca;
    produto.descricao = descricao;
    produto.preco = preco;
    await produto.save();
    res.json(produto)
}

//delete

exports.deleteProduto = async (req, res) => {
    const codigo = req.params.codigo;
    const produto = await Produto.findByPk(codigo)
    await produto.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}