function getRandomNumber(){
    return Math.random();
}

console.log(getRandomNumber());

//I want to add a new function 
function arrRev(myArr){
    let newArr = new Array;
    for(let i = myArr.length - 1; i >= 0; i--){
        newArr.push(myArr[i]);
    }
    return newArr;
}

let numbers = [5,6,7,14,8,18,5];
let newArray = arrRev(numbers);
alert("Our new array is : " + newArray);