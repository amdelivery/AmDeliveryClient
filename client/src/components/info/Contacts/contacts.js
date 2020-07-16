import React from 'react';
import './contacts.sass';
import './contacts_mqueries.sass';
import {Link} from 'react-router-dom';


const Contacts = () => {
    return (
        <>
        
        <div className="contacts">
            <div className="contacts__document">
                <h2>Контакты:</h2>
                <p>Фактический адрес: 350012,РОССИЯ,КРАСНОДАРСКИЙ КРАЙ,КРАСНОДАР Г,КРАСНЫХ ПАРТИЗАН УЛ,1/3,8,КВАРТИРА 186</p>
                <p>Электронная почта: dmitrii.nedelin@yandex.ru</p>
                <p>Телефоны: +7 918 947 95 33 </p>
                <h2>Реквизиты:</h2>
                <p>ИП Неделин Дмитрий Александрович</p>
                <p>ИНН 232309732350 / ОГРНИП 320237500175093.</p>
                <p>Юридический адрес: 350012,РОССИЯ,КРАСНОДАРСКИЙ КРАЙ,КРАСНОДАР Г,КРАСНЫХ ПАРТИЗАН УЛ,1/3,8,КВАРТИРА 186</p>
                <p>Тел.: +7 918 947 95 33</p>
            </div>
            
                <Link to="/"><button className="contacts__to-main-page">На главную</button></Link>
            
        </div>
        
        </>
        
    )
}
export default Contacts;