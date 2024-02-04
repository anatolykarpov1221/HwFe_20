const btnNode = document.querySelector(".main button");
btnNode.addEventListener("click", event =>{
    const currentTextNode =document.querySelector("#target");
    currentTextNode.innerText = "Привет мир!";
})
const formNode = document.querySelector("#mainForm");
//обработчик отправки
formNode.addEventListener("submit", event => {//формируем узел из готового HTML который будем отправлять на сервер 
   event.preventDefault();//запрет обновления страницы после отправки тк LiveServer
   const inputElement = formNode.querySelector("input");
    // Получаем    
   const textValue = inputElement.value; // Получаем значение из input
  
   console.log(textValue);
   event.target.reset(); // очищаем input'ы
});
const rndNode = document.querySelector(".bottom_buttom");
const button = rndNode.querySelector("button");
const randomValue = () =>Math.round((5+Math.random()*10));
rndNode.addEventListener("click",()=>{
const randomNumber =randomValue();
 button.innerText = randomNumber;
})


