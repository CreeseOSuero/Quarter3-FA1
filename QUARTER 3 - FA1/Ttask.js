function cf() {

    let con = confirm("Do you agree to share your personal information with this site?");

    if (con) {
        let nickname = "Creese";
        let heightInInches = 61.42;
        let weightInKg = 67;

        let feet = Math.floor(heightInInches / 12);
        let inches = Math.floor(heightInInches % 12);

        let weightInLbs = (weightInKg * 2.20462).toFixed(3);

        console.log(`Name: ${nickname}\nHeight: ${feet}'${inches}"\nWeight: ${weightInLbs} lbs`);
    } else {
        console.log("User does not wish to share his/her information.");
    }
}