import React, { useEffect, useMemo, useRef, useState } from 'react';


// var        область видимости, поднятие переменной
// let const



// var - область видимости внутри функции
// let и const - block scope, область видимости внутри блока

// function testIt(){




//     for(let i = 0; i < 3;i++){

//     }

//     console.log(i);



// }

function testIt2(){




    for(var i = 0; i < 3;i++){
        console.log(i)
    }

    console.log("our number is", i);



}


function testIt3(){

    console.log(i);
    let i = 0;   // let и const видны внутри блока с момента их объявления и до конца блока
    // если обратиться к такой переменной до объявления в этом же блоке, будет вызвано исключения TDZ temporal dead zone

}

function testIt4(){
// тут i уже есть, но ещё ничему не равен, будто мы написали var i
    console.log(i);
    
    // в const обязательно приравнивать const a = "value";
    
    var i = 0; // поднятие переменной
    function a(){

    }



}



// export class Login extends React.Component{

//     constructor(){

//         super()

//         this.state = {

//             number: 1
//         }

//         this.handleClick = this.handleClick.bind(this);

//     }
//     handleClick(){

//         this.setState({number: this.state.number + 1})
//     }

//     render(){

//         return(



    
//             <>

//             <span>{this.state.number}</span>
//             <button onClick={this.handleClick}>clickMe</button>

//             </>
//         )



//     }

// }



// export const Login = (props)=>{

//     console.log(props);


//     // с левой стороны либо { } либо []
//     // [1,2,3,4]
//     const {initialNumber} = props;
    

//     const [number, setNumber] = useState(initialNumber);

//     return(

//         <>
//             <span>{number}</span>
//             <button onClick={()=>{setNumber(number + 1) }}>press me</button>
//         </>

//     )

// }


//  export const Login = ()=>{



//     const ref = useRef(null)


//     return(



//         <>

//             <button onClick={()=>{ref.current.focus()}}>click</button>
//             <input ref={ref} type="text" placeholder="email"></input>

//         </>
//     )

// }


//useMemo - внутри функций запоминать значения других функций

// React.memo ~~ React.PureComponent

 export const Login =({initialNumber, colorRef})=>{


    console.log("WE ARE IN LOGIN");

    const [state, setState] = useState(initialNumber);
    useEffect(async()=>{

        // const res =  await fetch("http://localhost:3004/posts/1")
        // const text = await res.json()
        
        // setState(text.title);

    })
    return(

            <>

            <button>press !!!!</button>
            <span style={`color: ${colorRef.current.value}`}>{!state ? "Loading" : state}</span>
            
            
            </>


    )
}



//  export const Login =()=>{

//   const [buttonDisabled, setButtonDisabled] = useState(false);

// // fetch можно использовать с помощью async / await (всегда внутри асинхронной функции)
// // или c помощью цепочек then

//     testIt2();
//     return(

//         <>
//         <span>hehe</span>
//         </>
//         // <>
//         //     <button disabled={buttonDisabled} onClick={()=>{
//         //         setButtonDisabled(true);

//         //         fetch("https://jsonplaceholder.typicode.com/posts?_limit=2&_delay=2000").then(res=>res.json()).then(res=>{
//         //             setButtonDisabled(false);
//         //             console.log(res);
//         //         })
                
                
                

//         //     }}>press me</button>
//         //     <input type="text" placeholder="login"></input>
//         //     <input type="text" placeholder="password"></input>
//         // </>

//     )


// }