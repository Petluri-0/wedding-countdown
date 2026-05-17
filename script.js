console.log("Hello");
const hoursElement = document.getElementById('hours');
//hoursElement.innerHTML = 10
const weddingDate = new Date(2026,5,29,2,45,0);
const now = new Date();
const totalMs = weddingDate - now;

let totalSeconds = Math.floor(totalMs/1000);

let totaldays = Math.floor(totalSeconds/ (3600*24));
let hours = Math.floor((totalSeconds % (3600*24)) /3600);
let minutes = Math.floor((totalSeconds % 3600) /60);
let seconds = totalSeconds % 60
//const days = Math.floor(totalMs/ (1000*60*60*24));
console.log(weddingDate);
console.log(now);
console.log(totalMs);
console.log(totaldays);
console.log(hours);
console.log(minutes);
console.log(seconds);
