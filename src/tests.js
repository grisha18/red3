










// // var a = {

// //     name: "Grisha",
// //     sayName: function(){
// //         console.log("Hello " + this.name)
// //     }

// // }

// // var b = {
// //     name: "Vlad"
// // }

// onClick={ this.handleClick }

// var cb = this.handleClick;
// // .....
// cb()

// // a.sayName();
// // var s = a.sayName;
// // s = s.bind(b);
// // s()



// class Person{
//     constructor(name){
//         console.log("we're in constructor")
//         this.name = name;
//     }

//     sayMyName(){
//         console.log(`You're god damn right, ${this.name}`);
//     }

// }

// class Student extends Person{
//     constructor(name){
//         super(name)
//     }
// }


// var Vasya = new Student("Vasya")
// Vasya.sayMyName()

// var Grisha = new Student("Grisha")
// Grisha.sayMyName()


function getIncrementor(name){
    let i = 0;
    return function(){
        console.log("the number is ", i++);
    }

}

let name = "Vasya"

incrementor = getIncrementor();
incrementor2 = getIncrementor();
incrementor()
incrementor()
incrementor2()
incrementor2()
incrementor()
incrementor()













