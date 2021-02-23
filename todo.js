const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    const li = document.createElement("li");
    // querySelector가 html에 있는값을 가져오는거라면 createElement는 html에 없는 값을 만들어내는 것
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    // appendChild : 입력된 값을 부모 element에 추가하는 것
    // span,버튼을 리스트에 넣는다
    toDoList.appendChild(li);
    // 완성된 리스트를 toDoList에 넣는다
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    //input에 입력된 값을 placeholder에서 안보이게 하기
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();