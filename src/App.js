import React, {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disabled } from './actions';

import {Login} from "./OurNewForm";

// export let ourButton = null;







// вставить кнопку, при нажатии которой вызовется функция
// handleClick
// в этой функции стэйт (число) увеличится на один

class App extends React.Component{

  constructor(){
    super()

    this.state = {number: 0, color: "blue"};
    this.handleClick = this.handleClick.bind(this);


  }

  handleClick(){
    
    this.setState((state)=>({number: state.number + 1 }));
    this.setState((state)=>({number: state.number + 1 }));
    this.setState((state)=>({number: state.number + 1 }));
    this.setState((state)=>({number: state.number + 1 }));

  }

  render(){

    console.log("we are rendering");
    return(
      <div>
        <button onClick={this.handleClick}>press me</button>
        <span>{this.state.number}</span>

      </div>
    )


  }


}

class AppForm extends React.Component{

  constructor(){

    super()


  }

  render(){
    return(

      <span>{this.props.number + 1}</span>

    )

  }

  




}

// const App = () => {

//   const buttonRef = useRef(null)
//   const dispatch = useDispatch();
//   const buttonDisabled = useSelector((state)=>state.buttonDisabled);
//   // const [disabled, setDisabled] = useState(false);
//   useEffect(()=>{

//     var interval = setInterval( ()=>console.log('on timer'), 2000  );
//     return ()=>clearInterval(interval);
//   }, [])


//   return (

//     <>
//       <button ref={buttonRef} disabled={buttonDisabled} onClick={() => { dispatch(disabled()) }}>press me</button>
//       <button onClick={()=>buttonRef.current.disabled=true}>disable drugoi</button>
      
//     </>

//   )
// }

export default App;