

 const initialState = {
 items : []
 }

 function StoreReducer(state, action) {
    console.log("Action : " + action);
    return initialState;
 }

 export default StoreReducer;