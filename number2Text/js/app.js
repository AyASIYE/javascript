let tek_haneli_soezluk = new Map();
tek_haneli_soezluk.set("0", "sifir");
tek_haneli_soezluk.set("1", "bir");
tek_haneli_soezluk.set("2", "iki");
tek_haneli_soezluk.set("3", "üc");
tek_haneli_soezluk.set("4", "dört");
tek_haneli_soezluk.set("5", "bes");
tek_haneli_soezluk.set("6", "alti");
tek_haneli_soezluk.set("7", "yedi");
tek_haneli_soezluk.set("8", "sekiz");
tek_haneli_soezluk.set("9", "dokuz");

let cift_haneli_soezluk = new Map();
cift_haneli_soezluk.set("1", "on");
cift_haneli_soezluk.set("2", "yirmi");
cift_haneli_soezluk.set("3", "otuz");
cift_haneli_soezluk.set("4", "kirk");
cift_haneli_soezluk.set("5", "elli");
cift_haneli_soezluk.set("6", "altmis");
cift_haneli_soezluk.set("7", "yetmis");
cift_haneli_soezluk.set("8", "seksen");
cift_haneli_soezluk.set("9", "doksan");

let yuez_identifier = "yüz";
let bin_identifier = "bin";
let milyon_identifier = "milyon";
let milyar_identifier = "milyar";

$(document).ready(function () {

    function calculateSingleDigit(input) {
        return tek_haneli_soezluk.get(input);
    }

    function calculateDoubleDigit(input) {
        if (input[0] === "0") {
            return input[1] !== "0" ? calculateSingleDigit(input[1]) : "";
        }
        return cift_haneli_soezluk.get(input[0]) + " " +
            (input[1] !== "0" ?
                calculateSingleDigit(input[1]) :
                "");
    }

    function calculateTrippleDigit(input) {
        let chars = input.split("");
        if (input[0] === "0") {
            return calculateDoubleDigit(input.substr(1));
        }
        return (chars[0] === "1" ? yuez_identifier :
            calculateSingleDigit(input[0]) + " " + yuez_identifier) +
            " " + calculateDoubleDigit(input.substr(1).split(""));
    }

    function calculateThousandStepsDigits(input) {
        if (input.length === 4) {
            return input[0] === "1" ?
                bin_identifier + " " + calculateTrippleDigit(input.substr(1)) :
                calculateSingleDigit(input[0]) + " " + bin_identifier + " " + calculateTrippleDigit(input.substr(1));
        }
        if (input.length === 5) {
            return calculateDoubleDigit(input.substr(0, 2)) + " " + bin_identifier + " " + calculateTrippleDigit(input.substr(2));
        }
        if (input.length === 6) {
            return calculateTrippleDigit(input.substr(0, 3)) + " " + bin_identifier + " " + calculateTrippleDigit(input.substr(3));
        }
    }

    function convert(input) {
        if (input.length === 1) {
            return calculateSingleDigit(input);
        }
        if (input.length === 2) {
            return calculateDoubleDigit(input.split(""));
        }
        if (input.length === 3) {
            return calculateTrippleDigit(input);
        }
        if (input.length > 3 && input.length < 7) {
            return calculateThousandStepsDigits(input);
        }
        if (input.length > 6 && input.length < 10) {
            // TODO: Students from here...
        }
    }

    $("#calculate_btn").click(function () {
        let input_value = $("#input").val();
        let converted = convert(input_value);
        $("#output").html(converted);
    });
});