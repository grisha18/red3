export const disabled = ()=>{
    
    return {type:"DISABLED"}

}

export const UnDisabled = () =>{

    return {type: "UNDISABLED" }
}


export const disabledWithDelay = ()=>{
    
    return function(dispatch){
    
        dispatch(disabled())
    
    
    };


}

export const UnDisabledWithDelay = ()=>{


    return function(dispatch) {


        dispatch(UnDisabled())

        
    };
}