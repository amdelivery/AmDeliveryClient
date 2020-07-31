import React from 'react';
import './modal_order.sass';
import './modal_order_mqueries.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getHours, getMinutes, getComment, payRequest, closeModal, sendPreOrder} from '../../actions/itemActions.js';



const ModalOrder = ({closeModal , currentOrder, currentResto, allResto, totalPrice, getHours, getMinutes, getPhone, getComment, payRequest, actualOrderNumber, actualOrderNumberId, click, sendPreOrder}) => {
      
        const restWorkTime = allResto.find(resto => resto.name === currentResto).worktime;
        const workHoursStart = restWorkTime.slice(0, 2);
        const workHoursEnd = restWorkTime.slice(8, 10);
     return (
            <div className="modal-order" onClick={(e) => console.log(workHoursEnd)}>      
                
                    
                    <form className="modal-order-form" onSubmit={(e) =>{
                        e.preventDefault();
                        sendPreOrder(currentOrder);
                    } } >
                        <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>X</div>
                        <label htmlFor="tel">Телефон:</label>
                        <div className="modal-order-form__input__phone-wrap">+7<input required onChange={(e) => getPhone(e.target.value)} id="tel" className="modal-order-form__input__phone" max="9999999999"  type="number" placeholder=""/></div>
                        <label htmlFor="time">Время визита в ресторан:</label>
                        <div className="modal-order-form__input__time-wrap">
                            <input type="number" required onChange={(e) => getHours(e.target.value)} id="time" min={+workHoursStart} max={(workHoursEnd === "00") ? 23 : +workHoursEnd} className="modal-order-form__input__hours" placeholder="ЧЧ"/>
                            <input type="number" required onChange={(e) => getMinutes(e.target.value)} min="00" max="59" className="modal-order-form__input__minutes" placeholder="ММ"/>
                        </div>
                        <label htmlFor="comment">Коментарий к заказу:</label>
                        <textarea onChange={(e) => getComment(e.target.value)} id="comment" className="modal-order-form__input__comment" name="comment" id="comment" cols="30" rows="5" placeholder=""></textarea>
                        <button className="modal-order-form__button" disabled={(click === true) ? true : false}> {(click === true) ? "Отправка заказа..." : "Отправить заказ"}</button>
                    </form>
                    
            </div>
            
        )
    
}

const mapStateToProps = ({currentOrder, currentResto, allResto, totalPrice, actualOrderNumber, actualOrderNumberId, click}) => {
    return {
        currentOrder,
        totalPrice,
        actualOrderNumber,
        actualOrderNumberId,
        click,
        currentResto,
        allResto
    }
}


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getComment, payRequest, closeModal, sendPreOrder, getHours, getMinutes,})(ModalOrder);
// onSubmit={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, e)}