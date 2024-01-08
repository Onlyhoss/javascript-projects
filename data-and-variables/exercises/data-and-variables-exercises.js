let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000
let distanceToMoonKm = 384400;
const milesPerKm = 0.621;
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)// Declare and assign the variables beclow
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof milesPerKm)
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")
let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + "days to reach the Moon.")
