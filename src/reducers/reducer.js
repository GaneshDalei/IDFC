import { combineReducers } from "redux";
import { cardDetails } from '../data/users';

let item = cardDetails.usersCardDetails;
function usersDetaild(state = item, action) {
    if (action.type === "OPEN_USER_STATUS") {
        state[action.id].isOpen = true;
        return [...state];

    }else if(action.type === "CLOSE_STATUS_POPUP"){
        state[action.id].isOpen = false;
        return[...state];
    }else if(action.type === "CHANGE_USER_CARD"){
        state[action.id].cardStatus = action.target;
        state[action.id].isOpen = false;
        return[...state].slice(0);
    }else
    
    return state;
}

const reducer = combineReducers({
    usersDetaild,

});
export default reducer;