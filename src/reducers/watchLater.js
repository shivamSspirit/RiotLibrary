export const watchLaterInitialState = {
    watchLaterproducts: [],
    watchLaterCount: 0
}

const watchLaterListReducer = (state = watchLaterInitialState, action) => {
   // console.log(action)
    switch (action.type) {
        case "ADD_TO_WATCHLATER":
        
            // if (state?.watchLaterproducts?.find(item => item?.id === action.payload.id)) {
                return {
                    ...state,
                    watchLaterproducts: action.payload,
                    watchLaterCount:action?.payload?.length
                }
            // } else {
            //     return {
            //         ...state,
            //         watchLaterproducts: [...state.watchLaterproducts, action.payload]
            //     }
            // }
        case "REMOVE_FROM_WATCHLATER":
            return {
                ...state,
                watchLaterproducts: state?.watchLaterproducts?.filter((r) => r?.id !== action.payload),
                watchLaterCount:state?.watchLaterproducts?.length

            }
    }
}

export { watchLaterListReducer }
