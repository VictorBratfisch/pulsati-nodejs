const Vendedor = require('../model/vendedores').Vendedor;

//create

exports.createVendedor = async (req, res) => {
    const { nome, cpf, telefone, endereco } = req.body;
    const vendedor = new Vendedor();
    vendedor.nome = nome;
    vendedor.cpf = cpf;
    vendedor.telefone = telefone;
    vendedor.endereco = endereco;

    await vendedor.save();
    res.json(vendedor);
};

//read

exports.getVendedor = async (req, res) => {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo)
    res.json(vendedor)
}

//update

exports.updateVendedor = async (req, res) => {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo)
    const { nome, cpf, telefone, endereco } = req.body;
    vendedor.nome = nome;
    vendedor.cpf = cpf;
    vendedor.telefone = telefone;
    vendedor.endereco = endereco;
    await vendedor.save();
    res.json(vendedor)
}

//delete

exports.deleteVendedor = async (req, res) => {
    const codigo = req.params.codigo;
    const vendedor = await Vendedor.findByPk(codigo)
    await vendedor.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}