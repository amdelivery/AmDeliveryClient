import React from 'react';
import './app_header.sass';
import './app_header_mqueries.sass';
import logo from '../../img/AmD3.png';
import geoIcon from '../../img/geo_icon.png';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const AppHeader = ({itemsInCart}) => {
    return (
        <div className='appheader'>
            
            <div className='appheader__logo'>
                <Link to="/">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            
            <div className='appheader__city'>
                <img src={geoIcon} alt="geo_icon"/>
                <div className='appheader__city__name'>г. Горячий Ключ</div>
            </div>
            <Link to='/feedback' className='appheader__feedback'>
                <span>Обратная связь</span>
            </Link>
            <div className='appheader__carticon'
                 onClick={(e) => (document.getElementById('cart') !== null) ? document.getElementById('cart').classList.toggle("cart_for-mobile") : null}
            >
                <span>Корзина</span>
                <div className='appheader__carticon__counter'>{(itemsInCart.length > 0) ? itemsInCart.length - 1 : "0"}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({itemsInCart}) => {
    return {
        itemsInCart
    }
}


export default connect(mapStateToProps)(AppHeader);