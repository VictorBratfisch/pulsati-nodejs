const Passageiro = require('../model/passageiro').Passageiro;

//create

exports.createPassageiro = async (req, res) => {
    const { nome } = req.body;
    const passageiro = new Passageiro();
    passageiro.nome = nome;
    await passageiro.save();
    res.json(passageiro);
};

//read

exports.getPassageiro = async (req, res) => {
    const codigo = req.params.codigo;
    const passageiro = await Passageiro.findByPk(codigo)
    res.json(passageiro)
}

//update

exports.updatePassageiro = async (req, res) => {
    const codigo = req.params.codigo;
    const passageiro = await Passageiro.findByPk(codigo)
    const { nome } = req.body;
    passageiro.nome = nome;
    await passageiro.save();
    res.json(passageiro)
}

//delete

exports.deletePassageiro = async (req, res) => {
    const codigo = req.params.codigo;
    const passageiro = await Passageiro.findByPk(codigo)
    await passageiro.destroy();
    res.json({ data: 'Passageiro deletado com sucesso!' })
}