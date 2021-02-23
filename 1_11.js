// 1

// let total=prompt("Numb : ");
// function seconds(total) {
//     return total/60;
// }
// console.log(seconds(total));

// 2

// let side = prompt("length : ")
// let count = prompt("count : ")
// function perimeter(side , count){
//     return side*count;
// }
// console.log(perimeter(side, count));

// 3

// let numb = prompt("numb : ")
// function fun(numb){
//     for(let i = 1; i <= numb; i++) {
//         if(i % 3 ==0 && i % 5 ==0 ){
//             console.log("buzzfizz");
//         }
//         else if (i % 3 == 0) {
//             console.log("fizz");
//         }
//          else if (i % 5 == 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// fun(numb);

//4

// let x = +prompt("first numb : ")
// let y = +prompt("second numb : ")
// let z = +prompt("threrd numb : ")
// function calculate(x , y ,z){
//     return console.log((x+y+z)/3);
// }
// calculate(x, y ,z);

// 5

/*
let n = +prompt("first numb : ")
let x = +prompt("second numb : ")
let y = +prompt("threrd numb : ")
function isDivisible(n , x , y){

    // 1
    // if(n % x==0 && n % y==0){
    //     return console.log(true);
    // }
    // else {
    //     return console.log(false);
    // }

    // 2

    // console.log(n%x === 0 && n%y==0 ? true : false);

    // 3

    // console.log(n%x === 0 && n%y==0);
}
isDivisible(n , x , y);*/

// 6

// let n = +prompt("size : ");
// let arr = [n];
// let sum = 0;
// for(let i=0; i<n; i++){
//     arr[i]= Math.round(Math.random() * 100);
//     sum += arr[i];
// }
// console.log(arr)
// console.log("Max number : " + arr.sort((x,y)=>y-x)[0]);
// console.log("Min number : " + arr.sort((x,y)=>x-y)[0]);
// console.log("Sum : " + sum);
// console.log("seredne  : " + sum/n);
// console.log("nepar  : " + arr.filter(x=>x%2!==0));

//7

// let arr = [5,5];
// for(let i=0; i<5; i++) {
//     for (let j = 0; j<5 ; j++)
//     {
//         min = Math.floor(10)
//         max = Math.ceil(-10)
//         arr[i,j] = Math.floor(Math.random() * (max - min)) + min;
//         if(i==j && arr[i,j]>0){
//             arr[i,j] = 1;
//         }
//         if(i==j && arr[i,j]<0){
//             arr[i,j] = 0;
//         }
//     }
//     console.log(arr);
// }

// 8

// let x  = +prompt("first numb : ");
// let y  = +prompt("second numb : ");
// let text = prompt("change functon: add , sub , mul , div ");
// console.log("first numb : " + x  +  "  second numb : " + y)
// if(text == "add"){
//     console.log("add : " + add(x ,y));
// }
// if(text == "sub"){
//     console.log("sub : " + sub(x ,y));
// }
// if(text == "mul"){
//     console.log("mul : " + mul(x ,y));
// }
// if(text == "mul"){
//     console.log("mul : " + mul(x ,y));
// }
// if(text == "div"){
//     console.log("div : " + div(x ,y));
// }
// function div(x,y){
//     if(y==0){
//        return " nov div na 0 "
//     }
//     else{
//         return x/y;
//     }
// }
// function  mul(x, y){
//     return x*y;
// }
// function sub(x ,y){
//     return x-y;
// }
// function add(x ,y){
//     return  x+y;
// }

// 9

let numb = +prompt(" numb : ");

function belov(numb){
    if (numb>0){
        return numb + " big then 0 "
    }
    else {return numb + " menshe 0 "}
}
console.log(belov(numb));


function prost (numb){
    let n = 1000;
    for (let i = 2; i <= n; i++) {
        let flag=1;
        for (let j = 2; (j <= i/2)&&(flag===1); j++) {
            if (i%j===0) {
                flag=0}

        }
        if (flag==1 && numb==i){
            return "whodut";
        }
    }
    return 'newhodut';
}

console.log(prost(numb));
div2='';


function orDiv(numb , div2){
    if(numb % 2 ==0){
        div2 += "div na 2  \n" ;
    }
     if(numb % 3==0){
         div2 += "div na 3 \n";
    }
     if(numb % 5==0){
         div2 += "div na 5 \n";
    }
     if(numb % 6==0){
         div2 += "div na 6 \n";
    }
     if(numb % 9==0){
         div2 += "div na 9 \n";
    }
     return div2;
}

console.log(orDiv(numb , div2));




