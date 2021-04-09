import React from 'react';
import {useDispatch} from 'react-redux';
import {pressMe} from './actions';




const App = () =>{

const dispatch = useDispatch();
 
 
  return(

    <>
      <button onClick={()=>dispatch(pressMe())}>press me</button>
    </>

  )
}

export default App;