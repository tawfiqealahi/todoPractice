
let calculateInterestRate= function (total, years, ratePercent, roundToPlaces) {
    let interestRate = ((ratePercent/100) + 1);
    return (total * Math.pow(interestRate, years)).toFixed(roundToPlaces);
}
  
let answer = calculateInterestRate(1000, 5, 2, 20);
console.log(answer);