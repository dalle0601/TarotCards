import * as types from "../actions/ActionTypes";

const initialState = {
    choice: true
};

const tarotFetch = (state = initialState, action) => {
    const {type} = action;
debugger
    switch(type){
        case types.GET_CHOICE:
            return {
                ...state,
            };
        case types.SET_CHOICE:
            return Object.assign({}, state, {choice: !(state.choice)})
            

        default:
            return state;
    }
}

export default tarotFetch
// export default function tarotFetch(state = initialState, action){
//     debugger
//     switch (action.type){
//         case types.GET_CHOICE:
//             return {
//                 ...state,
//             };
//         case types.SET_CHOICE:
//             return Object.assign({}, state, {choice: !(state.choice)})
            

//         default:
//             return state;
//     }
// }