const mongoose = require('mongoose')

const ProdutosSchema = new mongoose.Schema({
    author: [{
      name: {type: String},
      lastname: {type: String},
    }],
    categories: {type: Array},
    items: [{
      id: {type: String},
      title: {type: String},
      price: [{
        currency: {type: String},
        amount: {type: Number},
        decimals: {type: Number},
      }],
      picture: {type: String},
      condition: {type: String},
      free_shiping: {type: String},
    }]
})

const ProdutosIdSchema = new mongoose.Schema({
  author: {
    name: {type: String},
    lastname: {type: String},
  },
  items: {
    id: {type: String},
    title: {type: String},
    price: {
      currency: {type: String},
      amount: {type: Number},
      decimals: {type: Number},
    },
    picture: {type: String},
    condition: {type: String},
    free_shiping: {type: String},
    sold_quantity: {type: String},
    description: {type: String}
  }
})

module.exports = mongoose.model('Produto', ProdutosSchema)
module.exports = mongoose.model('ProdutoId', ProdutosIdSchema)