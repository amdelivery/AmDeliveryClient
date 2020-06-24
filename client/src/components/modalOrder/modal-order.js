import React from 'react';
import './modal-order.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getAdress, getComment} from '../../actions/itemActions.js';
import axios from 'axios';


const ModalOrder = ({clearCurrentOrder, currentOrder, totalPrice, getAdress, getPhone, getComment}) => {

     return (
            <div className="modal-order">  
                <div className="modal-order-form">
                    <div className="modal-order-form__close" onClick={(e) => clearCurrentOrder(e)}>X</div>
                    <input onChange={(e) => getPhone(e.target.value)} className="modal-order-form__input__phone" type="text" placeholder="Введите номер телефона"/>
                    <input onChange={(e) => getAdress(e.target.value)} className="modal-order-form__input__adress" type="text" placeholder="Введите адрес доставки"/>
                    <textarea onChange={(e) => getComment(e.target.value)} className="modal-order-form__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Добавьте комментарии к заказу"></textarea>
                    <button className="modal-order-form__button" onClick={(e) => {
                        axios.post('/api/order', currentOrder)
                        .then(res => (res.status === 200) ? alert('Ваш заказ отправлен') : alert('ошибка'))
                        .then(() => clearCurrentOrder() )}}>Оплатить заказ</button>
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


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getAdress, getComment})(ModalOrder);