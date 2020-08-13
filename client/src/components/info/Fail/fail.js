import React from "react";
import "./fail.sass";
import "./fail_mqueries.sass";
import { Link } from "react-router-dom";

const Fail = () => {
  return (
    <>
      <div className="fail">
        <div className="fail__document">
          <h1>Произошла ошибка во время оплаты</h1>
          <Link to="/">
            <button className="fail__to-main-page">На главную</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Fail;
