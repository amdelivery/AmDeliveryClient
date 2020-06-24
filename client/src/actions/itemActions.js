import {CITY_SELECTED,
        DATA_FIRSTLOAD,
        GET_ID, ID_NULL, 
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
        GET_ADRESS,
        GET_COMMENT } from "./types.js";

import axios from 'axios';

export const setCitySelected = () => {
    return {
        type: CITY_SELECTED
    }
}


export const getDataFromServer = () => dispatch => {
    axios.get('/api').then(res => dispatch({
        type: DATA_FIRSTLOAD,
        payload: res.data
    }))
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

export const changeItemQuant = ({_id}, quantity) => {
    return {
        type: CHANGE_QUANT,
        payload: {
            _id, 
            quantity
        }
    }
}


export const plusQuantinCart = (_id) => {
    return {
        type: PLUS_QUANT_CART,
        payload: _id
    }
}

export const minusQuantinCart = (_id) => {
    return {
        type: MINUS_QUANT_CART,
        payload: _id
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


export const getPhone = (phone) => {
    return {
        type: GET_PHONE,
        payload: phone
    }
}

export const getAdress = (adress) => {
    return {
        type: GET_ADRESS,
        payload: adress
    }
}

export const getComment = (comment) => {
    return {
        type: GET_COMMENT,
        payload: comment
    }
}