class Reserva {
  constructor(id, idCliente, idQuarto, dataEntrada, dataSaida, status = "pendente") {
    this.id = id;
    this.idCliente = idCliente;
    this.idQuarto = idQuarto; 
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
    this.status = status; 
  }


  mudarStatus(novoStatus) {
    this.status = novoStatus;
  }
}

module.exports = Reserva;