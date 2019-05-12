const restful = require('node-restful')
const mongoose = restful.mongoose

const ProdutosSchema = new mongoose.Schema({
    author: [{
      name: {type: String, required: false},
      lastname: {type: String, required: false},
    }],
    // categories: {type: Array[String], required: false},
    items: [{
      id: {type: String, required: false},
      title: {type: String, required: false},
      price: [{
        currency: {type: String, required: false},
        amount: {type: Number, required: false},
        decimals: {type: Number, required: false},
      }],
      picture: {type: String, required: false},
      condition: {type: String, required: false},
      free_shiping: {type: String, required: false},
    }]
})

const ProdutosIdSchema = new mongoose.Schema({
  author: [{
    name: {type: String, required: false},
    lastname: {type: String, required: false},
  }],
  // categories: {type: Array[String], required: false},
  items: [{
    id: {type: String, required: false},
    title: {type: String, required: false},
    price: [{
      currency: {type: String, required: false},
      amount: {type: Number, required: false},
      decimals: {type: Number, required: false},
    }],
    picture: {type: String, required: false},
    condition: {type: String, required: false},
    free_shiping: {type: String, required: false},
    sold_quantity: {type: String, required: false},
    description: {type: String, required: false}
  }]
})

module.exports = restful.model('Produto', ProdutosSchema)
module.exports = restful.model('ProdutoId', ProdutosIdSchema)