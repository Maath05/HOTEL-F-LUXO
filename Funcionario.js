class Funcionario {
  constructor(id, nomeUsuario, cpf, email, senha) {
    this.id = id;
    this.nome = nomeUsuario;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }
}

module.exports = Funcionario;