const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

/* 
    queryselector는 찾은 값 중 첫번째 값을 가져옴 
    local storage : 작은 정보를 유저 컴퓨터에 저장하는 방법
*/

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = 'Hello ${text}';
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){

    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();