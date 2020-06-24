import React from 'react';
import './menu_list_block.sass';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getItemIdForAdding} from '../../actions/itemActions.js';


const MenuListBlock = ({categoriesForRender, allItems, getItemIdForAdding}) => {
      
      return (
          <>
            {categoriesForRender.map((category, i) => {
                const renderedItem = allItems.filter(item => (item.category.name === category) ? item : null);
                return (
                    <div key={i} className="menu-list-block">
                        <div className="menu-list-block__title" id={category}>{category}</div>
                        <div className="menu-list-block__item-wrapper">
                            {renderedItem.map(({_id, name, description, imgUrl, price}) => {
                                return (
                                    <div key={_id} className="menu-list-block__item" onClick={(e) => getItemIdForAdding(_id, e)}>
                                        <img src={imgUrl} alt={name}/>
                                        <div className="menu-list-block__item__info-container">
                                                <div className="menu-list-block__item__infotext">
                                                    <div className="menu-list-block__item__title">{name}</div>
                                                    <div className="menu-list-block__item__descr">{description.slice(0, 51)}...</div>
                                                    <div className="menu-list-block__item__descr_hidden">{description}</div>
                                                </div>
                                                
                                                <div className="menu-list-block__item__price">{price} ₽</div>
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
    categoriesForRender: PropTypes.array.isRequired,
    allItems: PropTypes.array.isRequired,
    getItemIdForAdding: PropTypes.func.isRequired
}
const mapStateToProps = ({allItems}) => {
        return {
            allItems
        }
}


export default connect(mapStateToProps, {getItemIdForAdding})(MenuListBlock);
