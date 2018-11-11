// import { SET_YEAR } from '../constants/Page';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL } from '../constants/Page';

const initialState = {
    
    year: 2018,
    photos: [],
    isFetching: false, //статус загрузки изначально - ложь
    // так как он станет true, когда запрос начнет выполнение
    error: '',
};

export function pageReducer(state = initialState, action) {
    switch(action.type){
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true, error: '' }

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false, error: '' }

        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }
        // case SET_YEAR:
        //     return { ...state, year: action.payload }

        default: 
            return state;
    }
}