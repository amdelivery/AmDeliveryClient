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
    request(`https://securepayments.sberbank.ru/payment/rest/register.do?userName=${userName}&password=${password}&orderNumber=${req.body.actualOrderNumber}&amount=${req.body.totalPrice*100}&orderBundle={"cartItems": {"items": [{"positionId": "1", "name": "Доставка", "quantity": { "value": 1, "measure": "шт.absolute-center" }, "itemCode": "DEL-01", "itemPrice": 1}]}}&returnUrl=http://localhost:3000/success&failUrl=http://localhost:3000/fail`, (err, response, body) => res.send(body))
})


router.post('/feedback', (req, res) => {
    newFeedback = new Feedback({
        name: req.body.name,
        feedbackText: req.body.feedbackText
    })

    newFeedback.save().then(item => res.json(item));
})





module.exports = router;