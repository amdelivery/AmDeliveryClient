import {CITY_SELECTED,
        DATA_FIRSTLOAD,
        GET_ID,
        ID_NULL,
        GET_ALL_CAT, 
        PLUS_QUANT, 
        MINUS_QUANT, 
        ADD_TO_CART, 
        CHANGE_QUANT, 
        PLUS_QUANT_CART, 
        MINUS_QUANT_CART, 
        ADD_TO_ORDER, 
        DEL_FROM_CART, 
        CLEAR_CUR_ORDER,
        GET_PHONE,
        GET_HOURS,
        GET_MINUTES,
        CHECK_MOD,
        UNCHECK_MOD,
        GET_COMMENT,
        CLOSE_MODAL,
        GET_ALL_RESTO,
        GET_ADRESS,
        CHANGE_CUR_RESTO,
        CLEAR_CUR_RESTO,
        TEST,
        PAY_STATUS,
        CLEAR_PREORD_STATUS,
        CLEAR_RET_ORD_ID,
        PAY_REQUEST} from "./types.js";

import axios from 'axios';

export const setCitySelected = () => {
    return {
        type: CITY_SELECTED
    }
}

export const getAllResto = () => dispatch => {
    axios.get('api/users').then(res => dispatch({
        type: GET_ALL_RESTO,
        payload: res.data
    }))
}


export const getDataFromServer = () => dispatch => {
    axios.get('/api').then(res => dispatch({
        type: DATA_FIRSTLOAD,
        payload: res.data
    }));
}

export const getItemIdForAdding = (_id) => {
    return {
        type: GET_ID,
        payload: _id
    }
}

export const setIdAndQuantToNull = () => {
    return {
        type: ID_NULL
    }
}

export const plusQuant = () => {
    return {
        type: PLUS_QUANT
    }
}

export const minusQuant = () => {
    return {
        type: MINUS_QUANT
    }
}



export const addItemToCart = ({_id}, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            _id,
            quantity
        }
    }
}

export const changeItemQuant = ({_id}, quantity, allModsNamesString) => {
    return {
        type: CHANGE_QUANT,
        payload: {
            _id, 
            quantity,
            allModsNamesString
        }
    }
}


export const plusQuantinCart = (idForCart) => {
    return {
        type: PLUS_QUANT_CART,
        payload: idForCart
    }
}

export const minusQuantinCart = (idForCart) => {
    return {
        type: MINUS_QUANT_CART,
        payload: idForCart
    }
}

export const fromCartInOrder = (items, totalPrice) => {
    return {
        type: ADD_TO_ORDER,
        payload: {
            items,
            totalPrice
        }
    }
}

export const deleteFromCart = () => {
    return {
        type: DEL_FROM_CART
    }
}

export const clearCurrentOrder = () => {
    return {
        type: CLEAR_CUR_ORDER
    }
}

export const getAdress = (adress) => {
    return {
        type: GET_ADRESS,
        payload: adress
    }
}


export const getPhone = (phone) => {
    return {
        type: GET_PHONE,
        payload: phone
    }
}

export const getHours = (hours) => {
    return {
        type: GET_HOURS,
        payload: hours
    }
}

export const getMinutes = (minutes) => {
    return {
        type: GET_MINUTES,
        payload: minutes
    }
}

export const getComment = (comment) => {
    return {
        type: GET_COMMENT,
        payload: comment
    }
}

export const getAllCategories = () => dispatch => {
    axios.get('/api/categories').then(res => dispatch({
        type: GET_ALL_CAT,
        payload: res.data
    }))
}

export const checkMod = (item) => {
    return {
        type: CHECK_MOD,
        payload: item
    }
} 

export const uncheckMod = (item) => {
    return {
        type: UNCHECK_MOD,
        payload: item
    }
} 

export const clearReturnedOrderId = () => {
    return {
        type: CLEAR_RET_ORD_ID
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }

}

export const changeCurResto = (value) => {
    return {
        type: CHANGE_CUR_RESTO,
        payload: value
    }
}

export const clearCurResto = () => {
    return {
        type: CLEAR_CUR_RESTO
    }
}

export const payRequest =  (info) => dispatch => {
       dispatch({type: TEST});
       axios.post('/api/req', info).then(res => {
            dispatch({
                type: PAY_REQUEST,
                payload: res.data.orderId
            });
            document.location.href = res.data.formUrl;
        
       } )
       
}


export const payStatus = (orderId, currentOrder) => dispatch => {

    axios.post('/api/paystatus', orderId).then(res => {
        dispatch ({
            type: PAY_STATUS,
            payload: res.data.orderStatus
          });
        let orderSend = (res.data.orderStatus == 2) ? axios.post('/api/order', currentOrder) : alert("Ошибка оплаты!");
    })

}




export const clearPreOrderStatus = () => {
    return {
        type: CLEAR_PREORD_STATUS
    }
}
