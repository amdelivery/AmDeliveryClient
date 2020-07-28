import React from 'react';
import './modal_order.sass';
import './modal_order_mqueries.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getTime, getComment, payRequest, closeModal, sendPreOrder} from '../../actions/itemActions.js';



const ModalOrder = ({closeModal , currentOrder, totalPrice, getTime, getPhone, getComment, payRequest, actualOrderNumber, actualOrderNumberId, click, sendPreOrder}) => {
      
     return (
            <div className="modal-order">      
                
                    
                    <form className="modal-order-form" onSubmit={(e) =>{
                        e.preventDefault();
                        sendPreOrder(currentOrder);
                    } } >
                        <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>X</div>
                        <div className="modal-order-form__input__phone-wrap">+7<input required onChange={(e) => getPhone(e.target.value)} className="modal-order-form__input__phone" max="9999999999"  type="number" placeholder="Введите номер телефона"/></div>
                        <input required onChange={(e) => getTime(e.target.value)} className="modal-order-form__input__adress" type="text" placeholder="Время визита"/>
                        <textarea onChange={(e) => getComment(e.target.value)} className="modal-order-form__input__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Добавьте комментарии к заказу"></textarea>
                        <button className="modal-order-form__button" disabled={(click === true) ? true : false}> {(click === true) ? "Отправка заказа..." : "Отправить заказ"}</button>
                    </form>
                    
            </div>
            
        )
    
}

const mapStateToProps = ({currentOrder, totalPrice, actualOrderNumber, actualOrderNumberId, click}) => {
    return {
        currentOrder,
        totalPrice,
        actualOrderNumber,
        actualOrderNumberId,
        click
    }
}


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getTime, getComment, payRequest, closeModal, sendPreOrder})(ModalOrder);
// onSubmit={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, e)}