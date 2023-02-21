const Sessao = require('../model/sessao').Sessao;
//create

exports.createSessao = async (req, res) => {
    const { data, horario, nomeFilme, valor, ingressosVendidos, codSala } = req.body;
    const sessao = new Sessao();
    sessao.data = data;
    sessao.horario = horario;
    sessao.nomeFilme = nomeFilme;
    sessao.valor = valor;
    sessao.ingressosVendidos = ingressosVendidos;
    sessao.codSala = codSala;

    await sessao.save();
    res.json(sessao);
};

//read

exports.getSessao = async (req, res) => {
    const codigo = req.params.codigo;
    const sessao = await Sessao.findByPk(codigo)
    res.json(sessao)
}

//update

exports.updateSessao = async (req, res) => {
    const codigo = req.params.codigo;
    const sessao = await Sessao.findByPk(codigo)
    const { data, horario, nomeFilme, valor, ingressosVendidos, codSala } = req.body;
    sessao.data = data;
    sessao.horario = horario;
    sessao.nomeFilme = nomeFilme;
    sessao.valor = valor;
    sessao.ingressosVendidos = ingressosVendidos;
    sessao.codSala = codSala;
    await sessao.save();
    res.json(sessao)
}

exports.emitirIngresso = async (req, res) => {
    const id = req.params.id;
    const sessao = await Sessao.findByPk(id);
    if (sessao.ingressosVendidos >= 15) {
      res.json({Error:422,
        data: "Sessao esgotada, não foi possível a venda do ingresso!",
      });
      await sessao.save();
    } else {
      sessao.ingressosVendidos++;
      await sessao.save();
      res.json(sessao);
    }
  };

//delete

exports.deleteSessao = async (req, res) => {
    const codigo = req.params.codigo;
    const sessao = await Sessao.findByPk(codigo)
    await sessao.destroy();
    res.json({ data: 'Autor deletado com sucesso!' })
}