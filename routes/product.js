
//1
const express = require("express");
const router = express.Router();
const productModel = require("../models/product")

//CRUD

// get data
router.get('/', (req, res) => {
    productModel
        .find()
        .then(docs => {
            res.json({
                msg: "get total product",
                count: docs.length,
                products: docs
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        });
})

router.post('/', (req, res) => {
    // const productData = {
    //     name: req.body.productname,
    //     price: req.body.productprice
    // }

   const newProduct = new productModel({
        name: req.body.productname,
        price: req.body.productprice
    })

    newProduct
        .save()
        .then(product => {
            res.json({
                msg: "saved product",
                productInfo: product
            })
        })
        .catch(err => {
            res.json({
                msg: err.message
            })
        })

    // res.json({
    //     message: "data created",
    //     productInfo: newProduct
    // })
})

router.put('/', (req, res) => {
    res.json({
        message: "data updated"
    })
})

router.delete('/', (req, res) => {
    res.json({
        message: "data deleted"
    })
})

//2
module.exports = router;