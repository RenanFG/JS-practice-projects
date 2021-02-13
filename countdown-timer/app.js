const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


//let futureDate = new Date(2021,0,24,1,30,0);   //real date

const futureDate = new Date(tempYear, tempMonth, tempDay+10, 11, 30, 0)  // fake date

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes= futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const weekday= weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday} ${month} of ${year}, ${hours}:${minutes}am` ;

const futureTime = futureDate.getTime();

function calcTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;

  let days = t/oneDay;
  days = Math.floor(days);

  let hours = Math.floor ((t % oneDay)/oneHour);
  let minutes = Math.floor((t % oneHour)/oneMin);
  let seconds = Math.floor ((t % oneMin) / 1000);

  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item<10){
      return item = `0${item}`
    } return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })

  if (t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> its over bro, its over...</h4>`
  }
}

let countdown = setInterval(calcTime, 1000);

calcTime();
