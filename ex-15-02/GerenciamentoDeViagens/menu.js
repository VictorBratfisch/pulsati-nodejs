let Aeroporto = require('./aeroporto').Aeroporto;
let Passageiro = require('./passageiro').Passsageiro;
let Voo = require('./voo').Voo;

class menuAeroporto extends Aeroporto{
    static addAeroporto(nome, codigo, endereco){
        let aeroporto = new Aeroporto(nome, codigo, endereco);
        return aeroporto;
    }
}

class menuPassageiro extends Passageiro{
    static addPassageiro(nome_passageiro, codigo_vooP){
        let passageiro = new Passageiro(nome_passageiro, codigo_vooP);
        return passageiro;
    }
}

class menuVoo extends Voo{
    static addVoo(
        codigo_voo, 
        aeroporto_origem, 
        aeroporto_destino,
        empresa
        ){
        let newvoo = new Voo(codigo_voo, 
            aeroporto_origem, 
            aeroporto_destino,
            empresa);
        return newvoo;
    }
}

exports.menuAeroporto = menuAeroporto;
exports.menuVoo = menuVoo;
exports.menuPassageiro = menuPassageiro;