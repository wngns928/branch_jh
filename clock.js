const clockContainer = document.querySelector(".js-clock");
const clocktTitle = clockContainer.querySelector("h1");


// 현재시각을  // 콘솔창을 사용할거다
// const 를 생성하고 date = new Date();

//date.getdate / get.month / gethours/ getminutes/ getseconds

//date를 생성해놓고 새로고침해도 만든시간에서 가져오기때문에 멈춰있다 ?

//현재시간에서 시간을 가져와야지

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clocktTitle.innerText = 
    `${hours < 10 ? `0${hours}` : hours}:${ minutes <10 ? `0${minutes}` : minutes
}:${seconds<10 ? `0${seconds}` : seconds}`;      
}

function init(){
    getTime();
    setInterval(getTime , 1000);
}



init();