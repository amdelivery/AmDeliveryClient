const express = require('express');
const router = express.Router();


//Item model
const Item = require('../../models/Item.js');
const Order = require('../../models/order.js');
const Category = require('../../models/category.js');
const OrderNum = require('../../models/category.js');

//@route GET api/items
//@desc get all items
//@acess public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

router.get('/ordernum', (req, res) => {
    OrderNum.find()
            .then(items => res.json(items))
})

router.post('/ordernum', (req, res) => {
    OrderNum.findByIdAndUpdate(req.body.id, {number: +number + 1})         //Тестовый, доработать
            .then(res => console.log("Актуальный номер заказа изменен"))
})

router.get('/categories', (req, res) => {
    Category.find().sort({weight: 1})
                   .then(items => res.json(items))
});

//@route POST api/items
//@desc create new item
//@acess public
router.post('/', (req, res) => {
    newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc  delete item
//@acess public
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





module.exports = router;