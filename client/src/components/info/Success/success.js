import React, {Component} from 'react';
import './success.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearReturnedOrderId, clearCurrentOrder} from '../../../actions/itemActions.js';
import axios from 'axios';


class Success extends Component {
    
    componentDidMount() {
        if (this.props.currentOrder.items.length > 0) {
            axios.post('/api/order', this.props.currentOrder).then(res => console.log('Заказ принят в работу'))
        }
        return
    }

    componentWillUnmount() {
        this.props.clearReturnedOrderId();
        this.props.clearCurrentOrder();
    }

    render() {
        const ifSuccess = (this.props.returnedOrderId) ? (
        <div className="success">
            <div className="success__document">
                <h1>Оплата прошла успешно!</h1>
                <h2>Скоро с вами свяжется оператор для подтверждения заказа</h2>
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

const mapStateToProps = ({returnedOrderId, currentOrder}) => {
    return {
        returnedOrderId,
        currentOrder
    }
}
export default connect(mapStateToProps, {clearReturnedOrderId, clearCurrentOrder})(Success);