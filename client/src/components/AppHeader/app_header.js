import React from 'react';
import './app_header.sass';
import logo from '../../img/AmD3.jpg';
import geoIcon from '../../img/geo_icon.png';


const AppHeader = () => {
    return (
        <div className='appheader'>
            <div className='appheader__logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='appheader__city'>
                <img src={geoIcon} alt="geo_icon"/>
                <div className='appheader__city__name'>г. Крымск</div>
            </div>
            <div className='appheader__carticon'>
                <span>Корзина</span>
            </div>
        </div>
    )
}


export default AppHeader;