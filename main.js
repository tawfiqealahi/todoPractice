

let calculateInterestRate= function (total, years, ratePercent, roundToPlaces) {
    let interestRate = ((ratePercent/100) + 1);
    return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}
  
let answer = calculateInterestRate(1000, 5, 2, 20);
console.log(answer);

































// select element
// const form = document.querySelector('#itemForm');

// const inputItem = document.querySelector('#itemInput');
// const itemList = document.querySelector('#itemList');
// const filters = document.querySelectorAll('.nav-item');



// // create element and render item


// let todoItems = [];