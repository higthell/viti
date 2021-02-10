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
let x = +prompt("first numb : ")
let y = +prompt("second numb : ")
let z = +prompt("threrd numb : ")
function calculate(x , y ,z){
    return console.log((x+y+z)/3);
}
calculate(x, y ,z);