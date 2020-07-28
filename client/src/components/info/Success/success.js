import React, {Component} from 'react';
import './success.sass';
import './success_mqueries.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearReturnedOrderId, clearCurrentOrder, clearPreOrderStatus} from '../../../actions/itemActions.js';


class Success extends Component {
    
    
    componentWillUnmount() {
        this.props.clearPreOrderStatus();
        this.props.clearCurrentOrder();
    }

    render() {
        const ifSuccess = (this.props.preOrdSended) ? (
        <div className="success">
            <div className="success__document">
                <h1>Ваш заказ отправлен в ресторан! Мы уже начали его готовить!</h1>
                <h2>Номер вашего заказа: {this.props.currentOrder.orderNum}. Не забудьте его записать.</h2>
                <h2>Ждём вас в ресторане {this.props.currentOrder.resto}!</h2>
                <Link to="/"><button className="success__to-main-page">На главную</button></Link>
            </div>
        </div>) : (
        <div className="success">
            <div className="success__document">
                <h1>Ошибка!</h1>
                <h2>Такой страницы не существует</h2>
                <Link to="/"><button className="success__to-main-page">На главную</button></Link>
            </div>
        </div>
        )

        return (
            <>
            {ifSuccess}
            </>
            
        )
    }

}

const mapStateToProps = ({returnedOrderId, currentOrder, preOrdSended}) => {
    return {
        returnedOrderId,
        currentOrder,
        preOrdSended
    }
}
export default connect(mapStateToProps, {clearReturnedOrderId, clearCurrentOrder, clearPreOrderStatus})(Success);