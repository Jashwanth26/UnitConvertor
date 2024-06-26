/* function random(){
    let ran = Math.floor(Math.random()*6)+1
    let output = document.getElementById("output")
    output.textContent = ran
    output.innerHTML = ran
} */

/* function getinput(){
    let input = document.querySelector("#inp").value
    let output = document.querySelector("#output")
    output.innerHTML = input
 } */
//  function getinput(){
//     let input = document.querySelector("#inp").value
//     let inches = input / 2.54
//     let output = document.querySelector("#output")
//     output.innerHTML = input+" CM = "+inches+" Inches"

function convert() {
    let fromUnit = document.getElementById('value1').value;
    let toUnit = document.getElementById('value2').value;
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let result;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerText = 'Please enter a valid number';
        return;
    }

    // Conversion logic
    if (fromUnit === 'Centimeter' && toUnit === 'Inches') {
        result = inputValue / 2.54;
    } else if (fromUnit === 'Centimeter' && toUnit === 'Meter') {
        result = inputValue / 100;
    } else if (fromUnit === 'Centimeter' && toUnit === 'kilometer') {
        result = inputValue / 100000;
    } else if (fromUnit === 'Centimeter' && toUnit === 'Millimeter') {
        result = inputValue * 10;
    } else if (fromUnit === 'Inches' && toUnit === 'Centimeter') {
        result = inputValue * 2.54;
    } else if (fromUnit === 'Inches' && toUnit === 'Inches') {
        result = inputValue * 1;
    } else if (fromUnit === 'Inches' && toUnit === 'Meter') {
        result = inputValue / 39.3701;
    } else if (fromUnit === 'Centimeter' && toUnit === 'Centimeter') {
        result = inputValue * 1;
    } else if (fromUnit === 'Meter' && toUnit === 'Meter') {
        result = inputValue * 1;
    } else if (fromUnit === 'Millimeter' && toUnit === 'Milliimeter') {
        result = inputValue * 1;
    } else if (fromUnit === 'kilometer' && toUnit === 'kilometer') {
        result = inputValue * 1;
    } else if (fromUnit === 'Meter' && toUnit === 'Millimeter') {
        result = inputValue * 1000;
    } else if (fromUnit === 'Meter' && toUnit === 'kilometer') {
        result = inputValue / 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'Meter') {
        result = inputValue * 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'Centimeter') {
        result = inputValue * 100000;
    } else if (fromUnit === 'Meter' && toUnit === 'Inches') {
        result = inputValue * 39.3701;
    } else if (fromUnit === 'Meter' && toUnit === 'Centimeter') {
        result = inputValue * 100;
    } else {
        result = inputValue; // No conversion needed if units are the same
    }

    document.getElementById('result').innerText = +inputValue+" "+fromUnit+" = "+result.toFixed(2)+" "+toUnit;
}
