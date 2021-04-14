import React from 'react';
import {useDispatch} from 'react-redux';
import {disabled} from './actions';



const App = () =>{


const dispatch = useDispatch();

 
  return(

    <>
      <button onClick={()=>{dispatch(disabled())}}>press me</button>
    </>

  )
}

export default App;