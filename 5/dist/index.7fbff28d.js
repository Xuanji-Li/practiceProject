let btn = document.querySelector(".btn");
let result;
let allNumbers = document.querySelector(".allNumbers").value;
let allNumber1 = allNumbers.split(/\s+/);
function add(allNumber) {
    if (allNumber.length == 1) result += allNumber[0];
    result = add(allNumber);
// let allNumbers= document.querySelector(".allNumbers").value;
// let allNumber= allNumbers.split(/\s+/);
// // let allIntegers= ParseInt(allNumber);
// let result=0;
//     for(let i=0; i<allNumber.length; i++){
//         result+=(allNumber[i]-0);
//     }
}
function add(number) {
    if (number == 1) return 1;
    if (number > 1) return add(number - 1) + number;
}
let result = add(3);
console.log(result);

//# sourceMappingURL=index.7fbff28d.js.map
