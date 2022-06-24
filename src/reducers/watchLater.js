import * as ActionTypes from '../constant/actions'

export const watchLaterInitialState = {
    watchLaterproducts: [],
    watchLaterCount: 0
}

const watchLaterListReducer = (state = watchLaterInitialState, action) => {
    switch (action.type) {
        case ActionTypes?.WatchLaterAction?.ADD_TO_WATCHLATER:
            return {
                ...state,
                watchLaterproducts: action.payload,
                watchLaterCount: action?.payload?.length
            }
        case ActionTypes?.WatchLaterAction?.REMOVE_FROM_WATCHLATER:
            return {
                ...state,
                watchLaterproducts: state?.watchLaterproducts?.filter((r) => r?._id !== action.payload),
                watchLaterCount: state?.watchLaterproducts?.length
            }
    }
}

export { watchLaterListReducer }
