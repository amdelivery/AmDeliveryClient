import { v4 as uuid } from "uuid";

const initialState = {
  loadingDataIsOver: false,
  status: null,
  citySelected: false,
  actualOrderNumber: "",
  allItems: [],
  idItemForAdding: null,
  allResto: [],
  currentResto: "",
  checkedMods: [],
  quantity: 1,
  categories: [],
  itemsInCart: [],
  currentOrder: {
    date: "",
    phone: "",
    comment: "",
    items: [],
    cost: "",
    adress: "",
    resto: "",
    orderNum: "",
  },
  totalPrice: null,
  returnedOrderId: "",
  click: false,
  preOrdSended: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CITY_SELECTED":
      return {
        ...state,
        citySelected: true,
      };

    case "DATA_FIRSTLOAD":
      return {
        ...state,
        loadingDataIsOver: true,
        allItems: action.payload,
      };

    case "GET_ALL_CAT": {
      return {
        ...state,
        categories: [...action.payload],
      };
    }

    case "GET_ALL_RESTO": {
      return {
        ...state,
        allResto: [...action.payload],
      };
    }

    case "CHANGE_CUR_RESTO": {
      return {
        ...state,
        currentResto: action.payload,
      };
    }

    case "CLEAR_CUR_RESTO": {
      return {
        ...state,
        currentResto: "",
      };
    }

    case "GET_ID":
      return {
        ...state,
        idItemForAdding: action.payload,
      };
    case "ID_NULL":
      return {
        ...state,
        idItemForAdding: null,
        quantity: 1,
      };
    case "PLUS_QUANT":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "MINUS_QUANT":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case "ADD_TO_CART": {
      const { _id } = action.payload;
      const findItem = state.allItems.filter((item) => item._id === _id);
      const deliveryObj =
        state.itemsInCart.length > 0
          ? null
          : {
              name: "Доставка",
              _id: "delivery",
              price: "1",
              quantity: 1,
              modificators: [],
            };

      const modsPrices = state.checkedMods.map((mod) => mod.price);
      const modsPricesSum = modsPrices.reduce(
        (sum, current) => sum + +current,
        0
      );
      const modsNamesArray = state.checkedMods.map((mod) => mod.name);
      const modsNamesString = modsNamesArray.join();
      const newItem = {
        name: findItem[0].name,
        _id: findItem[0]._id,
        idForCart: uuid(),
        price: +findItem[0].price + modsPricesSum,
        quantity: action.payload.quantity,
        modificators: state.checkedMods,
        modsNames: modsNamesString,
      };
      const arrayForItemsInCart =
        deliveryObj !== null
          ? [deliveryObj, ...state.itemsInCart, newItem]
          : [...state.itemsInCart, newItem];
      return {
        ...state,
        itemsInCart: arrayForItemsInCart,
        idItemForAdding: null,
        quantity: 1,
        checkedMods: [],
      };
    }

    case "CHANGE_QUANT": {
      const { _id, quantity, allModsNamesString } = action.payload;
      const modsPrices = state.checkedMods.map((mod) => mod.price);
      const modsPricesSum = modsPrices.reduce(
        (sum, current) => sum + +current,
        0
      );
      const modsNamesArray = state.checkedMods.map((mod) => mod.name);
      const modsNamesString = modsNamesArray.join();
      const itemIndex = state.itemsInCart.findIndex(
        (item) => item._id === _id && item.modsNames === allModsNamesString
      );
      const findItem = state.allItems.filter((item) => item._id === _id);
      const newItem = {
        name: findItem[0].name,
        _id: findItem[0]._id,
        idForCart: state.itemsInCart[itemIndex].idForCart,
        price: +findItem[0].price + modsPricesSum,
        quantity: state.itemsInCart[itemIndex].quantity + quantity,
        modificators: state.checkedMods,
        modsNames: modsNamesString,
      };

      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.slice(0, itemIndex),
          newItem,
          ...state.itemsInCart.slice(itemIndex + 1),
        ],
        idItemForAdding: null,
        quantity: 1,
        checkedMods: [],
      };
    }

    case "PLUS_QUANT_CART": {
      const idForCart = action.payload;
      const itemIndex = state.itemsInCart.findIndex(
        (item) => item.idForCart === idForCart
      );
      const newItem = {
        name: state.itemsInCart[itemIndex].name,
        _id: state.itemsInCart[itemIndex]._id,
        idForCart: state.itemsInCart[itemIndex].idForCart,
        price: state.itemsInCart[itemIndex].price,
        quantity: state.itemsInCart[itemIndex].quantity + 1,
        modificators: state.itemsInCart[itemIndex].modificators,
        modsNames: state.itemsInCart[itemIndex].modsNames,
      };

      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.slice(0, itemIndex),
          newItem,
          ...state.itemsInCart.slice(itemIndex + 1),
        ],
        idItemForAdding: null,
        quantity: 1,
      };
    }

    case "MINUS_QUANT_CART": {
      const idForCart = action.payload;
      const itemIndex = state.itemsInCart.findIndex(
        (item) => item.idForCart === idForCart
      );
      const newItem = {
        name: state.itemsInCart[itemIndex].name,
        _id: state.itemsInCart[itemIndex]._id,
        idForCart: state.itemsInCart[itemIndex].idForCart,
        price: state.itemsInCart[itemIndex].price,
        quantity: state.itemsInCart[itemIndex].quantity - 1,
        modificators: state.itemsInCart[itemIndex].modificators,
        modsNames: state.itemsInCart[itemIndex].modsNames,
      };

      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.slice(0, itemIndex),
          newItem,
          ...state.itemsInCart.slice(itemIndex + 1),
        ],
        idItemForAdding: null,
        quantity: 1,
      };
    }

    case "ADD_TO_ORDER": {
      let randomNumber = Math.floor(Math.random() * 1000000);
      return {
        ...state,
        actualOrderNumber: randomNumber,
        currentOrder: {
          ...state.currentOrder,
          items: [action.payload.items],
          cost: action.payload.totalPrice,
          date: Date.now(),
          orderNum: randomNumber,
          resto: state.currentResto,
        },
        totalPrice: action.payload.totalPrice,
        click: false,
      };
    }

    case "DEL_FROM_CART": {
      const filterItemsInCart = state.itemsInCart.filter(
        (item) => item.quantity > 0
      );
      return {
        ...state,
        itemsInCart: [...filterItemsInCart],
      };
    }

    case "CLEAR_CUR_ORDER":
      return {
        ...state,
        currentOrder: {
          ...initialState.currentOrder,
        },
        itemsInCart: [],
        click: false,
      };

    case "GET_PHONE": {
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          phone: action.payload,
        },
      };
    }

    case "GET_COMMENT": {
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          comment: action.payload,
        },
      };
    }

    case "GET_ADRESS": {
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          adress: action.payload,
        },
      };
    }

    case "CHECK_MOD": {
      const newArr = [...state.checkedMods, action.payload];
      newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(newArr);
      return {
        ...state,
        checkedMods: newArr,
      };
    }

    case "UNCHECK_MOD": {
      const index = state.checkedMods.findIndex(
        (item) => item.id === action.payload.id
      );
      const newArr = [
        ...state.checkedMods.slice(0, index),
        ...state.checkedMods.slice(index + 1),
      ];
      newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
      return {
        ...state,
        checkedMods: newArr,
      };
    }

    case "PAY_REQUEST": {
      return {
        ...state,
        returnedOrderId: action.payload,
      };
    }

    case "CLEAR_RET_ORD_ID": {
      return {
        ...state,
        returnedOrderId: null,
      };
    }

    case "CLOSE_MODAL": {
      return {
        ...state,
        currentOrder: initialState.currentOrder,
      };
    }

    case "TEST": {
      return {
        ...state,
        click: true,
      };
    }

    case "SEND_PREORDER": {
      return {
        ...state,
        preOrdSended: true,
      };
    }

    case "CLEAR_PREORD_STATUS": {
      return {
        ...state,
        preOrdSended: false,
      };
    }

    case "PAY_STATUS": {
      return {
        ...state,
        status: action.payload,
        returnedOrderId: ""
      }
    }

    default:
      return state;
  }
};

export default reducer;
