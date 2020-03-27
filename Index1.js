//Array, 한 배열안에 다양한 데이터 타입을 넣을 수 있다
//const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", 1, 2, 3, true];

//Object, 데이터 정렬
const nicoInfo = {
    name : "Nicolas",
    age: 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["Along the gods", "Parasite"],
    favFood:[
        {
            name:"Kimchi", 
            fatty:false
        }, 
        {
            name:"Cheese", 
            fatty:true
        }]
}
//이름을 알고 싶으면 nicoInfo.name
//object를 array에 집어넣을수도 있고 object안에 array를 넣을수 도 있다.

//자바스크립트에서 함수만들기
function funcName(parameter){
    //console.log(parameter, "Hello!"); // == console.log(`${parameter} Hello!`);
    return `${parameter} Hello!`;
}
funcName("Kang says "); //함수 호출
//return으로 쓰는것도 기존 프로그래밍 언어와 같다.

const calculator = {
    plus: function(a, b){return a+b;}
}
const plus = calculator.plus(5,5);