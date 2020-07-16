import React from 'react';
import './menu_list_block.sass';
import './menu_list_block_mqueries.sass';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItemIdForAdding} from '../../actions/itemActions.js';


const MenuListBlock = ({categories, allItems, getItemIdForAdding}) => {
      
      return (
          <>
            {categories.map(cat => {
                const renderedItem = allItems.filter(item => (item.category !== cat.name) ? null : (item.category === "Без категории") ? null : (item.available === "Да") ? item : null);
                return (
                    <div key={cat._id} className="menu-list-block">
                        <div className="menu-list-block__title" id={cat.name}>{(cat.name !== "Без категории") ? cat.name : null}</div>
                        <div className="menu-list-block__item-wrapper">
                            {renderedItem.map(item => {
                                return (
                                    <div key={item._id} className="menu-list-block__item" onClick={(e) => getItemIdForAdding(item._id, e)}>
                                        <img src={item.imgUrl} alt={item.name}/>
                                        <div className="menu-list-block__item__info-container">
                                                <div className="menu-list-block__item__infotext">
                                                    <div className="menu-list-block__item__title">{item.name}</div>
                                                    <div className="menu-list-block__item__descr">{item.description.slice(0, 51)}...</div>
                                                    <div className="menu-list-block__item__descr_hidden">{item.description}</div>
                                                </div>
                                                
                                                <div className="menu-list-block__item__price">{item.price} ₽</div>
                                                <button className="menu-list-block__item__button">В корзину</button>
                                        </div>
                                        
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
          </>
      )
}

MenuListBlock.propTypes = {
    allItems: PropTypes.array.isRequired,
    getItemIdForAdding: PropTypes.func.isRequired,
    categories: PropTypes.array
}
const mapStateToProps = ({allItems, categories}) => {
        return {
            allItems,
            categories
        }
}


export default connect(mapStateToProps, {getItemIdForAdding})(MenuListBlock);
