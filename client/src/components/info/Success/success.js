import React from 'react';
import './success.sass';
import {Link} from 'react-router-dom';


const Success = () => {
    return (
        <>
        
        <div className="success">
            <div className="success__document">
                <h1>Оплата прошла успешно!</h1>
                <h2>Скоро с вами свяжется оператор для подтверждения заказа</h2>
                <Link to="/"><button className="success__to-main-page">На главную</button></Link>
            </div>
        </div>
        
        </>
        
    )
}
export default Success;