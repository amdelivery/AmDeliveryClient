import React, { useState } from "react";
import "./modal_order.sass";
import "./modal_order_mqueries.sass";
import { connect } from "react-redux";
import {
  clearCurrentOrder,
  getPhone,
  getHours,
  getMinutes,
  getComment,
  payRequest,
  closeModal,
  getAdress,
} from "../../actions/itemActions.js";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

const ModalOrder = ({
  closeModal,
  totalPrice,
  getAdress,
  getPhone,
  getComment,
  payRequest,
  actualOrderNumber,
  actualOrderNumberId,
  click
}) => {
  const [value, setValue] = useState();
  return (
    <div className="modal-order">
      <form
        className="modal-order-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (value) {
            getAdress(value.value);
            payRequest({ actualOrderNumber, actualOrderNumberId, totalPrice }, e);
          } else {
            alert("Выберите адрес из предложенных подсказок")
          }
        }}
      >
        <div className="modal-order-form__close" onClick={(e) => closeModal(e)}>
          X
        </div>
        <label htmlFor="tel">Телефон:</label>
        <div className="modal-order-form__input__phone-wrap">
          +7
          <input
            required
            onChange={(e) => getPhone(e.target.value)}
            id="tel"
            className="modal-order-form__input__phone"
            max="9999999999"
            min="9000000000"
            type="number"
            placeholder=""
          />
        </div>
        <label htmlFor="adress">Адрес доставки (начните ввод с города):</label>
        <AddressSuggestions
          token="88c35fe582a4350fd6fe00162ece7619714b9f7c"
          value={value}
          onChange={setValue}
        />
        <label htmlFor="comment">Коментарий к заказу:</label>
        <textarea
          onChange={(e) => getComment(e.target.value)}
          id="comment"
          className="modal-order-form__input__comment"
          name="comment"
          cols="30"
          rows="5"
          placeholder=""
        ></textarea>
        <button
          className="modal-order-form__button"
          disabled={click === true ? true : false}
        >
          {" "}
          {click === true ? "Переход в платежный шлюз..." : "Отправить заказ"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  currentOrder,
  currentResto,
  allResto,
  totalPrice,
  actualOrderNumber,
  actualOrderNumberId,
  click,
}) => {
  return {
    currentOrder,
    totalPrice,
    actualOrderNumber,
    actualOrderNumberId,
    click,
    currentResto,
    allResto,
  };
};

export default connect(mapStateToProps, {
  clearCurrentOrder,
  getPhone,
  getComment,
  payRequest,
  closeModal,
  getHours,
  getMinutes,
  getAdress,
})(ModalOrder);
