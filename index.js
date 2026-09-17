//===================== Importa outros arquivos =====================//
const Sistema       = require('./Sistema.js');
const Cliente       = require('./Cliente.js');
const Funcionario   = require('./Funcionario.js');
const Reserva       = require('./Reserva.js');
const Quartos       = require('./Quartos.js');
//=====================//=====================//=====================//

//===================== Bibliioteca para inputs =====================//
const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//=====================//=====================//=====================//



const readline = require('readline');
const Sistema = require('./Sistema');
const Cliente = require('./Cliente');
const Funcionario = require('./Funcionario');
const Quartos = require('./Quartos');

const admin = new Funcionario("F01", "admin", "111.111.111-11", "admin@hotel.com", "123");
sistema.cadastrarFuncionario(admin);

function menu() {
  const usuario = sistema.usuarioAtual;

  // 1. TELA DE VISITANTE
  if (usuario === null) {
    console.log("\n=== HOTEL F-LUXO (VISITANTE) ===");
    console.log("[1] Fazer Login");
    console.log("[2] Fazer Cadastro (Novo Cliente)");
    console.log("[3] Sair");

    rl.question("\nEscolha uma opção: ", function(opcao) {
    if (opcao === "1") {
    rl.question("Digite Email/CPF/ID: ", function(loginInput) {
    rl.question("Digite a Senha: ", function(senhaInput) {
    sistema.login(loginInput, senhaInput);
    menu();
          });
        });

      } else if (opcao === "2") {
        // CADASTRO 100% VIA ENTRADA DO USUÁRIO
        console.log("\n--- CADASTRO DE CLIENTE ---");
        rl.question("Digite o ID (ex: C01): ", function(id) {
        rl.question("Digite o Nome: ", function(nome) {
        rl.question("Data de Nascimento: ", function(data) {
        rl.question("Digite o CPF: ", function(cpf) {
        rl.question("Digite o Email: ", function(email) {
        rl.question("Digite a Senha: ", function(senha) {
                    
        const novoCliente = new Cliente(id, nome, data, cpf, email, senha);
        sistema.cadastrarCliente(novoCliente);
        console.log("\nCliente cadastrado com sucesso!");
        menu();

        });
        });
        });
        });
        });
        });

      } else if (opcao === "3") {
        sistema.sairDoPrograma();
      } else {
        console.log("Opção inválida!");
        menu();
      }
    });
