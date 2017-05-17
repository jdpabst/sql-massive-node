const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const productsCtrl = require('./productsCtrl');
const session = require('express-session');

let app = module.exports = express();

app.use(bodyParser.json())
let massiveInstance = massive.connectSync({
    connectionString: 'postgres://pksgswsfqnxakt:68581d1ba2173baf099548711a331bfaa8fe27337193699d6c08d7ffa4d0a9c1@ec2-23-21-220-23.compute-1.amazonaws.com:5432/d3hj1aapn7t4ur?ssl=true'
});


app.set('db', massiveInstance);
let db = app.get('db');


app.get('/api/products', productsCtrl.GetAll);
app.get('/api/product', productsCtrl.GetOne);
app.put('/api/product/:productId', productsCtrl.Update);
app.post('/api/product', productsCtrl.Create);
app.delete('/api/product/:productId', productsCtrl.Delete);











app.listen(3000, console.log('listening on port 3000'))