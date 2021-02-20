const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10  ? `0${seconds}`: seconds}`;
    // innerText : object 안에 text를 넣을때 사용 //
}

/* 초단위에서 10 미만의 숫자 앞에 0을 붙이는 작업 , ?가 if와 동일하게 작용한다*/

/*setInterval : setInterval(fn,1000) 실행하고자 하는 함수, 실행하고자 하는 시간 간격 
millie second 기준이기 때문에 1000단위로 줘야함 , 1초 = 1000*/

function init() {
    getTime();
    setInterval(getTime,1000);
}

init();