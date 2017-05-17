let app = require("./index.js");
let db = app.get('db');


module.exports = {
    Create: function(req, res, next){
        let product = req.body;

        db.create_product([product.id, product.name, product.description, product.price, product.imageurl], function(err, result){
            console.log(err);
            res.send(result);
        })
    },
    GetOne: function(req, res, next){
        let id = req.params.id;
        db.read_product([id], function(err, product){
            res.send(product);
        })
    },
    GetAll: function(req, res, next){
        db.read_products(function(err, products){
            res.send(products);
        })
    },
    Update: function(req, res, next){
        let id = req.params.productId;
        let product = req.body;

        db.update_product([product.description, id], function(err, result){
            res.send(result);
        })

    },
    Delete: function(req, res, next){
        let id = req.params.productId;
        let product = req.body;
        db.delete_product([id], function(err, result){
            res.send(result);
        })

    }
    
}