import * as ActionTypes from '../constant/actions'

export const likesInitialState = {
    likesproducts: [],
    likesCount: 0
}

const LikesListReducer = (state = likesInitialState, action) => {
    switch (action.type) {
        case ActionTypes?.likeAction?.ADD_TO_LIKES:
            return {
                ...state,
                likesproducts: action.payload,
                likesCount: action?.payload?.length
            }
        case ActionTypes?.likeAction?.REMOVE_FROM_LIKES:
            return {
                ...state,
                likesproducts: state?.likesproducts?.filter((r) => r?._id !== action.payload),
                likesCount: state?.likesproducts?.length
            }

            default:
                return{
                    state
                }  
    }
}

export { LikesListReducer }
