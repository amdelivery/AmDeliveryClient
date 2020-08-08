import React, {useState} from 'react';
import './modal_order.sass';
import './modal_order_mqueries.sass';
import {connect} from 'react-redux';
import {clearCurrentOrder, getPhone, getHours, getMinutes, getComment, payRequest, closeModal, sendPreOrder, getAdress} from '../../actions/itemActions.js';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';


const ModalOrder = ({closeModal , currentOrder, currentResto, allResto, totalPrice, getHours, getMinutes, getAdress, getPhone, getComment, payRequest, actualOrderNumber, actualOrderNumberId, click, sendPreOrder}) => {
        const [value, setValue] = useState();
        const restWorkTime = allResto.find(resto => resto.name === currentResto).worktime;
     return (
            <div className="modal-order">      
                
                    
                    <form className="modal-order-form" onSubmit={async (e) =>{
                        e.preventDefault();
                        await getAdress(value.value);
                        payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, e);
                    } } >
                        <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>X</div>
                        <label htmlFor="tel">Телефон:</label>
                        <div className="modal-order-form__input__phone-wrap">+7<input required onChange={(e) => getPhone(e.target.value)} id="tel" className="modal-order-form__input__phone" max="9999999999" min="9000000000" type="number" placeholder=""/></div>
                        <label htmlFor="adress">Адрес доставки (начните ввод с города):</label>
                            <AddressSuggestions token="88c35fe582a4350fd6fe00162ece7619714b9f7c" value={value} onChange={setValue}/>
                        <label htmlFor="comment">Коментарий к заказу:</label>
                        <textarea onChange={(e) => getComment(e.target.value)} id="comment" className="modal-order-form__input__comment" name="comment" cols="30" rows="5" placeholder=""></textarea>
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


export default connect(mapStateToProps, {clearCurrentOrder, getPhone, getComment, payRequest, closeModal, sendPreOrder, getHours, getMinutes, getAdress})(ModalOrder);
// onSubmit={(e) => payRequest({actualOrderNumber, actualOrderNumberId, totalPrice}, e)}