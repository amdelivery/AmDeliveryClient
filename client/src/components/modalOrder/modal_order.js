import React from 'react';
import './modal_order.sass';
import './modal_order_mqueries.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getAdress, getComment, payRequest, closeModal} from '../../actions/itemActions.js';



const ModalOrder = ({closeModal , currentOrder, totalPrice, getAdress, getPhone, getComment, payRequest, actualOrderNumber, actualOrderNumberId, click}) => {
      
     return (
            <div className="modal-order">      
                
                    
                    <form className="modal-order-form" onSubmit={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, e)}  >
                        <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>X</div>
                        <input required onChange={(e) => getPhone(e.target.value)} className="modal-order-form__input__phone" type="tel" placeholder="Введите номер телефона"/>
                        <input required onChange={(e) => getAdress(e.target.value)} className="modal-order-form__input__adress" type="text" placeholder="Введите адрес доставки"/>
                        <textarea onChange={(e) => getComment(e.target.value)} className="modal-order-form__input__comment" name="comment" id="comment" cols="30" rows="10" placeholder="Добавьте комментарии к заказу"></textarea>
                        <button className="modal-order-form__button" disabled={(click === true) ? true : false}> {(click === true) ? "Переход в платежный шлюз..." : "Оплатить банковской картой"}</button>
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


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getAdress, getComment, payRequest, closeModal})(ModalOrder);
// 