let firstname = prompt("Enter your first name : ")
let lastname = prompt("Enter your last name : ")
let birthyear = prompt("Enter your birth year : ")

let age = 2025 - birthyear; 

document.getElementById ("task2").innerText = "Hello " + firstname + " " + lastname + "!" + " How does it feel to be " + age + " years old?";
