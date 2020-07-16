import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index.js';
import thunk from 'redux-thunk';



const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.sessionStorage.setItem('app_state', serialisedState);
    }
    catch (err) {
        console.log(err);
    }
}

const loadState = () => {
    try {
        const serialisedState = window.sessionStorage.getItem('app_state');
        if (!serialisedState) return undefined;
        return JSON.parse(serialisedState);
    }
    catch (err) {
        return undefined;
    }
}

const oldState = loadState();

const store = createStore(reducer, oldState, compose(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
})
export default store;