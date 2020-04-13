const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//local storage : 작은 정보를 유저 컴퓨터에 저장하는 방법

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) { //전에 만들어둔 event와 같이 실행된다.
    /*보통 event가 발생하면 root에서 일어나고 여기선 form에서 일어난다.
    이 event는 마치 일종의 거품같은 것이다. 
    form-submit의 경우 event가 발생하면 새로고침된다. 이러한 기본동작을 막고자 함..
    */
    event.preventDefault();
    const currentValue = input.value;
    /*
    value를 갖고 paintGreeting function을 다시 부르는게 목적
    하지만 이렇게 하면 어디에 저장해둔게 아니므로 새로고침하면 기억을 못함.
    */
    paintGreeting(currentValue);
    saveName(currentValue); //이렇게하면 로컬스토리지에 저장이 된다.

}

function askForName() {
    form.classList.add(SHOWING_CN); //currentUser가 없으면 user의 이름을 요청한다.
    //class가 form에 보여준다.
    form.addEventListener("submit", handleSubmit); //뭔가를 form에 submit하면 처리한다.
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //not exist
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();