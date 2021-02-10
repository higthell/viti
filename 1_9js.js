// first


// let n = 100;
// for (let i = 2; i <= n; i++) {
//     let flag=1;
//     for (let j = 2; (j <= i/2)&&(flag==1); j=j+1) {
//         if (i%j==0) {
//             flag=0}
//     }
//
// if (flag==1) {console.log(i);}
// }



// second

// let numb = 0;
// do {
//     if(numb==0){
//         alert(" 0 – це нуль")
//     }
//     if(numb % 2 == 1){
//         alert(numb + ' no para')
//     }
//     if(numb % 2 == 0 && numb !=0){
//         alert(numb + ' para')
//     }
//     numb++;
//
// }
// while (numb<11);

// third

// let numb = 0;
// for(numb; numb<10; alert(numb++)){
// }


// fourth

// one

// let count = prompt("Count = ");
// for (let i = 1; i <= count; i++) {
//     let string = "";
//     for (let j = 0; j < i; j++) {
//         string+="*";
//     }
//     console.log(string);
// }

// two

// let count = prompt("Count = ");
// for (let i = 1; i <= count; i++) {
//     let countOfSymbols = count * 2 - 1;
//
//     let countOfStarsInFloor = i * 2 - 1;
//     let countOfSpacesInFloor = countOfSymbols - countOfStarsInFloor;
//     let string = '';
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     for (let j = 0; j < countOfStarsInFloor; j++) {
//         string += '*';
//     }
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     console.log(string)
// }

// three

// let count = prompt("Count = ");
//
// for (let i = 1; i < count / 2; i++) {
//     let countOfStarsInFloor = i * 2 - 1;
//     let countOfSpacesInFloor = count - countOfStarsInFloor;
//     let string = '';
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     for (let j = 0; j < countOfStarsInFloor; j++) {
//         string += '*';
//     }
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     console.log(string);
// }
// console.log('*'.repeat(count));
// for (let i = 1; i < count / 2; i++) {
//     let countOfStarsInFloor = count - 2*i;
//     let countOfSpacesInFloor = count - countOfStarsInFloor;
//
//     let string = '';
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     for (let j = 0; j < countOfStarsInFloor; j++) {
//         string += '*';
//     }
//     for (let j = 0; j < countOfSpacesInFloor / 2; j++) {
//         string += ' ';
//     }
//     console.log(string);
//
// }


// five

// let numb = 10000;
// let counter  = 0;
// while(numb > 50){
//     counter++;
//     numb /= 2;
// }
// let result = numb;
// console.log(`result = ${result}, counter = ${counter}`)

// six

// let monthNumber = prompt("Month : ")
//
//     if(monthNumber==1){
//         alert("Зима, Січень")
//     }
//     if(monthNumber==2){
//         alert("Зима, Лютий")
//     }
//     if(monthNumber==3){
//         alert("Весна, Березень")
//     }
//     if(monthNumber==4){
//         alert("Весна, Квітень")
//     }
//     if(monthNumber==5){
//          alert("Весна, Травень")
//     }
//     if(monthNumber==6){
//         alert("Літо, Червень")
//     }
//     if(monthNumber==7){
//         alert("Літо, Липень")
//     }
//     if(monthNumber==8){
//         alert("Літо, Серпень")
//     }
//     if(monthNumber==9){
//         alert("Осінь, Вересень")
//     }
//     if(monthNumber==10){
//         alert("Осінь, Жовтень")
//     }
//     if(monthNumber==11){
//         alert("Осінь, Листопад")
//     }
//     if(monthNumber==12){
//         alert("Зима, Грудень")
//     }

// seven

// let temperatureCel = prompt("Temperature celsium : ")
// let temperatureFar = 9/5*temperatureCel+32;
// alert("Temperature celsium : " +  temperatureCel + " Temperature farengeit : " + temperatureFar)


// eight

// let number =prompt(" Numb of Day : ")
// if(number==1){
//     alert("Понеділок")
// }
// if(number==2){
//     alert("Вівторок")
// }
// if(number==3){
//     alert("Середа")
// }
// if(number==4){
//     alert("Четверг")
// }
// if(number==5){
//     alert("Пятниця")
// }
// if(number==6){
//     alert("Субота")
// }
// if(number==7){
//     alert("Неділя")
// }