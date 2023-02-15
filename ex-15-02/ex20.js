const imprimirString = ({
    nome, 
    sobrenome = 'Não informado', 
    time = 'Não informado' }) => {
    console.log(`${nome} ${sobrenome} torce para o ${time}`);
  }
  
  imprimirString({nome: 'Victor', sobrenome: 'Bratfisch', time: 'Flamengo'});