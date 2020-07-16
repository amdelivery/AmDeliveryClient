import React from 'react';
import './restaurant_info.sass';
import './restaurant_info_mqueries.sass';
import kfcLogo from '../../img/kfc_logo.jpg';
import {ReactComponent as Box} from '../../img/box.svg'

const RestaurantInfo = () => {
    return (
        <div className="restaurant-info">
            <div className="restaurant-info__left-side">
                <div className="restaurant-info__left-side__title">KFC</div>
                <div className="restaurant-info__left-side__info-items">
                    <div className="restaurant-info__left-side__info-items__item">
                        <div  className="box"><Box/></div>
                        <span>30-60 мин.</span>
                    </div>
                    <div className="restaurant-info__left-side__info-items__item">
                        <span>От 1 р.</span>
                    </div>
                    <div className="restaurant-info__left-side__info-items__item">
                        <span>Доставка 150р.</span>
                    </div>
                </div>
            </div>
            <div className="restaurant-info__right-side">
                <div className="restaurant-info__right-side__img">
                    <img src={kfcLogo} alt="Kfc-Logo"/>
                </div>
                
            </div>
        </div>

    )
}


export default RestaurantInfo;