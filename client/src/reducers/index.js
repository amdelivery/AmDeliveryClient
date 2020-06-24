


const initialState = {
    loadingDataIsOver: true,
    citySelected: false,
    allItems: [],
    idItemForAdding: null,
    quantity: 1,
    itemsInCart: [],
    currentOrder: {
        date: "",
        adress: "",
        phone: "",
        comment: "",
        items: [],
        cost: ""
    },
    totalPrice: null

}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CITY_SELECTED":
            return {
                ...state,
                citySelected: true
            }
        case "DATA_FIRSTLOAD":
            return {
                ...state,
                loadingDataIsOver: true,
                allItems: action.payload
            }
        case "GET_ID":
            return {
                ...state,
                idItemForAdding: action.payload
            }
        case "ID_NULL":
            return {
                ...state,
                idItemForAdding: null,
                quantity: 1
            }
        case "PLUS_QUANT":
            return {
                ...state,
                quantity: state.quantity+1
            }
        case "MINUS_QUANT":
            return {
                ...state,
                quantity: state.quantity-1
            }
        case "ADD_TO_CART": {
            const {_id} = action.payload
            const findItem = state.allItems.filter(item => item._id === _id);
            const newItem = {
                name: findItem[0].name,
                _id: findItem[0]._id,
                price: findItem[0].price,
                quantity: action.payload.quantity
            }
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, newItem],
                idItemForAdding: null,
                quantity: 1
            }
        }
        case "CHANGE_QUANT":{
            const {_id, quantity} = action.payload;
            const itemIndex = state.itemsInCart.findIndex(item => item._id === _id);
            const findItem = state.allItems.filter(item => item._id === _id);
            const newItem = {
                name: findItem[0].name,
                _id: findItem[0]._id,
                price: findItem[0].price,
                quantity: state.itemsInCart[itemIndex].quantity + quantity
            }

            return {
                ...state,
                itemsInCart: [...state.itemsInCart.slice(0, itemIndex), newItem, ...state.itemsInCart.slice(itemIndex+1)],
                idItemForAdding: null,
                quantity: 1
            }
        }

        case "PLUS_QUANT_CART": {

            const _id = action.payload;
            const itemIndex = state.itemsInCart.findIndex(item => item._id === _id);
            const findItem = state.allItems.filter(item => item._id === _id);
            const newItem = {
                name: findItem[0].name,
                _id: findItem[0]._id,
                price: findItem[0].price,
                quantity: state.itemsInCart[itemIndex].quantity + 1
            }

            return {
                ...state,
                itemsInCart: [...state.itemsInCart.slice(0, itemIndex), newItem, ...state.itemsInCart.slice(itemIndex+1)],
                idItemForAdding: null,
                quantity: 1
            }
        }

        case "MINUS_QUANT_CART": {

            const _id = action.payload;
            const itemIndex = state.itemsInCart.findIndex(item => item._id === _id);
            const findItem = state.allItems.filter(item => item._id === _id);
            const newItem = {
                name: findItem[0].name,
                _id: findItem[0]._id,
                price: findItem[0].price,
                quantity: state.itemsInCart[itemIndex].quantity - 1
            }

            return {
                ...state,
                itemsInCart: [...state.itemsInCart.slice(0, itemIndex), newItem, ...state.itemsInCart.slice(itemIndex+1)],
                idItemForAdding: null,
                quantity: 1
            }
        }

        case "ADD_TO_ORDER":{
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    items: [action.payload.items],
                    cost: action.payload.totalPrice,
                    date: new Date()
                },
                
            }
        }

        case "DEL_FROM_CART":{
            const filterItemsInCart = state.itemsInCart.filter(item => item.quantity > 0);
            return {
                ...state,
                itemsInCart: [...filterItemsInCart]
            }
        }
        
        case "CLEAR_CUR_ORDER": 
            return {
                ...state,
                currentOrder: {
                    ...initialState.currentOrder
                }
            }

        case "GET_PHONE": {
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    phone: action.payload
                }
            }
        }

        case "GET_ADRESS": {
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    adress: action.payload
                }
            }
        }

        case "GET_COMMENT": {
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    comment: action.payload
                }
            }
        }

        

        default :
            return state
    }
}

export default reducer;