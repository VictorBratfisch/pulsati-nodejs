const Estoque = require('../model/estoque').Estoque;

//create

exports.createEstoque = async (req, res) => {
    const { codigoP, quantidade } = req.body;
    const estoque = new Estoque();
    estoque.codigoP = codigoP;
    estoque.quantidade = quantidade;
    await estoque.save();
    res.json(estoque);
};

//read

exports.getEstoque = async (req, res) => {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo)
    res.json(estoque)
}

exports.getEstoque10 = async (req, res) => {
       if(this.getEstoque.res.json < 10){
          
       }
      }
//update

exports.updateEstoque = async (req, res) => {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo)
    const { codigoP, quantidade } = req.body;
    estoque.nome = nome;
    estoque.marca = marca;
    await estoque.save();
    res.json(estoque)
}

//delete

exports.deleteEstoque = async (req, res) => {
    const codigo = req.params.codigo;
    const estoque = await Estoque.findByPk(codigo)
    await estoque.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}