import React from 'react';
import './app_footer.sass';
import logo from '../../img/AmD3.png';
import pm from '../../img/pm.jpg';
import {Link} from 'react-router-dom';


const AppFooter = () => {
    return (
        <div className="app-footer">
            <div className="app-footer__top">
                <div className="app-footer__top__logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="app-footer__top__links-line">
                    <Link to="/contacts">Контакты</Link>
                    <Link to="/about">О компании</Link>
                    <Link to="/terms" onClick={(e) => window.scrollTo(0, 0)}>Пользовательское соглашение</Link>
                </div>
                <div className="app-footer__top__paymethods">
                    <img src={pm} alt="pm"/>
                </div>
            </div>
            <div className="app-footer__bottom">
                    <span>© 2020, ИП Неделин Дмитрий Александрович</span>
                    <Link to="/conf" onClick={(e) => window.scrollTo(0, 0)}>Политика конфиденциальности</Link>
            </div>
            
        </div>
    )
}


export default AppFooter;