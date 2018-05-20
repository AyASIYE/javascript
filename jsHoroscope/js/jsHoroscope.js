// Shows the horoscopes
function Calculation() {
    // Define variables
    let day = document.getElementById("birthDay").value;
    let month = document.getElementById("birthMonth").value;
    let horoscope = null;

    // Compares the dates and alerts the horoscopes
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        document.getElementById("result").innerHTML = "Aquarius";
    }
    else if ((month == 2) && (day >= 19) || (month == 3) && (day <= 20)) {
        document.getElementById("result").innerHTML = "Pisces";
    }
    else if ((month == 3) && (day >= 21) || (month == 4) && (day <= 19)) {
        document.getElementById("result").innerHTML = "Aries";
    }
    else if ((month == 4) && (day >= 20) || (month == 5) && (day <= 20)) {
        document.getElementById("result").innerHTML = "Taurus";
    }
    else if ((month == 5) && (day >= 21) || (month == 6) && (day <= 20)) {
        document.getElementById("result").innerHTML = "Gemini";
    }
    else if ((month == 6) && (day >= 21) || (month == 7) && (day <= 22)) {
        document.getElementById("result").innerHTML = "Cancer";
    }
    else if ((month == 7) && (day >= 23) || (month == 8) && (day <= 22)) {
        document.getElementById("result").innerHTML = "Leo";
    }
    else if ((month == 8) && (day >= 23) || (month == 9) && (day <= 22)) {
        document.getElementById("result").innerHTML = "Virgo";
    }
    else if ((month == 9) && (day >= 23) || (month == 10) && (day <= 22)) {
        document.getElementById("result").innerHTML = "Libra";
    }
    else if ((month == 10) && (day >= 23) || (month == 11) && (day <= 21)) {
        document.getElementById("result").innerHTML = "Scorpio";
    }
    else if ((month == 11) && (day >= 22) || (month == 12) && (day <= 21)) {
        document.getElementById("result").innerHTML = "Sagittarius";
    }
    else if ((month == 12) && (day >= 22) || (month == 1) && (day <= 19)) {
        document.getElementById("result").innerHTML = "Capricorn";
    }
}