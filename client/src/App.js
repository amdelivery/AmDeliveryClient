import React, {Component} from 'react';
import AppHeader from './components/AppHeader';
import ModalOrder from './components/modalOrder';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './components/Cart';
import './App.sass';
import RestaurantInfo from './components/RestaurantInfo';
import MenuList from './components/MenuList';
import ModalAddingToCart from './components/modalAddingToCart';
import { getDataFromServer, setCitySelected, getAllCategories } from './actions/itemActions';

class App extends Component  {
      
      componentDidMount() {
        this.props.getDataFromServer();
        this.props.setCitySelected();
        this.props.getAllCategories();
        }



      render () {
        const  {idItemForAdding, currentOrder} = this.props;
        const modalOrder = (currentOrder.items.length === 0) ? null : <ModalOrder/>
        const modalWithItem = (idItemForAdding !== null) ? <ModalAddingToCart/> : null;
      
        return (
          <>
            <AppHeader/>
            <Cart/>
            <RestaurantInfo/>
            <MenuList/>
            {modalWithItem}
            {modalOrder}
          </>
        );
      }
  
}

App.propTypes = {
    loadingDataIsOver: PropTypes.bool.isRequired,
    citySelected: PropTypes.bool.isRequired,
    idItemForAdding: PropTypes.string,
    currentOrder: PropTypes.object,
    getDataFromServer: PropTypes.func,
    setCitySelected: PropTypes.func,
    getAllCategories: PropTypes.func
}


const mapStateToProps = ( {loadingDataIsOver, citySelected, idItemForAdding, currentOrder} ) => {
      return {
        loadingDataIsOver,
        citySelected,
        idItemForAdding,
        currentOrder
      }
}



export default connect(mapStateToProps, {getDataFromServer, setCitySelected, getAllCategories})(App);
