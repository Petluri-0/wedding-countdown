console.log("Hello");
const weddingDate = new Date(2026,5,29,2,45,0);

function countdown()
{
    const now = new Date();
    const totalMs = weddingDate - now;

    let totalSeconds = Math.floor(totalMs/1000);

    let totaldays = Math.floor(totalSeconds/ (3600*24));
    let hours = Math.floor((totalSeconds % (3600*24)) /3600);
    let minutes = Math.floor((totalSeconds % 3600) /60);
    let seconds = totalSeconds % 60 

    document.getElementById('days').innerText = totaldays;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

}
const update = setInterval(() => {
    countdown();
},1000);
