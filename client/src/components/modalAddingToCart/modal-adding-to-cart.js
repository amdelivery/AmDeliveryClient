import React from "react";
import "./modal_adding_to_cart.sass";
import "./modal_adding_to_cart_mqueries.sass";
import { ReactComponent as Tick } from "../../img/tick.svg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  setIdAndQuantToNull,
  plusQuant,
  minusQuant,
  addItemToCart,
  changeItemQuant,
  checkMod,
  uncheckMod,
} from "../../actions/itemActions.js";

const ModalAddingToCart = ({
  idItemForAdding,
  allItems,
  setIdAndQuantToNull,
  quantity,
  plusQuant,
  minusQuant,
  addItemToCart,
  itemsInCart,
  changeItemQuant,
  categories,
  checkedMods,
  checkMod,
  uncheckMod,
}) => {
  const itemForRender = allItems.filter((item) =>                       //Перебираем все позиции меню и находим тот, по которому произощел клик
    item._id === idItemForAdding ? item : null
  );
  const catForItem = categories.filter((cat) =>                         //Подбираем соответсвующую категории для подбора модификаторов
    itemForRender[0].category === cat.name ? cat : null
  );
  const mods = catForItem.map((cat) => cat.modificators);               //Достаем из категории модификаторы
  const allModsPrices = checkedMods.map((mod) => mod.price);            //Записываем в массив все стоимости выбранных модификаторов
  const sumModsPrices = allModsPrices.reduce(                           //Суммируем стоимость выбранных модификаторов
    (sum, current) => sum + +current,
    0
  );
  const allModsNames = checkedMods.map((mod) => mod.name);              //Создаем массив с именами выбранных модификаторов
  const allModsNamesString = allModsNames.join();                       //Приводим его к строке
  const itemObj = itemForRender[0];                                     //Так как элемент для отображения изначально находится в массиве в единственном числе, обращаемся к нему через [0]
  const { name, description, imgUrl, price } = itemObj;                 //Деструктурируем ключи обьекта элемента
  const totalSumForOneItemWithMods = sumModsPrices + +price;            //Подсчитываем итоговую сумму за позицию вместе с выбранными модификаторами
  return (
    <div className="overlay">
      <div className="modal-adding-to-cart">
        <div className="close_cross" onClick={(e) => setIdAndQuantToNull(e)}>
          Х
        </div>
        <div className="modal-adding-to-cart__img">
          <img src={imgUrl} alt={name} />
        </div>
        <div className="modal-adding-to-cart__info">
          <div className="modal-adding-to-cart__info__wrapper">
            <div className="modal-adding-to-cart__info__descr">
              <h1>{name}</h1>
              <span>{description}</span>
            </div>
            <div className="modal-adding-to-cart__info__modificators">
              <h3>{mods[0].length > 0 ? "Добавки:" : null}</h3>                    
              {mods[0].map((mod) => {
                return (
                  <div
                    key={mod.id}
                    className="modal-adding-to-cart__info__modificators__line"
                  >
                    <div
                      className={
                        checkedMods.includes(mod)
                          ? "modal-adding-to-cart__info__modificators__line__checked"
                          : "modal-adding-to-cart__info__modificators__line__checkbox"
                      }
                      onClick={
                        checkedMods.includes(mod)
                          ? (e) => uncheckMod(mod, e)
                          : (e) => checkMod(mod, e)
                      }
                    >
                      {checkedMods.includes(mod) ? <Tick /> : null}
                    </div>
                    <div className="modal-adding-to-cart__info__modificators__line__wrapper">
                      <div className="modal-adding-to-cart__info__modificators__line__name">
                        {" "}
                        {mod.name}
                      </div>
                      <div className="modal-adding-to-cart__info__modificators__line__price">
                        +{mod.price} руб.
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="middleware"></div>
          </div>
        </div>

        <div className="modal-adding-to-cart__adding-block">
          <div className="modal-adding-to-cart__adding-block__counter">
            <button
              className="modal-adding-to-cart__adding-block__counter__minus"    //Если количество больше 1, отображаем кнопку минус
              hidden={quantity > 1 ? false : true}
              onClick={(e) => minusQuant(e)}
            >
              -
            </button>
            <div className="modal-adding-to-cart__adding-block__counter__quantity">
              {quantity}
            </div>
            <button
              className="modal-adding-to-cart__adding-block__counter__plus"
              onClick={(e) => plusQuant(e)}
            >
              +
            </button>
          </div>
          <button
            className="modal-adding-to-cart__adding-block__button"
            onClick={
              itemsInCart.find((item) => item.name === name) === undefined                    //При добавлении в корзину ищем по имени в корзине и сравниваем модификаторы.
                ? (e) => addItemToCart(itemObj, quantity, e)                                  // Если модификаторы равны друг другу - добавляем количество элементов в модальном окне к количеству таких же элементов в корзине.
                : itemsInCart.find(                                                            // Если модификаторы или имя не равны - создаем новый элемент
                    (item) =>
                      item.name === name &&
                      item.modsNames === allModsNamesString
                  )
                ? (e) =>
                    changeItemQuant(itemObj, quantity, allModsNamesString, e)
                : itemsInCart.find(
                    (item) =>
                      item.name === name &&
                      item.modsNames !== allModsNamesString
                  )
                ? (e) => addItemToCart(itemObj, quantity, e)
                : null
            }
          >
            <div className="modal-adding-to-cart__adding-block__button__title">
              Добавить
            </div>
            <div className="modal-adding-to-cart__adding-block__button__price">
              {totalSumForOneItemWithMods * quantity} ₽
            </div>
          </button>
          <div
            className="close_cross__mobile"
            onClick={(e) => setIdAndQuantToNull(e)}
          >
            Х
          </div>
        </div>
      </div>
    </div>
  );
};

ModalAddingToCart.propTypes = {
  idItemForAdding: PropTypes.string,
  allItems: PropTypes.array,
  setIdAndQuantToNull: PropTypes.func,
  quantity: PropTypes.number,
  plusQuant: PropTypes.func,
  minusQuant: PropTypes.func,
  addItemToCart: PropTypes.func,
  itemsInCart: PropTypes.array,
  changeItemQuant: PropTypes.func,
  categories: PropTypes.array,
  checkedMods: PropTypes.array,
  checkMod: PropTypes.func,
  uncheckMod: PropTypes.func,
};

const mapStateToProps = ({
  idItemForAdding,
  allItems,
  quantity,
  itemsInCart,
  categories,
  checkedMods,
}) => {
  return {
    idItemForAdding,
    allItems,
    quantity,
    itemsInCart,
    categories,
    checkedMods,
  };
};

export default connect(mapStateToProps, {
  setIdAndQuantToNull,
  plusQuant,
  minusQuant,
  addItemToCart,
  changeItemQuant,
  checkMod,
  uncheckMod,
})(ModalAddingToCart);
