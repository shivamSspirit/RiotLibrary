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

         default:
            return{
                state
            }  
    }
}

export { watchLaterListReducer }
