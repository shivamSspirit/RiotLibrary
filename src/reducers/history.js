import * as ActionTypes from '../constant/actions'

export const historyInitialState = {
    historyvideos: [],
    historyCount: 0
}

const HistoryListReducer = (state = historyInitialState, action) => {
    switch (action.type) {
        case ActionTypes?.historyAction?.ADD_TO_HISTORY:
            return {
                ...state,
                historyvideos: action.payload,
                historyCount: action?.payload?.length
            }
            
            default:
                return{
                    state
                }  
    }
}

export { HistoryListReducer }
