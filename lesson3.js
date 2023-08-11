// function showMessage(obj){
// console.log(`Hello ${obj.name}`)
// }


// let user={
//     name:'Ivan',
//     lastName:'djfjf'
// }

// let a =document.getElementById('btn');
// a.addEventListener("click", showMessage.bind(this, user) );

let a={
    name:"Ivan",
    lastName:'fhfjr',
    showInfo(){
        console.log(this.name+" " +this.lastName)
    }
}
let b={
    name:"Ihdejdujdeujdujn",
    lastName:'fhfjr',
}
a.showInfo();
a.showInfo.call(b);
a.showInfo.apply(b);
