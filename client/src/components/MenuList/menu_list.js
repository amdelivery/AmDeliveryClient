import React from 'react';
import './menu_list.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MenuListBlock from '../MenuListBlock';


const MenuList = ({allItems, categories}) => {

           
    console.log(categories);

    return (
        <div className="menu-list">
            <div className="menu-list__categories">
                {categories.map(cat => {
                    const id = `#${cat.name}`;
                    const renderedItem = (cat.name !== "Без категории") ? (
                        <a className="menu-list__categories__link" key={cat._id} href={id}>{(cat.name === "Без категории") ? null : cat.name}</a>
                    ) : null;
                    return renderedItem;
                })}
            </div>
            <div className="menu-list__block">
                <MenuListBlock/>
            </div>
        </div>
    )
}

MenuList.propTypes = {
    allItems: PropTypes.array,
    categories: PropTypes.array

}


const mapStateToProps = ({allItems, categories}) => {
      return {
          allItems,
          categories
      }
}

export default connect(mapStateToProps)(MenuList);