import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import {reducer} from './reducer';
import {Login} from "./OurNewForm";



const store = createStore(reducer, compose( applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

const LoginForm = ()=>{

  const [number, setNumber] = useState(1);
  
  const colorRef = useRef(null);
  
  return (
    <>
    <input ref={colorRef} type="color"></input>
    <button onClick={()=>setNumber(number+1)}>Opat postavit odin</button>
    {colorRef.current ? <Login colorRef={colorRef}  initialNumber={1}/> : <></>}
    </>
  )

}


// осознать и тезисно записать в тетрадь 
// https://learn.javascript.ru/destructuring-assignment


ReactDOM.render(
  <Provider store={store}>
    <App />
    <LoginForm/>
    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

