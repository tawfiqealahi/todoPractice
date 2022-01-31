var calculateInterest = function (total, years, ratePercent, roundToPlaces) {
    var interestRate = ((ratePercent/100) + 1);
    return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}

var answer = calculateInterest(915, 13, 2, 2);

let calculateInterestRate= function (total, years, ratePercent, roundToPlaces) {
    let interestRate = ((ratePearcent/100) + 1);
    return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}

































// select element
const form = document.querySelector('#itemForm');

const inputItem = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemList');
const filters = document.querySelectorAll('.nav-item');



// create element and render item


let todoItems = [];