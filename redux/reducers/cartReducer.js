let defaultState = {
    selectItems: {items:[],restaurantName:''}
}

let cartReducer = (state = defaultState, action ) => {
 
    switch (action.ype) {
        case 'ADD_TO_CART' :{
            let newState = {...state};
            newState.selectedItems = {
                items : [...newState.selectedItems.items, action.payload],
                restaurantName : action.payload.restaurantName,
            }
            console.log(newState,"right")
        }
        default:
            return state;
    }
    
}
export default cartReducer;