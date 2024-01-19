let date = "Monday 2019-03-18";
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let feulLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff= true;

if (astronautCount >! 7);
if (astronautStatus === 'ready');
if (totalMassKg < maximumMassLimit);
if (fuelTempCelsius <! minimumFuelTemp || fuelTempCelsius >! maximumFuelTemp);
if (feulLevel === '100%');
if (weatherStatus = 'clear');
if ((astronautCount >! 7) && (astronautStatus = "ready") && (totalMassKg <= maximumMassLimit) && (fuelTempCelsius <! minimumFuelTemp || fuelTempCelsius >! maximumFuelTemp) && (fuelLevel = "100%") && (weatherStatus = "clear")) {
    preparedForLiftOff = true
    console.log("All systems are a go! Initiating space shuttle launch sequence.")
    console.log("----------------------------------------")
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg);
    console.log("Fuel Mass:", fuelMassKg);
    console.log("Shuttle Mass:", shuttleMassKg);
    console.log("Total Mass:", totalMassKg);
    console.log("Fuel Temperature:", fuelTempCelsius);
    console.log("Weather Status:", weatherStatus);
    console.log("----------------------------------------")
    console.log('See you Space Cowboys')
} 
else {
    preparedForLiftOff = false
    console.log("harry we have a houdini")
}