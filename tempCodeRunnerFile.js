//===================== Importa outros arquivos =====================//
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


class Sistema {  
  constructor() {
    // lista com os usuarios
    this.usuarios = [];
  }

  cadastrarUsuario(usuario) {
    listaVerificar=[];

    // verificar usuario duplicado
    for(const usuario of this.usuarios){
        if(usuario.email==listaVerificar[4] || usuario.cpf==listaVerificar[3]){
            console.log("Usuário Já Cadastrado!");
        }
    }
    this.usuarios.push(usuario);
  }

  login(identificação, senha) {

    for (const usuario of this.usuarios) {
      
      if (usuario.email == identificação || usuario.id == identificação || usuario.cpf == identificação) {
        if (usuario.senha == senha) {
          console.log("Usuário Encontrado!");
          return usuario;
        } else {
          console.log("Senha Incorreta!");
          return null; 
        }
      }
    }

    console.log("Usuário Não Encontrado");
    return null;
  }

  sairDoPrograma(){
    //caixa preta
  }

  verMeusDados() {
    // 1. Usamos 'rl' (sua interface)
    // 2. Passamos a Arrow Function completa: (email) => { ... }
    rl.question("Digite seu e-mail: ", (email) => {
      
      // Busca o usuário na lista
      const usuarioEncontrado = this.usuarios.find(u => u.email === email);

      if (usuarioEncontrado) {
        console.log("\n--- Dados do Usuário ---");
        console.log(`Nome: ${usuarioEncontrado.nome}`);
        console.log(`CPF: ${usuarioEncontrado.cpf}`);
      } else {
        console.log("Usuário não encontrado.");
      }

      rl.close(); // Fecha o leitor do terminal
    });
  }
}

const sistema = new sistema();

const cliente1 = new Cliente("Matheus", "05-05-2006", "184.632.287-12", "matheusvianagomes1@gmail.com", "pimbolim123", "1234567890");

sistema.cadastrarUsuario(cliente1);

console.log("--- Teste 1: E-mail e Senha Corretos ---");
sistema.login("matheusvianagomes1@gmail.com", "pimbolim123");
