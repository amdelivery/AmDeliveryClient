import React from 'react';
import './restaurant_info.sass';
import './restaurant_info_mqueries.sass';
import kfcLogo from '../../img/kfc_logo.jpg';
import {ReactComponent as Box} from '../../img/box.svg';
import {connect} from 'react-redux';

const RestaurantInfo = ({currentResto, allResto}) => {
    return (
        <div className="restaurant-info"  id="restaurant-info">
            <div className="restaurant-info__left-side">
                <div className="restaurant-info__left-side__title">{currentResto}</div>
                <div className="restaurant-info__left-side__info-items">
                    <div className="restaurant-info__left-side__info-items__item">
                        {allResto.map(rest => (rest.name === currentResto) ? (<span>{rest.adress}</span>) : null)}  
                        
                    </div>
                    <div className="restaurant-info__left-side__info-items__item">
                        {allResto.map(rest => (rest.name === currentResto) ? (<span>{rest.worktime}</span>) : null)}
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

const mapStateToProps = ({currentResto, allResto}) => {
    return {
        currentResto,
        allResto
    }
}


export default connect(mapStateToProps)(RestaurantInfo);


// <div className="restaurant-info__left-side__info-items">
//                     <div className="restaurant-info__left-side__info-items__item">
//                         <div  className="box"><Box/></div>
//                         <span>30-60 мин.</span>
//                     </div>
//                     <div className="restaurant-info__left-side__info-items__item">
//                         <span>От 1 р.</span>
//                     </div>
//                     <div className="restaurant-info__left-side__info-items__item">
//                         <span>Доставка 150р.</span>
//                     </div>
//                 </div>