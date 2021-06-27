import * as types from "../actions/ActionTypes";

const initialState = {
    choice: true
};

export default function tarotFetch(state = initialState, action){
    switch (action.type){
        case types.GET_CHOICE:
            return {
                ...state,
            };
        case types.SET_CHOICE:
            return {
                ...state,
                chocie: !state.choice
            };

        default:
            return state;
    }
}