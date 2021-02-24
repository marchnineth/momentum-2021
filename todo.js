const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
      const btn = event.target;
      const li = btn.parentNode;
      toDoList.removeChild(li);
      const cleanToDos = toDos.filter(function(toDo){
          return toDo.id !== parseInt(li.id);
      });
      /* filter : array안의 모든 toDos를 통과(함수실행)하면서 True인 것들의 toDos만 return할 것 
      true인 아이템만 가지고 array를 만듬 */
      toDos = cleanToDos
      saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // JSON.stringify는 JS의 Object를 string으로 바꿔줌
}

function paintToDo(text){
    const li = document.createElement("li");
    // querySelector가 html에 있는값을 가져오는거라면 createElement는 html에 없는 값을 만들어내는 것
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    // appendChild : 입력된 값을 부모 element에 추가하는 것
    // span,버튼을 리스트에 넣는다
    toDoList.appendChild(li);
    // 완성된 리스트를 toDoList에 넣는다
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    // toDoObj를 toDos(list)에 추가한다, array 안에 element 하나를 넣어준다
    saveToDos();
    /*push한 이후에 호출할 것, 미리하면 toDos는 비어있으니 저장할게 없는 상태가됨
    localStorage에는 JS의 data를 저장할 순 없음, 오직 string만 가능
    이를 해결하기 위해 JSON.stringify를 사용함
    JSON = JavaScript Object Notation */
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
    //input에 입력된 값을 placeholder에서 안보이게 하기
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // string으로 바뀐 것을 object로 다시 바꿔주는 작업 with JSON
        parsedToDos.forEach(function(toDo){
             paintToDo(toDo.text);
        });
        // forEach = array에 담겨있는 것들을 각각 한번씩 함수를 실행시켜주는 것, 안에다 바로 함수를 만든다, 물론 함수를 밖에다 따로 만들어도 됨 
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();