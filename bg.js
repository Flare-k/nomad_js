const body = document.querySelector("body");
const IMG_NUMBER = 4;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; //+1을 하는 이유가 난수가 0부터 시작하기 때문.
    image.classList.add("bgImage")
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();