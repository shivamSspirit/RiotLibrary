export const watchLaterInitialState = {
    watchLaterproducts: [],
    watchLaterCount: 0
}

const watchLaterListReducer = (state = watchLaterInitialState, action) => {
    switch (action.type) {
        case "ADD_TO_WATCHLATER":
            return {
                ...state,
                watchLaterproducts: action.payload,
                watchLaterCount: action?.payload?.length
            }
        case "REMOVE_FROM_WATCHLATER":
            return {
                ...state,
                watchLaterproducts: state?.watchLaterproducts?.filter((r) => r?.id !== action.payload),
                watchLaterCount: state?.watchLaterproducts?.length
            }
    }
}

export { watchLaterListReducer }
