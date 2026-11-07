const inputNumber = document.getElementById("input-number");
const lengthValue = document.querySelector(".length");
const volumeValue = document.querySelector(".volume");
const massValue = document.querySelector(".mass");
const containerResult = document.querySelector(".container-result");
const conversionForm = document.querySelector(".conversion-form");
const statusMessage = document.querySelector(".status-message");

const conversionFactors = Object.freeze({
  meterToFeet: 3.28084,
  feetToMeter: 0.3048,
  litersToGallons: 0.264172,
  gallonsToLiters: 3.78541,
  kilosToPounds: 2.20462,
  poundsToKilos: 0.453592
});

const formatNumber = (value) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 3,
    useGrouping: false
  }).format(value);

const convertUnit = (number) => {
  const convertedValues = {
    meterToFeet: number * conversionFactors.meterToFeet,
    feetToMeter: number * conversionFactors.feetToMeter,
    litersToGallons: number * conversionFactors.litersToGallons,
    gallonsToLiters: number * conversionFactors.gallonsToLiters,
    kilosToPounds: number * conversionFactors.kilosToPounds,
    poundsToKilos: number * conversionFactors.poundsToKilos
  };

  if (Object.values(convertedValues).some((value) => !Number.isFinite(value))) {
    throw new RangeError("The converted values are outside the supported range.");
  }

  const formattedInput = formatNumber(number);
  lengthValue.textContent = `${formattedInput} meters = ${formatNumber(convertedValues.meterToFeet)} feet | ${formattedInput} feet = ${formatNumber(convertedValues.feetToMeter)} meters`;
  volumeValue.textContent = `${formattedInput} liters = ${formatNumber(convertedValues.litersToGallons)} gallons | ${formattedInput} gallons = ${formatNumber(convertedValues.gallonsToLiters)} liters`;
  massValue.textContent = `${formattedInput} kilos = ${formatNumber(convertedValues.kilosToPounds)} pounds | ${formattedInput} pounds = ${formatNumber(convertedValues.poundsToKilos)} kilos`;
};

conversionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = inputNumber.value.trim();
  const number = Number(value);

  if (value === "" || !Number.isFinite(number)) {
    statusMessage.textContent = "Enter a valid number.";
    inputNumber.setAttribute("aria-invalid", "true");
    containerResult.classList.add("hidden");
    inputNumber.focus();
    return;
  }

  try {
    convertUnit(number);
    statusMessage.textContent = "";
    inputNumber.setAttribute("aria-invalid", "false");
    containerResult.classList.remove("hidden");
  } catch (error) {
    statusMessage.textContent = "Enter a smaller number.";
    inputNumber.setAttribute("aria-invalid", "true");
    containerResult.classList.add("hidden");
    inputNumber.focus();
  }
});
