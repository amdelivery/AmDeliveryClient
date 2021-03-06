import React from "react";
import "./menu_list_block.sass";
import "./menu_list_block_mqueries.sass";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItemIdForAdding } from "../../actions/itemActions.js";

const MenuListBlock = ({
  categories,
  allItems,
  getItemIdForAdding,
  currentResto,
}) => {
  return (
    <>
      {categories.map((cat) => {                                                //Фильтруем категории и под каждым названием категории отображаем элементы, соответсвующие данной категории, со значением доступности "Да" и с совпадением названию выбранного ресторана
        const renderedItem = allItems.filter((item) =>  
          item.category !== cat.name
            ? null
            : item.category === "Без категории"
            ? null
            : item.available === "Да" && item.resto === currentResto
            ? item
            : null
        );
        return (
          <div key={cat._id} className="menu-list-block" id={cat.name}>
            <div className="menu-list-block__title">
              {cat.name !== "Без категории" ? cat.name : null}
            </div>
            <div className="menu-list-block__item-wrapper">
              {renderedItem.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="menu-list-block__item"
                    onClick={(e) => getItemIdForAdding(item._id, e)}
                  >
                    <div className="menu-list-block__item__img">
                      <img src={item.imgUrl} alt={item.name} />
                    </div>
                    <div className="menu-list-block__item__info-container">
                      <div className="menu-list-block__item__infotext">
                        <div className="menu-list-block__item__title">
                          {item.name}
                        </div>
                        <div className="menu-list-block__item__descr">
                          {item.description.slice(0, 51)}...
                        </div>
                        <div className="menu-list-block__item__descr_hidden">
                          {item.description}
                        </div>
                      </div>

                      <div className="menu-list-block__item__price">
                        {item.price} ₽
                      </div>
                      <button className="menu-list-block__item__button">
                        В корзину
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

MenuListBlock.propTypes = {
  allItems: PropTypes.array.isRequired,
  getItemIdForAdding: PropTypes.func.isRequired,
  categories: PropTypes.array,
  currentResto: PropTypes.string,
};
const mapStateToProps = ({ allItems, categories, currentResto }) => {
  return {
    allItems,
    categories,
    currentResto,
  };
};

export default connect(mapStateToProps, { getItemIdForAdding })(MenuListBlock);
