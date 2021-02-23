const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

/* 
    queryselector는 찾은 값 중 첫번째 값을 가져옴 
    local storage : 작은 정보를 유저 컴퓨터에 저장하는 방법
*/

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    // 브라우저의 디폴트 기능을 막는 문구, input에 입력후 브라우저가 새로고침되는걸 막아줌
    const currentValue = input.value;
    // console.log(currentValue);
    // input에 입력된 값이 브라우저 콘솔로 이동한다
    paintGreeting(currentValue);
    // input에 입력된 텍스트 값을 받아 paintGreeting을 통해 Hello ${text}형식으로 브라우저에 띄운다
    saveName(currentValue);
    /* input에 입력된 브라우저 local storage에 값을 저장한다 
    새로고침해도 저장되어 있어야 정상~*/

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();