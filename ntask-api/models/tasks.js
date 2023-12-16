module.exports = app => {
  return {
    findAll : (params, callback) => {
      return callback([
        { title: "Fazer compras" },
        { title: "Comprar carro k5 branco em 2024" }
      ])
    }
  }
}