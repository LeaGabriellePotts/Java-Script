let country = "USA";
let myName = "Jane Doe";
console.log(country);
console.log(myName);
let height ="5'10''";
let size = "6";
let phone = "1-800-999-9999";
let favoriteFood = "Birthday Cake";
let favoritePlace = "Beach";
let favoriteDude = "Hot Marine Garrett";
let vacationPlan = "Hawaii";
let favoriteSport = "Kitesurfing";
let favoriteTruck = "Taco";
let state   = "North Carolina";
let city    = "New York";
const favoriteColor = "pink";



document.write("<p> " + myName + " lives in " + country + "</p>");

document.write(`
<p style = "color: blue" > Name: ${myName}</p>
<p style = "color: yellow" > phone: ${phone}</p>
<p style = "color: pink" > favoriteFood: ${favoriteFood}</p>
<p style = "color: red" > favoritePlace: ${favoritePlace}</p>
<p style = "color: green" > favoriteDude: ${favoriteDude}</p>
<p style = "color: red" > vacationPlan: ${vacationPlan}</p>
<p style = "color: orange" > favoriteSport: ${favoriteSport}</p>
<p style = "color: black" > favoriteTruck: ${favoriteTruck}</p>
<p style = "color: green" > state: ${state}</p>
<p style = "color: blue" > city: ${city}</p>
`);
