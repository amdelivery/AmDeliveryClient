const express = require('express');
const router = express.Router();
const app = express();
const request = require('request');


//Item model
const Item = require('../../models/Item.js');
const Order = require('../../models/order.js');
const Category = require('../../models/category.js');
const OrderNum = require('../../models/ordernum.js');


router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

router.get('/ordernum', (req, res) => {
    OrderNum.find()
            .then(item => res.json(item))
})

router.post('/ordernum', (req, res) => {
    OrderNum.findByIdAndUpdate(req.body.actualOrderNumberId, {number: req.body.actualOrderNumber});
})

router.get('/categories', (req, res) => {
    Category.find().sort({weight: 1})
                   .then(items => res.json(items))
});


router.post('/', (req, res) => {
    newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

router.post('/order', (req, res) => {
    newOrder = new Order({
        date: req.body.date,
        adress: req.body.adress,
        phone: req.body.phone,
        comment: req.body.comment,
        items: req.body.items,
        cost: req.body.cost,
        accepted: false
    })

    newOrder.save().then(item => res.json(item));
})

router.post('/req', (req, res) => {
    request(`https://3dsec.sberbank.ru/payment/rest/register.do?token=8b9is22thmgkl78gt5st61tnrp&orderNumber=${req.body.actualOrderNumber}&amount=${req.body.totalPrice}&returnUrl=http://localhost:3000/success&failUrl=http://localhost:3000/fail`, (err, response, body) => res.send(body))
})





module.exports = router;