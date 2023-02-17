const Venda = require('../model/venda').Venda;

//create

exports.createVenda = async (req, res) => {
    const { codigoV, codigoP, quantidade } = req.body;
    const venda = new Venda();
    venda.codigoV = codigoV;
    venda.codigoP = codigoP;
    venda.quantidade = quantidade;

    await venda.save();
    res.json(venda);
};

//read

exports.getVenda = async (req, res) => {
    const codigo = req.params.codigo;
    const venda = await Venda.findByPk(codigo)
    res.json(venda)
}

exports.getVendaAll = async (req, res) => {
    function comparar(a, b) {
      if (a.codigo > b.codigo) return -1;
      if (a.codigo < b.codigo) return 1;
      return 0;
    }
    Venda.findAll().then((result) => res.json(result.sort(comparar)));
  };

//update

exports.updateVenda = async (req, res) => {
    const codigo = req.params.codigo;
    const venda = await Venda.findByPk(codigo)
    const { codigoV, codigoP, quantidade } = req.body;
    venda.codigoV = codigoV;
    venda.codigoP = codigoP;
    venda.quantidade = quantidade;
    await venda.save();
    res.json(venda)
}

//delete

exports.deleteVenda = async (req, res) => {
    const codigo = req.params.codigo;
    const venda = await Venda.findByPk(codigo)
    await venda.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}