const Mercado = require('./mercado')

Mercado.methods(['get', 'post', 'put', 'delete'])
Mercado.updateOptions({new: true, runValidators: true})

module.exports = Mercado