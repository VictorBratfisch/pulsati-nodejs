const Sala = require('../model/sala').Sala;

//create

exports.createSala = async (req, res) => {
    const { nomeSala, capacidade } = req.body;
    const sala = new Sala();
    sala.nomeSala = nomeSala;
    sala.capacidade = capacidade;

    await sala.save();
    res.json(sala);
};

//read

exports.getSala = async (req, res) => {
    const codigo = req.params.codigo;
    const sala = await Sala.findByPk(codigo)
    res.json(sala)
}

//update

exports.updateSala = async (req, res) => {
    const codigo = req.params.codigo;
    const sala = await Sala.findByPk(codigo)
    const {nomeSala, capacidade } = req.body;
    sala.nomeSala = nomeSala;
    sala.capacidade = capacidade;
    await sala.save();
    res.json(sala)
}

//delete

exports.deleteSala = async (req, res) => {
    const codigo = req.params.codigo;
    const sala = await Sala.findByPk(codigo)
    await sala.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}