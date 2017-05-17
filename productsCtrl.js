let app = require("./index.js");
// let db = app.get('db');
// console.log(db);

module.exports = {
    Create: function(req, res, next){
        let product = req.body;

        db.create_product([product.Name, product.Description, product.Price, product.Imageurl], function(err, result){
            console.log(err);
            res.send(result);
        })
    },
    GetOne: function(req, res, next){
        db.read_product(function(err, product){
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

        db.update_products([product.Description, id], function(err, result){
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