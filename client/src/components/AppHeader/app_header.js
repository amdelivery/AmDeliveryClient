import React from 'react';
import './app_header.sass';
import logo from '../../img/AmD3.png';
import geoIcon from '../../img/geo_icon.png';
import {Link} from 'react-router-dom';


const AppHeader = () => {
    return (
        <div className='appheader'>
            
            <div className='appheader__logo'>
                <Link to="/home">
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            
            <div className='appheader__city'>
                <img src={geoIcon} alt="geo_icon"/>
                <div className='appheader__city__name'>г. Горячий Ключ</div>
            </div>
            <div className='appheader__carticon'>
                <span>Корзина</span>
            </div>
        </div>
    )
}


export default AppHeader;