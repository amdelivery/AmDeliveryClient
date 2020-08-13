import React, { Component } from "react";
import "./success.sass";
import "./success_mqueries.sass";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  clearReturnedOrderId,
  clearCurrentOrder,
  clearPreOrderStatus,
  payStatus
} from "../../../actions/itemActions.js";
import PropTypes from 'prop-types';

class Success extends Component {

  componentDidMount() {
    (this.props.returnedOrderId) ? this.props.payStatus({orderId: this.props.returnedOrderId}, this.props.currentOrder) : console.log('Заказ не отправлен');
  }


  componentWillUnmount() {
    this.props.clearPreOrderStatus(); //При возврате на главную, очищаем данные по заказу
    this.props.clearCurrentOrder();
  }

  render() {
    const ifSuccess = (this.props.status && this.props.status == 2) ? (
      <div className="success">
        <div className="success__document">
          <h1>Ваш заказ отправлен в ресторан!</h1>
          <h2>
            Номер заказа: {this.props.currentOrder.orderNum}.
          </h2>
          <h2>Ваш заказ будет доставлен к вам из ресторана {this.props.currentOrder.resto}!</h2>
          <Link to="/">
            <button className="success__to-main-page">На главную</button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="success">
        <div className="success__document">
          <h1>Ошибка!</h1>
          <h2>Такой страницы не существует</h2>
          <Link to="/">
            <button className="success__to-main-page">На главную</button>
          </Link>
        </div>
      </div>
    );

    return <>{ifSuccess}</>;
  }
}

Success.propTypes = {
  returnedOrderId: PropTypes.string,
  currentOrder: PropTypes.object,
  preOrdSended: PropTypes.bool,
  clearReturnedOrderId: PropTypes.func,
  clearCurrentOrder: PropTypes.func,
  clearPreOrderStatus: PropTypes.func,
  payStatus: PropTypes.func
};

const mapStateToProps = ({ returnedOrderId, currentOrder, preOrdSended, status }) => {
  return {
    returnedOrderId,
    currentOrder,
    preOrdSended,
    status
  };
};
export default connect(mapStateToProps, {
  clearReturnedOrderId,
  clearCurrentOrder,
  clearPreOrderStatus,
  payStatus
})(Success);
