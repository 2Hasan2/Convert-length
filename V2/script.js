// Function to convert length units
function convertLength() {
  const value = parseFloat(document.getElementById("value").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  // Define conversion factors for various units
  const conversionFactors = {
    kilometer: 1000,
    meter: 1,
    yard: 0.9144,
    foot: 0.3048,
    decimeter: 0.1,
    inch: 0.0254,
    centimeter: 0.01,
    millimeter: 0.001
  };

  // Convert the value to meters as the intermediate unit
  const meters = value * conversionFactors[fromUnit];

  // Convert from meters to the target unit
  const result = meters / conversionFactors[toUnit];

  // Display the converted value
  document.getElementById("result").textContent = `${value} ${fromUnit} is equal to ${result} ${toUnit}.`;
}

// Attach click event handler to the convert button
document.getElementById("convertBtn").addEventListener("click", convertLength);
