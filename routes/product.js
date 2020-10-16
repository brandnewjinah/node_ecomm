
//1
const express = require("express");
const router = express.Router();

//CRUD

// get data
router.get('/', (req, res) => {
    res.json({
        messge: "data retrieve"
    })
})

router.post('/', (req, res) => {
    const productData = {
        name: req.body.productname,
        price: req.body.productprice
    }

    res.json({
        message: "data created",
        productInfo: productData
    })
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