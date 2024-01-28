function updateTime(){
    let now = new Date();

let hours = String(now.getHours()).padStart(2,'0');
let minutes = String(now.getMinutes()).padStart(2,'0');
let seconds = String(now.getSeconds()).padStart(2,'0');

const timeElement = document.querySelector('.time');
timeElement.textContent=`${hours}:${minutes}:${seconds}`


const date = now.getDate()

const year = now.getFullYear();

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

const monthName= months[now.getMonth()];
const dayName = daysOfWeek[now.getDay()];

const dateElement = document.querySelector('.date');
dateElement.textContent = `${dayName}, ${monthName}, ${date}, ${year}`;

}

updateTime();

setInterval(() => {
    updateTime()
},1000)
