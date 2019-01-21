// import { combineReducers } from 'redux';
// // import StoreReducer from '../../src/reducers/storeReducer';
// // const rootReducer = combineReducers({store: StoreReducer})
// // export default rootReducer;

import { createStore } from 'redux';
import axios from 'axios';

const cleanState = {
    items : []
}

const initialState = {
    items : []
}

const response = (res)=>{console.log("Resonse : " + res)};
const error = (err) => {console.log("Error : " + err)};
const close = ()=>{console.log("Resonse finished ")};

function StoreReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': return addItems(initialState,{name:action.data['name'].value,
            price:action.data['price'].value , description : action.data['description'].value } )
        case 'CLEAR' : {
            debugger;
            initialState.items = []
            state.items = []
            return initialState
        }
        case 'CHECKOUT' : {
            sendItems();
            initialState.items = []
            return initialState
        }
        default : return initialState
    }
}

function addItems(state, item){
    state.items.push(item);
   return state;
}

function sendItems(){
    axios.post("http://localhost:9003/postItem", initialState.items)
        .then((res)=>{response(res)})
        .catch((err)=>{error(err)})
        .finally(()=>{close()})
    //send the added items to the service
}



const store = createStore(StoreReducer);

export default store;