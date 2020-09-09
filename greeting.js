const form =document.querySelector(".js-form"),
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    //동작을막는 1단계다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);//이름을 기억하게한다 ..
    
}

function askForName(){

form.classList.add(SHOWING_CN);
form.addEventListener("submit" , handleSubmit);

}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN); 
    greeting.innerText = `Hello ${text}`;

}
        function loadName (){
            const currentUser = localStorage.getItem(USER_LS);
            if(currentUser== null){
                askForName();
                // 존재하지않는것이다
                
            }else{
                //유저가있는거다
                paintGreeting(currentUser);
            }
        }




function init(){
    loadName();
}

init();