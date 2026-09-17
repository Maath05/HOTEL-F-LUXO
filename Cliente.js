class Cliente {
  constructor(nome, dataNascimento, cpf, email, senha, id) {
    
    this.id = id;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.cpf = cpf;
    this.email = email;
    this.senha = senha;
  }

}

module.exports = Cliente;