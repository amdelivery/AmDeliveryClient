import React from "react";
import "./cart.sass";
import "./cart_mqueries.sass";
import cart from "../../img/cart.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../../img/kfc_logo.jpg";
import {
  plusQuantinCart,
  minusQuantinCart,
  fromCartInOrder,
  deleteFromCart,
} from "../../actions/itemActions.js";

const Cart = ({
  itemsInCart,
  plusQuantinCart,
  minusQuantinCart,
  fromCartInOrder,
  deleteFromCart,
}) => {
  const totalPrice = itemsInCart.reduce(
    (sum, item) => sum + item.quantity * item.price,                  //перебираем все позиции в корзине и вычисляем общую стоимость исходя из количества и цены
    0
  );
  const renderedItem =                                                //если пользователь еще не выбрал ни одной позиции, рендерим пустую корзину
    itemsInCart.length === 0 ? (
      <>
        <img className="cart__img__cart" src={cart} alt="cart" />
        <span className="cart__descr">Корзина пуста</span>
        <div
          className="mobile-bottom-overlay"
          onClick={(e) =>                                             //под корзиной пустое пространство, по клику по нему скрываем корзирну. Логика та же, что и при нажатии на иконку в хэдере
            document.getElementById("cart") !== null
              ? document
                  .getElementById("cart")
                  .classList.toggle("cart_for-mobile")
              : null
          }
        ></div>
      </>
    ) : (
      <>
        <div className="cart__wrapper">
          <div className="cart__order__place">
            <div className="cart__restaurant__info">
              <div className="cart__restaurant__info__descr">
                <span>Ваш заказ в ресторане</span>
                <div className="cart__restaurant__info__descr__name">KFC</div>
              </div>
              <img src={logo} alt="kfc-logo" />
            </div>
            {itemsInCart.map(                                                           //Перебираем все позиции в корзине и рендерим
              ({ name, _id, price, quantity, modificators, idForCart }) => {
                const renderItemInCart =
                  quantity > 0 ? (
                    <div                                                              //У позиции "доставка" отличаются стили, находим её по id и присваиваем собственную стилизацию 
                      key={_id}
                      className={
                        _id === "delivery"
                          ? "cart__item__delivery"
                          : "cart__item"
                      }
                    >
                      <div className="cart__item__line">
                        <div className="cart__item__name-counter">
                          <div className="cart__item__name-counter__name">
                            {name}
                          </div>
                          <div
                            className={                                              //Счетчик у позиции "Доставка" отсутствует
                              _id === "delivery"
                                ? "hidden"
                                : "cart__item__name-counter__counter"
                            }
                          >
                            <button
                              className="cart__item__name-counter__counter__minus"      
                              onClick={(e) => {
                                minusQuantinCart(idForCart, e);                     
                                deleteFromCart();                                   //при нажати на минус в счетчике проверяем количество, и если таковое было равно 1, удаляем элемент из корзины
                              }}
                            >
                              -
                            </button>
                            <div className="cart__item__name-counter__counter__quantity">
                              {quantity}
                            </div>
                            <button
                              className="cart__item__name-counter__counter__plus"
                              onClick={(e) => plusQuantinCart(idForCart, e)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="cart__item__price">
                          {price * quantity} ₽
                        </div>
                      </div>
                      <div className="cart__item__modificators">
                        {modificators.map((mod) => {                                      //Под каждой позицией отображаем модификаторы
                          return (
                            <div
                              key={mod.id}
                              className="cart__item__modificators__wrapper"
                            >
                              <div className="cart__item__modificators__wrapper__name">
                                - {mod.name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : null;
                return renderItemInCart;
              }
            )}
          </div>
        </div>
        <button
          className={itemsInCart.length > 1 ? "cart__button" : "disabled"}               //Если в корзине только элемент "Доставка", делаем кнопку неактивной и присваиваем соответствующие стили
          disabled={itemsInCart.length > 1 ? false : true}
          onClick={(e) => fromCartInOrder(itemsInCart, totalPrice, e)}                  //Записываем элементы и сумму в заказ
        >
          <span className="cart__button__title">Заказать</span>
          <div className="cart__button__total-price">{totalPrice} ₽</div>
        </button>
        <div
          className="mobile-bottom-overlay"
          onClick={(e) =>
            document.getElementById("cart") !== null
              ? document
                  .getElementById("cart")
                  .classList.toggle("cart_for-mobile")
              : null
          }
        ></div>
      </>
    );

  return (
    <div className="cart" id="cart">
      {renderedItem}
    </div>
  );
};

const mapStateToProps = ({ itemsInCart }) => {
  return {
    itemsInCart,
  };
};

Cart.propTypes = {
  itemsInCart: PropTypes.array,
  plusQuantinCart: PropTypes.func,
  minusQuantinCart: PropTypes.func,
  fromCartInOrder: PropTypes.func,
  deleteFromCart: PropTypes.func,
};

export default connect(mapStateToProps, {
  plusQuantinCart,
  minusQuantinCart,
  fromCartInOrder,
  deleteFromCart,
})(Cart);
