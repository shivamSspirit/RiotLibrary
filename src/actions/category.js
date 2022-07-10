import * as categoryApis from '../api/category';
import * as ActionTypes from '../constant/actions';


export function getcategoryList(callback) {
    return async (dispatch) => {
        const response = await categoryApis?.getCategoryList();
        dispatch(setcategoryList(response.data.category));
        if (callback) {
            return callback();
        }
    };
}

export function getSingleCateGory(data, callback) {
    return async (dispatch) => {
        const response = await categoryApis?.getSingleCategory(data);
        if (callback) {
            return callback();
        }
        return response;
    }
}



export function setcategoryList(categoryList) {
    return {
        type: ActionTypes?.CategoryAction?.GET_CATEGORY_LIST,
        categoryList
    };
}


