import React from 'react';
import './menu_list.sass';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MenuListBlock from '../MenuListBlock';


const MenuList = ({allItems}) => {
    const getCategories = allItems.map(item => item.category);      //Получаем все обьекты категорий 

    const sortFunction = (a, b) => {                                //Задаем алгоритм сортировки во весу категории
        if (a.weight > b.weight) return 1;
        if (a.weight === b.weight) return 0;
        if (a.weight < b.weight) return -1;
    }

    getCategories.sort(sortFunction);                               //Сортируем категории 

    const categoriesForRender = [];                                           //Создаем пустой массив для будущих отдельных категорий
    const getCategoryName = getCategories.map(category => category.name);     //Вытаскиваем из обьектов категорий все имена
    getCategoryName.filter(name => categoriesForRender.includes(name) ? null : categoriesForRender.push(name));   //Пушим в пустой массив уникальные категории

    return (
        <div className="menu-list">
            <div className="menu-list__categories">
                {categoriesForRender.map((item, i) => {
                    const id = `#${item}`;
                    return(
                        <a className="menu-list__categories__link" key={i} href={id}>{item}</a>
                    )
                })}
            </div>
            <div className="menu-list__block">
                <MenuListBlock categoriesForRender={categoriesForRender}/>
            </div>
        </div>
    )
}

MenuList.propTypes = {
    allItems: PropTypes.array.isRequired
}


const mapStateToProps = ({allItems}) => {
      return {
          allItems
      }
}

export default connect(mapStateToProps)(MenuList);