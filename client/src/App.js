import React from 'react';
import StartPage from './components/startPage';
import AppHeader from './components/AppHeader';
import ModalOrder from './components/modalOrder';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './components/Cart';
import './App.sass';
import RestaurantInfo from './components/RestaurantInfo';
import MenuList from './components/MenuList';
import ModalAddingToCart from './components/modalAddingToCart';

const App = ({loadingDataIsOver, citySelected, idItemForAdding, currentOrder}) => {
  const modalOrder = (currentOrder.items.length === 0) ? null : <ModalOrder/>
  const modalWithItem = (idItemForAdding !== null) ? <ModalAddingToCart/> : null;
  const renderedItem = (citySelected === true && loadingDataIsOver === true) ? (
  <>
    <AppHeader/>
    <Cart/>
    <RestaurantInfo/>
    <MenuList/>
    {modalWithItem}
    {modalOrder}
  </>
  
  ) : <StartPage/>;

  return (
    <>
      {renderedItem}
    </>
  );
}

App.propTypes = {
    loadingDataIsOver: PropTypes.bool.isRequired,
    citySelected: PropTypes.bool.isRequired,
    idItemForAdding: PropTypes.string,
    currentOrder: PropTypes.object
}


const mapStateToProps = ( {loadingDataIsOver, citySelected, idItemForAdding, currentOrder} ) => {
      return {
        loadingDataIsOver,
        citySelected,
        idItemForAdding,
        currentOrder
      }
}



export default connect(mapStateToProps)(App);
