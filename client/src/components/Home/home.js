import React, { Component } from "react";
import RestaurantInfo from "../../components/RestaurantInfo";
import MenuList from "../../components/MenuList";
import AppFooter from "../../components/AppFooter";
import Cart from "../../components/Cart";
import ModalAddingToCart from "../../components/modalAddingToCart";
import ModalOrder from "../../components/modalOrder";
import ModalRestoSelect from "../../components/ModalRestoSelect";
import {
  getDataFromServer,
  setCitySelected,
  getAllCategories,
} from "../../actions/itemActions.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    //При маунтинге домашней страницы получаем все позиции, модификаторы и категории. Устанавливаем город согласно выбору пользователя.
    this.props.getDataFromServer();
    this.props.setCitySelected();
    this.props.getAllCategories();
  }

  render() {
    const { idItemForAdding, currentOrder, currentResto } = this.props;             //Условия отображения модальных окон
    const modalOrder = currentOrder.items.length === 0 ? null : <ModalOrder />;
    const modalWithItem =
      idItemForAdding !== null ? <ModalAddingToCart /> : null;
    const modalRestoSelect =
      currentResto.length === 0 ? <ModalRestoSelect /> : null;
    return (
      <>
        <Cart />
        <RestaurantInfo />
        <MenuList />
        <AppFooter />
        {modalWithItem}
        {modalOrder}
        {modalRestoSelect}
      </>
    );
  }
}

Home.propTypes = {
  loadingDataIsOver: PropTypes.bool.isRequired,
  citySelected: PropTypes.bool,
  idItemForAdding: PropTypes.string,
  currentOrder: PropTypes.object,
  getDataFromServer: PropTypes.func,
  setCitySelected: PropTypes.func,
  getAllCategories: PropTypes.func,
  currentResto: PropTypes.string,
};

const mapStateToProps = ({
  loadingDataIsOver,
  citySelected,
  idItemForAdding,
  currentOrder,
  currentResto,
}) => {
  return {
    loadingDataIsOver,
    citySelected,
    idItemForAdding,
    currentOrder,
    currentResto,
  };
};

export default connect(mapStateToProps, {
  getDataFromServer,
  setCitySelected,
  getAllCategories,
})(Home);
