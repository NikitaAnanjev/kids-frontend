export const InitialState = {
    basket: [],
    user: null,
}

const reducer = (state, action) => {

    console.log(" GET THE OBJECT", action)
    console.log("ACTION.ITEM", action.id)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action],
            }
        //        logic for adding item to the basket
        // break;
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)


            if (index >= 0) {
                // if item iexist in basket then remove it
                newBasket.splice(index, 1)

            } else {
                console.warn(` I cant remove the Item, because it is not in the basket( ${action.id})`)
            }
            //        Login for removing item from the basket
            // break;
            return {...state, basket: newBasket}
        default:
            return state;
    }
}

export default reducer;