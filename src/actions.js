

export const pressMe = ()=>{


    return function(dispatch) {

        setTimeout(()=>{
            button.disabled = true;
            dispatch(pressMe())
        }, 2000)
               
    };

}