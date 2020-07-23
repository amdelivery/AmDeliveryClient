const express = require('express');
const router = express.Router();
const app = express();
const request = require('request');
const userName = require('../../config/keys.js').userName;
const password = require('../../config/keys.js').password;


//Item model
const Item = require('../../models/Item.js');
const Order = require('../../models/order.js');
const Category = require('../../models/category.js');
const OrderNum = require('../../models/ordernum.js');
const Feedback = require('../../models/feedback.js');


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
    request(`https://securepayments.sberbank.ru/payment/rest/register.do?userName=${userName}&password=${password}&orderNumber=${req.body.actualOrderNumber}&amount=${req.body.totalPrice}&orderBundle={%22cartItems%22:{%22items%22:[{%22positionId%22:%221%22,%22name%22:%22Доставка%22,%22tax%22:{%22taxType%22:0},%22quantity%22:{%22value%22:1,%22measure%22:%22шт%22},%22itemCode%22:%22DEL-01%22,%22itemPrice%22:1},{%22positionId%22:%222%22,%22name%22:%22Заказ%22,%22tax%22:{%22taxType%22:0},%22quantity%22:{%22value%22:1,%22measure%22:%22шт%22},%22itemCode%22:%22ORD-01%22,%22itemPrice%22:1}]}}&returnUrl=http://localhost:3000/success&failUrl=http://localhost:3000/fail`, (err, response, body) => res.send(body))
})


router.post('/feedback', (req, res) => {
    newFeedback = new Feedback({
        name: req.body.name,
        feedbackText: req.body.feedbackText
    })

    newFeedback.save().then(item => res.json(item));
})





module.exports = router;


// orderBundle={"cartItems": {"items": [{"positionId": "1", "name": "Доставка", "tax": {"taxType": 6}, "quantity": { "value": 1, "measure": "шт" }, "itemCode": "DEL-01", "itemPrice": 1}, {"positionId": "2", "name": "Заказ в ресторане KFC", "tax": {"taxType": 0}, "quantity": { "value": 1, "measure": "шт" }, "itemCode": "ORD-01", "itemPrice": 1}]}}