import React, { Component } from "react";
import "./app_header.sass";
import "./app_header_mqueries.sass";
import logo from "../../img/AmD3.png";
import logo_mobile from "../../img/logo-mobile.png";
import geoIcon from "../../img/geo_icon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllResto, clearCurResto } from "../../actions/itemActions.js";
import PropTypes from 'prop-types';

class AppHeader extends Component {
  componentDidMount() {
    this.props.getAllResto();                              //При старте загружвем список всех ресторанов
  }

  render() {
    return (
      <div className="appheader">
        <div className="appheader__logo">
          <Link to="/" onClick={(e) => window.scrollTo(0, 0)}>
            <img src={logo} alt="logo" className="appheader__logo__desktop" />
            <img
              src={logo_mobile}
              alt="logo-mobile"
              className="appheader__logo__mobile"
            />
          </Link>
        </div>

        <div className="appheader__city">
          <img src={geoIcon} alt="geo_icon" />
          <div
            className="appheader__city__name"
            onClick={(e) => this.props.clearCurResto()}                     //Очищаем curResto в state, тем самым вызываем модальное окно с выбором ресторанов
          >
            {this.props.currentResto}
          </div>
        </div>
        <Link to="/feedback" className="appheader__feedback">
          <span>Обратная связь</span>
        </Link>
        <div
          className="appheader__carticon"
          onClick={(e) =>
            document.getElementById("cart") !== null                        //Скрываем-показываем корзину по нажатию на иконку если viewport меньше 1024px (cart_mqueries.sass)              
              ? document
                  .getElementById("cart")
                  .classList.toggle("cart_for-mobile")
              : null                                                        
          }
        >
          <span>Корзина</span>
          <div className="appheader__carticon__counter">
            {this.props.itemsInCart.length > 1                   //Счетчик позиций в корзине. Так как доставка является тоже позицией, но добавляется автоматически, её не учитываем
              ? this.props.itemsInCart.length - 1
              : "0"}
          </div>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  itemsInCart: PropTypes.array,
  allResto: PropTypes.array,
  currentResto: PropTypes.string,
  getAllResto: PropTypes.func,
  clearCurResto: PropTypes.func
}



const mapStateToProps = ({ itemsInCart, allResto, currentResto }) => {
  return {
    itemsInCart,
    allResto,
    currentResto,
  };
};

export default connect(mapStateToProps, { getAllResto, clearCurResto })(
  AppHeader
);
