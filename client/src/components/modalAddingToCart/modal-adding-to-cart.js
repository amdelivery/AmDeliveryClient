import React from 'react';
import './modal-adding-to-cart.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setIdAndQuantToNull, plusQuant, minusQuant, addItemToCart, changeItemQuant} from '../../actions/itemActions.js';


const ModalAddingToCart = ({idItemForAdding, allItems, setIdAndQuantToNull, quantity, plusQuant, minusQuant, addItemToCart, itemsInCart, changeItemQuant}) => {
    const itemForRender = allItems.filter(item => (item._id === idItemForAdding) ? item : null);
    const itemObj = itemForRender[0];
    const {_id, name, description, imgUrl, price} = itemObj;
    return (
        <div className="overlay">
            
            <div className="modal-adding-to-cart">
                <div className="close_cross" onClick={(e) => setIdAndQuantToNull(e)}>Х</div>
                <div className="modal-adding-to-cart__img">
                    <img src={imgUrl} alt={name}/>
                </div>
                <div className="modal-adding-to-cart__info">
                    <div className="modal-adding-to-cart__info__wrapper">
                        <div className="modal-adding-to-cart__info__descr">
                            <h1>{name}</h1>
                            <span>{description}</span>
                        </div>
                        <div className="modal-adding-to-cart__info__modificators">

                        </div>
                        <div className="middleware"></div>
                    </div>
                </div>
                
                <div className="modal-adding-to-cart__adding-block">
                        <div className="modal-adding-to-cart__adding-block__counter">
                            <button className="modal-adding-to-cart__adding-block__counter__minus" hidden={(quantity > 1) ? false : true} onClick={(e) => minusQuant(e)}>-</button>
                            <div className="modal-adding-to-cart__adding-block__counter__quantity">{quantity}</div> 
                            <button className="modal-adding-to-cart__adding-block__counter__plus" onClick={(e) => plusQuant(e)}>+</button>
                            
                        </div>
                        <button className="modal-adding-to-cart__adding-block__button"
                            onClick={(itemsInCart.find(item => item._id === _id) === undefined) ?
                                (e) => addItemToCart(itemObj, quantity, e) :
                                (e) => changeItemQuant(itemObj, quantity, e)}>
                            <div className="modal-adding-to-cart__adding-block__button__title">Добавить</div>
                            <div className="modal-adding-to-cart__adding-block__button__price">{price*quantity} ₽</div>
                        </button>
                    </div>
            </div>
        </div>
        
    )
}

ModalAddingToCart.propTypes = {
    idItemForAdding: PropTypes.string.isRequired,
    allItems: PropTypes.array.isRequired,
    setIdAndQuantToNull: PropTypes.func.isRequired,
    quantity: PropTypes.number.isRequired,
    plusQuant: PropTypes.func.isRequired,
    minusQuant: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    itemsInCart: PropTypes.array,
    changeItemQuant: PropTypes.func
}



const mapStateToProps = ({idItemForAdding, allItems, quantity, itemsInCart}) => {
    return {
        idItemForAdding,
        allItems,
        quantity,
        itemsInCart
    }
}


export default connect(mapStateToProps, {setIdAndQuantToNull, plusQuant, minusQuant, addItemToCart, changeItemQuant})(ModalAddingToCart);