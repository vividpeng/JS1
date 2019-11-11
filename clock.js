const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-time");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //mini if else 구문.``''""
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//function init2() {
//getTime();
setInterval(getTime, 1000);
//}

//init2();
