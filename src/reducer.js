import button from './App'

export const reducer = (state, action)=>{
    switch(action.type){
        case "DISABLED":
            const newState = {...state};
            button.disabled = true;
            return newState;
        case "UNDISABLED":
            button.disabled = false;
        default:
            return state;
    }

}