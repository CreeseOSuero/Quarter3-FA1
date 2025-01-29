let nickname = "Creese";
let heightInInches = 61.42;
let weightInKg = 67;

let feet = Math.floor (heightInInches / 12);
let inches = Math.floor (heightInInches % 12);

let weightInLbs = (weightInKg * 2.20462).toFixed(3);

alert("Name: " + nickname + "\nHeight: " + feet + "\' " + inches + "\"\nWeight: " + weightInLbs + " lbs");

