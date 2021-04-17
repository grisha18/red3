// import {ourButton} from './App'




const initialState = {
    buttonDisabled: false,
    loginButtonDisabled: false
};



export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "DISABLED":
            const newState = {...state};
            newState.buttonDisabled = true;
            return newState;
        case "UNDISABLED":
            // button.disabled = false; // доступ к дом из реакта нужно получать через хук useRef
            return state;
        default:
            return state;
    }

}


