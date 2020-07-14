import React from 'react';
import './modal-order.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getAdress, getComment, payRequest, closeModal} from '../../actions/itemActions.js';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ModalOrder = ({closeModal ,currentOrder, totalPrice, getAdress, getPhone, getComment, payRequest, actualOrderNumber, actualOrderNumberId}) => {

     return (
            <div className="modal-order">  
                <div className="modal-order-form">
                    <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>X</div>
                    <input onChange={(e) => getPhone(e.target.value)} className="modal-order-form__input__phone" type="text" placeholder="Введите номер телефона"/>
                    <input onChange={(e) => getAdress(e.target.value)} className="modal-order-form__input__adress" type="text" placeholder="Введите адрес доставки"/>
                    <textarea onChange={(e) => getComment(e.target.value)} className="modal-order-form__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Добавьте комментарии к заказу"></textarea>
                    <button className="modal-order-form__button" onClick={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, currentOrder)}> Оплатить банковской картой</button>
                </div>
            </div>
            
        )
    
}

const mapStateToProps = ({currentOrder, totalPrice, actualOrderNumber, actualOrderNumberId}) => {
    return {
        currentOrder,
        totalPrice,
        actualOrderNumber,
        actualOrderNumberId,
    }
}


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getAdress, getComment, payRequest, closeModal})(ModalOrder);

// {/* <button className="modal-order-form__button" onClick={(e) => {
//                         axios.post('/api/order', currentOrder)
//                         .then(res => (res.status === 200) ? alert('Ваш заказ отправлен') : alert('ошибка'))
//                         .then(() => clearCurrentOrder() )}}>Оплатить банковской картой</button> */}


// onClick={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, currentOrder)}