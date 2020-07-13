import React from 'react';
import './modal-order.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getAdress, getComment, testEq} from '../../actions/itemActions.js';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ModalOrder = ({clearCurrentOrder, currentOrder, totalPrice, getAdress, getPhone, getComment, testEq}) => {

     return (
            <div className="modal-order">  
                <div className="modal-order-form">
                    <div className="modal-order-form__close" onClick={(e) => clearCurrentOrder(e)}>X</div>
                    <input onChange={(e) => getPhone(e.target.value)} className="modal-order-form__input__phone" type="text" placeholder="Введите номер телефона"/>
                    <input onChange={(e) => getAdress(e.target.value)} className="modal-order-form__input__adress" type="text" placeholder="Введите адрес доставки"/>
                    <textarea onChange={(e) => getComment(e.target.value)} className="modal-order-form__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Добавьте комментарии к заказу"></textarea>
                    <button className="modal-order-form__button" onClick={(e) => testEq(currentOrder.number, currentOrder.cost)}> Оплатить банковской картой</button>
                </div>
            </div>
            
        )
    
}

const mapStateToProps = ({currentOrder, totalPrice}) => {
    return {
        currentOrder,
        totalPrice
    }
}


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getAdress, getComment, testEq})(ModalOrder);

// {/* <button className="modal-order-form__button" onClick={(e) => {
//                         axios.post('/api/order', currentOrder)
//                         .then(res => (res.status === 200) ? alert('Ваш заказ отправлен') : alert('ошибка'))
//                         .then(() => clearCurrentOrder() )}}>Оплатить банковской картой</button> */}