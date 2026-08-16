const inputNumber = document.getElementById("input-number");
const btnConvert = document.getElementById("btn-convert");

const lengthValue = document.querySelector(".length");
const volumeValue = document.querySelector(".volume");
const massValue = document.querySelector(".mass");

const containerResult = document.querySelector(".container-result");

const convertUnit = (n) => {
  const meterToFeet = (n * 3.28084).toFixed(3);
  const feetToMeter = (n * 0.3048).toFixed(3);

  const litersToGallons = (n * 0.264172).toFixed(3);
  const gallonsToLiters = (n * 3.78541).toFixed(3);

  const kilosToPounds = (n * 2.20462).toFixed(3);
  const poundsToKilos = (n * 0.453592).toFixed(3);

  lengthValue.textContent = `${n} meters = ${meterToFeet} feet | ${n} feet = ${feetToMeter} meters`;
  volumeValue.textContent = `${n} liters = ${litersToGallons} gallons | ${n} gallons = ${gallonsToLiters} liters`;
  massValue.textContent = `${n} kilos = ${kilosToPounds} pounds | ${n} pounds = ${poundsToKilos} kilos`;
};

btnConvert.addEventListener("click", function () {
  const val = inputNumber.value;
  convertUnit(val);
  containerResult.classList.remove("hidden");
});
