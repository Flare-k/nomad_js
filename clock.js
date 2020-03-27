const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds(); //10보다 작은 경우엔 01, 02 이런식으로 나오기 위해 삼항연산자를 이용한다. 
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); //1000은 1초이다. 밀리세컨트 단위.
}
init();