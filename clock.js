const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    dateTitle = document.querySelector(".js-date");

function getDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    dateTitle.innerText = `${year} / ${month < 10 ? `0${month}`:month} / ${day < 10 ? `0${day}`:day}`;
    

}

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds(); //10보다 작은 경우엔 01, 02 이런식으로 나오기 위해 삼항연산자를 이용한다. 
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init() {
    getTime();
    getDate();
    setInterval(getTime, 1000); //1000은 1초이다. 밀리세컨드 단위.
}
init();