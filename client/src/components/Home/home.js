import React, {Component} from 'react';
import RestaurantInfo from '../../components/RestaurantInfo';
import MenuList from '../../components/MenuList';
import AppFooter from '../../components/AppFooter';
import Cart from '../../components/Cart';
import ModalAddingToCart from '../../components/modalAddingToCart';
import ModalOrder from '../../components/modalOrder';
import { getDataFromServer, setCitySelected, getAllCategories } from '../../actions/itemActions.js';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Home extends Component {
    componentDidMount() {
        this.props.getDataFromServer();
        this.props.setCitySelected();
        this.props.getAllCategories();
        }

    render() {
        const  {idItemForAdding, currentOrder} = this.props;
        const modalOrder = (currentOrder.items.length === 0) ? null : <ModalOrder/>
        const modalWithItem = (idItemForAdding !== null) ? <ModalAddingToCart/> : null;
        return (
            <>
                <Cart/>
                <RestaurantInfo/>
                <MenuList/>
                <AppFooter/>
                {modalWithItem}
                {modalOrder}
            </>
        )
    }
    
}

Home.propTypes = {
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

export default connect(mapStateToProps, {getDataFromServer, setCitySelected, getAllCategories})(Home);