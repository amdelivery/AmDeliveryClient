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
                <p>Фактический адрес: 353380, РОССИЯ, КРАСНОДАРСКИЙ КРАЙ, Г. КРЫМСК, УЛ. ДЕМЬЯНА БЕДНОГО 19Б</p>
                <p>Электронная почта: am-delivery@yandex.ru</p>
                <p>Телефоны: 8-861-125-45-89 </p>
                <h2>Реквизиты:</h2>
                <p>ИП Бабилаева Лаура Ивановна</p>
                <p>ИНН 233708112022 / ОГРНИП 304233707800459.</p>
                <p>Юридический адрес: 353380, РОССИЯ, КРАСНОДАРСКИЙ КРАЙ, Г. КРЫМСК, УЛ. ДЕМЬЯНА БЕДНОГО 19Б</p>
                <p>Тел.: 8-861-125-45-89</p>
            </div>
            
                <Link to="/"><button className="contacts__to-main-page">На главную</button></Link>
            
        </div>
        
        </>
        
    )
}
export default Contacts;