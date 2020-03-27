//변수 선언시에 let을 써줘야 함 -> let a = 221;  -> var라고 쓰는건 좀 예전 버전.
//변수 선언시에 const를 써주면 변수가 변하지 않는다.

//html의 모든 것을 객체화한다. DOM = Document Object Module
//html의 id를 js로 작동하는 경우.
//const title = document.getElementById("title"); //id=title에 대한 설정
//title.innerHTML = "Hi From JS";
//title.style.color = 'red';
//console.dir(title) -> title 객체에 대한 이벤트들을 알 수 있다.



/*
    자바스크립트는 이벤트에 반응하기 위해 만들어졌다.
    이벤트는 웹사이트에서 발생하는 것들을 의미한다.

*/
/*
function handleResize(){
    console.log("I have been resized.")
}
window.addEventListener("resize", handleResize); //함수 이름만 쓰면 필요할때 호출가능.
window.addEventListener("resize", handleResize());//하지만 함수() 라고 쓰면 즉시 호출됨
*/

/*
//querySelector는 노드의 첫번째 자식을 반환한다. 
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#e67e22";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color = BASE_COLOR;
    window.addEventListener("click", handleClick);
}
init();

//javascript dom event mdn을 검색하면 이벤트들을 찾아볼 수 있다.

*/
function handleOffline(){
    alert("Please Turn on the Wi-Fi!!!!!")
}
window.addEventListener("offline", handleOffline);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";    //css파일 참고

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);   //clicked라는 클래스를 포함시켜서 저장
    /*
    if(!hasClass){
        //title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS); //이렇게 써주면 title이 있는 곳에 다른 class명이 있어도 
                                            //기존에 있는 클래스의 성질을 함께 이용하게 된다. 위에 덮여지는 느낌
    }else{
        //title.className = ""; //empty
        title.classList.remove(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS); //이 한줄이면 위에 조건문을 다 포함한다.
}

function init(){
    title.addEventListener("click", handleClick);
}
init();