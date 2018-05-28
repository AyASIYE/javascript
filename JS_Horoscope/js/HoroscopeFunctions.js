// Shows the horoscopes
function findHoroscope() {
    // Define variables
    let day = document.getElementById("birthDay").value;
    let month = document.getElementById("birthMonth").value;
    let horoscope = null;

    // Compares the dates and alerts the horoscopes
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        horoscope = "AQUARIUS";
        showResult(horoscope);
    }
    else if ((month == 2) && (day >= 19) || (month == 3) && (day <= 20)) {
        horoscope = "PISCES";
        showResult(horoscope);
    }
    else if ((month == 3) && (day >= 21) || (month == 4) && (day <= 19)) {
        horoscope = "ARIES";
        showResult(horoscope);
    }
    else if ((month == 4) && (day >= 20) || (month == 5) && (day <= 20)) {
        horoscope = "TAURUS";
        showResult(horoscope);
    }
    else if ((month == 5) && (day >= 21) || (month == 6) && (day <= 20)) {
        horoscope = "GEMINI";
        showResult(horoscope);
    }
    else if ((month == 6) && (day >= 21) || (month == 7) && (day <= 22)) {
        horoscope = "CANCER";
        showResult(horoscope);
    }
    else if ((month == 7) && (day >= 23) || (month == 8) && (day <= 22)) {
        horoscope = "LEO";
        showResult(horoscope);
    }
    else if ((month == 8) && (day >= 23) || (month == 9) && (day <= 22)) {
        horoscope = "VIRGO";
        showResult(horoscope);
    }
    else if ((month == 9) && (day >= 23) || (month == 10) && (day <= 22)) {
        horoscope = "LIBRA";
        showResult(horoscope);
    }
    else if ((month == 10) && (day >= 23) || (month == 11) && (day <= 21)) {
        horoscope = "SCORPIO";
        showResult(horoscope);
    }
    else if ((month == 11) && (day >= 22) || (month == 12) && (day <= 21)) {
        horoscope = "SAGITTARIUS";
        showResult(horoscope);
    }
    else if ((month == 12) && (day >= 22) || (month == 1) && (day <= 19)) {
        horoscope = "CAPRICORN";
        showResult(horoscope);
    }

}

function showResult (horoscope) {
    document.getElementById("result").innerHTML = "YOUR SIGN IS " + horoscope;
}