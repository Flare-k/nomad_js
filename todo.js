const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []; //to do에 대한 내용을 담기 위해 배열 셋팅


function filterFn(toDo) {}


function deleteToDo(event) {
    //console.log(event.target.parentNode); //어떤 버튼이 눌린지 정확하게 알수있어야 하므로 .target을 써줌.
    //하지만 .target만 해서는 father를 찾을 수 없다. 그래서 사전에 id를 추가한 것.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); //내가 선택한 숫자(삭제하고픈 toDo)를 제외한 나머지 아이템들을 배열에 담는다.
    }); //filter는 forEach에서 함수를 실행하는 것 같이 각각의 item과 같이 실행이 된다. 즉, filter는 함수를 통해 true인 원소들을 반환해와 새로운 배열을 만든다.
    toDos = cleanToDos;
    saveToDos();
}


function saveToDos() { //toDos를 가져와서 로컬에 저장하는 작업.
    //localStorage.setItem(TODOS_LS, toDos); local Storage에는 자바스크립트의 data를 저장할 수 없다. 오직 string만 저장한다. 그래서 JSON stringfy를 써준다.

    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));

    /*
    따라서 객체형태로 돼 있던 자바스크립트 데이터를 JSON.stringify를 통해
    string으로 바꿔준다. 
    */
}

function paintToDo(text) {
    /*
    지금까지 toDoForm처럼 HTML에서 원하는걸 가져다 썼다면, 
    이젠 생성할수도 있어야한다. 
    */
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text; //handleSubmit에서 온 입력데이터를 할당.
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; //li에 id만들어줌, 삭제할때 id를 기준으로 지우려고..
    toDoList.appendChild(li); //li를 만들고 그 안에 span, delButton을 넣고, 그런다음 ul태그인 toDoList에 넣는다.

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //문자를 입력하면 새로고침된 것처럼 자동으로 지워지는 것처럼 초기화
}

/* JSON = JavaScript Object Notation의 준말이다.
데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 셈이다.
object -> string
string -> object
*/
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    //form을 항상 showing하게 할 것이다.
    if (loadedToDos !== null) {
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos);
        //parsedToDos에 담긴 내용을 paintToDo함수를 통해 화면에 보여주게 할 것이다.
        parsedToDos.forEach(function(toDo) {
                paintToDo(toDo.text);
            })
            /*
            정리하자면, toDos를 가져온 뒤, parse를 통해 자바스크립트 object로 변환해주고, 
            각각에 대해서 paintToDo라는 함수가 실행된다. 
            각각 실행되기 위해 배열의 내장함수인 forEach()함수를 사용했다.
            */
    }
}

function init() {
    loadToDos(); //localStorage에서 뭔가를 load하는 것.
    toDoForm.addEventListener("submit", handleSubmit);
}
init();