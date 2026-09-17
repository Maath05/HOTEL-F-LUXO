//===================== Importa outros arquivos =====================//
const Cliente       = require('./Cliente.js');
const Funcionario   = require('./Funcionario.js');
const Reserva       = require('./Reserva.js');
const Quartos       = require('./Quartos.js');
//=====================//=====================//=====================//

//===================== Biblioteca para inputs =====================//
const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//=====================//=====================//=====================//


class Sistema {  
  constructor() {
    this.clientes = [];
    this.funcionarios = [];
    this.quartos = [];
    this.reservas = [];
    this.usuarioAtual = null;
    this.usuarioID = null;
  }

  cadastrarCliente(novoUsuario) { 
    // verificar usuario duplicado na lista de clientes
    for (const usuarioExistente of this.clientes) {
      if (usuarioExistente.email == novoUsuario.email || usuarioExistente.cpf == novoUsuario.cpf) {
        console.log("Email Ou CPF Já Cadastrado!");
        return null;
      }
    }
    // adicionar o usuario ao banco de dados
    this.clientes.push(novoUsuario);
  }

  cadastrarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }

  login(identificação, senha) {
    // junta clientes e funcionários para verificar a autenticação
    const todosUsuarios = [...this.clientes, ...this.funcionarios];

    for (const usuario of todosUsuarios) {
      if (usuario.email == identificação || usuario.id == identificação || usuario.cpf == identificação) {
        if (usuario.senha == senha) {
          console.log("Usuário Encontrado!");
          this.usuarioAtual = usuario;
          this.usuarioID = usuario.id;
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
    console.log("Encerrando Programa... Adeus!");
    rl.close();
  }

  logout(){
    this.usuarioAtual = null;
    this.usuarioID = null;
  }

  // --- Operações de Cliente ---
  fazerReserva(idQuarto, dataEntrada, dataSaida) {
    if (!(this.usuarioAtual instanceof Cliente)) return console.log("\n[!] Apenas clientes fazem reservas.");
    const idReserva = `RES-${Date.now()}`;
    const reserva = new Reserva(idReserva, this.usuarioAtual.id, idQuarto, dataEntrada, dataSaida);
    this.reservas.push(reserva);
    console.log(`\n[+] Reserva realizada com sucesso! ID: ${idReserva}`);
  }

  verMeusDados() {
    if (this.usuarioAtual) {
      console.log("\n-----------------------");
      console.log("--- Dados do Usuário --");
      console.log("-----------------------\n");
      console.log(`NOME: ${this.usuarioAtual.nome}`);
      console.log(`ANIVERSARIO: ${this.usuarioAtual.dataNascimento}`);
      console.log(`CPF: ${this.usuarioAtual.cpf}`);
      console.log(`EMAIL: ${this.usuarioAtual.email}`);
      console.log(`SENHA: ${this.usuarioAtual.senha}`);
      console.log(`ID: ${this.usuarioAtual.id}`);
    } else {
      console.log("Sem Usuario Logado");
    }
  }

  verListaQuartos() {
    if (this.usuarioAtual) {
      console.log("\n-----------------------");
      console.log("--- Lista de Quartos --");
      console.log("-----------------------\n");

      if (this.quartos.length === 0) {
        console.log("Nenhum quarto cadastrado.\n");
        return;
      }

      for (let i = 0; i < this.quartos.length; i++) {
        const q = this.quartos[i];
        console.log(`[${i + 1}] --------------------------`);
        console.log(`ID: ${q.id}`);
        console.log(`NOME: ${q.nome}`);
        console.log(`CAPACIDADE: ${q.quantidadeCamas} pessoa(s)`);
        console.log(`PREÇO: R$ ${q.precoPorNoite}`);
        console.log(`DESCRIÇÃO: ${q.descricao}`);
        console.log("--------------------------\n");
      }
    } else {
      console.log("Sem Usuario Logado");
    }
  }
}

module.exports = Sistema;
