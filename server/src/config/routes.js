const https = require('https');

const getProdutoId = (id, callback) => {
  https.get('https://api.mercadolibre.com/items/'+id, (resp) => {
  let data = '';

  resp.on('data', (chunk) => { data += chunk; });
  
  resp.on('end', () => { return callback(data); });
  
  }).on("error", (err) => {});

}

const getProdutos = ( callback) => {
  https.get('https://api.mercadolibre.com/sites/MLA/search?q=query', (resp) => {
  let data = '';

  resp.on('data', (chunk) => { data += chunk; });
  
  resp.on('end', () => { return callback(data);});
  
  }).on("error", (err) => { });

}

module.exports.getProduto = getProdutos
module.exports.getId = getProdutoId