const { menuAeroporto, menuVoo, menuPassageiro } = require("./menu");

    const menuA = require("./menu").menuAeroporto;
    const menuP = require("./menu").menuPassageiro;
    const menuV = require("./menu").menuVoo;

    const aeroportos = [];
    const passageiros = [];
    const voos = [];

    const atendimentoUsuario = require("readline").createInterface({
        input:process.stdin,
        output:process.stdout,
    })

    const atendimentoMenu = function() {
        atendimentoUsuario.question(
            "################## Atendimento iniciado ################## \n1-adicionarAeroporto \n2-adicionarVoo \n3-adicionarPassageiro) \n0 - Sair \nInforme o número do atendimento desejado: ",
            function(opcaoEscolhida){
                if(opcaoEscolhida == 1){
                    menuAeroporto1();
                }else if(opcaoEscolhida == 2){
                    menuVoo1 ();
                }else if(opcaoEscolhida == 3){
                    menuPassageiro1();
                }else if (opcaoEscolhida == 0) {
                    console.log("Saindo do programa");
                    readLine.close();
                  } else {
                    console.log("Opção inválida\n");
                    atendimentoMenu();
            }
        }
      )
    }
    
    atendimentoMenu();

    const menuAeroporto1 = () => {
        atendimentoUsuario.question("Qual o número do aeroporto? ", (nome) => {
            atendimentoUsuario.question("Qual o código do aeroporto? ", (codigo) => {
              atendimentoUsuario.question(
                "Qual o endereço do aeroporto? ",
                (endereco) => {
                  aeroportos.push(menuA.addAeroporto(nome, codigo, endereco));
                  console.log(`Aeroporto criado com sucesso---------------- `);
                  console.log(aeroportos);
                  atendimentoMenu();
                }
              );
            });
          });
        };
        
        const menuVoo1 = () => {
          atendimentoUsuario.question("Qual o código do Vôo? ", (codigo_voo) => {
            atendimentoUsuario.question(
              "Qual o código do aeroporto de origem? ",
              (aeroporto_origem) => {
                atendimentoUsuario.question(
                  "Qual o código do aeroporto de destino? ",
                  (aeroporto_destino) => {
                    atendimentoUsuario.question(
                      "Qual o nome da empresa Aérea? ",
                      (empresa) => {
                        voos.push(
                          menuV.addVoo(
                            codigo_voo,
                            aeroporto_origem,
                            aeroporto_destino,
                            empresa
                          )
                        );
                        console.log(`Vôo criado com sucesso---------------- `);
                        console.log(voos);
                        atendimentoMenu();
                      }
                    );
                  }
                );
              }
            );
          });
        };
        
        
        const menuPassageiro1 = () => {
          atendimentoUsuario.question("Qual o número do aeroporto? ", (nome_passageiro) => {
            atendimentoUsuario.question("Qual o código do aeroporto? ", (codigo_vooP) => {
              
                  passageiros.push(menuP.addPassageiro(nome_passageiro, codigo_vooP));
                  console.log(`Passageiro criado com sucesso---------------- `);
                  console.log(passageiros);
                  atendimentoMenu();
                }
              );
          });
        };
