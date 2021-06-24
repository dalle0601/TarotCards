import * as types from "../actions/ActionTypes";

const initialState = {
    
};

export default function tarotFetch(state = initialState, action){
    switch (action.type){
        case types.GET_CHOICE:
            return state;
        case types.SET_CHOICE:
            return state;

        default:
            return state;
    }
}